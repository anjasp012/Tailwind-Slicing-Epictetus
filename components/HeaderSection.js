export default function HeaderSection({ children }) {
  return (
    <header className="py-6">
      <h1 className="text-[34px] text-center">{children}</h1>
    </header>
  );
}
