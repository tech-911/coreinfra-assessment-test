import Nav from "./_components/Nav";
import SideBar from "./_components/SideBar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative w-screen h-screen flex flex-row items-start bg-background">
      <div className="w-[20%] bg-sidebar 1md:block hidden h-full overflow-auto border-r border-sidebar-border">
        <SideBar />
      </div>
      <div className="flex-1 w-[80%] h-full relative flex flex-col bg-background">
        <Nav />
        <div className="w-full overflow-auto bg-background">{children}</div>
      </div>
    </div>
  );
}
