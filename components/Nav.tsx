import AuthButton from "./AuthButton";
import Sheetmenu from "./sheet";


export default function Nav() {
  return (
    <nav className="w-full flex justify-between items-center border-b border-b-foreground/10 h-14 container">
     <Sheetmenu />
      <h1 className=" sm:text-base text-base uppercase font-bold mx-4">
      Bienvenue
 </h1>
      <AuthButton />
    </nav>
  );
}
