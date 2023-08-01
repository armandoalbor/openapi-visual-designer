import { DesignerGeneralProvider, ThemeProvider, UIProvider } from "@/context";
import { Navigation } from "./routes/Navigation";
import "./App.css";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <UIProvider>
          <DesignerGeneralProvider>
            {/* TODO: Add react router */}
            {/* <Home/>
            <Styleguide/> */}
            <Navigation />
          </DesignerGeneralProvider>
        </UIProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
