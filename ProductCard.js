export default function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-2 rounded"/>
      <h2 className="text-lg font-bold">{product.title}</h2>
      <p>Pointure : {product.size}</p>
      <p>État : {product.condition}</p>
      <p className="text-green-600 font-semibold">{product.price}</p>
    </div>
  );
}
