import React, { Component } from "react";

export class countries extends Component {
  render({ countriesPromise }) {
    const countries = use(countriesPromise);
    console.log(countries);
    return (
      <div>
        <h1>PARU AMAR CUTTU PORAN</h1>
      </div>
    );
  }
}

export default countries;
