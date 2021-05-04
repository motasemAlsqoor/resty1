import React from 'react'
import './Form.scss'
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handler: props.handler
    }

  }
  formHandler = (event) => {
    event.preventDefault();
    try {
      const url = event.target.url.value;
      const method = event.target.method.value;
      this.getData(url)
      
    } catch (error) {
      
    }

  }
  getData = async (url) => {
    try {
      const raw = await fetch(url);
      const result = await raw.json();
      this.state.handler(result.results);
    } catch (error) {
      //console.log(error);
    }
  }

  render() {
    return (
      <>
        <form onSubmit={this.formHandler}>
          <label htmlFor="url">URL</label>
          <input type="text" name="url" />
          <input type="submit" value="Go" />
          <br />
          <label htmlFor="method">Get</label>
          <input type="radio" name="method" value="get" />
          <label htmlFor="method">Post</label>
          <input type="radio" name="method" value="post" />
          <label htmlFor="method">Put</label>
          <input type="radio" name="method" value="put" />
          <label htmlFor="method">delete</label>
          <input type="radio" name="method" value="delete" />
        </form>
      </>
    );
  }
}
export default Form;