import { CartProvider } from "./providers/cartContext";
import { FilterProvider } from "./providers/filterContext";
import { StoreProvider } from "./providers/storeContext";
import RoutesMain from "./routes";

function App() {
  return (
    <>
      <>
        <StoreProvider>
          <FilterProvider>
            <CartProvider>
              <RoutesMain />
            </CartProvider>
          </FilterProvider>
        </StoreProvider>
      </>
    </>
  );
}

export default App;
