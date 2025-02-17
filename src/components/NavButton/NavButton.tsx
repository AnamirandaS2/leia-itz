import { LucideProps } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

type NavButtonProps = {
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  to: string;
  title: string;
};

export default function NavButton({ Icon, title, to }: NavButtonProps) {
  const location = useLocation();
  const isActive = location.pathname === `/${to}`;
  return (
    <Link to={`/${to}`} className="w-full">
      <div
        className={`flex w-full h-11 rounded-3xl bg-opacity-10 items-center px-5 gap-2 ${
          isActive
            ? "text-blue-700 bg-purple font-semibold"
            : "text-text-gray-500"
        }`}
      >
        <Icon
          className={`w-5 h-5 ${isActive ? "text-blue-700" : "text-text-gray-500"}`}
        />
        <p>{title}</p>
      </div>
    </Link>
  );
}
