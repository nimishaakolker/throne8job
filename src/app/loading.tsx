export default function Loading() {
  return (
    <div className="min-h-screen bg-[#f7f3ef] animate-pulse">
      <div className="bg-[#f7f3ef] border-b border-[#e8ddd4] px-6 py-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            <div className="h-3 w-28 bg-[#e0d8cf] rounded-full" />
            <div className="h-10 w-3/4 bg-[#e0d8cf] rounded-xl" />
            <div className="h-4 w-1/2 bg-[#e0d8cf] rounded-full" />
            <div className="flex gap-3 mt-4">
              {[1, 2, 3].map(i => <div key={i} className="flex-1 h-16 bg-[#e0d8cf] rounded-xl" />)}
            </div>
          </div>
          <div className="h-16 bg-[#e0d8cf] rounded-2xl" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-8 flex gap-6">
        <div className="w-60 shrink-0 h-[400px] bg-[#e0d8cf] rounded-2xl" />
        <div className="flex-1 grid grid-cols-1 xl:grid-cols-2 gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-48 bg-[#e0d8cf] rounded-2xl" />
          ))}
        </div>
      </div>
    </div>
  )
}