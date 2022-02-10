import React from 'react'
import { Link } from 'react-router-dom'
import Email from "../assets/images/MailSent.svg"

const EmailVerification = ({setEmailModal, open}) => {
  return (
    <div>
        { open && <div className='modal fixed shadow-lg bg-white left-1/2 top-1/4 md:px-16 px-7 py-12 md:w-3/6 w-5/6'>
            <div className="flex justify-center">
                <img src={Email} alt="email logo" />
            </div>
            <div className="text-center mt-7 text-brown-light">
                <h2 className='mb-6 text-3xl font-semibold'>Verification Link Sent!</h2>
                <p className='mb-8 text-xl'>An email has just been sent to your inbox, kindly check and click the link to proceed with your registration </p>
            
                <Link to="/complete-form">

                    <button className='bg-blue-light text-white py-2 px-7 rounded text-xl' type="submit">Click to verify email</button>
                </Link>
            </div>
    </div> }
    </div>
  )
}

export default EmailVerification