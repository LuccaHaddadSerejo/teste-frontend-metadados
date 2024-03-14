import { FilterProvider } from "./providers/filterContext";
import { StoreProvider } from "./providers/storeContext";

function App() {
  return (
    <>
      <>
        <StoreProvider>
          <FilterProvider></FilterProvider>
        </StoreProvider>
      </>
    </>
  );
}

export default App;
