export default function TestDynamicRoute({ params }: { params: { slug: string } }) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Test Dynamic Route</h1>
      <p className="mb-4">Slug: <span className="text-blue-400">{params.slug}</span></p>
      <p>If you can see this, dynamic routing is working!</p>
    </div>
  );
}
