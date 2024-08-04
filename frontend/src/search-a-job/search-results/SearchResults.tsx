import type { Ad } from "../types/types";

export default function SearchResults({
  ads,
  total,
  page,
}: {
  ads: Ad[];
  total: number;
  page: number;
}) {
  return (
    <div className="flex flex-col gap-4 pt-8">
      <div className="flex justify-between">
        <div className="font-bold">Page: {page}</div>
        <div className="font-bold">{total.toLocaleString()} résultats</div>
      </div>
      {ads.map((ad) => (
        <div key={ad.id} className="rounded-md p-4 shadow-xl bg-white">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl">{ad.title}</div>
            <div className="bg-violet-100 px-4 py-1 rounded-full">
              {ad.city}
            </div>
          </div>
          <div className="flex gap-2 pt-2">
            <div className="bg-gray-100 px-4 py-1 rounded-full">
              {ad.company}
            </div>
            {ad.contractType?.at(0) && (
              <div className="bg-gray-100 px-4 py-1 rounded-full">
                {ad.contractType?.at(0)}
              </div>
            )}
            <div className="bg-gray-100 px-4 py-1 rounded-full">
              {new Date(ad.publicationDate).toLocaleDateString()}
            </div>
          </div>
          <div className="pt-2">{ad.description}</div>
        </div>
      ))}
    </div>
  );
}
