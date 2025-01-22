import { Link } from "react-router-dom";
import LoginSVG from "../../assets/login.svg";
import { Button } from "../../components/Button";
import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";

export function LoginContainer() {
  const [showPassword, setShowPassword] = useState(false);
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
                <div className="w-full relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirme a senha"
                    required
                  />
                  {showPassword ? (
                    <Eye
                      size={20}
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-5 top-[50%] translate-y-[-50%] stroke-[#707378] cursor-pointer"
                    />
                  ) : (
                    <EyeClosed
                      size={20}
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-5 top-[50%] translate-y-[-50%] stroke-[#707378] cursor-pointer"
                    />
                  )}
                </div>
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
            <Button>Entrar</Button>
          </form>
        </div>
      </div>
      <img src={LoginSVG} alt="" className="object-cover w-fit" />
    </div>
  );
}
