import * as Yup from 'yup';

export const stepOneValidationSchema = Yup.object({
  phoneNumber: Yup.string()
    .required('Phone Number is Required'),
  gender: Yup.string()
    .oneOf(
      ['male', 'female', 'prefer-not-to-say'],
      'Invalid Gender'
    )
    .required('Gender is required'),
  yearsOfExperience: Yup.string()
    .oneOf(
      ['1-2', '3-5', '6-10', '11-15'],
      'Invalid Years Of Experience'
    )
    .required('Years Of Experience is required'),
  primarySkill: Yup.string()
    .oneOf(
      ['frontend', 'backend', 'devops', 'fullstack'],
      'Invalid Primary Skills'
    )
    .required('Primary Skill is required'),
  englishProficiency: Yup.string()
    .oneOf(
      ['beginner', 'professional', 'native'],
      'Invalid English Proficiency'
    )
    .required('English Proficiency is required'),
  yearsOfPrimarySkill: Yup.string()
    .oneOf(
      ['1-2', '3-5', '6-10', '11-15'],
      'Invalid Years Of Primary Skill'
    )
    .required('Years Of Primary Skill is required'),
});

export const stepTwoValidationSchema = Yup.object({
  resume: Yup.string()
    .required('Resume is Required'),
  portfolioLink: Yup.string()
    .required('Resume is Required'),
  recommendFullName: Yup.string()
    .required('Full Name is Required'),
  recommendPosition: Yup.string()
    .required('Position is Required'),
  recommendSalary: Yup.string()
    .required('Salary is Required'),
  recommendEmail: Yup.string()
    .required('Email is Required'),
  communicationChannel: Yup.string()
    .oneOf(
      ['slack', 'discord', 'skype'],
      'Invalid Communication Channel'
    )
    .required('Communication Channel is required'),
  industry: Yup.string()
    .oneOf(
      ['fintech', 'edutech', 'edutech', 'meditech'],
      'Invalid Industry'
    )
    .required('Industry is required'),
});