import { datubasea } from "./datubasea.js";

const base = "https://covers.openlibrary.org/b/id/"

let index = 0

let aldatu = () => {
    let irudia = document.querySelector('#irudia')
    irudia.src = base + datubasea[index].filename

    let izenburua = document.querySelector('#izenburua')
    izenburua.value = datubasea[index].izenburua

    let egilea = document.querySelector('#egilea')
    egilea.value = datubasea[index].egilea

    let isbn = document.querySelector('#isbn')
    isbn.value = datubasea[index].isbn

    let data = document.querySelector('#data')
    data.value = datubasea[index].data
}

let hurrengoa = document.querySelector('#hurrengoa')
hurrengoa.onclick = () => {
    index++ 
    index = index % datubasea.length
    aldatu()
}

let aurrekoa = document.querySelector('#aurrekoa')
aurrekoa.onclick = () => {
    index-- 
    index = index % datubasea.length
    aldatu()   
}

aldatu()

