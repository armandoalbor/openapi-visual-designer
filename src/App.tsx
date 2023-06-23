import { DesignerProvider, ThemeProvider, UIProvider } from "@/context";
import { Navigation } from "./routes/Navigation";
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
            <Navigation />
          </DesignerProvider>
        </UIProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
