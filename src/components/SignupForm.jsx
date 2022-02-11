import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import EmailVerification from './EmailVerification';
import TextInput from './TextInput';
import Checkbox from './Checkbox';
import Select from './Select';


const SignupForm = () => {
  const [emailModal, setEmailModal] = React.useState(false);

  async function handleFormSubmit(values) {
    console.log(JSON.stringify(values, null, 2));
    setEmailModal(true)
  }

  return (
    <div className="md:mx-16 sm:mx-10 mx-7 mt-14 text-brown-light">
      <h1 className='font-bold text-3xl mb-2'>KJK.Africa Tech Talents!</h1>
      <h4 className='font-semibold text-2xl'>Apply to join our Ecosystem</h4>
      
      <div className="mt-8">
        <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          acceptedTerms: false,
          cityType: '',
          password: '',
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('First Name is Required'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Last Name is Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Email is Required'),
          password: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Password is Required'),
          acceptedTerms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'You must accept the terms and conditions.'),
          cityType: Yup.string()
            .oneOf(
              ['lagos', 'abuja', 'kano', 'enugu'],
              'Invalid City Type'
            )
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            handleFormSubmit(values)
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form autoComplete='off'>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 mb-4">
            <TextInput
              label="First Name"
              name="firstName"
              type="text"
            />
            
            <TextInput
              label="Last Name"
              name="lastName"
              type="text"
            />
          </div>

          <div className="mb-4">
            <TextInput
              label="Email Address"
              name="email"
              type="email"
            />
          </div>
          <div className="mb-4">
            <Select label="City/Country" name="cityType">
              <option value="lagos">Lagos</option>
              <option value="abuja">Abuja</option>
              <option value="kano">Kano</option>
              <option value="enugu">Enugu</option>
            </Select>
          </div>
          <div className="mb-4">
            <TextInput
              label="Password"
              name="password"
              type="password"
            />
          </div>

          <div className="text-center mb-7">
            <Checkbox name="acceptedTerms">
              Agree to KJK Africa's Terms and conditions?
            </Checkbox>
          </div>

          <div className="text-center">
            <button className='bg-blue-light text-white py-2 px-5 rounded' type="submit">Sign Up</button>
          </div>
        </Form>
        
      </Formik>
        <div className="text-center mt-6 mb-16">Already have an account <span className="text-blue-light">LOG IN</span></div>
      </div>

      <EmailVerification
        setEmailModal={setEmailModal}
        open={emailModal}
      />
    </div>
  );
};

export default SignupForm;