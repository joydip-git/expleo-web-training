// import { trainer } from "./trainer";
// import { trainee } from "./trainee";

// const joydipTrainer = new trainer('joydip', 'Bangalore', 'JavaScript')
// console.log(joydipTrainer.show())

// const anilTrainee = new trainee('anil', 'Chennai', 'expleo groups', 'mobile')
// console.log(anilTrainee.show())

import { getData } from "./client";

console.log('index.js loaded')
//document.addEventListener('load', getData)
// document.onload = getData;
document.addEventListener('mouseenter', getData)
