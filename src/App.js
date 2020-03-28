import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

// import components
import ErrorBoundary from "./components/ErrorBoundary";

// import containers
import DashboardContainer from "./containers/Dashboard";

// import utils
import theme from "./styles/theme";

// lazy load pages
const Dashboard = lazy(() => import("./pages/Dashboard"));

const App = () => (
  <ThemeProvider theme={theme.default}>
    <Router>
      <ErrorBoundary>
        <DashboardContainer>
          <Suspense fallback={<div />}>
            <Switch>
              <Route path="/" exact component={Dashboard} />
            </Switch>
          </Suspense>
        </DashboardContainer>
      </ErrorBoundary>
    </Router>
  </ThemeProvider>
);

export default App;
