import { ApolloProvider } from "@apollo/client";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { CountreProvider } from "./context/CountryContext.jsx";
import client from "./graphql/apolloClient.js";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <CountreProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CountreProvider>
  </ApolloProvider>
);
