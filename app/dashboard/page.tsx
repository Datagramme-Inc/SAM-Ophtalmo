import { redirect } from "next/navigation";
import { Currentuser } from "../api/query";

export default async function Homepage() {
  const user = await Currentuser();

  // console.log(user)
  // console.log(user?.user_metadata?.role)

  if (user?.user_metadata?.role === "admin") {
    redirect("/dashboard/admin");
  } else if (user?.user_metadata?.role === "medecin") {  
      redirect("/dashboard/medecin");
  }else if((user?.user_metadata?.role === "auxiliaire")){
    redirect("/auxiliaire")
  }else  return redirect("/login");

  // Votre code pour obtenir les détails de l'utilisateur ou toute autre logique
}
