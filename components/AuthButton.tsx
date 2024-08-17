//import { createClient } from "@/utils/supabase/server";
'use server'
import { Currentuser } from "@/app/api/query";
import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";

export default async function AuthButton() {
 const supabase = createClient();

 const user = await Currentuser()
  const signOut = async () => {
    "use server"
    await supabase.auth.signOut();
    return redirect("/login");
  };

 



   return user ? (
    <div className="flex items-center gap-4">
       
      <form action={signOut}>
        <button type="submit" className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
          Déconnexion
        </button>
      </form>
    </div>
  ) : null; 
}
