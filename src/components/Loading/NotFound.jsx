import React from 'react'
import Lottie from 'lottie-react';
import * as notfound from '../../images/404-error-cat.json';

const NotFound = () => <Lottie animationData={notfound} loop={true} />;

export default NotFound;