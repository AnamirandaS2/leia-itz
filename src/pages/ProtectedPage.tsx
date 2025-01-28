import { useOutlet } from "react-router";
import Sidebar from "../components/Sidebar/Sidebar";

export const ProtectedPage = () => {
  const outlet = useOutlet();

  return (
    <main className="w-full min-h-screen max-h-screen  bg-[#fff] flex flex-col">
      <div className="w-full h-full flex ">
        <Sidebar />
        {outlet}
      </div>
    </main>
  );
};
