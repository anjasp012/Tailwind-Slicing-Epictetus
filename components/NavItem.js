export default function NavItem() {
  const navList = [
    { text: "Ui Design", href: "#" },
    { text: "Front-End", href: "#" },
    { text: "Back-End", href: "#" },
  ];

  return (
    <>
      {navList.map(({ text, href }) => (
        <li key={text}>
          <a href={href}>{text}</a>
        </li>
      ))}
    </>
  );
}
