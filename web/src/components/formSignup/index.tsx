import Button from "../button";
import Link from "next/link";
import { useEffect, useState } from "react";

import * as Yup from 'yup';
import { useFormik } from "formik";


function FormSignup() {

  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  function validate() {
    if(formik.errors.imageUrl) {
      setVisible(false);
      return false;
    }
    if(formik.errors.username) {
      setVisible(false);
      return false;
    }
    if(formik.errors.password) {
      setVisible(false);
      return false;
    }

    setVisible(true);
    return true;
   
  }


  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      imageUrl: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('nome é obrigatório'),
      password: Yup.string().required('senha é obrigatória').min(6, 'senha precisa ter mais de 6 dígitos'),
      imageUrl: Yup.string().required('imagem de perfil é obrigatória')
    }),
    onSubmit: values => {
      if(loading === false && visible === true) {
        setLoading(true);
        alert('carregando');
      }
    }

  });

  useEffect(() => {
    validate();
  }, [formik.errors]);

  return(
    <div className="pt-20 pl-5">
      <h3 className="text-4xl">Crie uma conta grátis</h3>
      <p className="pt-2">grátis para sempre, sem necessidade de pagamento</p>

      <form onSubmit={formik.handleSubmit} className="w-4/5 flex flex-col mt-20 mb-8">

        <div className={`bg-gray-100 pl-4 w-1/1 rounded-xl ${formik.errors.username && formik.touched.username ? 'border-2 border-red-500' : 'border-0'}`}>

        <span className="font-semibold">dev<span className="text-blue-600">links</span>.com/</span>
        
        <input id="username" onChange={formik.handleChange} value={formik.values.username} onBlur={formik.handleBlur} placeholder="Username" className={`bg-gray-100 py-4 px-1 rounded-xl w-4/6 `}/>

        </div>

        {formik.touched.username && formik.errors.username ? (
         <p className="text-red-500 mt-4 text-sm">{formik.errors.username}</p>
       ) : null}

        <span className="mt-5"></span>

        <input type="password" id="password" onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} placeholder="Senha" className={`bg-gray-100 py-4 px-4 rounded-xl w-auto ${formik.errors.password && formik.touched.password ? 'border-2 border-red-500' : 'border-0'}`}/>
        
        {formik.touched.password && formik.errors.password ? (
          <p className="text-red-500 mt-4 text-sm">{formik.errors.password}</p>
       ) : null}

        <span className="mt-5"></span>
        
        <input id="imageUrl" onChange={formik.handleChange} value={formik.values.imageUrl} placeholder="Url da imagem de perfil" onBlur={formik.handleBlur} className={`bg-gray-100 py-4 px-4 rounded-xl w-auto ${formik.errors.imageUrl && formik.touched.imageUrl ? 'border-2 border-red-500' : 'border-0'}`}/>
        
        {formik.touched.imageUrl && formik.errors.imageUrl ? (
         <p className="text-red-500 mt-4 text-sm">{formik.errors.imageUrl}</p>
       ) : null}

        <span className="mt-10"></span>

        <Button style={{backgroundColor: visible === false && 'rgb(218, 222, 224)', color: visible === false && 'rgb(164, 164, 164)'}} loading={loading} type="submit">
        Cadastrar com username
        </Button>

      </form>

      <p className="flex items-center justify-center w-4/5 text-black hover:underline border-t-2 border-gray-100 pt-8">
      <Link href="/login">Já possui uma conta ?</Link>
      </p>

    </div>
  );
}

export default FormSignup;