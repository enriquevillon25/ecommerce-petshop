import { ProductInterface } from "../../interfaces/Product";
import { useProduct } from "../../hooks/useProduct";
import { CardBasicComponent } from "../../components/cardBasicComponent/CardBasicComponent";
import { image } from "../../assets/image";
import { useShoppingCart } from "../../hooks/useShoppingCart";
import { useEffect } from "react";
import { ShoppingCartDrawerComponent } from "../../components/shoppingCartDrawerComponent/ShoppingCartDrawerComponent";

export const HomePage = () => {
  const { products } = useProduct();
  const { addProductCart, productsCart, showDrawerCart, toggleDrawerCart } =
    useShoppingCart();

  useEffect(() => {
    console.log("productsCart", productsCart);
  }, []);

  return (
    <div>
      <img
        src={image}
        style={{ objectFit: "revert", height: "10%", width: "100%" }}
      />
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
              inCart={1}
              onClick={toggleDrawerCart}
            />
          ))}
      </div>
      <ShoppingCartDrawerComponent
        open={showDrawerCart}
        onClose={toggleDrawerCart}
      />
    </div>
  );
};
