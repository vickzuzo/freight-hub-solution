import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useTypedSelector } from "../hooks/useTypedSelectors";
import { HomeScreen, ShipmentDetailsScreen } from "../screens";
import { GlobalStyles } from "../styles/global";
import { darkTheme, lightTheme } from "../styles/theme/theme";

const client = new ApolloClient({
  link: new RestLink({ uri: "http://localhost:5000" }),
  cache: new InMemoryCache(),
});

const AppRouter = () => {
  const { theme } = useTypedSelector((state) => state.site);

  return (
    <ApolloProvider client={client}>
      <Router>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyles />
          <Switch>
            <Route path="/" component={HomeScreen} exact />
            <Route
              path="/shipment-details/:id"
              component={ShipmentDetailsScreen}
            />
          </Switch>
        </ThemeProvider>
      </Router>
    </ApolloProvider>
  );
};

export default AppRouter;
