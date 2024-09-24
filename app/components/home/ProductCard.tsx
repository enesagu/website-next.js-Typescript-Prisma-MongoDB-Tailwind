import Image from "next/image";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="w-[240px] shadow-lg p-2 rounded-md ">
      <div className="relative h-[150px] ">
        {product?.image ? (
          <Image src={product.image} fill alt={""} className="object-contain" />
        ) : (
          <div className="bg-gray-200 h-[200px] w-full flex items-center justify-center">
            <p>No Image Available</p>
          </div>
        )}

        {/* Ürünün ismi varsa göster */}
      </div>
      <div className="text-center mt-2">
        <div>{product?.name || "No Product Name"}</div>
      </div>
    </div>
  );
};

export default ProductCard;
