import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../providers/storeContext";
import { StyledList, StyledSection, StyledStoreMain } from "./style";
import { iProduct } from "../../providers/storeContext/types";
import CardMain from "../../components/CardMain";
import Button from "../../components/Button";
import { FaFilter } from "react-icons/fa";
import Pagination from "../../components/Pagination";
import { FilterContext } from "../../providers/filterContext";
import { FaRegSadCry } from "react-icons/fa";
import Loading from "../../components/Loading";
import Filter from "../../components/Filter";
import Modal from "../../components/Modal";
import { ModalContext } from "../../providers/modalContext";

const Store = () => {
  const {
    isFiltered,
    globalLoading,
    fetchProducts,
    productsList,
    currentOffset,
    filteredProductsList,
  } = useContext(StoreContext);

  const { filterType } = useContext(FilterContext);

  const { isModalOpen, toggleModal } = useContext(ModalContext);

  useEffect(() => {
    if (productsList.length === 0) {
      fetchProducts(currentOffset);
    }
  }, []);

  const [showMessage, setShowMessage] = useState(false);
  const [isPaginationVisible, setIsPaginationVisible] = useState(true);

  const listToRender: iProduct[] = isFiltered
    ? filteredProductsList
    : productsList;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowMessage(true);
      setIsPaginationVisible(false);
    }, 200);
    return () => clearTimeout(timeout);
  }, [listToRender]);

  return (
    <>
      {isModalOpen && (
        <Modal>
          <Filter />
        </Modal>
      )}
      <StyledStoreMain>
        {globalLoading ? (
          <Loading />
        ) : (
          <StyledSection>
            <Button
              onClick={toggleModal}
              type="button"
              $buttonVariation="filter">
              Filter
              <FaFilter />
            </Button>
            <StyledList>
              {listToRender.length === 0 && showMessage ? (
                <div>
                  <h3>
                    {filterType.type === "title"
                      ? "Produto não encontrado!"
                      : "Categoria sem produtos!"}
                  </h3>
                  <FaRegSadCry size={150} />
                </div>
              ) : (
                listToRender.map((elt: iProduct) => (
                  <CardMain
                    key={elt.id}
                    id={elt.id}
                    images={elt.images}
                    price={elt.price.toFixed(2)}
                    title={elt.title}
                    category={elt.category}
                  />
                ))
              )}
            </StyledList>
            <Pagination
              $isHidden={isPaginationVisible}
              productList={listToRender}
            />
          </StyledSection>
        )}
      </StyledStoreMain>
    </>
  );
};

export default Store;
