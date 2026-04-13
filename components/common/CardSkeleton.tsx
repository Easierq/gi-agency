// components/common/CardSkeleton.tsx
export default function CardSkeleton({ count = 5 }: { count?: number }) {
  return (
    <div className="container flex gap-6 mx-auto px-4 py-10 overflow-x-auto hidden-scrollbar">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="flex-shrink-0 w-80 bg-white rounded-xl shadow animate-pulse"
        >
          {/* Image placeholder */}
          <div className="h-48 bg-gray-200 rounded-t-xl"></div>

          {/* Text content */}
          <div className="p-5 space-y-3">
            <div className="h-6 w-24 bg-gray-300 rounded"></div>{" "}
            {/* type/label */}
            <div className="h-5 w-3/4 bg-gray-300 rounded"></div> {/* title */}
            <div className="h-4 w-full bg-gray-300 rounded"></div>{" "}
            {/* description line 1 */}
            <div className="h-4 w-5/6 bg-gray-300 rounded"></div>{" "}
            {/* description line 2 */}
            <div className="flex justify-between items-center mt-2">
              <div className="h-3 w-16 bg-gray-300 rounded"></div>{" "}
              {/* downloads */}
              <div className=""></div> {/* rating */}
            </div>
            <div className="flex flex-wrap gap-1 mt-2">
              <div className="h-5 w-14 bg-gray-200 rounded"></div>
              <div className="h-5 w-14 bg-gray-200 rounded"></div>
              <div className="h-5 w-14 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
