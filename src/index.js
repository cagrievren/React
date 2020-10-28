import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props); // Reason to use super: Override React.Component's super() method inside.

    this.state = { lat: null };
  }

  // React says we have to define render!
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );

    return <div>Latitude: </div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
