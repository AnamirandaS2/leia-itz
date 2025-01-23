import { Link } from "react-router-dom";
import LoginSVG from "../../assets/login.svg";
import { Button } from "../../components/Button/Button";
import { InputPassword } from "../../components/Input/InputPassword";

export function SingUpContainer() {
  return (
    <div className="flex w-[100vw] h-[100vh] pt-6 pl-6">
      <img src={LoginSVG} alt="" className="object-cover w-fit" />

      <div className="w-[55%] h-full flex items-center justify-center ">
        <div className="w-[60%] h-full flex flex-col items-start justify-center gap-10">
          <div className="w-full flex flex-col gap-6">
            <h1>Criar uma conta</h1>
            <h5>
              Já tem uma conta?{" "}
              <Link to="/entrar" className="underline text-purple">
                Entre aqui
              </Link>
            </h5>
          </div>
          <form action="" className="flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-2 w-full">
              <div className="flex flex-col gap-4 w-full">
                <input type="text" placeholder="Nome completo" required />
                <input type="email" placeholder="Email" required />
                <InputPassword placeholder="Senha" />
                <InputPassword placeholder="Repita a senha" />
              </div>
            </div>
            <Button color="green">Entrar</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
