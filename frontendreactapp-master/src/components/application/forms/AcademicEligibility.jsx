import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { InputField, DatePickerField } from "../form_fields";

export default function AcademicEligibilty(props) {
  const {
    formField: { wam, studentId },
  } = props;

  return (
    <React.Fragment>
      <Typography variant="p1" gutterBottom>
        APPLICATIONS CLOSE MONDAY 1 January 1970
        <br />
        <br />
        This form is for all undergraduate students applying for an IBL
        placement in Semester 2, 2020 and/or Semester 1, 2021.
        <br />
        <br />
        IT IS VERY IMPORTANT THAT YOU READ AND UNDERSTAND the detailed placement
        eligibility and prerequisite information at
        https://www.monash.edu/it/current-students/industry-based-learning (see
        slide 24 of the IBL Information slide set).
        <br />
        <br />
        IT IS ALSO IMPORTANT YOU UNDERSTAND the sequence of IBL-related events
        that lead from this application to an eventual placement (see slide 11
        of the IBL Information slide set for an overview). Most of these events
        (including the placement itself) require your full attendance. If you
        cannot attend then you are exited from the program. Therefore, you must
        pay careful attention to the dates of these events when they become
        available and plan ahead to ensure you are able to attend. You can find
        all the dates that are currently available at
        https://www.monash.edu/it/current-students/industry-based-learning. The
        first of these must-attend events is the November Entry Interviews.
        <br />
        <br />
        Note: The number of students placed in a given placement period depends
        on the number of placements offered by our industry partners. Therefore
        there is no guarantee that all eligible students will be placed in a
        given placement period.
        <br />
        <br />
        Note: All dates in this form are provisional and subject to change. We
        will do our best to publish dates early and keep them stable to assist
        you in your planning.
        <br />
        <br />
        Privacy statement:
        <br />
        The information on this form is collected for the purposes of assessing
        your application for the IT Industry Based Learning Program. If you do
        not complete all questions on this form it may not be possible for the
        application to be assessed. Personal information may be disclosed to the
        IBL industry partners responsible for interviewing and selecting
        students for the program. You have a right to access personal
        information that Monash University holds about you, subject to any
        exceptions in relevant legislation. If you wish to seek access to your
        personal information or inquire about the handling of your personal
        information, please contact the University Privacy Officer at the
        following email address: privacyofficer@monash.edu
      </Typography>
      <Typography variant="h6" gutterBottom>
        When should you apply?
      </Typography>
      <Typography variant="p1" gutterBottom>
        TO FILL (usually image here...)
      </Typography>
      <Typography variant="h6" gutterBottom>
        Current Weighted Average Mark (WAM)
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField name={studentId.name} label={studentId.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={wam.name} label={wam.label} fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
