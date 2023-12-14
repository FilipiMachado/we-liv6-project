import { Navbar } from "./_components/navbar";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <Navbar />
    <Sidebar />
      <div className="flex h-full pt-20">{children}</div>
    </>
  );
};

export default BrowseLayout;
