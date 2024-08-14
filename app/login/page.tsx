// import Link from "next/link";
// import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "./submit-button";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    let emailto=email+"@gmail.com"
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { data ,error } = await supabase.auth.signInWithPassword({
      email:emailto,
      password,
    });

    if (error) {
      return redirect("/login?message=Identifiants invalides");
    }
    
    return redirect("/dashboard");
  };

  // const signUp = async (formData: FormData) => {
  //   "use server";

  //   const origin = headers().get("origin");
  //   const email = formData.get("email") as string;
  //   const password = formData.get("password") as string;
  //   const supabase = createClient();

  //   const { error } = await supabase.auth.signUp({
  //     email,
  //     password,
  //     options: {
  //       emailRedirectTo: `${origin}/auth/callback`,
  //     },
  //   });

  //   if (error) {
  //     return redirect("/login?message=Could not authenticate user");
  //   }

  //   return redirect("/login?message=Check email to continue sign in process");
  // };

  return (
    <div className=" flex  w-full px-8  gap-2">
      <div className="w-1/2 bg-logo h-screen bg-no-repeat bg-cover">

      </div>
      <form className="w-1/2 flex flex-col  justify-center items-center gap-2 text-foreground">
        <label className="text-md" htmlFor="Telephone">
          Telephone
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="email"
          placeholder="774286034"
          required
        />
        <label className="text-md" htmlFor="password">
          Mot de passe
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <SubmitButton
          formAction={signIn}
          className="bg-[#1582a9] rounded-md px-4 py-2 text-foreground mb-2 text-white"
          pendingText="Connexion..."
        >
          Se connecter
        </SubmitButton>
        {/* <SubmitButton
          formAction={signUp}
          className="border border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2"
          pendingText="Signing Up..."
        >
          Sign Up
        </SubmitButton> */}
        {searchParams?.message && (
          <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
            {searchParams.message}
          </p>
        )}
      </form>
    </div>
  );
}
