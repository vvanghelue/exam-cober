import React from "react";
import SearchForm from "./search-form/SearchForm";
import LoadingPlaceHolder from "./search-results/LoadingPlaceholder";
import SearchResults from "./search-results/SearchResults";
import Pagination from "./search-results/Pagination";
import type { Ad, SearchParams } from "./types/types";

const resultsPerPage = 10;

// @TODO, later plug history.pushState for nicer browser navigation...
const defaultSearchParams = {
  what: new URL(document.URL).searchParams.get("what") || "",
  where: new URL(document.URL).searchParams.get("where") || "Bordeaux",
};
const defaultPage = Number(new URL(document.URL).searchParams.get("page")) || 1;

export default function SearchAJob() {
  const [isLoading, setIsLoading] = React.useState(false);

  const [searchParams, setSearchParams] = React.useState(defaultSearchParams);
  const [page, setPage] = React.useState(defaultPage);
  const [ads, setAds] = React.useState<Ad[]>([]);
  const [total, setTotal] = React.useState(0);

  async function fetchSearchResults({
    searchParams,
    page,
  }: {
    searchParams: SearchParams;
    page: number;
  }) {
    setIsLoading(true);
    setTotal(0);
    setAds([]);
    const res = await fetch(
      "/api/job-offers-list?" +
        new URLSearchParams({
          ...searchParams,
          page: page.toString(),
        }).toString(),
      {
        method: "GET",
      }
    );
    const { total, ads } = await res.json();
    setTotal(total);
    setAds(ads);
    setIsLoading(false);
  }

  React.useEffect(() => {
    fetchSearchResults({ searchParams, page });
  }, [searchParams, page]);

  return (
    <div className="flex justify-center">
      <div className="w-[1000px]">
        <div className="font-bold text-4xl text-violet-600 pt-8">Job Man</div>
        <SearchForm
          defaultSearchParams={defaultSearchParams}
          onSearch={(searchParams) => {
            setSearchParams(searchParams);
          }}
        />
        {isLoading && <LoadingPlaceHolder />}
        {!isLoading && (
          <>
            <SearchResults ads={ads} total={total} page={page} />
            <Pagination
              currentPage={page}
              onPageChange={(newPage) => {
                setPage(newPage);
                document.body.scrollIntoView({ behavior: "smooth" });
              }}
              totalResults={total}
              resultsPerPage={resultsPerPage}
            />
          </>
        )}
      </div>
    </div>
  );
}
