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
    index<0 ? index = datubasea.length - 1:
    index = index % datubasea.length
    aldatu()   
}

aldatu()

const base2 = "https://openlibrary.org/search.json?isbn="

// fetch("https://openlibrary.org/search.json?isbn=").then( resp => resp.json()).then( resp => console.log(resp.docs[0].title))

let bilatu  = document.querySelector('#bilatu')

bilatu.onclick = () => {
    fetch(base2 + "9781491920497").then( resp => resp.json()).then( resp => {
        let isbn = "9781491920497"
        let egilea = resp.docs[0].author_name[0]
        let data = resp.docs[0].publish_date[1]
        let izenburua = resp.docs[0].title
        let filename = resp.docs[0].cover_i + "-M.jpg"
        console.log(isbn)
        console.log(egilea)
        console.log(data)
        console.log(izenburua)
        console.log(filename)
        
        datubaseraSartu(isbn, egilea, data, izenburua, filename)

    })
}

let datubaseraSartu = (isbn, egilea, data, izenburua, filename) => {
    liburuBerri = {
        "isbn": isbn,
        "egilea": egilea,
        "data": data,
        "izenburua": izenburua,
        "filename": filename
    }
    let luzeraBerria = datubasea.push

}