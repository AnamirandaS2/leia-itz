import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { Button } from "../../../components/Button/Button";

export default function Header() {
  return (
    <header className="w-full fixed shadow-[0_4px_8px_rgba(0,0,0,0.1)] backdrop-blur-lg z-10  bg-white flex items-center border-black py-4 justify-around">
      <img src={logo} alt="" className="object-cover" />
      <div className="flex gap-4 font-poppins font-normal text-base">
        <a href="" className="hover:scale-105  hover:text-purple">
          Início
        </a>
        <a href="" className="hover:scale-105 hover:text-purple">
          Sobre o projeto
        </a>
        <a href="" className="hover:scale-105 hover:text-purple">
          Contato
        </a>
      </div>
      <div className="w-32 ">
        <Link to="/entrar">
          <Button py="2" color="yellow">
            ENTRE
          </Button>
        </Link>
      </div>
    </header>
  );
}
