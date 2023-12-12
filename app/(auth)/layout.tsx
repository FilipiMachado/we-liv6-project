const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <nav className="w-full bg-rose-500">Auth Nav</nav>
      {children}
    </div>
  );
};

export default AuthLayout;
