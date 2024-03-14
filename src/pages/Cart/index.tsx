import { useContext } from "react";
import CardCart from "../../components/CardCart";
import { CartContext } from "../../providers/cartContext";
import { iCartProduct } from "../../providers/cartContext/types";
import { BsCartX } from "react-icons/bs";
import {
  StyledClearCart,
  StyledEmptyCart,
  StyledMainCart,
  StyledPriceCart,
} from "./style";
import { useMediaQuery } from "react-responsive";
import Button from "../../components/Button";

const Cart = () => {
  const { cartList, getTotalPrice, clearCart } = useContext(CartContext);
  const isWide: boolean = useMediaQuery({ minWidth: 600 });

  return (
    <StyledMainCart>
      <h3>Meu carrinho</h3>
      {cartList.length > 0 ? (
        <>
          <ul>
            {cartList.map((elt: iCartProduct) => (
              <CardCart
                key={elt.id}
                id={elt.id}
                price={elt.price.toFixed(2)}
                title={elt.title}
                images={elt.images}
                counter={elt.counter}
              />
            ))}
          </ul>
          <StyledPriceCart>
            <p>Total</p>
            <span>R$ {String(getTotalPrice())}</span>
          </StyledPriceCart>
          <StyledClearCart>
            <Button
              $buttonVariation="clearCart"
              onClick={() => clearCart()}
              type="button">
              Limpar carrinho
            </Button>
          </StyledClearCart>
        </>
      ) : (
        <StyledEmptyCart>
          <BsCartX size={isWide ? 250 : 150} />
          <p>O seu carrinho está vazio!</p>
        </StyledEmptyCart>
      )}
    </StyledMainCart>
  );
};

export default Cart;
