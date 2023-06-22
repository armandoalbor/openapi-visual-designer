import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@/translations/i18n.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
