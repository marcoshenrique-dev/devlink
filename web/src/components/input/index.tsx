interface IParams {
  placeholder: string;
  width?: string;
  height?: string;
  paddingX?: string;
  paddingY?:string;
  type?: string;
}

function Input({placeholder, width = 'auto', paddingX = '4', paddingY = '4', type= 'text'}: IParams) {
  return(
    <input placeholder={placeholder} type={type} className={`bg-gray-100 py-${paddingY} px-${paddingX} rounded-xl w-${width}`}/>
  );
}

export default Input;