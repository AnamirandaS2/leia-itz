import { Button } from "../../components/Button/Button";
import "./Container/Landing.css";
import wave from "../../assets/Vector.svg";
export default function LandingContainer() {
  return (
    <div className="relative min-h-screen w-screen flex flex-col items-start justify-center  ">
      <div
        style={{
          backgroundImage: `url(${wave})`,
          backgroundSize: "cover",
          objectFit: "cover"
        }}
        className="absolute inset-0 overflow-x-hidden w-full  z-[1]"
      ></div>

      <div className="fixed top-1/2 left-[15%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-start text-left text-white max-w-xl pl-40  ">
        <h1 className="text-3xl md:text-4xl font-bold text-purple mb-4">
          Transforme a leitura em uma experiência incrível!
        </h1>
        <p className="text-md md:text-xl mb-6 font-normal text-text-gray-800">
          Explore livros fascinantes, resenhas interativas e quizzes divertidos
          que tornam a leitura sua próxima grande aventura.
        </p>
        <div className="w-[45%]">
          <Button color="purple"> Começar agora! </Button>
        </div>
      </div>
    </div>
  );
}
