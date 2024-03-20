import { ProductInterface } from "../../interfaces/Product";
import { useProduct } from "../../hooks/useProduct";
import { CardBasicComponent } from "../../components/cardBasicComponent/CardBasicComponent";
import { image } from "../../assets/image";
import { useShoppingCart } from "../../hooks/useShoppingCart";
import { useContext, useEffect } from "react";
import { ShoppingCartDrawerComponent } from "../../components/shoppingCartDrawerComponent/ShoppingCartDrawerComponent";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

export const HomePage = () => {
  const { products } = useProduct();
  const {
    addProductCart,
    productsCart,
    showDrawerCart,
    toggleDrawerCart,
    totalPrice,
  } = useShoppingCart();

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
            <CardBasicComponent
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
      <ShoppingCartDrawerComponent
        open={showDrawerCart}
        onClose={toggleDrawerCart}
        productsCart={productsCart}
        totalPrice={productsCart.length > 0 ? totalPrice() : null}
      />
    </div>
  );
};
