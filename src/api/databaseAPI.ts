import { API_BASE_URL } from "../config";
import urlJoin from "./urlJoin";

export async function requestLogin({
  email,
}: {
  email: string;
}): Promise<Response> {
  let urlToFetch;
  if (email.includes("student")) {
    const studentEmailId = email.substr(0, email.indexOf("@"));
    urlToFetch = urlJoin(API_BASE_URL, `/api/core/student/${studentEmailId}`);
  } else {
    const staffEmailId = email.substr(0, email.indexOf("@"));
    urlToFetch = urlJoin(API_BASE_URL, `/api/core/staff/${staffEmailId}`);
  }
  return fetch(urlToFetch);
}
