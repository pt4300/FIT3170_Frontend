import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { InputField, CheckboxField, SelectField } from "../form_fields";

const courseTitles = [
  {
    value: undefined,
    label: "None",
  },
  {
    value: "C2000",
    label: "Bachelor of Information Technology (C2000)",
  },
  {
    value: "C2001",
    label: "Bachelor of Computer Science (C2001)",
  },
  {
    value: "C3001",
    label: "Bachelor of Computer Science Advanced (Honours) (C3001)",
  },
  {
    value: "E3001",
    label: "Bachelor of Software Engineering (Honours) (E3001)",
  },
  {
    value: "B2017, B2018, B2025, B2015",
    label:
      "Bachelor of Business/Business Specialist/Commerce/Commerce Specialist and Bachelor of Information Technology (B2017, B2018, B2025, B2015)",
  },
  {
    value: "B2008, B2009",
    label:
      "Bachelor of Commerce/Commerce Specialist and Bachelor of Computer Science (B2008, B2009)",
  },
  {
    value: "F2005",
    label: "Bachelor of Design and Bachelor of Information Technology (F2005)",
  },
  {
    value: "D3008",
    label:
      "Bachelor of Education (Honours) and Bachelor of Computer Science (D3008)",
  },
  {
    value: "D3010",
    label:
      "Bachelor of Education (Honours) and Bachelor of Information Technology (D3010)",
  },
  {
    value: "F2006",
    label:
      "Bachelor of Fine Art and Bachelor of Information Technology (F2006)",
  },
  {
    value: "C2002",
    label: "Bachelor of Information Technology and Bachelor of Arts (C2002)",
  },
  {
    value: "C2003",
    label: "Bachelor of Information Technology and Bachelor of Science (C2003)",
  },
  {
    value: "S2004",
    label: "Bachelor of Science and Bachelor of Computer Science (S2004)",
  },
  {
    value: "E3002",
    label:
      "Bachelor of Software Engineering (Honours) and Bachelor of Arts (E3002)",
  },
  {
    value: "E3005, E3003",
    label:
      "Bachelor of Software Engineering (Honours) and Bachelor of Commerce/Commerce Specialist (E3005, E3003)",
  },
  {
    value: "E3007",
    label:
      "Bachelor of Software Engineering (Honours) and Bachelor of Science (E3007)",
  },
  {
    value: "Other",
    label: "Other degree",
  },
];

export default function BasicDetails(props) {
  const {
    formField: {
      givenName,
      familyName,
      preferredName,
      mobileNumber,
      courseTitle,
    },
  } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Confirm personal details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField name={givenName.name} label={givenName.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            name={familyName.name}
            label={familyName.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            name={preferredName.name}
            label={preferredName.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={courseTitle.name}
            label={courseTitle.label}
            data={courseTitles}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            name={mobileNumber.name}
            label={mobileNumber.label}
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
