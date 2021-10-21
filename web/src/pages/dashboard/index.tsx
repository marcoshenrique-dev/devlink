import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import AddLinks from "../../components/addLinks";
import Menu from "../../components/menu";
import Preview from "../../components/preview";

export default function Dashboard() {
  return(
    <main className="flex flex-row w-screen h-screen">
      <Menu/>
      <AddLinks />

    </main>
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