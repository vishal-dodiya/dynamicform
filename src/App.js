import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, InputGroup, FormControl } from "react-bootstrap";
export default class App extends Component {
  state = {
    obj: { name: "", add: "" },
    formArr: [
      {
        name: "",
        addresses: [{ address: "" }]
      }
    ]
  };

  addUserName = e => {
    let formArr = [...this.state.formArr];
    // console.log(array, "username");
    if (
      formArr.name === "" ||
      formArr.name === undefined ||
      formArr.name === null
    ) {
      alert("Add UserName");
    }
    formArr.push({
      name: "",
      addresses: [{ address: "" }]
    });
    this.setState({ formArr });
  };

  addAddress = formIndex => {
    let formArr = [...this.state.formArr];
    if (
      formArr.addAddress === "" ||
      formArr.addAddress === undefined ||
      formArr.addAddress === null
    ) {
      alert("Add address");
    }

    formArr.map((data, index) => {
      if (index === formIndex) {
        formArr[formIndex].addresses.push({ address: "" });
      }
    });
    this.setState({
      formArr
    });
  };

  handleChange = e => {
    this.setState({
      ...this.state.obj,
      array: e.target.value
    });
  };

  handleRemoveName = formIndex => {
    let formArr = [...this.state.formArr];
    if (this.state.formArr.length > 1) {
      formArr.map((data, index) => {
        if (index === formIndex) {
          formArr.splice(formIndex, 1);
        }
      });
      this.setState({
        formArr
      });
    }
  };

  handleRemoveAddress = (formIndex, addIndex) => {
    let formArr = [...this.state.formArr];
    if (this.state.formArr[formIndex].addresses.length > 1) {
      formArr[formIndex].addresses.splice(formIndex, 1);
      this.setState({
        formArr
      });
    }
  };

  renderAddress = (addresses, formIndex) => {
    return addresses.map((address, index) => {
      return (
        <React.Fragment key={index}>
          <input
            style={{ marginLeft: "25px" }}
            placeholder="Address"
            onChange={this.handleChange}
          />
          <button onClick={() => this.addAddress(formIndex)}>+</button>
          <button onClick={() => this.handleRemoveAddress(formIndex, index)}>
            -
          </button>
        </React.Fragment>
      );
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.formArr.map((array, formIndex) => {
          return (
            <div
              key={formIndex}
              style={{
                margin: "15px"
              }}
            >
              <input placeholder="Name" onChange={this.handleChange} />
              <button onClick={() => this.addUserName(formIndex)}>+</button>
              <button onClick={() => this.handleRemoveName(formIndex)}>
                -
              </button>

              <br />
              {this.renderAddress(array.addresses, formIndex)}

              <br />
            </div>
          );
        })}
      </div>
    );
  }
}
