import clsx from "clsx";

export default function Pagination({
  currentPage,
  onPageChange,
  totalResults,
  resultsPerPage,
}: {
  currentPage: number;
  onPageChange: (newPage: number) => void;
  totalResults: number;
  resultsPerPage: number;
}) {
  const totalPages = Math.ceil(totalResults / resultsPerPage);
  const shownPages: number[] = [];

  const pageStart = Math.max(0, currentPage - 5);

  for (let i = 1; i < 10; i++) {
    if (pageStart + i <= totalPages) {
      shownPages.push(pageStart + i);
    }
  }

  return (
    <div className="flex gap-2 justify-end py-4 items-center">
      <div className="mr-4 text-slate-600">pages :</div>
      {shownPages.map((shownPage) => {
        return (
          <div
            key={shownPage}
            className={clsx(
              "rounded-full w-12 h-12 border flex justify-center items-center bg-white",
              {
                "border-violet-600 text-violet-600": shownPage === currentPage,
              },
              { "cursor-pointer": shownPage !== currentPage }
            )}
            onClick={() => onPageChange(shownPage)}
          >
            {shownPage}
          </div>
        );
      })}
    </div>
  );
}
