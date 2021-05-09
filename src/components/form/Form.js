import React from "react";
import "./Form.scss";
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handler: props.handler,
      method: undefined,
    };
  }
  formHandler = (event) => {
    event.preventDefault();
    this.props.toogleLoading();
    try {
      const url = event.target.url.value;
      const method = event.target.method.value;
      const body = event.target.body.value;
      this.saveToLocalStorage({
        url: url,
        method: method,
        body: body,
      });
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
    } catch (error) {
      console.log({ error });
    }
  };
  saveToLocalStorage(request) {
    let requests = localStorage.getItem("requests");
    if (!requests) {
      let temp = [];
      temp.push(request);
      localStorage.setItem("requests", JSON.stringify(temp));
      return;
    }
    requests = JSON.parse(requests);
    requests.push(request);
    localStorage.setItem("requests", JSON.stringify(requests));
  }
  getData = async (url) => {
    try {
      const raw = await fetch(url);
      const result = await raw.json();
      this.state.handler(result);
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
      this.state.handler(result);
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
      this.state.handler(result);
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
      this.state.handler(result);
    } catch (error) {
      //console.log(error);
    }
  };
  methodChangeHandler = (event) => {
    const method = event.target.value;
    this.props.onMethodSpecifierChange("state");
    this.setState({ method });
  };

  render() {
    let { url, body } = this.props.oldQuery;
    // we need to know here from where to populate
    //the input method => history or user click
    //props or state
    let method;
    let { formMethodSpecifier } = this.props;
    if (formMethodSpecifier === "props") {
      method = this.props.oldQuery.method;
    } else {
      method = this.state.method;
    }
    console.log("state method", this.state.method);
    console.log("props method ", this.props.oldQuery.method);
    console.log("method specifier ", this.props.formMethodSpecifier);
    return (
      <>
        <form id="request-form" onSubmit={this.formHandler}>
          <label htmlFor="url">URL</label>
          <input type="text" name="url" defaultValue={url} />
          <input type="submit" value="Go" />
          <br />

          <label htmlFor="method">Get</label>
          <input
            type="radio"
            name="method"
            value="get"
            checked={method === "get"}
            onChange={this.methodChangeHandler}
          />
          <label htmlFor="method">Post</label>
          <input
            type="radio"
            name="method"
            value="post"
            checked={method === "post"}
            onChange={this.methodChangeHandler}
          />
          <label htmlFor="method">Put</label>
          <input
            type="radio"
            name="method"
            value="put"
            checked={method ==="put"}
            onChange={this.methodChangeHandler}
          />
          <label htmlFor="method">delete</label>
          <input
            type="radio"
            name="method"
            value="delete"
            checked={method === "delete"}
            onChange={this.methodChangeHandler}
          />
          <br />
          <label htmlFor="body">Body</label>
          <br />
          <textarea
            className="body-input"
            name="body"
            form="request-form"
            defaultValue={body}
          />
        </form>
      </>
    );
  }
}

export default Form;

