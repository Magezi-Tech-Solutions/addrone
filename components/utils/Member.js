function Member({ name, title, image }) {
  return (
    <div>
      <div className="relative overflow-hidden rounded-md shadow-lg group">
        <img
          className="object-cover w-full h-72 xl:h-80"
          src={image}
          alt="Team Member Name"
        />
        <div className="absolute inset-0 px-6 py-4 text-center duration-300 opacity-0 group-hover:opacity-100">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 opacity-60 to-purple-600"></div>
          <div className="relative flex flex-col items-center justify-center w-full h-full">
            <p className="mb-1 text-lg font-bold text-white">{name}</p>
            <p className="mb-4 text-xs text-blue-50">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Member;
