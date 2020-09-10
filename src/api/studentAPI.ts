import urlJoin from "./urlJoin";
import { API_BASE_URL } from "../config";

export type Student = {
  id: string;
  email: string;
  given_name: string;
  family_name: string;
  course: string;
  supervisor: string;
  WAM: number;
  credit_points: number;
  interview_set: string[];
  placement_set: string[];
  application_set: string[];
};

export async function fetchStudentList(): Promise<Student[]> {
  const apiUrl = urlJoin(API_BASE_URL, `/api/core/student`);
  const response = await fetch(apiUrl);
  const responseJson = await response.json();
  console.log("Students:", responseJson);
  return responseJson;
}
