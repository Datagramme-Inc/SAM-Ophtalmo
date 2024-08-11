import AuthButton from "./AuthButton";

export default function Nav() {
  return (
    <nav className="w-full flex justify-between items-center border-b border-b-foreground/10 h-16">
      <h1 className="text-green-700 sm:text-2xl text-xl uppercase font-bold mx-4">
        Sam-Ophtalmo
      </h1>
      <AuthButton />
    </nav>
  );
}
