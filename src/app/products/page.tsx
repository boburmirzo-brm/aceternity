import Products from "@/components/Products";
import { getProducts } from "@/api";
import React from "react";

const About = async () => {
  const posts = await getProducts(10, 1);

  if (!posts) {
    return <div>Error: Products could not be loaded.</div>;
  }

  return (
    <div className="py-4">
      <Products data={posts?.data?.products || []} />
    </div>
  );
};

export default About;
