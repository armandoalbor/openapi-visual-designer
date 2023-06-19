import { Home } from "@/views/Home";
import { Styleguide } from "./views/Styleguide";
import { Designer } from "./views/Designer";
import { DesignerProvider, ThemeProvider } from "@/context";
import "./App.css";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <DesignerProvider>
          {/* TODO: Add react router */}
          {/* <Home/>
          <Styleguide/> */}
          <Designer />
        </DesignerProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
