import History from "../../history/History";
import Result from "../../result/Result";

import React, { Component } from "react";

export default class HistoryPage extends Component {
  state = {
    result: [],
  };
  onHistoryItemClick = (query) => {
    //this.props.onItemClick(req);
    this.setState({ query });
    this.handleQuery(query);
    console.log(query);
  };
  handleQuery = ({ method, url, body }) => {
    switch (method) {
      case "get":
        this.getData(url);
        break;
      case "post":
        this.post(url, body);
        break;
      case "put":
        this.put(url, body);
        break;
      case "delete":
        this.delete(url, body);
        break;
      default:
        break;
    }
  };
  getData = async (url) => {
    try {
      const raw = await fetch(url);
      const result = await raw.json();

      this.setState({ result });
    } catch (error) {
      console.log(error);
    }
  };
  post = async (url, body) => {
    try {
      const raw = await fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
      });
      const result = await raw.json();
      this.setState({ result });
    } catch (error) {
      //console.log(error);
    }
  };
  put = async (url, body) => {
    try {
      const raw = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(body),
      });
      const result = await raw.json();
      this.setState({ result });
    } catch (error) {
      //console.log(error);
    }
  };
  delete = async (url) => {
    try {
      const raw = await fetch(url, {
        method: "DELETE",
      });
      const result = await raw.json();
      this.setState({ result });
    } catch (error) {
      //console.log(error);
    }
  };
  render() {
    return (
      <div>
        history
        <div className="main-container">
          <History
            onItemClick={this.onHistoryItemClick}
            onMethodSpecifierChange={() => {}}
          />
          <Result result={this.state.result} isLoading={false} />
        </div>
      </div>
    );
  }
}
