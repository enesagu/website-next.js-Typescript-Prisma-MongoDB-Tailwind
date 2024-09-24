import Image from "next/image";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="w-[240px] shadow-lg p-2 rounded-md">
      <div className="relative h-[150px]">
        {product?.image ? (
          <Image
            src={product.image} alt={""} width={240} height={75} className="object-contain w-[120px]"
          />
        ) : (
          <div className="bg-gray-200 h-[150px] w-full flex items-center justify-center">
            <p>No Image Available</p>
          </div>
        )}
      </div>

      {/* Ürünün ismi */}
      <div className="text-center mt-2">
        <p>{product?.name || "No Product Name"}</p>
      </div>
    </div>
  );
};

export default ProductCard;
