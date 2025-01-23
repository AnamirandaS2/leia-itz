import { Link } from "react-router-dom";
import LoginSVG from "../../assets/login.svg";
import { Button } from "../../components/Button/Button";
import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
import { InputPassword } from "../../components/Input/InputPassword";

export function LoginContainer() {
  return (
    <div className="flex w-[100vw] h-[100vh] pt-6 ">
      <div className="w-[55%] h-full flex items-center justify-center ">
        <div className="w-[60%] h-full flex flex-col items-start justify-center gap-10">
          <div className="w-full flex flex-col gap-6">
            <h1>Entrar na conta</h1>
            <h5>
              Ainda não tem uma conta?{" "}
              <Link to="/cadastrar" className="underline text-purple">
                Crie uma
              </Link>
            </h5>
          </div>
          <form action="" className="flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-2 w-full">
              <div className="flex flex-col gap-4 w-full">
                <input type="email" placeholder="Email" required />
                <InputPassword placeholder="Senha" />
              </div>
              <span className="flex gap-1">
                <p>Esqueceu a senha?</p>
                <Link
                  to="/nova-senha"
                  className="underline text-purple font-poppins"
                >
                  Redefinir
                </Link>
              </span>
            </div>
            <Button color="green">Entrar</Button>
          </form>
        </div>
      </div>
      <img src={LoginSVG} alt="" className="object-cover w-fit" />
    </div>
  );
}
