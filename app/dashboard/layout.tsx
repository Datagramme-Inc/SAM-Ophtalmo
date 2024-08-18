import Nav from "@/components/Nav";
import Sidebar from "@/components/sidebar";
import { Currentuser } from "../api/query";
import Adminsidebar from "@/components/adminsidebar";
import Navadmin from "@/components/Navadmin";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await Currentuser();

  return (
    <div className=" h-full flex ">
      {user?.user_metadata?.role == "admin" ? (
        <Adminsidebar></Adminsidebar>
      ) : (
        <Sidebar></Sidebar>
      )}

      <div className="flex w-full flex-col">
      {user?.user_metadata?.role == "admin" ? (
        <Navadmin></Navadmin>
      ) : (
        <Nav></Nav>
      )}
       

        <div className=" w-full h-screen">{children}</div>
      </div>
    </div>
  );
}
