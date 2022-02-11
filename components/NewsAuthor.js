export default function NewsAuthor({
  profileAuthor,
  nameAuthor,
  profesionAuthor,
}) {
  return (
    <>
      <div className="flex items-center mt-5">
        <img src={profileAuthor} className="w-12" alt="" />
        <div className="ml-4">
          <h3>{nameAuthor}</h3>
          <p className="text-white/60 text-sm">{profesionAuthor}</p>
        </div>
      </div>
    </>
  );
}
