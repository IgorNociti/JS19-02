import nome from "./nome.js"

function rg(){
    return Math.random().toString().slice(3, 12)
}
//console.log(nomes);

function nomeFake(){

    let idx = parseInt(Math.randon()*nome.length)
    return nomes[idx]
}
export {rg}