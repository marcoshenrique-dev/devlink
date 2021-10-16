import React, { useEffect, useState } from "react";

import Loader from 'react-loading';

interface IButton {
  loading: boolean;
}

const Button : React.FC<React.HTMLProps<HTMLButtonElement> & IButton>  = (props,{
  children
}) => {
  return (
    <button {...props} className={`bg-blue-600 py-4 px-4 rounded-xl w-auto font-bold text-white hover:opacity-80 flex items-center justify-center`}>
      {
        props.loading === false ? props.children : <Loader type="spin" width="25px" height="25px"/>
      }
    </button>
  );
}

export default Button;