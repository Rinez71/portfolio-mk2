/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import {
  Container,
  CssBaseline,
  Grid,
  Typography,
  TextField,
  Paper,
} from '@mui/material';
import React from 'react';
import Header from '../components/Layout/Header';
import { background, container } from './about';
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik';

interface ContactForm {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

const initialValues: ContactForm = {
  fullName: '',
  email: '',
  subject: '',
  message: '',
};

interface ContactProps {}

const Contact: React.FC<ContactProps> = ({}) => {
  return (
    <>
      <CssBaseline />
      <Header header='Contact' />
      <main css={background}>
        <Container css={container}>
          <Grid
            container
            justifyContent='center'
            alignItems='center'
            spacing={6}
            direction='row'
          >
            <Grid item md={6}>
              <Paper>
                <Formik initialValues={initialValues} onSubmit={() => {}}>
                  {({ values }) => (
                    <Form>
                      <Field
                        name='fullName'
                        placeholder='Paul Fernandez'
                        as={TextField}
                        label='Full Name'
                        fullWidth
                      />
                      <Field
                        name='email'
                        type='email'
                        placeholder='Email'
                        as={TextField}
                        label='Email'
                        fullWidth
                      />
                      <Field
                        name='subject'
                        placeholder='Subject'
                        as={TextField}
                        label='Subject'
                        fullWidth
                      />
                      <Field
                        name='message'
                        placeholder='Message'
                        as={TextField}
                        label='Message'
                        fullWidth
                      />
                      <pre>{JSON.stringify(values, null, 4)}</pre>
                    </Form>
                  )}
                </Formik>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default Contact;
