import Link from "next/link";

export default function NavItem() {
  const navList = [
    { text: "Ui Design", href: "/News" },
    { text: "Front-End", href: "#" },
    { text: "Back-End", href: "#" },
  ];

  return (
    <>
      {navList.map(({ text, href }) => (
        <li key={text}>
          <Link href={href}>{text}</Link>
        </li>
      ))}
    </>
  );
}
