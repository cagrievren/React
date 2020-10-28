import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props); // Reason to use super: Override React.Component's super() method inside.

    // THIS IS THE ONLY TIME we do direct assignment to this.state
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // We called setState!!
        this.setState({ lat: position.coords.latitude });

        // We did not something like above!!!
        // this.state.lat = position.coords.latitude
      },
      (err) => console.log(err)
    );
  }

  // React says we have to define render!
  render() {
    return <div>Latitude: { this.state.lat } </div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
