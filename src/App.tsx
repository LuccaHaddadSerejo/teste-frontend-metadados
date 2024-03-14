import Layout from "./components/Layout";
import { CartProvider } from "./providers/cartContext";
import { FilterProvider } from "./providers/filterContext";
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
              <Layout>
                <RoutesMain />
              </Layout>
            </CartProvider>
          </FilterProvider>
        </StoreProvider>
      </>
    </>
  );
}

export default App;
