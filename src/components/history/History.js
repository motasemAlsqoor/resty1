import React, { Component } from "react";
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
    if (!this.state.requests) return null;
    return (
      <div className="main">
        <h3>History</h3>

        <ul>
          {this.state.requests.map((req, i) => {
            return (
              <li key={i} onClick={() => this.onOldQuery(req)}>
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
