import { useContext, useState } from "react";
import { FilterContext } from "../../providers/filterContext";
import { ModalContext } from "../../providers/modalContext";
import Input from "../Input";
import Button from "../Button";
import { StyledModalMainContent } from "./style";
import { useMediaQuery } from "react-responsive";

const Filter = () => {
  const [priceValue, setPriceValue] = useState<string>("");
  const [rangeMinValue, setRangeMinValue] = useState<string>("");
  const [rangeMaxValue, setRangeMaxValue] = useState<string>("");
  const [isAscending, setIsAscending] = useState<boolean>(true);
  const [isButtonAscActive, setIsButtonAscActive] = useState<boolean>(false);
  const [isButtonDescActive, setIsButtonDescActive] = useState<boolean>(false);

  const { joinFilters } = useContext(FilterContext);
  const { toggleModal } = useContext(ModalContext);

  const isWide: boolean = useMediaQuery({ minWidth: 534 });

  const handlePriceInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPriceValue(event.target.value);
  };

  const handleMinInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setRangeMinValue(event.target.value);
  };

  const handleMaxInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setRangeMaxValue(event.target.value);
  };

  const toggleButtonAscActive = (): void => {
    setIsButtonAscActive(!isButtonAscActive);
    setIsButtonDescActive(false);
    setIsAscending(true);
  };

  const toggleButtonDescActive = (): void => {
    setIsButtonDescActive(!isButtonDescActive);
    setIsButtonAscActive(false);
    setIsAscending(false);
  };

  const handleSubmit = (): void => {
    toggleModal();
    joinFilters(priceValue, rangeMinValue, rangeMaxValue, isAscending);
  };

  return (
    <StyledModalMainContent>
      <div>
        <h3>Filtrar por preço</h3>
        <Input
          inputVariation="filterPrice"
          onChange={handlePriceInputChange}
          type="text"
          id="price"
          placeholder="Ex: 500"
          label="Valor"
        />
      </div>
      <div>
        <h3>Filtrar por range</h3>
        <div>
          <Input
            inputVariation="filterPrice"
            onChange={handleMinInputChange}
            type="text"
            label="Valor mínimo"
            id="range-min"
            placeholder="Ex: 20"
          />
          {isWide && <span>~</span>}
          <Input
            inputVariation="filterPrice"
            onChange={handleMaxInputChange}
            type="text"
            label="Valor máximo"
            id="range-max"
            placeholder="Ex: 150"
          />
        </div>
      </div>
      <div>
        <h3>Filtrar por ordem</h3>
        <div>
          <Button
            $buttonVariation={
              isButtonAscActive ? "filterOrderActive" : "filterOrder"
            }
            type="button"
            onClick={toggleButtonAscActive}>
            Crescente
          </Button>
          <Button
            $buttonVariation={
              isButtonDescActive ? "filterOrderActive" : "filterOrder"
            }
            type="button"
            onClick={toggleButtonDescActive}>
            Decrescente
          </Button>
        </div>
      </div>
      <div>
        <Button
          $buttonVariation="submitFilter"
          type="button"
          onClick={() => {
            handleSubmit();
          }}>
          Filtrar
        </Button>
        <Button
          $buttonVariation="closeFilterModal"
          onClick={toggleModal}
          type="button">
          Fechar
        </Button>
      </div>
    </StyledModalMainContent>
  );
};

export default Filter;
