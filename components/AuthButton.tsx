"use server";
import { Currentuser } from "@/app/api/query";
import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";

export default async function AuthButton() {
  const supabase = createClient();
  const user = await Currentuser();

  const signOut = async () => {
    await supabase.auth.signOut();
    redirect("/login");
  };

  // The signOut function is directly called here on the server-side
  const handleSignOut = async () => {
    "use server";
    await signOut();
  };

  return user ? (
    <div className="flex items-center gap-4">
      {user.email?.replace("@gmail.com", "")}
      <form action={handleSignOut}>
        <button
          type="submit"
          className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
        >
          Déconnexion
        </button>
      </form>
    </div>
  ) : null;
}