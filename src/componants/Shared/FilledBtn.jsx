const FilledBtn = ({ label }) => {
  return (
    <button className="w-full md:w-auto bg-gray-700 border-2 border-gray-700 text-white px-9 rounded-md py-3 hover:border-gray-900 hover:bg-gray-900 duration-200">
      {label}
    </button>
  );
};

export default FilledBtn;
