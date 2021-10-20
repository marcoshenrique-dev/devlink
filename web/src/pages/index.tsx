import Router from 'next/router';
import { useEffect } from 'react';

function Home() {

  useEffect(() => {
    Router.push('/signup');
  }, []);

  return(
    <div>

    </div>
  );
}

export default Home;