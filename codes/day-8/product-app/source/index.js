import { trainer } from "./trainer";
import { trainee } from "./trainee";

const joydipTrainer = new trainer('joydip', 'Bangalore', 'JavaScript')
console.log(joydipTrainer.show())

const anilTrainee = new trainee('anil', 'Chennai', 'expleo groups', 'mobile')
console.log(anilTrainee.show())