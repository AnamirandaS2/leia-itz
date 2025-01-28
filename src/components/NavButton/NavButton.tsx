import { LucideProps } from "lucide-react";
import { Link } from "react-router-dom";

type NavButtonProps = {
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  to: string;
  title: string;
};

export default function NavButton({ Icon, title, to }: NavButtonProps) {
  return <Link to={`/${to}`}>
    
  </Link>;
}
