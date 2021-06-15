import React, { useState } from "react";

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

function Main() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const [products] = useState([
    {
      name: "Apple MacBook Air (13-inch) - Gold",
      cost: "Rs.92000",
      image:
        "https://cdn.thewirecutter.com/wp-content/media/2020/12/macbook-2048px-9-2x1-1.jpg?auto=webp&quality=60&crop=2:1&width=1024",
    },

    {
      name: "Beats in-ear studio earbuds",
      cost: "Rs.30000",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9hJJa_jzBSD2osYTTL3it7w5isjwkqfpBCQ&usqp=CAU",
    },
  ]);

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const addToCart = (product) => {
    setCart([...cart, { ...product }]);
  };

  const removeProduct = (productToRemove) => {
    setCart(cart.filter((product) => product != productToRemove));
  };

  const renderProducts = () => (
    <>
      <header>Products</header>
      <div className="products">
        {products.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>{product.cost}</h4>
            <img src={product.image} alt={product.image} />
            <button onClick={() => addToCart(product)}>Add To Cart</button>
          </div>
        ))}
      </div>
    </>
  );

  const renderCart = () => (
    <>
      <header>Cart</header>
      <div className="products">
        {cart.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>{product.cost}</h4>
            <img src={product.image} />
            <button onClick={() => removeProduct(product)}>Remove</button>
          </div>
        ))}
      </div>
    </>
  );
  return (
    <div className="Main">
      <nav>
        <h2>Shopping cart</h2>
      </nav>
      <header>
        <button onClick={() => navigateTo(PAGE_CART)}>
          Go to cart ({cart.length})
        </button>

        <button onClick={() => navigateTo(PAGE_PRODUCTS)}>
          View Products ({products.length})
        </button>
      </header>

      {page === PAGE_PRODUCTS && renderProducts()}
      {page === PAGE_CART && renderCart()}
    </div>
  );
}

export default Main;
