import { getMedecins } from "@/app/api/query";
import Gestionmedecin from "@/components/gestionmedecin";


export default async function Page() {
  const medecins = await getMedecins();

  return (
    <div className="bg-[#ecf2f3] h-full px-3 ">
      <Gestionmedecin initialMedecins={medecins} />
    </div>
  );
}
