import Logo from "../../assets/logo.svg";
import Avatar from "../../assets/Avatar.svg";
import { Home } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="bg-white w-[20%] h-full flex flex-col">
      <img src={Logo} alt="" />
      <div>
        <img src={Avatar} alt="" />
        <p className="text-text-gray-900 text-sm">Cecília Almeida</p>
      </div>
      <div></div>
    </div>
  );
}
