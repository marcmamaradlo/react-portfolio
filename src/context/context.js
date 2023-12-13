import React, { Component } from "react";
const MyContext = React.createContext();
class MyProvider extends Component {
  state = {
    homePage: false, // default: true,
  };

  setHomePageTrue = () => {
    this.setState({ homePage: true });
  };
  setHomePageFalse = () => {
    this.setState({ homePage: false });
  };

  render() {
    const { state, setHomePageTrue, setHomePageFalse } = this;

    return (
      <MyContext.Provider
        value={{
          state,
          setHomePageTrue,
          setHomePageFalse,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export { MyContext, MyProvider };
