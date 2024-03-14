import { useContext, useEffect, useState } from "react";
import logo from "../../assets/imgs/logo.svg";
import Button from "../Button";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import {
  StyledBackground,
  StyledClosedSearch,
  StyledHeader,
  StyledHeaderContent,
  StyledOpenSearch,
} from "./style";
import {
  Link,
  useNavigate,
  useLocation,
  NavigateFunction,
} from "react-router-dom";
import { StoreContext } from "../../providers/storeContext";
import { FilterContext } from "../../providers/filterContext";
import Input from "../Input";

const Header = () => {
  const { categoriesList, fetchCategories } = useContext(StoreContext);
  const { filterByCategory, clearFilter, filterByTitle } =
    useContext(FilterContext);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  const isWide: boolean = useMediaQuery({ minWidth: 600 });

  const location = useLocation();
  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, []);

  const toggleSearch = (): void => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleNavigation = (): void => {
    let correctUrl = "";
    location.pathname === "/cart" ? (correctUrl = "/") : (correctUrl = "/cart");
    navigate(correctUrl);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchValue(event.target.value);
  };

  const handleSearch = (): void => {
    filterByTitle(searchValue);
    setSearchValue("");
    setIsSearchOpen(false);
    clearFilter();
  };

  const clearSearch = (): void => {
    setSearchValue("");
    setIsSearchOpen(false);
    clearFilter();
  };

  return (
    <StyledBackground>
      <StyledHeader>
        <div>
          <StyledHeaderContent>
            <div>
              <Link to={"/"}>
                <img src={logo} alt="Logotipo da marca CORAL" />
              </Link>
              {isWide ? (
                <Button
                  type={"button"}
                  $buttonVariation="simple"
                  onClick={() => handleNavigation()}>
                  <FaShoppingBag />
                  {location.pathname === "/cart" ? "Shopping" : "Cart"}
                </Button>
              ) : (
                <Button
                  type={"button"}
                  $buttonVariation="simple"
                  onClick={() => handleNavigation()}>
                  <FaShoppingBag />
                </Button>
              )}
            </div>
            <div>
              {isSearchOpen ? (
                <StyledOpenSearch>
                  <Input
                    inputVariation="search"
                    type={"text"}
                    placeholder={"Search a product!"}
                    onChange={handleInputChange}
                  />
                  <Button
                    disabled={searchValue.length > 0 ? false : true}
                    $buttonVariation="search"
                    type="button"
                    onClick={() => handleSearch()}>
                    <FaMagnifyingGlass size={20} />
                  </Button>
                  <Button
                    type="button"
                    $buttonVariation="clearFilter"
                    onClick={() => clearSearch()}>
                    Limpar busca
                  </Button>
                </StyledOpenSearch>
              ) : (
                <StyledClosedSearch>
                  <Button
                    $buttonVariation="search"
                    type="button"
                    onClick={toggleSearch}>
                    <FaMagnifyingGlass size={20} />
                  </Button>
                </StyledClosedSearch>
              )}
            </div>
          </StyledHeaderContent>
        </div>
        <div>
          <Button
            $buttonVariation="categories"
            type="button"
            onClick={() => clearFilter()}>
            All
          </Button>
          {categoriesList.map((elt) => {
            return (
              <Button
                $buttonVariation="categories"
                key={elt.id}
                type="button"
                onClick={() => filterByCategory(elt.id)}>
                {elt.name}
              </Button>
            );
          })}
        </div>
      </StyledHeader>
    </StyledBackground>
  );
};

export default Header;
