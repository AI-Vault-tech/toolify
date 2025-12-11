export default function TestRoute() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Test Route</h1>
      <p className="mb-4">If you can see this, routing is working!</p>
      
      <div className="space-y-4">
        <a 
          href="/test-route/hello" 
          className="block text-blue-400 hover:underline"
        >
          Test Dynamic Route
        </a>
        
        <a 
          href="/api/test" 
          className="block text-green-400 hover:underline"
        >
          Test API Route
        </a>
      </div>
    </div>
  );
}
