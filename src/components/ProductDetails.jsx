import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const { id } = useParams();

  const {
    data: product,
    isLoading,
    error,
  } = useQuery(["product", id], async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    return data;
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <img src={product.image} alt={product.title} style={{ width: "200px" }} />
      <h2>{product.title}</h2>

      <p style={{ fontWeight: "bold" }}>Price: Rs. {product.price}</p>
      <p style={{ fontWeight: "bold" }}>Description:</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetailsPage;
