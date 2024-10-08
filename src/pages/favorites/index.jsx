import { useContext, useState } from "react";
import RecipeItem from "../../components/recipe-item";
import { GlobalContext } from "../../context";

export default function Favorites() {
  const { favoritesList } = useContext(GlobalContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(favoritesList.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = favoritesList.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoritesList && favoritesList.length > 0 ? (
        currentItems.map((item) => <RecipeItem key={item.id} item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing is added in favorites.
          </p>
        </div>
      )}
      {favoritesList.length > itemsPerPage && (
        <div className="flex justify-center items-center mt-6">
          <button
            className={`px-4 py-2 rounded-lg border border-Neutral-3 ${
              currentPage === 1
                ? "bg-neutral-400 text-Neutral-4 cursor-not-allowed"
                : "bg-neutral-100 text-white hover:bg-Neutral-2"
            }`}
            onClick={() => handlePreviousPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          <span className="mx-4 text-base text-Neutral-6">
            Page {currentPage} of {totalPages}
          </span>

          <button
            className={`px-4 py-2 rounded-lg border border-Neutral-3 ${
              currentPage === totalPages
                ? "bg-neutral-400 text-Neutral-4 cursor-not-allowed"
                : "bg-neutral-100 text-white hover:bg-Neutral-2"
            }`}
            onClick={() => handleNextPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
