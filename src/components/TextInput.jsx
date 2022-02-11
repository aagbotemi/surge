import React from 'react';
import { useField } from 'formik';

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className=''>
      <label style={{fontSize: "13px"}} className='block' htmlFor={props.id || props.name}>{label}</label>
      <input className="block bg-grey-light p-2 rounded outline-none w-full" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default TextInput;