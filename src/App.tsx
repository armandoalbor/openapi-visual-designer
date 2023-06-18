import { Home } from "@/views/Home";
import { Styleguide } from "./views/Styleguide";
import { ThemeProvider } from "@/context";
import "./App.css";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </>
  );
};

export default App;
