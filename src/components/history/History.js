import React, { Component } from "react";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom/cjs/react-dom.development";
import "./History.scss";
export default class History extends Component {
  state = {
    requests: [],
  };
  componentDidMount = () => {
    let requests = JSON.parse(localStorage.getItem("requests"));
    this.setState({ requests });
  };
  onOldQuery = (req) => {
    // at this point the form component should
    //be populated with this request object
    this.props.onOldQuery(req);
    this.props.onMethodSpecifierChange("props");
  };

  render() {
      if(!this.state.requests)return null;
    return (
      <div class="main">
        <h3>History</h3>

        <ul>
          {this.state.requests.map((req) => {
            return (
              <li onClick={() => this.onOldQuery(req)}>
                <span>{req.method}</span>
                {"   "}
                {req.url}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
