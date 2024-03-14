import { iCategory } from "../../providers/storeContext/types";
import Button from "../Button";
import Carousel from "../Carousel";
import { StyledContent, StyledMainCard } from "./style";
import { FaShoppingBag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface iCardMainProps {
  id: number;
  category: iCategory;
  price: string;
  title: string;
  images: string[];
}

const CardMain = ({ id, category, price, title, images }: iCardMainProps) => {
  const navigate = useNavigate();

  const getProductDetail = () => {
    navigate(`/product/${id}`);
  };

  return (
    <StyledMainCard id={id + ""}>
      <div>
        <Carousel isDetail={false} images={images} />
        <Button
          type="button"
          buttonVariation="regular"
          onClick={() => getProductDetail()}>
          <FaShoppingBag />
          Comprar
        </Button>
      </div>
      <StyledContent>
        <p>{title}</p>
        <div>
          <span>{category.name}</span>
          <span>${price}</span>
        </div>
      </StyledContent>
    </StyledMainCard>
  );
};

export default CardMain;
