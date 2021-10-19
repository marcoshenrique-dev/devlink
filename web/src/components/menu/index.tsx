import { useContext } from 'react';
import {FiLink} from 'react-icons/fi';
import { authContext } from '../../hooks/authContext';

import Link from 'next/link';

function Menu() {

  const {user} = useContext(authContext); 

  console.log(user);

  return(
    <section className="w-1/12 flex flex-col justify-between items-center  pt-5 pb-5 border-r">
        <Link href="/dashboard" passHref>
        <FiLink className='cursor-pointer text-blue-600' size={26} />
        </Link>
        <img
        className="h-12 w-12 rounded-full cursor-pointer"
        src={user?.image_url}
        alt="imagem de perfil"
        />
    </section>
  );

}

export default Menu;