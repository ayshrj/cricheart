import React, { Component } from "react";
import axios from "axios";
import "../CSS/Archives.css";
import API_KEY from "./APIKEY.mjs";

export default class Archives extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: ''
    }
  }

  getData() {
    axios.get(
        'https://api.cricapi.com/v1/currentMatches?apikey=' +
          API_KEY +
          ' &offset=0&send='
      )
      .then((res) => {
        console.log(res.data.data);
        var data = res.data.data;
        var loopData = ''
        var i;

        loopData += '<div id="liveScore">';

        for (i = 0; i < data.length; i++) {
          let a = data[i].dateTimeGMT + '.000Z';
          let d = new Date(data[i].date);
          let s = new Date(a).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'});
          let temp = '';          

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

          console.log(data[i])

          if(data[i].score.length===2){
          loopData+= `<div class="card">` +
                                `<div class="live_events">`+
                                    `<h4>${data[i].name}</h4>`+
                                    '<p>'+ months[d.getMonth()] + ' ' + d.getDate() +', ' + d.getFullYear() +'</p>'+
                                    '<p>'+ s.slice(12).slice(0,5) +' IST' +'</p>'+
                                    `<p>${data[i].venue}</p>` +
                                '</div>'+   
                                '<div class="liveScore_live">'+
                                    '<div>'+
                                        `<h5>${data[i].teamInfo[0].name} ${data[i].score[0].r} - ${data[i].score[0].w} (${data[i].score[0].o})</h5>` +
                                        `<h5>${data[i].teamInfo[1].name} ${data[i].score[1].r} - ${data[i].score[1].w} (${data[i].score[1].o}) </h5>` +`<p style="color: red;">${data[i].status}</p>`+
                                    '</div>'+
                                    // '<div style="opacity: 50%;"><i class="fas fa-greater-than"></i></div>'+
                                '</div>'+   
                            '</div>';
          } 
          else if(data[i].score.length===1){
            loopData+= `<div class="card">` +
            `<div class="live_events">`+
                `<h4>${data[i].name}</h4>`+
                '<p>'+ months[d.getMonth()] + ' ' + d.getDate() +', ' + d.getFullYear() +'</p>'+
                '<p>'+ s.slice(12).slice(0,5) +' IST' +'</p>'+
                `<p>${data[i].venue}</p>` +
            '</div>'+   
            '<div class="liveScore_live">'+
                '<div>'+
                    `<h5>${data[i].teamInfo[0].name} ${data[i].score[0].r} - ${data[i].score[0].w} ( ${data[i].score[0].o} )</h5>` +
                    // `<h5>${data[i].teamInfo[1].name} ${data[i].score[1].r} ${data[i].score[1].w} ( ${data[i].score[1].o}) </h5>` +`<p style="color: red;">${data[i].status}</p>`+
                '</div>'+
                // '<div style="opacity: 50%;"><i class="fas fa-greater-than"></i></div>'+
            '</div>'+   
        '</div>';
          }
          // else {
          //   loopData+= `<div class="card">` +
          //                         `<div class="live_events">`+
          //                             `<h4>${data[i].name}</h4>`+
          //                             '<p>'+ months[d.getMonth()] + ' ' + d.getDate() +', ' + d.getFullYear() +'</p>'+
          //                             '<p>'+ s.slice(12).slice(0,5) +' IST' +'</p>'+
          //                             `<p>${data[i].venue}</p>` +
          //                         '</div>'+   
          //                         '<div class="liveScore_live">'+
          //                             '<div>'+
          //                                 `<h5>${data[i].teamInfo[0].name} ${data[i].score[0].r} - ${data[i].score[0].w} ( ${data[i].score[0].o} )</h5>` +
          //                                 // `<h5>${data[i].teamInfo[1].name} ${data[i].score[1].r} ${data[i].score[1].w} ( ${data[i].score[1].o}) </h5>` +`<p style="color: red;">${data[i].status}</p>`+
          //                             '</div>'+
          //                             // '<div style="opacity: 50%;"><i class="fas fa-greater-than"></i></div>'+
          //                         '</div>'+   
          //                     '</div>';
          //   }
        }
        loopData +='</div>';
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
