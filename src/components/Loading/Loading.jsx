import React from 'react'
import Lottie from 'react-lottie';
import * as loading from '../../images/loading-cat.json';

const defaultOptions = {
  loop: true,
  autoplay: true, 
  animationData: loading.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const Loading = () => {
  return (
    <Lottie options={defaultOptions} height={400} width={400}/>
  );
}

export default Loading;