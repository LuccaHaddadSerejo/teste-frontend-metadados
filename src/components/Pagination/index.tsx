import { useContext } from "react";
import { StoreContext } from "../../providers/storeContext";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { StyledPagination } from "./style";
import Button from "../Button";
import { iProduct } from "../../providers/storeContext/types";

interface iPaginationProps {
  productList: iProduct[];
  $isHidden: boolean;
}

const Pagination = ({ productList, $isHidden }: iPaginationProps) => {
  const { goBackPage, goNextPage, currentPage, checkIfNextPageExists } =
    useContext(StoreContext);

  return (
    <StyledPagination $isHidden={$isHidden}>
      {currentPage !== 1 && (
        <Button
          $buttonVariation="pagination"
          type="button"
          onClick={() => goBackPage()}>
          <IoIosArrowBack />
          Anterior
        </Button>
      )}
      <span>{currentPage}</span>
      {checkIfNextPageExists(productList) && (
        <Button
          $buttonVariation="pagination"
          onClick={() => goNextPage()}
          type="button">
          Seguinte
          <IoIosArrowForward />
        </Button>
      )}
    </StyledPagination>
  );
};

export default Pagination;
