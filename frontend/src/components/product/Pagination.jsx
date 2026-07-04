function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}) {
  return (
    <div className="flex justify-center items-center gap-3 mt-12">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 border rounded-lg disabled:opacity-50 hover:bg-pink-500 hover:text-white transition"
      >
        Previous
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          className={`px-4 py-2 rounded-lg transition ${
            currentPage === index + 1
              ? "bg-pink-500 text-white"
              : "border hover:bg-gray-100"
          }`}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border rounded-lg disabled:opacity-50 hover:bg-pink-500 hover:text-white transition"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;