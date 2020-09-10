import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import { Formik, Form } from "formik";

import AcademicEligibility from "./forms/AcademicEligibility";
import BasicDetails from "./forms/BasicDetails";
import DegreePrerequisites from "./forms/DegreePrerequisites";
import ReviewApplication from "./review_form";

import validationSchema from "./form_model/validationSchema";
import applicationFormModel from "./form_model/applicationFormModel";
import formInitialValues from "./form_model/formInitialValues";

import useStyles from "./styles";

// Base ripped from example: https://github.com/nphivu414/react-multi-step-form

const steps = [
  "Academic Eligibility",
  "Personal Details",
  "Degree Prerequisites",
  "Interview Details",
  "CV Details",
  "Peer Mentor Program",
  "Other Information",
  "Review Application",
];
const { formId, formField } = applicationFormModel;

function ApplicationSuccess() {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Thank you for your application.
      </Typography>
      <Typography variant="subtitle1">
        The IBL team will be in touch.
      </Typography>
    </React.Fragment>
  );
}

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <AcademicEligibility formField={formField} />;
    case 1:
      return <BasicDetails formField={formField} />;
    case 2:
      return <DegreePrerequisites formField={formField} />;
    case 3:
      return <ReviewApplication />;
    default:
      return <div>Not Found</div>;
  }
}

export default function ApplicationForm() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  function _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    await _sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <React.Fragment>
      <Typography component="h1" variant="h4" align="center">
        Industry Based Learning (IBL) Program Application - 20XX
      </Typography>
      <Stepper activeStep={activeStep} className={classes.stepper}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <React.Fragment>
        {activeStep === steps.length ? (
          <ApplicationSuccess />
        ) : (
          <Formik
            initialValues={formInitialValues}
            validationSchema={currentValidationSchema}
            onSubmit={_handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form id={formId}>
                {_renderStepContent(activeStep)}

                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={_handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <div className={classes.wrapper}>
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      {isLastStep ? "Place order" : "Next"}
                    </Button>
                    {isSubmitting && (
                      <CircularProgress
                        size={24}
                        className={classes.buttonProgress}
                      />
                    )}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </React.Fragment>
    </React.Fragment>
  );
}
