import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { MainPage } from './pages';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route path="/">
            <MainPage/>
          </Route>
        </Switch>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
