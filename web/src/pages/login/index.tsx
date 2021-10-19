import FormLogin from "../../components/formLogin";
import Logo from "../../components/logo";

function Login() {
  return(
    <main className="px-10 py-5">
    <Logo />
    <section className="w-full h-auto flex justify-center items-center mt-20">
    <FormLogin />
    </section>
    </main>
  );
}

export default Login;