import { Button } from "../../components/Button/Button";
import wave from "../../assets/Vector.svg";
import boyForms from "../../assets/boyForms.png";
import Header from "./Header/Header";
import { Link } from "react-router-dom";

export default function LandingContainer() {
  return (
    <div className="scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100 overflow-auto min-h-screen ">
      <Header />
      <div style={{ height: "5vh" }}></div>

      <div
        style={{
          backgroundImage: `url(${wave})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
        }}
        className="flex flex-col min-h-screen"
      >
        <div className="flex flex-col items-start text-left text-white w-full px-40 py-20 ">
          <div className="max-w-md pt-[5%]">
            <h1 className="text-3xl md:text-4xl font-bold text-purple mb-4">
              Transforme a leitura em uma experiência incrível!
            </h1>
            <p className="text-md md:text-xl mb-6 font-normal text-text-gray-800">
              Explore livros fascinantes, resenhas interativas e quizzes
              divertidos que tornam a leitura sua próxima grande aventura.
            </p>
            <div className="w-[45%]">
              <Link to="/cadastrar">
                <Button py="4" color="purple">
                  {" "}
                  Começar agora!{" "}
                </Button>
              </Link>
            </div>
          </div>
          <div
            className=" flex items-center h-96 w-full justify-start overflow-hidden rounded-2xl bg-gradient-to-r from-yellow to-pink mt-[1100px] "
            style={{ padding: "4rem 2rem" }}
          >
            <div className="w-[30%] absolute top-[210%] left-[15%]">
              <img src={boyForms} className="object-contain w-full " alt="" />
              <form
                action=""
                className="absolute w-full top-[90%] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)]
 flex flex-col p-8 gap-4 bg-white rounded-xl"
              >
                <input type="text" placeholder="Assunto" />
                <input type="text" placeholder="Nome Completo" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Escreva sua mensagem aqui" />
                <Link to="/">
                  <Button py="4" color="green">
                    Enviar
                  </Button>
                </Link>
              </form>
            </div>
            <div className="text-center ml-[50%]  text-white  w-[40%] ">
              <div className="w-full flex flex-col gap-4">
                <p className="text-3xl text-left font-semibold">
                  Não é estudade do IFMA, mas gostaria de fazer parte dessa
                  iniciativa?
                </p>
                <p className="text-xl font-normal text-left">
                  Tem lugar pra vocês tambem! Nós envie uma mensagem e vamos
                  bater um papo!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ height: "20vh" }}></div>
      </div>
    </div>
  );
}
