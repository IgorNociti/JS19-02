import {rg, nomeFake} from "./fakers.js"

export  default function createUser(){
    let obj = {
        firstName: nomeFake(),
        lastname: "Nociti",
        rg: rg(),
        email: "igor@nociti"
    }
    return obj
}