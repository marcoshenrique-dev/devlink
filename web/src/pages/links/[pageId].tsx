import { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import api from '../../services/api';

type Page = {
  id: string;
  links: Array<string>;
  url: string;
  userId: string;
}

function Links() {
  
  const { query } = useRouter();
  const {pageId} = query;

  const notify = () => toast('Algo deu errado ao buscar a página');

  const [page, setPage] = useState<Page | null>(null);

  async function findPage() {
   try {
    const result: AxiosResponse<Page> = await api.get(`/pages/${pageId}`);

    if(result.data === null) {
      notify();
    }

    setPage(result.data);

    console.log(result.data);
   }
   catch{
    notify();
   }
  }

  useEffect(() => { 
    if(pageId !== undefined){
      findPage();
    }
  }, [pageId]);

  return(
    <main className="w-screen h-screen flex flex-col items-center justify-center">
    <h2 className="font-semibold text-2xl mb-10">{pageId}</h2>

    <section >
      {
        page === null ? (
          <p>Links não encontrados</p>
        ) : (
          <div>
            {
              page.links.map((item, index) => {
                return (
                  <p className="text-gray-500 flex items-center justify-center hover:text-blue-500 mb-5">
                    <a target="_blank" href={item}>{item}</a>
                  </p>
                );
              })
            }
          </div>
        )
      }
    </section>

    </main>
  );
}

export default Links;