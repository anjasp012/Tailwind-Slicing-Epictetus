export default function DropdownItem() {
  const dropdownList = [
    { text: "Internet", href: "#" },
    { text: "Books", href: "#" },
    { text: "Open Source", href: "#" },
  ];

  return (
    <>
      {dropdownList.map(({ text, href }) => (
        <li
          key={text}
          className="pb-2.5 pt-3 px-5 border-b border-white/5 hover:bg-[#273953] last:border-0"
        >
          <a href={href}>{text}</a>
        </li>
      ))}
    </>
  );
}
