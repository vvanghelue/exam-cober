import React from "react";
import type { SearchParams } from "../types/types";

export default function SearchForm({
  defaultSearchParams,
  onSearch,
}: {
  defaultSearchParams: SearchParams;
  onSearch: (searchParams: SearchParams) => void;
}) {
  const [what, setWhat] = React.useState(defaultSearchParams.what);
  const [where, setWhere] = React.useState(defaultSearchParams.where);

  return (
    <div className="pt-8">
      <form
        className="flex gap-4 items-center"
        onSubmit={(e) => {
          e.preventDefault();
          onSearch({
            what,
            where,
          });
        }}
      >
        <input
          type="text"
          placeholder="Emploi recherché..."
          className="flex-1 px-8 py-3 border rounded-full text-2xl"
          onChange={(e) => setWhat(e.target.value)}
          value={what}
        />
        <input
          type="text"
          placeholder="Localisation (ville, etc)..."
          className="px-8 py-3 border rounded-full text-2xl"
          onChange={(e) => setWhere(e.target.value)}
          value={where}
        />
        <button
          type="submit"
          className="px-8 py-3 border rounded-full text-2xl bg-violet-600 font-bold text-white active:opacity-50"
        >
          Rechercher
        </button>
      </form>
    </div>
  );
}
