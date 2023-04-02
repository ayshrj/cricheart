import React, { Component } from "react";
import axios from "axios";
import "../CSS/Schedule.css";
import API_KEY from "./APIKEY.mjs";

export default class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completeData: "",
      completeDataODI: "",
      completeDataT20: "",
      tabType: "all",
    };
  }

  getData() {
    axios
      .get(
        "https://api.cricapi.com/v1/matches?apikey=" +
          API_KEY +
          " &offset=0&send="
      )
      .then((res) => {
        console.log(res.data.data);
        var data = res.data.data;
        var loopData = "";
        var loopDataODI = "";
        var loopDataT20 = "";
        var i;

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
        const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        //all
        for (i = 0; i < data.length; i++) {
          let a = data[i].dateTimeGMT + ".000Z";
          let d = new Date(data[i].date);
          let s = new Date(a).toLocaleString(undefined, {
            timeZone: "Asia/Kolkata",
          });
          let temp = "";

          if (i === 0 || data[i].date !== data[i - 1].date) {
            temp =
              '<div class="dates" style="background-color: #e3e6e3; font-size: 18px; margin-top: 25px; margin-bottom: 25px; font-weight: bold; height: 30px; width: 100%; padding-left: 15px; padding-top: 10px;">' +
              day[d.getDay()] +
              ", " +
              months[d.getMonth()] +
              " " +
              d.getDate() +
              " " +
              d.getFullYear() +
              "</div>";
          }

          loopData += //`<li>${data[i].id}</li>
            temp +
            `<div className="tours" style="  display: grid;
          grid-template-columns:repeat(3,33%);
          grid-template-rows: 1;
          margin-right: 45px;
          margin-bottom: 50px;
          padding-left: 15px;">` +
            // `<div className="tourhead"> ${data[i].series_id} </div>` +
            `<div className="tourhead" style="font-weight: bold;"> ${data[i].name} </div>` +
            `<div>` +
            // `<p className="allp">` ${data[i].name} `</p>`
            `<p className="allp" style="color: #666;
                            font-size: 12px;"> ${data[i].venue} </p>` +
            `</div>` +
            `<div className="time" style="margin-left: 60px;">` +
            `<div>` +
            s.slice(12).slice(0, 5) +
            " IST (" +
            months[d.getMonth()] +
            " " +
            d.getDate() +
            ")" +
            `<p className="allp" style="padding: 0% color: #666;
                                font-size: 12px;"> ${data[i].dateTimeGMT.slice(
                                  11,
                                  16
                                )} GMT </p>` +
            `</div>` +
            `</div>` +
            `</div>`;

          // if(data[i].matchType==="odi"){
          //   loopDataODI += loopData;
          // } else if(data[i].matchType==="t20"){
          //   loopDataT20 += loopData;
          // }
        }

        var lastODI = -1;
        //odi
        for (i = 0; i < data.length; i++) {
          if (data[i].type === "odi") {
            let a = data[i].dateTimeGMT + ".000Z";
            let d = new Date(data[i].date);
            let s = new Date(a).toLocaleString(undefined, {
              timeZone: "Asia/Kolkata",
            });
            let temp = "";

            if (i === 0 || data[i].date !== data[lastODI].date) {
              lastODI = i;
              temp =
                '<div class="dates" style="background-color: #e3e6e3; font-size: 18px; margin-top: 25px; margin-bottom: 25px; font-weight: bold; height: 30px; width: 100%; padding-left: 15px; padding-top: 10px;">' +
                day[d.getDay()] +
                ", " +
                months[d.getMonth()] +
                " " +
                d.getDate() +
                " " +
                d.getFullYear() +
                "</div>";
            }

            loopDataODI += //`<li>${data[i].id}</li>
              temp +
              `<div className="tours" style="  display: grid;
          grid-template-columns:repeat(3,33%);
          grid-template-rows: 1;
          margin-right: 45px;
          margin-bottom: 50px;
          padding-left: 15px;">` +
              // `<div className="tourhead"> ${data[i].series_id} </div>` +
              `<div className="tourhead" style="font-weight: bold;"> ${data[i].name} </div>` +
              `<div>` +
              // `<p className="allp">` ${data[i].name} `</p>`
              `<p className="allp" style="color: #666;
                            font-size: 12px;"> ${data[i].venue} </p>` +
              `</div>` +
              `<div className="time" style="margin-left: 60px;">` +
              `<div>` +
              s.slice(12).slice(0, 5) +
              " IST (" +
              months[d.getMonth()] +
              " " +
              d.getDate() +
              ")" +
              `<p className="allp" style="padding: 0% color: #666;
                                font-size: 12px;"> ${data[i].dateTimeGMT.slice(
                                  11,
                                  16
                                )} GMT </p>` +
              `</div>` +
              `</div>` +
              `</div>`;
          }
        }

        var lastT20 = -1;

        //t20
        for (i = 0; i < data.length; i++) {
          if (data[i].type === "t20") {
            let a = data[i].dateTimeGMT + ".000Z";
            let d = new Date(data[i].date);
            let s = new Date(a).toLocaleString(undefined, {
              timeZone: "Asia/Kolkata",
            });
            let temp = "";

            if (i === 0 || data[i].date !== data[lastT20].date) {
              temp =
                '<div class="dates" style="background-color: #e3e6e3; font-size: 18px; margin-top: 25px; margin-bottom: 25px; font-weight: bold; height: 30px; width: 100%; padding-left: 15px; padding-top: 10px;">' +
                day[d.getDay()] +
                ", " +
                months[d.getMonth()] +
                " " +
                d.getDate() +
                " " +
                d.getFullYear() +
                "</div>";
            }

            loopDataT20 += //`<li>${data[i].id}</li>
              temp +
              `<div className="tours" style="  display: grid;
          grid-template-columns:repeat(3,33%);
          grid-template-rows: 1;
          margin-right: 45px;
          margin-bottom: 50px;
          padding-left: 15px;">` +
              // `<div className="tourhead"> ${data[i].series_id} </div>` +
              `<div className="tourhead" style="font-weight: bold;"> ${data[i].name} </div>` +
              `<div>` +
              // `<p className="allp">` ${data[i].name} `</p>`
              `<p className="allp" style="color: #666;
                            font-size: 12px;"> ${data[i].venue} </p>` +
              `</div>` +
              `<div className="time" style="margin-left: 60px;">` +
              `<div>` +
              s.slice(12).slice(0, 5) +
              " IST (" +
              months[d.getMonth()] +
              " " +
              d.getDate() +
              ")" +
              `<p className="allp" style="padding: 0% color: #666;
                                font-size: 12px;"> ${data[i].dateTimeGMT.slice(
                                  11,
                                  16
                                )} GMT </p>` +
              `</div>` +
              `</div>` +
              `</div>`;
          }
        }

        this.setState({
          completeData: loopData,
          completeDataODI: loopDataODI,
          completeDataT20: loopDataT20,
        });
      });
  }

  componentDidMount() {
    this.getData();
  }

  toggleMe=(value)=>{
    this.setState({
      tabType: value
    })
  }

  render() {
    const { completeData, completeDataODI, completeDataT20 } = this.state;
    return (
      <>
        <div>
          <div>
            <h1 id="line1">Cricket Schedule</h1>
          </div>
          <div id="cstopicid">
            <button
              class="cstopic"
              onclick={() => this.toggleMe("odi")}
              id="odi"
            >
              International
            </button>
            <button
              class="cstopic"
              onclick={() => this.toggleMe("t20")}
              id="t20"
            >
              T20 Leagues
            </button>
            <button
              class="cstopic"
              onclick={() => this.toggleMe("all")}
              id="all"
            >
              All Matches
            </button>
          </div>
        </div>
        <div>
          {this.state.tabType === "all" && (
            <ul dangerouslySetInnerHTML={{ __html: completeData }}></ul>
          )
          }
          {this.state.tabType === "odi" && (
            <ul dangerouslySetInnerHTML={{ __html: completeDataODI }}></ul>
          )
          }
          {this.state.tabType === "t20" && (
            <ul dangerouslySetInnerHTML={{ __html: completeDataT20 }}></ul>
          )
          }
        </div>
      </>
    );
  }
}
