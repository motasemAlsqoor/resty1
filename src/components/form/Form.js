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
      const body = event.target.body.value;
      switch (method) {
        case "get":
         
          this.getData(url)
          break;
        case "post":
          this.post(url, body)
          break;
        case "put":
          this.put(url, body);
          break;
        case "delete":
        this.delete(url,body);
          break;
        default:
          break;
      }

    } catch (error) {
      console.log({error});
    }

  }
  getData = async (url) => {
    try {
      const raw = await fetch(url);     
      const result = await raw.json();
      this.state.handler(result);
    } catch (error) {
      console.log(error);
    }
  }
  post = async (url,body) => {
    try {
      const raw = await fetch(url,{
        method: 'POST',
        body: JSON.stringify(body)
      });
      const result = await raw.json();
      this.state.handler(result);
    } catch (error) {
      //console.log(error);
    }
  }
  put = async (url,body) => {
    try {
      const raw = await fetch(url,{
        method: 'PUT',
        body: JSON.stringify(body)
      });
      const result = await raw.json();
      this.state.handler(result);
    } catch (error) {
      //console.log(error);
    }
  }
  delete = async (url) => {
    try {
      const raw = await fetch(url,{
        method: 'DELETE'
      });
      const result = await raw.json();
      this.state.handler(result);
    } catch (error) {
      //console.log(error);
    }
  }

  render() {
    return (
      <>
        <form id="request-form" onSubmit={this.formHandler}>
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
          <br />
          <label htmlFor="body">Body</label>
          <br />
          <textarea className="body-input" name="body" form="request-form" />
        </form>
      </>
    );
  }
}
export default Form;