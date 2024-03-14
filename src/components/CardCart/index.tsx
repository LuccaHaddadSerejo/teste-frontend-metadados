import { useContext } from "react";
import { CartContext } from "../../providers/cartContext";
import Button from "../Button";
import { StyledAddSubtract, StyledCartCard } from "./style";
import trash from "../../assets/icons/trash.svg";
import defaultImage from "../../assets/imgs/image-not-found-icon.svg";
import { Link } from "react-router-dom";

interface iCardCartProps {
  id: number;
  price: string;
  title: string;
  images: string[];
  counter: number;
}

const CardCart = ({ id, price, title, images, counter }: iCardCartProps) => {
  const { addCounter, subtractCounter, removeProductFromCart } =
    useContext(CartContext);

  return (
    <StyledCartCard key={id}>
      <div>
        <Link to={`/product/${id}`}>
          <div>
            <img
              src={images[0]}
              alt="Product display photo"
              onError={(e) => {
                e.currentTarget.src = defaultImage;
              }}
            />
            <p>{title}</p>
          </div>
        </Link>
        <span>R${price}</span>
      </div>
      <StyledAddSubtract>
        <div>
          <Button
            disabled={counter === 1 ? true : false}
            buttonVariation="addSubtract"
            type="button"
            onClick={() => subtractCounter(id)}>
            -
          </Button>
          <span>{counter}</span>
          <Button
            buttonVariation="addSubtract"
            type="button"
            onClick={() => addCounter(id)}>
            +
          </Button>
        </div>
      </StyledAddSubtract>
      <div>
        <span>R${(Number(price) * counter).toFixed(2)}</span>
        <Button type="button" onClick={() => removeProductFromCart(id)}>
          <img src={trash} alt="Icone de uma lata de lixo" />
        </Button>
      </div>
    </StyledCartCard>
  );
};

export default CardCart;
