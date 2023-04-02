import React, { Component } from "react";
import axios from "axios";
import "../CSS/Series.css";
import API_KEY from "./APIKEY.mjs";

export default class Series extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: ''
    }
  }

  getData() {
    axios.get(
        'https://api.cricapi.com/v1/series?apikey=' +
          API_KEY +
          ' &offset=0&send='
      )
      .then((res) => {
        console.log(res.data.data);
        var data = res.data.data;
        var loopData = '<div id="liveScore">';
        var i;

        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        console.log(data)

        for (i = 0; i <data.length; i++) {
            var outputODI = '';
            var outputT20 = '';
            var outputTEST = '';

            // if(parseInt(data[i].odi)!==0 && (parseInt(data[i].odi)!==0 || parseInt(data[i].test)!==0)) {outputODI+=data[i].odi + ' ODIs,' }
            // else if(parseInt(data[i].odi)!=0) {outputODI+=data[i].odi + ' ODIs' };
            
            // if(parseInt(data[i].odi)!==0){
            //   if(parseInt(data[i].t20)!==0 || parseInt(data[i].test)!==0){
                // if(parseInt(data[i].odi)===1){
                //   outputODI+=data[i].odi + ' ODI,'
                // } else {
                //   outputODI+=data[i].odi + ' ODIs,'
                // }
            //   } else {
            //     if(parseInt(data[i].odi)===1){
            //       outputODI+=data[i].odi + ' ODI'
            //     } else {
            //       outputODI+=data[i].odi + ' ODIs'
            //     }
            //   }
            // }

            if(parseInt(data[i].odi)!==0){
              if(parseInt(data[i].odi)===1){
                outputODI+=data[i].odi + ' ODI'
              } else {
                outputODI+=data[i].odi + ' ODIs'
              }

              if(parseInt(data[i].t20)!==0 || parseInt(data[i].test)!==0){
                outputODI+=','
              }
            }


            if(parseInt(data[i].t20)!==0){
              if(parseInt(data[i].t20)===1){
                outputT20+=data[i].t20 + ' T20'
              } else {
                outputT20+=data[i].t20 + ' T20s'
              }

              if(parseInt(data[i].test)!==0){
                outputT20+=','
              }
            }
            
            if(parseInt(data[i].test)!==0){
              if(parseInt(data[i].test)===1){
                outputTEST+=data[i].test + ' Test'
              } else {
                outputTEST+=data[i].test + ' Tests'
              }
            }
           
            var typesOfMatches = outputODI + ' ' + outputT20 + ' ' + outputTEST;

            if(typesOfMatches === '  '){
                typesOfMatches = 'Not Decided Yet';
            }

            loopData+= 
            `<div className="card" style="box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
            align-self: center;
            width: 90%;
            height: 200px;
            margin-top: 5px;
            margin-bottom: 5px;
            ">` +
            `<div className="live_events">` +
                `<h4>${data[i].name}</h4>`+
                // '<p style="color: red">'+ months[parseInt(data[i].startDate.slice(5,7))-1] + ' ' +data[i].startDate.slice(8) + ' - ' + data[i].endDate + '</p>'+
                '<p>'+ typesOfMatches + '</p>'+
                `<p> ${data[i].matches} Matches </p>`+
            '</div>'+   
        '</div>';

        }

        loopData+='</div>';
        this.setState({ userName: loopData });
      });
  }
  componentDidMount() {
    this.getData()
  }

  render() {
    const {userName} = this.state
    return <>
      <ul dangerouslySetInnerHTML={{__html: userName}}></ul>
    </>;
  }
}
