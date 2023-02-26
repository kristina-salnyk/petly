import React from 'react'
import Lottie from 'react-lottie';
import * as notfound from '../../images/404-error-cat.json';

const defaultOptions = {
  loop: true,
  autoplay: true, 
  animationData: notfound.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const NotFound = () => {
  return (
    <Lottie options={defaultOptions} height={400} width={400}/>
  );
}

export default NotFound;