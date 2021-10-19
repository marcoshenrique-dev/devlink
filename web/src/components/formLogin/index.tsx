import Button from "../button";
import Link from "next/link";
import { useEffect, useState } from "react";

import { useFormik } from "formik";
import * as Yup from 'yup';
import api from "../../services/api";

import Router from "next/router";
import toast from "react-hot-toast";
import { AxiosResponse } from "axios";

interface IData {
  token?: string;
  status?: string;
  message?: string;
  user?: string;
}

function FormLogin () {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const notify = (message: string) => toast(message);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: Yup.object({
      username: Yup.string().required('nome é obrigatório'),
      password: Yup.string().required('senha é obrigatória'),
    }),
    onSubmit: async (values) => {
      try{
      if(loading === false && visible === true) {
        setLoading(true);
        const result: AxiosResponse<IData> = await api.post('/users/login', {
          username: values.username,
          password: values.password,
        });

        console.log(result.data);

        if(result.data.status && result.data.message) {
          notify(result.data.message);
          console.log('testando');
        } 
        
        if(result.data.token) {
          notify('Login efetuado com sucesso');
        }

        setLoading(false);

        Router.push('/dashboard');
        

      }
    }
    catch (err){
      notify('algo deu errado ao tentar fazer login');

      setLoading(false);


    }
    }

  });


  function validate() {
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

  useEffect(() => {
    validate();
  }, [formik.errors]);


  return (
    <form onSubmit={formik.handleSubmit} className="w-4/5 flex column flex-col justify-center items-center rounded-xl py-10 box-border border-gray-200 border-2">
    <h1 className="font-regular text-3xl mb-10">Entre em sua conta devlink</h1>
      
    <input type="text" onChange={formik.handleChange} value={formik.values.username} onBlur={formik.handleBlur} id="username" placeholder="Username" className={`w-4/5 bg-gray-100 py-4 px-4 rounded-xl w-auto mb-5 ${formik.errors.username && formik.touched.username ? 'border-2 border-red-500' : 'border-0'}`} />

    {formik.touched.username && formik.errors.username ? (
         <p className="text-red-500 mb-4 text-sm w-4/5">{formik.errors.username}</p>
       ) : null}


    <input type="password" id="password" placeholder="Senha" onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} className={`w-4/5 bg-gray-100 py-4 px-4 rounded-xl w-auto mb-5 ${formik.errors.password && formik.touched.password ? 'border-2 border-red-500' : 'border-0'}`}/>

    {formik.touched.password && formik.errors.password ? (
         <p className="text-red-500 mb-4 text-sm w-4/5">{formik.errors.password}</p>
       ) : null}


    <Button style={{width: '80%', marginTop: 30, backgroundColor: visible === false && 'rgb(218, 222, 224)', color: visible === false && 'rgb(164, 164, 164)'}}  loading={loading}>
      Entrar
    </Button>

    <p className="flex items-center justify-center w-4/5 text-black hover:underline border-t-2 border-gray-100 pt-8">
    <Link href="/signup"> Criar uma nova conta</Link>
      </p>
    </form>
  );
}

export default FormLogin;