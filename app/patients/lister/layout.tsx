export const metadata = {
  title: "SAM Ophtalmo | Patients",
  description: "Liste des patients",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex flex-col items-center">{children}</main>
  );
}
