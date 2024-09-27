"use client"
import TextClip from "@/utils/TextClip";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProductCard = ({ product }: { product: any }) => {
  const router = useRouter()
  
  
  const productRating =
    product.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) /
    product?.reviews?.length;  // 'lenght' yerine 'length' olmalı

  return (
    <div onClick={()=> router.push(`product/${product.id}`)} className="w-[240px]  cursor-pointer flex flex-col flex-1 shadow-lg p-2 rounded-md ">
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
      <div className="text-center mt-2 space-y-1">
        <div>{TextClip(product?.name) || "No Product Name"}</div>
        <Rating name="read-only" value={productRating || 0} readOnly />
        <div className="text-orange-600 font-bold text-lg md:text-xl ">
          {product.price} ₺
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
