"use client";
import { BASE_URL } from "@/config";
import { IProduct } from "@/types";
import Image from "next/image";
import React, { FC } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

interface Props {
  data: IProduct[];
}
const Products: FC<Props> = ({ data }) => {
  return (
    <div className="container mx-auto">
      <h3 className="mb-4 text-2xl font-bold">Products</h3>
      <div className=" md:p-0 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((product) => (
          <CardContainer
            key={product.id}
            containerClassName=""
            className="inter-var flex-1"
          >
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] flex-1 h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {product.name}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {product.price} USD
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={`${BASE_URL}/${product.images[0]}`}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://twitter.com/mannupaaji"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  See more →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Buy now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
      {/* <div>
        {data.map((product) => (
          <div key={product.id}>
            <Image
              src={`${BASE_URL}/${product.images[0]}`}
              alt={product.name}
              width={500}
              height={500}
              quality={100}
            />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Products;
