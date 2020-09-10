import urlJoin from "./urlJoin";
import { API_BASE_URL } from "../config";

export type Activity = {
  id: string;
};

export async function fetchActivityList(): Promise<Activity[]> {
  const apiUrl = urlJoin(API_BASE_URL, `/api/core/activity`);
  const response = await fetch(apiUrl);
  const responseJson = await response.json();
  console.log("Activities:", responseJson);
  return responseJson;
}
