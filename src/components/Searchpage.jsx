import React, { useState } from "react";
import { useQuery } from "react-query";

const SearchPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  };

  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery("products", fetchProducts);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchResults(filteredProducts);
  };

  const renderCards = () => {
    if (searchInput !== "" && searchResults.length === 0) {
      return <p>No search results found.</p>;
    }

    const productsToRender = searchInput !== "" ? searchResults : products;

    return productsToRender.map((product) => (
      <div className="col-md-3" key={product.id}>
        <div className="card" style={{ width: "18rem", minHeight: "400px" }}>
          <img
            src={product.image}
            className="card-img-top"
            alt={product.title}
            style={{ objectFit: "contain", height: "200px" }}
          />
          <div className="card-body d-flex flex-column justify-content-between">
            <div>
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">Price: Rs. {product.price}</p>
            </div>
            <div>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
          placeholder="Enter a product name"
        />
        <button type="submit">Search</button>
      </form>

      <div className="row">
        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p>Error: {error.message}</p>
        ) : (
          renderCards()
        )}
      </div>
    </>
  );
};

export default SearchPage;
