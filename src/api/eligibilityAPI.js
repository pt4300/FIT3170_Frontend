import { WAM_API_BASE_URL } from "../config";
import urlJoin from "./urlJoin";

export async function checkCreditPoints({ studentId }) {
  const response = await fetch(
    urlJoin(WAM_API_BASE_URL, `/creditcheck/?student_id=${studentId}`)
  );
  if (!response.ok) {
    throw new Error(`Request failed with status code: ${response.status}`);
  }
  return (await response.json()).success;
}

export async function checkWam({ studentId }) {
  const response = await fetch(
    urlJoin(WAM_API_BASE_URL, `/wamcheck/?student_id=${studentId}`)
  );
  if (!response.ok) {
    throw new Error(`Request failed with status code: ${response.status}`);
  }
  return (await response.json()).success;
}
