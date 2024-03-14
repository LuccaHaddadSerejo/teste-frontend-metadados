import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StoreContext } from "../../providers/storeContext";
import { StyledContent, StyledProductDetailMain } from "./style";
import Button from "../../components/Button";
import { CartContext } from "../../providers/cartContext";
import Loading from "../../components/Loading";
import Carousel from "../../components/Carousel";

const ProductDetail = () => {
  const navigate = useNavigate();
  const {
    fetchProductById,
    product,
    globalLoading,
    isFiltered,
    filteredProductsList,
    productsList,
  } = useContext(StoreContext);
  const { id } = useParams();
  const { addProductToCart } = useContext(CartContext);

  useEffect(() => {
    fetchProductById(Number(id));
  }, []);

  const handleAddingProductToCart = (id: number): void => {
    isFiltered
      ? addProductToCart(id, filteredProductsList)
      : addProductToCart(id, productsList);
    navigate("/cart");
  };

  return (
    <StyledProductDetailMain>
      {globalLoading ? (
        <Loading />
      ) : (
        Object.keys(product).length > 0 && (
          <StyledContent>
            <Carousel isDetail={true} images={product.images} />
            <div>
              <h3>{product.title}</h3>
              <span>R$ {String(product.price.toFixed(2))}</span>
              <p>{product.description}</p>
              <Button
                onClick={() => handleAddingProductToCart(Number(product.id))}
                $buttonVariation="large"
                type="button">
                Shop Now
              </Button>
            </div>
          </StyledContent>
        )
      )}
    </StyledProductDetailMain>
  );
};

export default ProductDetail;
