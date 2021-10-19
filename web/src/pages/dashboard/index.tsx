import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

export default function Dashboard() {
  return(
    <h2>Dashboard</h2>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {



  const {['nextauth.token'] : token} = parseCookies(ctx);


  if(!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}