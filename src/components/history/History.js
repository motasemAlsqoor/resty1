import React, { Component } from "react";

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
    return (
      <>
        History
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
      </>
    );
  }
}
