import { CartProvider } from "./providers/cartContext";
import { FilterProvider } from "./providers/filterContext";
import { StoreProvider } from "./providers/storeContext";

function App() {
  return (
    <>
      <>
        <StoreProvider>
          <FilterProvider>
            <CartProvider></CartProvider>
          </FilterProvider>
        </StoreProvider>
      </>
    </>
  );
}

export default App;
