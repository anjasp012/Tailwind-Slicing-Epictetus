import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center text-lg cursor-pointer">
        <div className="bg-[#4B5563] px-3.5 py-2 rounded font-sans">E</div>
        <div className="ml-3 md:hidden lg:block">Epictetus</div>
      </div>
    </Link>
  );
}
