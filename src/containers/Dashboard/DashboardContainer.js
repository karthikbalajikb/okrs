import React from "react";
import PropTypes from "prop-types";
import hoistNonReactStatics from "hoist-non-react-statics";
import { withRouter } from "react-router-dom";

import { getUniqueBy } from '../../utils/misc';

export const DashboardContext = React.createContext();

class DashboardContainer extends React.Component {
  static Consumer = DashboardContext.Consumer;

  static Context = DashboardContext;

  static withDashboard = WrappedComponent => {
    class withDashboard extends React.Component {
      render() {
        return (
          <DashboardContext.Consumer>
            {authProps => <WrappedComponent {...this.props} {...authProps} />}
          </DashboardContext.Consumer>
        );
      }
    }
    hoistNonReactStatics(withDashboard, WrappedComponent);
    return withDashboard;
  };

  static propTypes = {
    children: PropTypes.node.isRequired
  };

  state = {
    isFetchingOkr: false,
    objectives: [],
    keyResults: [],
    category: []
  };

  async componentDidMount() {
    this.fetchOKR();
  }

  transformOKRResponse = okrs => {
    let objectives = [];
    let keyResults = [];
    let category = [];

    okrs.map(okr => {
      // if string is empty then it is Objective, else key results
      if (!okr.parent_objective_id.length) {
        objectives = [...objectives, okr];
        category = []
      } else {
        keyResults = [...keyResults, okr];
      }

      return { objectives, keyResults };
    });
    this.setState({ objectives, keyResults });

    category = getUniqueBy({ key: 'category', data: objectives })

    this.setState({ category });
  };

  fetchOKR = async () => {
    this.setState({ isFetchingOkr: true });
    const endpoint = "https://okrcentral.github.io/sample-okrs/db.json";
    const rawData = await window.fetch(endpoint);
    const response = await rawData.json();
    const { data = [] } = response;

    if (data) {
      this.transformOKRResponse(data);
    }
    this.setState({ isFetchingOkr: false });
  };

  render() {
    return (
      <DashboardContext.Provider
        value={{
          ...this.state,
          fetchOKR: this.fetchOKR
        }}
      >
        {this.props.children}
      </DashboardContext.Provider>
    );
  }
}

export default withRouter(DashboardContainer);
