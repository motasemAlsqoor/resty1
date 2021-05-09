
import Footer from "./components/footer/Footer.js";
import Form from "./components/form/Form.js";
import Result from "./components/result/Result.js";
import History from "./components/history/History.js";


import "./Home.scss";
import { Component } from "react";
class Home extends Component {
  constructor(probs) {
    super(probs);
    this.state = {
      result: [],
      oldQuery: {},
      formMethodSpecifier: "state",
      isLoading: false,
    };
  }
  toogleLoading = () => {
    const isLoading = !this.state.isLoading;
    this.setState({ isLoading });
  };
  formHandler = (result) => {
    this.toogleLoading();
    this.setState({ result });
  };
  oldQueryHandler = (oldQuery) => {
    this.setState({ oldQuery });
  };
  changeMethodSpecifier = (formMethodSpecifier) => {
    this.setState({ formMethodSpecifier });
  };
  render() {
    return (
      <div className="App">
        <Form
          prompt="get result"
          handler={this.formHandler}
          oldQuery={this.state.oldQuery}
          onMethodSpecifierChange={this.changeMethodSpecifier}
          formMethodSpecifier={this.state.formMethodSpecifier}
          toogleLoading={this.toogleLoading}
        />
        <div className="main-container">
          <History
            onItemClick={this.oldQueryHandler}
            onMethodSpecifierChange={this.changeMethodSpecifier}
          />
          <Result result={this.state.result} isLoading={this.state.isLoading} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
