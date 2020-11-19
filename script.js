var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        var studentObj = JSON.parse(xhttp.responseText);
        main(studentObj);
        //myFunction(studentObj);
        //console.log(studentObj);
    }
};
xhttp.open("GET", "studentObj.json", true);
xhttp.send();


class Helper {
    constructor() {
    }

    getStudentList(tablicaStudentow = []) {
        let Array = [];

        //Dodaje studenta do tablicy
        tablicaStudentow.forEach(function (student) {
            Array.push(student);
        });

        return this._sortByName(Array);
    }

    getStudentListForCourse(tablicaStudentow = [], year = 0, courseName = "") {
        let przedmioty = [];
        let Array = [];

        for (let i = 0; i < tablicaStudentow.length; i++) {
            let przedmiotyDanegoRoku = tablicaStudentow[i]['courses'][year];

            for (let przedmiot in przedmiotyDanegoRoku) {
                przedmioty.push(przedmiot);
            }

            if (przedmioty.indexOf(courseName) !== -1) {
                let student = {};
                student.first_name = tablicaStudentow[i]['first_name'];
                student.last_name = tablicaStudentow[i]['last_name'];
                student.indexNumber = tablicaStudentow[i]['year_of_study'];
                Array.push(student);
            }

        }


        return this._sortByName(Array);
    }

    getAvarageForStudentInYear(studentObj, year) {
        let przedmiotyDanegoRoku = studentObj['courses'][year];
        let srednia;
        let przedmioty = []; //przedmioty - tu mam nazwy przedmiotów
        let przedmiot;
        let ocenyWyklad = [];
        let ocenyCwiczenia = [];

        // Tworzę tablicę przedmiotów
        for (przedmiot in przedmiotyDanegoRoku) {
            przedmioty.push(przedmiot);
        }

        for (let i = 0; i < przedmioty.length; i++) {
            // tu mam oceny z ćwiczeń i wykładów
            ocenyCwiczenia = przedmiotyDanegoRoku[przedmioty[i]]['grades']['exercices'];
            ocenyWyklad = przedmiotyDanegoRoku[przedmioty[i]]['grades']['lecture'];

            srednia = this._getAverage(ocenyCwiczenia.concat(ocenyWyklad))
        }


        return srednia;
    }

    getAvarageForStudentAllYears(studentObj) {
        let lata = studentObj['courses'];
        let srednia = 0.0;
        let tablicaRok = [];
        let rok;
        // Dodaje do tablicy lata w jakich uczył się student
        for (rok in lata) {
            tablicaRok.push(rok);
        }

        // Liczę średnią dla każdego roku
        for (let i in tablicaRok) {
            srednia += this.getAvarageForStudentInYear(studentObj, tablicaRok[i]);
        }

        srednia = srednia / tablicaRok.length;
        return srednia;
    }

    getAverageForCourse(tablicaStudentow = [], year = 0, courseName = "") {
        let srednia;

        let przedmioty = [];
        let tablicaOcenStudenta = [];
        let tablicaOcenWszystkichStudentow = [];
        let ocenyCwiczenia = [];
        let ocenyWyklad = [];
        for (let i = 0; i < tablicaStudentow.length; i++) {
            let przedmiotyDanegoRoku = tablicaStudentow[i]['courses'][year];

            for (let przedmiot in przedmiotyDanegoRoku) {
                przedmioty.push(przedmiot);
            }

            if (przedmioty.indexOf(courseName) !== -1) {

                // tu mam oceny z ćwiczeń i wykładów
                ocenyCwiczenia = przedmiotyDanegoRoku[courseName]['grades']['exercices'];
                ocenyWyklad = przedmiotyDanegoRoku[courseName]['grades']['lecture'];

                tablicaOcenStudenta = ocenyCwiczenia.concat(ocenyWyklad);
            }
            tablicaOcenWszystkichStudentow = tablicaOcenWszystkichStudentow.concat(tablicaOcenStudenta);
        }
        srednia = this._getAverage(tablicaOcenWszystkichStudentow);
        return srednia;
    }

    _getAverage(tablicaOcen = []) {
        let srednia;
        let suma = 0
        for (let i = 0; i < tablicaOcen.length; i++) {
            suma += tablicaOcen[i];
        }
        srednia = suma / tablicaOcen.length;
        return srednia;
    }

    _sortByName(Array = []){
        Array.sort(function (a, b) {
            let textA = a['last_name'].toUpperCase();
            let textB = b['last_name'].toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
        return Array;
    }
}
/*
function myFunction(studentObj){
    //Function to show inforamtion on screen
    let info ='<b>Student list as read</b><br />';
    let obj = new Helper();
    let studenci = obj.getStudentList([studentObj]);
    for (let i = 0; i < studenci.length; i++){
        info = info + studenci[i].first_name + " " + studenci[i].last_name + '<br>';
        info = info + studenci[i].birth_date + '<br>';
        info = info + studenci[i].year_of_study + '<br>';
        let przedmiotyDanegoRoku = studenci[i]['courses'];
        for (let przedmiot in przedmiotyDanegoRoku){
            info = info + "Przedmioty w roku: " + przedmiot + "<br>";
            console.log(przedmiotyDanegoRoku[przedmiot]);
            for(let k = 0; k < przedmiotyDanegoRoku[przedmiot].length; k++){
                console.log('vjkvhj');
                info = info + przedmiotyDanegoRoku[przedmiot][k];
            }
        }
    }
    document.getElementById("demo").innerHTML = info;
}
*/


function main(studentObj) {
    //let obj = new Helper();
    //console.log(obj.getStudentList([studentObj, studentObjjson]));
}

