import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "./../components/dashboard/Dashboard";
import PayloadList from "./../components/payload/PayloadList";
import HistoryList from "./../components/history/HistoryList";

const Main = () => {
  return (
    <Switch>
      <Route path="/" exact component={(props) => <Dashboard {...props} />} />
      <Route
        path="/dashboard"
        exact
        component={(props) => <Dashboard {...props} />}
      />
      <Route
        path="/payload_list"
        exact
        component={(props) => <PayloadList {...props} />}
      />
      <Route
        path="/history_list"
        exact
        component={(props) => <HistoryList {...props} />}
      />
    </Switch>
  );
};

export default Main;
