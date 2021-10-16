import Button from "../button";
import Input from "../input";

function FormSignup() {
  return(
    <div className="pt-20 pl-5">
      <h3 className="text-4xl">Crie uma conta grátis</h3>
      <p className="pt-2">grátis para sempre, sem necessidade de pagamento</p>

      <section className="w-4/5 flex flex-col mt-20 ">

        <div className="bg-gray-100 pl-4 w-1/1 rounded-xl">

        <span className="font-semibold">dev<span className="text-blue-600">links</span>.com/</span>
        <Input placeholder="Username" paddingX="1" width="4/6"/>

        </div>

        <span className="mt-5"></span>
        
        <Input type="password" placeholder="Senha"/>

        <span className="mt-5"></span>
        
        <Input placeholder="Url da imagem de perfil"/>

        <span className="mt-10"></span>

        <Button>
        Cadastrar com username
        </Button>

      </section>
    </div>
  );
}

export default FormSignup;