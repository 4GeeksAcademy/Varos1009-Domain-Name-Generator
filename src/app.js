/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let str = "";
  for (let i = 0; i < pronoun.length; i++) {
    for (let x = 0; x < adj.length; x++) {
      for (let y = 0; y < noun.length; y++) {
        str =
          pronoun[Math.round(Math.random())] +
          adj[Math.round(Math.random())] +
          noun[Math.round(Math.random())] +
          ".com";
      }
    }
  }
  document.getElementById("generator").innerHTML = str;
  console.log(str);
};
