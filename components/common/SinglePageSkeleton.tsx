export const SinglePageSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50 animate-pulse">
      {/* Breadcrumb Skeleton */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="h-4 w-40 bg-gray-200 rounded" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Main Project Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Gallery Skeleton */}
          <div className="space-y-4">
            <div className="aspect-auto lg:aspect-video bg-gray-200 rounded-2xl" />

            <div className="grid grid-cols-4 gap-2 lg:gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="aspect-square bg-gray-200 rounded-lg" />
              ))}
            </div>
          </div>

          {/* Right: Info Skeleton */}
          <div className="space-y-6">
            <div className="h-6 w-24 bg-gray-200 rounded-full" />
            <div className="h-10 w-3/4 bg-gray-200 rounded" />
            <div className="h-5 w-1/2 bg-gray-200 rounded" />

            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-200 rounded" />
              <div className="h-4 w-full bg-gray-200 rounded" />
              <div className="h-4 w-5/6 bg-gray-200 rounded" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="h-14 bg-gray-200 rounded-lg" />
              <div className="h-14 bg-gray-200 rounded-lg" />
              <div className="h-14 bg-gray-200 rounded-lg" />
            </div>

            <div className="flex flex-wrap gap-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-8 w-20 bg-gray-200 rounded-full" />
              ))}
            </div>

            <div className="h-14 bg-gray-300 rounded-lg" />
            <div className="h-14 bg-gray-300 rounded-lg" />
          </div>
        </div>

        {/* Tabs Section Skeleton */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16">
          <div className="border-b flex gap-6 px-8 py-4">
            <div className="h-6 w-24 bg-gray-200 rounded" />
            <div className="h-6 w-24 bg-gray-200 rounded" />
          </div>

          <div className="p-8 space-y-4">
            <div className="h-6 w-48 bg-gray-200 rounded" />
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-5/6 bg-gray-200 rounded" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-16 bg-gray-200 rounded-lg" />
              ))}
            </div>
          </div>
        </div>

        {/* Related Projects Skeleton */}
        <div className="space-y-6">
          <div className="h-8 w-60 bg-gray-200 rounded" />
          <div className="flex gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-80 h-72 bg-gray-200 rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
