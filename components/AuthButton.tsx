//import { createClient } from "@/utils/supabase/server";
'use client'
import { Currentuser } from "@/app/api/query";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import { useRouter } from 'next/navigation'
import { useEffect,useState } from "react";

export default  function AuthButton() {
 const supabase = createClient();
 const router = useRouter()
 const [user, setUser] = useState<User | null | undefined>();

 useEffect( () => {
  
    Currentuser().then((data)=>setUser(data))
   // console.log(user)
 }, [])
 
  const signOut = async () => {
    
    await supabase.auth.signOut();
    return router.replace("/login");
  };

 



   return user ? (
    <div className="flex items-center gap-4">
      
      
        <button onClick={signOut} type="submit" className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
          Déconnexion
        </button>
      
    </div>
  ) : null; 
}
