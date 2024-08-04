export default function LoadingPlaceHolder() {
  return (
    <div className="flex flex-col gap-4 pt-4 pt-12">
      {[...new Array(10)].map((i, j) => (
        <div
          key={j}
          className="animate-pulse bg-[#00000011] rounded-xl h-[200px]"
        ></div>
      ))}
    </div>
  );
}
