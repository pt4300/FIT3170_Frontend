const fs = require("fs");
const path = require("path");
const async = require("async");
const AWS = require("aws-sdk");
const readdir = require("recursive-readdir");
const mime = require("mime-types");

require("dotenv").config();

const { BUCKET } = process.env;
const buildFolder = path.resolve(__dirname, "./build");

const s3 = new AWS.S3({
  signatureVersion: "v4",
});

function getFiles(dirPath) {
  return fs.existsSync(dirPath) ? readdir(dirPath) : [];
}

async function deploy() {
  if (!BUCKET) {
    throw new Error("you must provide env. variable BUCKET");
  }

  const filesToUpload = await getFiles(buildFolder);

  return new Promise((resolve, reject) => {
    async.eachOfLimit(
      filesToUpload,
      10,
      async.asyncify(async (file) => {
        const mimeType = mime.lookup(file) || "application/octet-stream";
        const Key = file.replace(`${buildFolder}/`, "");

        console.log(`uploading: [${Key}]`);
        return new Promise((res, rej) => {
          s3.upload(
            {
              Key,
              Bucket: BUCKET,
              Body: fs.readFileSync(file),
              ACL: "public-read",
              ContentType: mimeType,
            },
            (err) => {
              if (err) {
                return rej(new Error(err));
              }
              res({ result: true });
            }
          );
        });
      }),
      (err) => {
        if (err) {
          return reject(new Error(err));
        }
        resolve({ result: true });
      }
    );
  });
}

deploy()
  .then(() => {
    console.log("task complete");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
