import React from 'react';
import { Provider } from "react-redux";
import { logger } from "redux-logger";
import { isDev } from "./utils/environment";
import CreatePersonalInformation from './views/personalInformation/CreatePersonalInformation';
import ViewDetails from './views/ViewDetails/ViewDetails';
import notFound from './views/notFoundPage/notFound';
import { Route, Router, Switch } from "react-router";
import { createBrowserHistory } from "history";
import thunkMiddleware from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";

const middleware = [thunkMiddleware, ...(isDev ? [logger] : [])];

const history = createBrowserHistory();

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path={"/"} component={CreatePersonalInformation} />
          <Route path={"/data"} component={ViewDetails} />
          <Route component={notFound} />
        </Switch>
      </Router>
    </Provider>
  );
}
export default App;