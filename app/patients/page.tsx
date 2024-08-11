import Link from "next/link";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { List, User } from "lucide-react";
import { createClient } from "@/utils/supabase/server";

export default async function Page() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="h-full py-8">
      <h1 className="my-4 text-3xl font-semibold">Patients</h1>

      <div className="flex gap-4 flex-wrap justify-center items-center">
        <Link href="/patients/lister">
          <Card>
            <CardHeader>
              <CardTitle>
                <List className="w-8 h-8 m-2" /> Liste patients
              </CardTitle>
            </CardHeader>
          </Card>
        </Link>

        <Link href="/patients/creer">
          <Card>
            <CardHeader>
              <CardTitle>
                <User className="w-8 h-8 m-2" /> Ajouter patient
              </CardTitle>
            </CardHeader>
          </Card>
        </Link>
      </div>
    </div>
  );
}
