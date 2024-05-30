// LoginSideBar.js
import React, { useContext, useState } from 'react';
import Login from './Login/Login';
import PhoneInput from '../components/Input/PhoneInput';
import EmailInput from '../components/Input/EmailInput';
import './LoginSideBar.css';
import { FaArrowRightToBracket } from 'react-icons/fa6';
import { DataContext } from '../contexts/DataContexts';  // Adjust the path as necessary

const LoginSideBar = () => {
  const [emailOrPhone, changeEmailOrPhone] = useState('email');
  const { contactInfo } = useContext(DataContext);

  const changeToEmail = () => {
    emailOrPhone === 'email' ? changeEmailOrPhone('phone') : changeEmailOrPhone('email');
  };

  const handleLogin = () => {
    console.log('Phone number:', contactInfo.phone);
    console.log('Email:', contactInfo.email);
  };

  return (
    <div>
      <div className='flex flex-col'>
        <Login />
        {emailOrPhone === 'email' ? <PhoneInput /> : <EmailInput />}
        <div className='flex flex-row justify-between mt-10'>
          <button
            className='w-13 bg-purple-600 font-normal hover:bg-purple-500 flex text-primaryBackground px-3 py-2 rounded-md'
            onClick={handleLogin}
          >
            Login <span className='mt-1 ml-2'><FaArrowRightToBracket /></span>
          </button>
          <p className='emailc' onClick={changeToEmail}>
            {' '}
            continue with {emailOrPhone}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSideBar;
