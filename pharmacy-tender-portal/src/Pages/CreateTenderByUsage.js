import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const CreateTenderByDrugUsage = () => {
  // Define initial form values
  const initialValues = {
    drugName: '',
    dosage: '',
    frequency: '',
    duration: '',
    quantity: '',
  };

  // Define validation schema using Yup
  const validationSchema = Yup.object({
    drugName: Yup.string().required('Drug name is required'),
    dosage: Yup.string().required('Dosage is required'),
    frequency: Yup.string().required('Frequency is required'),
    duration: Yup.string().required('Duration is required'),
    quantity: Yup.number()
      .required('Quantity is required')
      .positive('Quantity must be a positive number'),
  });

  // Handle form submission
  const handleSubmit = (values, { resetForm }) => {
    console.log('Tender Data:', values);
    alert('Tender submitted successfully!');
    resetForm(); // Reset the form after submission
  };

  return (
    <div>
      <h1>Create Tender by Drug Usage</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="drugName">Drug Name:</label>
              <Field type="text" id="drugName" name="drugName" />
              <ErrorMessage name="drugName" component="div" style={{ color: 'red' }} />
            </div>

            <div>
              <label htmlFor="dosage">Dosage:</label>
              <Field type="text" id="dosage" name="dosage" />
              <ErrorMessage name="dosage" component="div" style={{ color: 'red' }} />
            </div>

            <div>
              <label htmlFor="frequency">Frequency:</label>
              <Field as="select" id="frequency" name="frequency">
                <option value="">Select frequency</option>
                <option value="once-daily">Once Daily</option>
                <option value="twice-daily">Twice Daily</option>
                <option value="three-times-daily">Three Times Daily</option>
              </Field>
              <ErrorMessage name="frequency" component="div" style={{ color: 'red' }} />
            </div>

            <div>
              <label htmlFor="duration">Duration:</label>
              <Field type="text" id="duration" name="duration" placeholder="e.g., 7 days" />
              <ErrorMessage name="duration" component="div" style={{ color: 'red' }} />
            </div>

            <div>
              <label htmlFor="quantity">Quantity:</label>
              <Field type="number" id="quantity" name="quantity" />
              <ErrorMessage name="quantity" component="div" style={{ color: 'red' }} />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Submit Tender
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateTenderByDrugUsage;
