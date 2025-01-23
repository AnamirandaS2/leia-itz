import { Button } from "../../components/Button/Button";
import wave from "../../assets/Vector.svg";
import boyForms from "../../assets/boyForms.png";

export default function LandingContainer() {
  return (
    <div
      style={{
        backgroundImage: `url(${wave})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
      }}
      className="flex flex-col min-h-screen overflow-y-auto"
    >
      <div className="flex flex-col items-start text-left text-white max-w-xl pl-40 py-20">
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
        <div
          className=" flex  items-center h-40 justify-evenly gap-20 rounded-2xl bg-gradient-to-r from-yellow to-pink mt-[1650px] "
          style={{ padding: "4rem 2rem" }}
        >
          <div className="">
            <img src={boyForms} className="object-contain w-40 h-52" alt="" />
          </div>
          <div className="text-center self-end text-white w-[1000px] mb-6">
            <div className="w-[50%] ">
              <p className="text-xl text-left font-semibold">
                Não é estudade do IFMA, mas gostaria de fazer parte dessa
                iniciativa?
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: "10vh" }}></div>
    </div>
  );
}
