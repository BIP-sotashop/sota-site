/**
 *
 * SignupProvider
 *
 */

import React from 'react';

import { GoogleIcon, FacebookIcon, VkIcon } from '../Icon';
import { API_URL } from '../../../constants';

const SignupProvider = () => {
  return (
    <div className='signup-provider'>
      <a href={`${API_URL}/auth/google`} className='mb-2 google-btn'>
        <GoogleIcon />
        <span className='btn-text'>Зайти через Google</span>
      </a>

      <a href={`${API_URL}/auth/vk`} className='facebook-btn'>
        <VkIcon />
        <span className='btn-text'>Зайти через ВКонтакте</span>
      </a>
    </div>
  );
};

export default SignupProvider;
