import { Application } from "../applicationAPI";
import { Activity } from "../activityAPI";
import { Student } from "../studentAPI";

export const mockApplicationData: Application[] = [
  {
    status: "complete",
    student: "11111111",
    year_preference: 2020,
    semester_preference: 2,
    date_started: "2020-09-03T07:24:15.772645Z",
    date_completed: "2020-09-03T07:24:03Z",
  },
  {
    status: "in_progress",
    student: "11111111",
    date_started: "2020-09-03T07:27:40.048151Z",
    date_completed: null,
    year_preference: 2021,
    semester_preference: 1,
  },
];
export const mockActivityData: Activity[] = [{ id: "test_activity_id" }];
export const mockStudentData: Student[] = [
  {
    id: "11111111",
    email: "dcai17",
    given_name: "Test",
    family_name: "Student",
    course: "E3001",
    supervisor: "test_super",
    WAM: 100.0,
    credit_points: 48,
    interview_set: [],
    placement_set: [],
    application_set: [],
  },
];
