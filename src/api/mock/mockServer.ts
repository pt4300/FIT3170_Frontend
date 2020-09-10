import { Server, Response } from "miragejs";
import { API_BASE_URL } from "../../config";

import {
  mockActivityData,
  mockApplicationData,
  mockStudentData,
} from "./mockData";

const notFoundResponse = new Response(404, {}, { detail: "Not found." });

export function makeServer({ environment = "test" } = {}): Server {
  return new Server({
    environment,

    routes() {
      this.urlPrefix = API_BASE_URL;
      this.namespace = "/api/core";

      this.get("/student", () => {
        return mockStudentData;
      });

      this.get("/student/:email", (_schema, request) => {
        const emailId = request.params.email;
        const studentObject = mockStudentData.find(
          (student) => student.email === emailId
        );
        return studentObject ?? notFoundResponse;
      });

      this.get("/application", () => {
        return mockApplicationData;
      });

      this.get("/activity", () => {
        return mockActivityData;
      });
    },
  });
}
