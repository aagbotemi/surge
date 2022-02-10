import React from 'react';
import { useField } from 'formik';

const Select = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label className='block' htmlFor={props.id || props.name}>{label}</label>
      <select className="block text-input bg-grey-light p-2 rounded outline-none w-full" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default Select;
