
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import Form from './components/form/Form.js';
import Result from './components/result/Result.js';
import './App.scss';
import { Component } from 'react';
class App extends Component {
  constructor(probs) {
    super(probs);
    this.state = {
      result: []
    }
  }
  handler = (result) => {
    console.log(result);
    this.setState({ result })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Form prompt="get result" handler={this.handler}>
        </Form>
        <Result result={this.state.result} />
        <Footer />
      </div>
    );
  }
}


export default App;
