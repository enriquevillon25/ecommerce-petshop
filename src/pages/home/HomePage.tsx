import { ProductInterface } from "../../interfaces/Product";
import { useProduct } from "../../hooks/useProduct";
import { image } from "../../assets/image";
import { useShoppingCart } from "../../hooks/useShoppingCart";
import { useContext, useEffect } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { CardBasic, ShoppingCartDrawer } from "../../components";

export const HomePage = () => {
  const { products, getAllProducts } = useProduct();
  const {
    addProductCart,
    productsCart,
    showDrawerCart,
    toggleDrawerCart,
    totalPrice,
  } = useShoppingCart();

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  return (
    <div>
      <img
        src={image}
        style={{ objectFit: "revert", height: "10%", width: "100%" }}
      />
      <h2> {"Hola Enrique"} </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          margin: "40px",
          gap: "25px",
        }}
      >
        {products &&
          products.map((product: ProductInterface) => (
            <CardBasic
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              onClick={() =>
                addProductCart({
                  id: product.id,
                  quantity: 1,
                  image: product.image,
                  price: product.price,
                  name: product.name,
                })
              }
            />
          ))}
      </div>
      <ShoppingCartDrawer
        open={showDrawerCart}
        onClose={toggleDrawerCart}
        productsCart={productsCart}
        totalPrice={productsCart.length > 0 ? totalPrice() : null}
      />
    </div>
  );
};
