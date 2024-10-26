import { numberToRupiah } from "../../utils/numberToRupiah";
import { ProductEntity } from "./entities/ProductEntity";

interface ProductCardProps {
  product: ProductEntity;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div key={product.id} className="bg-gray-300 p-1 rounded text-center">
      <p className="text-[14px] font-bold">{product.id}</p>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-[110px] object-cover rounded"
      />
      <p className="text-gray-700 font-bold">
        {product.stock == 0 ? "SOLD" : numberToRupiah(product.price)}
      </p>
    </div>
  );
}
