import Layout from "./components/Layout";
import { CartProvider } from "./providers/cartContext";
import { FilterProvider } from "./providers/filterContext";
import { ModalProvider } from "./providers/modalContext";
import { StoreProvider } from "./providers/storeContext";
import RoutesMain from "./routes";
import Global from "./styles/global";

function App() {
  return (
    <>
      <>
        <Global />
        <StoreProvider>
          <FilterProvider>
            <CartProvider>
              <ModalProvider>
                <Layout>
                  <RoutesMain />
                </Layout>
              </ModalProvider>
            </CartProvider>
          </FilterProvider>
        </StoreProvider>
      </>
    </>
  );
}

export default App;
