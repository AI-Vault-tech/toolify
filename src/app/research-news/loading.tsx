// Simple loading component without external dependencies
export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="h-16 w-64 bg-gray-800/50 rounded-md mb-8 mx-auto animate-pulse"></div>
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <div key={i} className="bg-gray-800/50 rounded-2xl p-8 border border-gray-800/50">
              <div className="h-12 w-12 bg-gray-700/50 rounded-xl mb-6 animate-pulse"></div>
              <div className="h-8 w-48 bg-gray-700/50 rounded mb-4 animate-pulse"></div>
              <div className="h-4 w-full bg-gray-700/50 rounded mb-2 animate-pulse"></div>
              <div className="h-4 w-5/6 bg-gray-700/50 rounded mb-6 animate-pulse"></div>
              <div className="h-10 w-32 bg-blue-600/30 rounded-lg animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
