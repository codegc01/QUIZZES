document.getElementById("time").innerHTML = 10;
document.getElementById("count").innerHTML = "1/10";


let id = '1_95K5yBx8JUclSzqnVD9k05ldZs5ajlmDod8ij2TDN8'
let st = 'Sheet1';
let r = 'A1:F4';
let url = 'https://docs.google.com/spreadsheets/d/' + id + '/gviz/tq?sheet' + st + '&Range' + r;

fetch(url)
.then(res => res.text())
.then(res => {
    let data = JSON.parse(res.substr(47).slice(0,-2));
    // document.write(data.table.rows[1].c[0].v)
    // for(let i=1;i<=4;i++){
    //     for(let j=0;j<6;j++){
    //         document.write(data.table.rows[i].c[j].v)
    //     }
    //     document.write("<br/>")
    // }
    document.getElementById("Question").innerHTML =data.table.rows[3].c[1].v;
    document.getElementById("option1").innerHTML = data.table.rows[3].c[2].v;
    document.getElementById("option2").innerHTML = data.table.rows[3].c[3].v;
    document.getElementById("option3").innerHTML = data.table.rows[3].c[4].v;
    document.getElementById("option4").innerHTML = data.table.rows[3].c[5].v;
    console.log(data.table)
})