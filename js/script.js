let rows=document.querySelector("#row") ;
let columns=document.getElementById("colum") ;
let btn=document.getElementById("btn") ;
let table=document.createElement("table") ;
let body=document.body ;
body.appendChild(table) ;

function ta(){
for(let i=0 ; i<rows.value ; i++){
    let tr=document.createElement("tr") ;
    table.appendChild(tr) ;
    for(let j=0 ; j<columns.value ; j++){
        let td=document.createElement("td") ;
        tr.appendChild(td) ;
        td.innerText="text" ;
    }

}
}
btn.addEventListener("click",ta) ;