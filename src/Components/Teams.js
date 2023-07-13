import React, { Component } from "react";
import axios from "axios";
import "../CSS/Teams.css";
import API_KEY from "./APIKEY.mjs";

export default class Series extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
    };
  }

  getData() {
    axios
      .get(
        "https://api.cricapi.com/v1/countries?apikey=" +
          API_KEY +
          " &offset=0&send="
      )
      .then((res) => {
        console.log(res.data.data);
        var data = res.data.data;
        var loopData = '<div id="allTeams">';
        var i;

        // const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        // const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        console.log(data);

        for (i = 0; i < data.length; i++) {
          loopData +=
            `<div class="cardteam">` +
            `<div class="cardteam-text">` +
            `<h2>${data[i].name}</h2>` +
            `<p><img class="border border-dark rounded" width="30%" src="${data[i].genericFlag}" ></p>` +
            `</div>` +
            `</div>`;
        }

        loopData += "</div>";
        this.setState({ userName: loopData });
      });
  }
  componentDidMount() {
    this.getData();
  }

  render() {
    const { userName } = this.state;
    return (
      <>
        <ul dangerouslySetInnerHTML={{ __html: userName }}></ul>
      </>
    );
  }
}
