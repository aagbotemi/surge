import React, { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import TextInput from './TextInput';
import { stepOneValidationSchema, stepTwoValidationSchema } from '../utils/validationSchema'
import Select from 'react-select'
import { communicationChannel, englishProficiency, genders, industry, primarySkills, yearsOfExperiences, yearsOfPrimarySkill } from '../utils/selectOptions';

export default function SignupStepperForm() {
  const [data, setData] = useState({
    phoneNumber: "",
    gender: "",
    yearsOfExperience: "",
    primarySkill: "",
    englishProficiency: "",
    yearsOfPrimarySkill: "",
    resume: "",
    portfolioLink: "",
    communicationChannel: "",
    industry: "",
    recommendFullName: "",
    recommendPosition: "",
    recommendSalary: "",
    recommendEmail: "",
  });
  const [currentStep, setCurrentStep] = useState(0);

  const makeRequest = (formData) => {
    console.log("Form Submitted", formData);
  };

  const handleNextStep = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));

    if (final) {
      makeRequest(newData);
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const steps = [
    <StepOne next={handleNextStep} data={data} />,
    <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />
  ];

  console.log("data", data);

  return <div className="md:mx-16 sm:mx-10 mx-7 mt-14 text-brown-light">{steps[currentStep]}</div>;
}

const StepOne = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };

  return (
    <Formik
      validationSchema={stepOneValidationSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form onSubmit={handleSubmit}>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-7 mb-4">
            <div>
              <TextInput
                label="Phone Number"
                name="phoneNumber"
                type="text"
              />
            </div>


            <div>
              <p>Years Of Work Experience</p>
              <Select options={yearsOfExperiences} name="yearsOfExperience" />
              <p className="error"><ErrorMessage name="yearsOfExperience" /></p>
            </div>
            
            <div>
              <p>Gender</p>
              <Select options={genders} name="gender" />
              <p className="error"><ErrorMessage name="gender" /></p>
            </div>

            <div>
              <p>Primary Skill</p>
              <Select options={primarySkills} name="primarySkill" />
              <p className="error"><ErrorMessage name="primarySkill" /></p>
            </div>

            <div>
              <p>English Proficiency</p>
              <Select options={englishProficiency} name="englishProficiency" />
              <p className="error"><ErrorMessage name="englishProficiency" /></p>
            </div>

            <div>
              <p>Years of Experience With Primary Skill</p>
              <Select options={yearsOfPrimarySkill} name="yearsOfPrimarySkill" />
              <p className="error"><ErrorMessage name="yearsOfPrimarySkill" /></p>
            </div>

          </div>

          <div className="flex justify-end mt-12">
            <button type="submit" className='bg-blue-light text-white py-2 px-10 rounded'>Next</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

const StepTwo = (props) => {
  const handleSubmit = (values) => {
    props.next(values, true);
  };

  let inputRef;


  return (
    <Formik
      validationSchema={stepTwoValidationSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-7 mb-4">
            <div>
              <div>
                <p>CV/Resume</p>
                <input type="file" name="resume" hidden={true} ref={refParam => inputRef = refParam} />
                <div onClick={() => inputRef.click()} className="h-8 bg-grey-light px-2 py-1 h-10">
                </div>
              </div>
            </div>


            <div>
              <p>Industry Experience (eg. Fintech)</p>
              <Select isMulti options={industry} name="industry" />
              <p className="error"><ErrorMessage name="industry" /></p>
            </div>
            

            <div>
              <TextInput
                label="Portfolio link"
                name="portfolioLink"
                type="text"
                placeholder="Enter URL"
              />
            </div>

            <div>
              <p>Communication Channel (eg. Slack)</p>
              <Select isMulti options={communicationChannel} name="communicationChannel" />
              <p className="error"><ErrorMessage name="communicationChannel" /></p>
            </div>


          </div>
          <hr />

          <h3 className='mt-6 mb-3 text-xl font-bold'>Recommendations</h3>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-7 mb-4">
            <TextInput
              label="Full name"
              name="recommendFullName"
              type="text"
            />

            <div>
              <TextInput
                label="Position"
                name="recommendPosition"
                type="text"
              />
            </div>

            <div>
              <TextInput
                label="Email Address"
                name="recommendEmail"
                type="text"
              />
            </div>

            <div>
              <TextInput
                label="Salary Expectation"
                name="recommendSalary"
                type="text"
              />
            </div>

          </div>

          <div className="flex items-center justify-between mt-7">
            <button className='bg-blue-light text-white py-2 px-6 rounded' type="button" onClick={() => props.prev(values)}>
              Back
            </button>
            <button className='bg-blue-light text-white py-2 px-6 rounded' type="submit">Submit</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
