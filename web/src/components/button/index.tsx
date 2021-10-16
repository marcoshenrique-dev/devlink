import { useState } from "react";

import Loader from 'react-loading';

const Button : React.FC  = ({children}) => {
  const [loading, setLoading] = useState(false);
  return (
    <button className={`bg-blue-600 py-4 px-4 rounded-xl w-auto font-bold text-white hover:opacity-80 flex items-center justify-center`}>
      {
        loading === false ? children : <Loader type="spin" width="25px" height="25px"/>
      }
    </button>
  );
}

export default Button;