import urlJoin from "./urlJoin";
import { API_BASE_URL } from "../config";

export type Application = {
  status: string;
  student: string;
  date_started: string | null;
  date_completed: string | null;
  year_preference: number;
  semester_preference: number;
};

export async function fetchApplicationList(): Promise<Application[]> {
  const apiUrl = urlJoin(API_BASE_URL, `/api/core/application`);
  const response = await fetch(apiUrl);
  const responseJson = await response.json();
  console.log("Applications:", responseJson);
  return responseJson;
}
