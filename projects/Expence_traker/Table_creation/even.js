let datas = [{"id":1,"first_name":"Cherey","last_name":"Kilmartin"},
{"id":2,"first_name":"Manolo","last_name":"Benn"},
{"id":3,"first_name":"Carlita","last_name":"Wheeldon"},
{"id":4,"first_name":"Sue","last_name":"Tolomio"},
{"id":5,"first_name":"Kary","last_name":"Dillicate"},
{"id":6,"first_name":"Gunar","last_name":"Le Breton"},
{"id":7,"first_name":"Felisha","last_name":"Gareisr"},
{"id":8,"first_name":"Cecilla","last_name":"Maudlin"},
{"id":9,"first_name":"Domini","last_name":"Gaylor"},
{"id":10,"first_name":"Charlton","last_name":"Redmain"},
{"id":11,"first_name":"Dwain","last_name":"Vango"},
{"id":12,"first_name":"Joane","last_name":"Hendin"},
{"id":13,"first_name":"Jackson","last_name":"Snelgrove"},
{"id":14,"first_name":"Delora","last_name":"O'Lynn"},
{"id":15,"first_name":"Jasmina","last_name":"Dreghorn"},
{"id":16,"first_name":"Leland","last_name":"Davidovic"},
{"id":17,"first_name":"Marlie","last_name":"Klimentyonok"},
{"id":18,"first_name":"Zaccaria","last_name":"Mowle"},
{"id":19,"first_name":"Sonnie","last_name":"Sumpton"},
{"id":20,"first_name":"Paulie","last_name":"Longhirst"},
{"id":21,"first_name":"Wait","last_name":"Skinley"},
{"id":22,"first_name":"Norby","last_name":"Astley"},
{"id":23,"first_name":"Ferd","last_name":"Fogel"},
{"id":24,"first_name":"Alyse","last_name":"De Hoogh"},
{"id":25,"first_name":"Robby","last_name":"Vonasek"},
{"id":26,"first_name":"Felike","last_name":"Smurfit"},
{"id":27,"first_name":"Darin","last_name":"Ettels"},
{"id":28,"first_name":"Nikolai","last_name":"Charlo"},
{"id":29,"first_name":"Kelsey","last_name":"Thams"},
{"id":30,"first_name":"Adela","last_name":"Farrand"}]


function dataload(){
    let rows = ""
    for (let i=0;i<=datas.length-1;i++){
        rows = rows + `<tr>
        <td>${datas[i].id} </td>
        <td>${datas[i].first_name} </td>
        </tr>`

    }
    document.getElementById("abc").innerHTML = rows
}