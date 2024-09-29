"use client"; // Client-side olarak işaretleniyor

import PageContainer from "@/app/containers/PageContainer";
import Image from "next/image";
import { useState } from "react";
import Counter from "../general/Counter";
import { Rating } from "@mui/material";
import Button from "../general/Button";
import Comment from "./Comment"; 
import Heading from "../general/Heading";

export type CardProductProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  inStock: boolean;
};

const DetailClient = ({ product }: { product: any }) => {
  const [cardProduct, setCardProduct] = useState<CardProductProps>({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    quantity: 1,
    image: product.image,
    inStock: product.inStock,
  });

  const increaseFunc = () => {
    if (cardProduct.quantity == 10) return;
    setCardProduct((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
  };

  const decreaseFunc = () => {
    if (cardProduct.quantity == 1) return;
    setCardProduct((prev) => ({ ...prev, quantity: prev.quantity - 1 }));
  };
  const productRating =
    product.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) /
    product?.reviews?.length;

  return (
    <PageContainer>
      <div className="flex flex-col md:flex-row items-start">
        {/* Sol tarafta ürün resmi */}
        <div className="w-full md:w-1/2 p-4">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-lg object-contain border border-white"
          />
        </div>

        {/* Sağ tarafta ürün detayları */}
        <div className="w-full p-4 space-y-1">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <Rating name="read-only" value={productRating || 0} readOnly />

          <p className="text-gray-600">{product.description}</p>

          {/* Stok Durumu */}
          <div>
            <div className="flex">
              Stok Durumu:
              {product.inStock ? (
                <div className="text-green-500"> Ürün Stokta Mevcut</div>
              ) : (
                <div className="text-red-500"> Ürün Stokta Mevcut Değil</div>
              )}
            </div>
          </div>

          <p className="text-blue-900 font-bold  text-lg  md:text-2xl ">
            Fiyat: {product.price} ₺
          </p>
          <p className="text-md font-light text-gray-600">
            Marka: {product.brand}
          </p>
          <p className="text-md font-light text-gray-600">
            Kategori: {product.category}
          </p>
          <div className="border-t border-black w-full mt-2"></div>

          {/* Counter buonu */}

          <div>
            <Counter
              increaseFunc={increaseFunc}
              decreaseFunc={decreaseFunc}
              cardProduct={cardProduct}
            />
          </div>

          {/* Satın Al butonu */}
          <div className="mt-4">
            <Button text="Sepete Ekle" small onclick={() => {}} />
          </div>
        </div>
      </div>
      <Heading text="Yorumlar"/>
      <div>
        {product?.reviews?.map((prd: any) => (
          <Comment key={prd.id} prd={prd}/>
        ))}
      </div>
    </PageContainer>
  );
};

export default DetailClient;
