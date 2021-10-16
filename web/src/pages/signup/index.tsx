import FormSignup from "../../components/formSignup";

function SignUp() {
  return(
    <main className="bg-white flex flex-row w-screen h-screen overflow-hidden font-karla">
      <section className="w-3/4 h-full pt-6 pl-10 box-border">
        <p className="text-2xl font-semibold">
          dev<span className="text-blue-600">links</span>
        </p>

        <FormSignup />
      </section>
      <section className="w-2/5 h-full bg-center bg-background bg-no-repeat bg-cover " >

      </section>
    </main>
  );
}

export default SignUp;