import { Home } from "@/views/Home";
import { Styleguide } from "./views/Styleguide";
import { Designer } from "./views/Designer";
import { DesignerProvider, ThemeProvider, UIProvider } from "@/context";
import "./App.css";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <UIProvider>
          <DesignerProvider>
            {/* TODO: Add react router */}
            {/* <Home/>
            <Styleguide/> */}
            <Designer />
          </DesignerProvider>
        </UIProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
