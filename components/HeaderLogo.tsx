import Image from "next/image";
import Link from "next/link";
import logo from "../public/icons/logo.svg";

export default function HeaderLogo() {
  return (
    <Link href="/">
      <div className="items-center hidden lg:flex ">
        <Image src={logo} height={28} width={28} alt="logo" />
        <p className="font-semibold text-white text-2xl ml-2.5">Finance</p>
      </div>
    </Link>
  );
}
