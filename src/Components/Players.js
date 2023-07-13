import React, { Component } from "react";
import axios from "axios";
import "../CSS/Players.css";
import API_KEY from "./APIKEY.mjs";

export default class Players extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: "",
      userData: "",
    };
  }

  handleInputChanged(event) {
    this.setState({
      searchQuery: event.target.value,
    });
  }

  getData(data) {
    console.log(data);
  }

  handleButtonClicked() {
    let searchQuery = this.state.searchQuery.replaceAll(" ", "%20");

    axios
      .get(
        "https://api.cricapi.com/v1/players?apikey=" +
          API_KEY +
          "&offset=0&search=" +
          searchQuery
      )
      .then((res) => {
        // getData(res.data)]

        // var data = res.data;
        // for(var i in data.data){
        //   let playerId = res.data.data[i].id;
        if (res.data.data.length !== 0) {
          let playerId = res.data.data[0].id;
          // console.log(playerId)
          axios
            .get(
              "https://api.cricapi.com/v1/players_info?apikey=" +
                API_KEY +
                "&id=" +
                playerId
            )
            .then((res) => {
              var data = res.data.data;
              console.log(data);

              var tmp = data.dateOfBirth.slice(0, 10);
              let d = new Date(tmp);
              // var tmp = "1988-11-05";
              // let d = new Date(tmp);

              const months = [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ];
              // const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

              // var output = `<div id="playerName">`; //not using

              var playerImg =
                data.playerImg === "https://h.cricapi.com/img/icon512.png"
                  ? ""
                  : data.playerImg;

              var output =
                `<div id="playerName">` +
                `<h1>${data.name}</h1>` +
                `</div>` +
                `<div id="upperPart" style="background-color: #F2F2F2">` +
                `<div id="profileImage">` +
                `<img className="border border-dark rounded" src="` +
                playerImg +
                `" />` +
                `</div>` +
                `<div className = "playerPersonalData">` +
                `<span><b> Country: </b>${data.country}</span><br>` +
                `<span><b> Date of Birth: </b>` +
                months[d.getMonth()] +
                " " +
                d.getDate() +
                ", " +
                d.getFullYear() +
                "</span><br>" +
                `<span><b> Place of Birth: </b>${data.placeOfBirth}</span><br>` +
                `<span><b> Batting Style: </b>${data.battingStyle}</span><br>` +
                `<span><b> Bowling Style: </b>${data.bowlingStyle}</span><br>` +
                `<span><b> Role: </b>${data.role}</span><br>` +
                `</div>` +
                `</div>` +
                // `<br><br><h1 id="battingTitle" className="display-1 text-center">BATTING</h1>` +
                // `<div id="Batting">` +
                // `<table className="table table-striped" style="width:100%">` +
                // ` <tr>` +
                // ` <th></th>` +
                // ` <th>Matches</th>` +
                // `<th>Inn</th>` +
                // `<th>NO</th>` +
                // ` <th>Runs</th>` +
                // `<th>HS</th>` +
                // `<th>Avg</th>` +
                // ` <th>Balls Faced</th>` +
                // `<th>SR</th>` +
                // `<th>100</th>` +
                // ` <th>200</th>` +
                // `<th>50</th>` +
                // `<th>4s</th>` +
                // ` <th>6s</th>` +
                // `</tr>` +
                // `<tr>` +
                // `<td>Test</td>` +
                // `<td>${data.stats[0].value}</td>` +
                // `<td>${data.stats[1].value}</td>` +
                // `<td>${data.stats[2].value}</td>` +
                // `<td>${data.stats[3].value}</td>` +
                // `<td>${data.stats[4].value}</td>` +
                // `<td>${data.stats[5].value}</td>` +
                // `<td>${data.stats[6].value}</td>` +
                // `<td>${data.stats[7].value}</td>` +
                // `<td>${data.stats[8].value}</td>` +
                // `<td>${data.stats[9].value}</td>` +
                // `<td>${data.stats[10].value}</td>` +
                // `<td>${data.stats[11].value}</td>` +
                // `<td>${data.stats[12].value}</td>` +
                // "</tr>" +
                // "<tr>" +
                // "<td>Odi</td>" +
                // `<td>${data.stats[13].value}</td>` +
                // `<td>${data.stats[14].value}</td>` +
                // `<td>${data.stats[15].value}</td>` +
                // `<td>${data.stats[16].value}</td>` +
                // `<td>${data.stats[17].value}</td>` +
                // `<td>${data.stats[18].value}</td>` +
                // `<td>${data.stats[19].value}</td>` +
                // `<td>${data.stats[20].value}</td>` +
                // `<td>${data.stats[21].value}</td>` +
                // `<td>${data.stats[22].value}</td>` +
                // `<td>${data.stats[23].value}</td>` +
                // `<td>${data.stats[24].value}</td>` +
                // `<td>${data.stats[25].value}</td>` +
                // " </tr>" +
                // "<tr>" +
                // "<td>T20i</td>" +
                // `<td>${data.stats[26].value}</td>` +
                // `<td>${data.stats[27].value}</td>` +
                // `<td>${data.stats[28].value}</td>` +
                // `<td>${data.stats[29].value}</td>` +
                // `<td>${data.stats[30].value}</td>` +
                // `<td>${data.stats[31].value}</td>` +
                // `<td>${data.stats[32].value}</td>` +
                // `<td>${data.stats[33].value}</td>` +
                // `<td>${data.stats[34].value}</td>` +
                // `<td>${data.stats[35].value}</td>` +
                // `<td>${data.stats[36].value}</td>` +
                // `<td>${data.stats[37].value}</td>` +
                // `<td>${data.stats[38].value}</td>` +
                // " </tr>" +
                // "<tr>" +
                // "<td>IPL</td>" +
                // `<td>${data.stats[39].value}</td>` +
                // `<td>${data.stats[40].value}</td>` +
                // `<td>${data.stats[41].value}</td>` +
                // `<td>${data.stats[42].value}</td>` +
                // `<td>${data.stats[43].value}</td>` +
                // `<td>${data.stats[44].value}</td>` +
                // `<td>${data.stats[45].value}</td>` +
                // `<td>${data.stats[46].value}</td>` +
                // `<td>${data.stats[47].value}</td>` +
                // `<td>${data.stats[48].value}</td>` +
                // `<td>${data.stats[49].value}</td>` +
                // `<td>${data.stats[50].value}</td>` +
                // `<td>${data.stats[51].value}</td>` +
                // "</tr>" +
                // "</table>" +
                // "</div>" +
                // '<br><br><h1 id="battingTitle" className="display-1 text-center">BOWLING</h1>' +
                // '<div id="Bowling">' +
                // '<table className="table table-striped" style="width:100%">' +
                // "<tr>" +
                // "<th></th>" +
                // "<th>Matches</th>" +
                // "<th>Inn</th>" +
                // "<th>b</th>" +
                // "<th>Runs</th>" +
                // "<th>Wickets</th>" +
                // "<th>BBI</th>" +
                // "<th>BBM</th>" +
                // "<th>Econ</th>" +
                // "<th>Avg</th>" +
                // "<th>SR</th>" +
                // "<th>5W</th>" +
                // "<th>10W</th>" +
                // "</tr>" +
                // "<tr>" +
                // "<td>Test</td>" +
                // `<td>${data.stats[52].value}</td>` +
                // `<td>${data.stats[53].value}</td>` +
                // `<td>${data.stats[54].value}</td>` +
                // `<td>${data.stats[55].value}</td>` +
                // `<td>${data.stats[56].value}</td>` +
                // `<td>${data.stats[57].value}</td>` +
                // `<td>${data.stats[58].value}</td>` +
                // `<td>${data.stats[59].value}</td>` +
                // `<td>${data.stats[60].value}</td>` +
                // `<td>${data.stats[61].value}</td>` +
                // `<td>${data.stats[62].value}</td>` +
                // `<td>${data.stats[63].value}</td>` +
                // " </tr>" +
                // "<tr>" +
                // "<td>Odi</td>" +
                // `<td>${data.stats[64].value}</td>` +
                // `<td>${data.stats[65].value}</td>` +
                // `<td>${data.stats[66].value}</td>` +
                // `<td>${data.stats[67].value}</td>` +
                // `<td>${data.stats[68].value}</td>` +
                // `<td>${data.stats[69].value}</td>` +
                // `<td>${data.stats[70].value}</td>` +
                // `<td>${data.stats[71].value}</td>` +
                // `<td>${data.stats[72].value}</td>` +
                // `<td>${data.stats[73].value}</td>` +
                // `<td>${data.stats[74].value}</td>` +
                // `<td>${data.stats[75].value}</td>` +
                // " </tr>" +
                // "<tr>" +
                // "<td>T20i</td>" +
                // `<td>${data.stats[76].value}</td>` +
                // `<td>${data.stats[77].value}</td>` +
                // `<td>${data.stats[78].value}</td>` +
                // `<td>${data.stats[79].value}</td>` +
                // `<td>${data.stats[80].value}</td>` +
                // `<td>${data.stats[81].value}</td>` +
                // `<td>${data.stats[82].value}</td>` +
                // `<td>${data.stats[83].value}</td>` +
                // `<td>${data.stats[84].value}</td>` +
                // `<td>${data.stats[85].value}</td>` +
                // `<td>${data.stats[86].value}</td>` +
                // `<td>${data.stats[87].value}</td>` +
                // " </tr>" +
                // "<tr>" +
                // "<td>IPL</td>" +
                // `<td>${data.stats[88].value}</td>` +
                // `<td>${data.stats[89].value}</td>` +
                // `<td>${data.stats[90].value}</td>` +
                // `<td>${data.stats[91].value}</td>` +
                // `<td>${data.stats[92].value}</td>` +
                // `<td>${data.stats[93].value}</td>` +
                // `<td>${data.stats[94].value}</td>` +
                // `<td>${data.stats[95].value}</td>` +
                // `<td>${data.stats[96].value}</td>` +
                // `<td>${data.stats[97].value}</td>` +
                // `<td>${data.stats[98].value}</td>` +
                // `<td>${data.stats[99].value}</td>` +
                // "</tr>" +
                // "</table>" +
                "</div>";

              this.setState({ userData: output });
            });
        }
      });
  }

  componentDidMount() {
    this.handleButtonClicked();
  }

  render() {
    const { userData } = this.state;
    return (
      <>
        <div>
          <input
            type="text"
            value={this.state.searchQuery}
            onChange={this.handleInputChanged.bind(this)}
          />
          <button onClick={this.handleButtonClicked.bind(this)}>Submit</button>
        </div>
        <ul dangerouslySetInnerHTML={{ __html: userData }}></ul>
      </>
    );
  }
}
