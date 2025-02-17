import Logo from "../../assets/logo.svg";
import Avatar from "../../assets/Avatar.svg";
import {
  Bookmark,
  BookOpen,
  HomeIcon,
  LibraryBigIcon,
  NotebookPen,
} from "lucide-react";
import NavButton from "../NavButton/NavButton";

export default function Sidebar() {
  return (
    <div className="bg-white w-[20%] h-full flex flex-col px-6 pt-5 items-center justify-center">
      <img src={Logo} alt="" className="w-36 h-12 " />
      <div className="w-full h-full flex flex-col items-center gap-3 justify-center py-5">
        <img src={Avatar} alt="" />
        <p className="text-text-gray-900 font-medium text-sm">
          Cecília Almeida
        </p>
      </div>
      <div className="w-full flex flex-col gap-3 items-center justify-center px-2">
        <NavButton Icon={HomeIcon} title="Home" to="home" />
        <NavButton Icon={LibraryBigIcon} title="Biblioteca" to="biblioteca" />
        <NavButton Icon={Bookmark} title="Coleções" to="colecoes" />
        <NavButton Icon={BookOpen} title="Empréstimos" to="emprestimos" />
        <NavButton Icon={NotebookPen} title="Atividade" to="atividade" />
      </div>
    </div>
  );
}
