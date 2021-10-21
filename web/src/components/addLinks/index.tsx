import { AxiosResponse } from "axios";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../../hooks/authContext";
import api from "../../services/api";
import Button from "../button";

import {destroyCookie} from 'nookies';

import * as Yup from 'yup';

import {FiPlus, FiTrash} from 'react-icons/fi';
import { useFormik } from "formik";
import toast from "react-hot-toast";
import Router from "next/router";

type Page = {
  id: string;
  links: Array<string>;
  url: string;
  userId: string;
}


function AddLinks() {

  const {token} = useContext(authContext);

  const [page, setPage] = useState<Page | null>(null);
  const [visible, setVisible] = useState<boolean>(false);

  const notify = () => toast('Faça seu login novamente');

  const formik = useFormik({
    initialValues: {
      text: ''
    },
    validationSchema: Yup.object({
      text: Yup.string().required('texto é obrigatório'),
    }),
    onSubmit: async (values) => {
      if(page !== null) {
      const nowLinks = page.links;
      nowLinks.push(values.text);
      
     const result : AxiosResponse<Page> = await api.put(`/pages/${page.id}`, {
        links: nowLinks
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });  

      setPage(result.data);

      }
    }})

  async function remove(index: number) {

    if(page !== null){

      try {
        const nowLinks = page.links;
        nowLinks.splice(index, 1);
  
    const result: AxiosResponse<Page> = await api.put(`/pages/${page.id}`, {
          links: nowLinks
        }, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        setPage(result.data);

      }
      catch (error) {
        if(error.response) {
          if(error.response.status === 401) {
            notify();
            destroyCookie(undefined, 'nextauth.user');
            destroyCookie(undefined, 'nextauth.token');
            
            Router.push('/login');
          } 
        }
      } 
    }
  }


  const {user} = useContext(authContext); 

  async function findPage() {
    try {
     const result: AxiosResponse<Page> = await api.get(`/pages/${user.username}`);
 
     if(result.data === null) {
       console.log('erro ao achar a página');
     }
 
     setPage(result.data);
 
     console.log(result.data);
    }
    catch{
      console.log('erro ao achar a página');
    }
   }
 
   useEffect(() => { 
     if(user !== undefined){
       findPage();
     }
   }, [user]);

  return(
    <section className="flex flex-col p-10 w-7/12 bg-gray-50 border-r overflow-y-auto">
      <Button style={{marginBottom: visible ? 15 : 30}} onClick={() => setVisible(!visible)} loading={false}>
        Adicionar novo link
      </Button>
      {
        visible ? (
          <form className="flex flex-row justify-between justify-items-center mb-10"  onSubmit={formik.handleSubmit}>   
          <section className="w-4/5 ">
           <input type="text" onChange={formik.handleChange} value={formik.values.text} onBlur={formik.handleBlur} id="text" placeholder="link" className={`w-full bg-gray-100 py-4 px-4 rounded-xl w-auto mb-5 ${formik.errors.text && formik.touched.text ? 'border-2 border-red-500' : 'border-0'}`} />
           {formik.touched.text && formik.errors.text ? (
         <p className="text-red-500 mb-4 text-sm w-4/5">{formik.errors.text}</p>
       ) : null}
           </section>
            
      <Button type="submit" style={{width: '60px', height: '55px'}}  loading={false}>
      <FiPlus />
    </Button>

          </form>
        ) : (
          <div>

          </div>
        )
      }

      <section >
      {
        page === null ? (
          <p>Links não encontrados</p>
        ) : (
          <div>
            {
              page.links.map((item, index) => {
                return (
                  <p className="text-gray-900  flex items-center justify-between ml-20 mr-20 text-center  mb-5">
                    <a className="hover:text-blue-800" target="_blank" href={item}>{item}</a> 
                    <button onClick={(() => remove(index))}><FiTrash color="#FF4500" /></button>
                  </p>
                );
              })
            }
          </div>
        )
      }
    </section>
      
    </section>
  );
}

export default AddLinks;