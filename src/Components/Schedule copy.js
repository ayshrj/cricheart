// import React, { Component } from 'react'
// import { useEffect, useState } from 'react'
// import '../CSS/Schedule.css'
// import API_KEY from "./APIKEY.mjs";

// export default class Schedule extends Component {
   
//     constructor(props) {
//         super(props);
//         this.state = {
//           error: null,
//           isLoaded: false,
//           items: []
//         };
//     }

//     componentDidMount() {
//     const url = "https://api.cricapi.com/v1/currentMatches?apikey=" + API_KEY + "&offset=0&send=";
//     fetch(url)
//         .then(res => res.json())
//         .then(
//         (result) => {
//             this.setState({
//             isLoaded: true,
//             items: result.items
//             });
//         },
//         // Note: it's important to handle errors here
//         // instead of a catch() block so that we don't swallow
//         // exceptions from actual bugs in components.
//         (error) => {
//             this.setState({
//             isLoaded: true,
//             error
//             });
//         }
//         )
//     }


//     render() {
//         const { error, isLoaded, items } = this.state;

//         if (error) {
//           return <div>Error: {error.message}</div>;
//         } else if (!isLoaded) {
//           return <div>Loading...</div>;
//         } else {
//           return (
//             <ul>
//               {items?.map(item => (
//                 <li key={item.data.id}>
//                   {item.data.name}
//                 </li>
//               ))}
//             </ul>
//           );
//         }
//       }
// }
