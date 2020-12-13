let ol = "<ol>";
let olk = "</ol>";
let ul = "<ul>";
let ulk = "</ul>";
let li = "<li>";
let lik = "</li>";

jsonFile = {
    "students": [
        {
            "first_name": "Jan",
            "last_name": "Kowalski",
            "birth_date": "29 AUG 1990",
            "year_of_study": "2",
            "courses": {
                "2013": {
                    "AlgorithmsI": {
                        "grades": {
                            "exercices": [
                                2,
                                4
                            ],
                            "lecture": [
                                2,
                                5
                            ]
                        }
                    },
                    "BasicPhysicsI": {
                        "grades": {
                            "exercices": [
                                4
                            ],
                            "lecture": [
                                5
                            ]
                        }
                    },
                    "ProgrammingI": {
                        "grades": {
                            "exercices": [
                                4.5
                            ],
                            "lecture": [
                                2,
                                3.5
                            ]
                        }
                    }
                },
                "2014": {
                    "ProgrammingII": {
                        "grades": {
                            "exercices": [
                                5
                            ],
                            "lecture": [
                                5
                            ]
                        }
                    },
                    "BasicPhysicsII": {
                        "grades": {
                            "exercices": [
                                5
                            ],
                            "lecture": [
                                5
                            ]
                        }
                    },
                    "AlgorithmsII": {
                        "grades": {
                            "exercices": [
                                5
                            ],
                            "lecture": [
                                5
                            ]
                        }
                    }
                }
            }
        },
        {
            "first_name": "Ola",
            "last_name": "Kluska",
            "birth_date": "16 AUG 1990",
            "year_of_study": "1",
            "courses": {
                "2015": {
                    "AlgorithmsI": {
                        "grades": {
                            "exercices": [
                                5,
                                5
                            ],
                            "lecture": [
                                3,
                                4
                            ]
                        }
                    },
                    "BasicPhysicsI": {
                        "grades": {
                            "exercices": [
                                5,
                                2,
                                3
                            ],
                            "lecture": [
                                4
                            ]
                        }
                    },
                    "ProgrammingI": {
                        "grades": {
                            "exercices": [
                                4.5,
                                3
                            ],
                            "lecture": [
                                2,
                                3.5
                            ]
                        }
                    }
                },
                "2016": {
                    "ProgrammingII": {
                        "grades": {
                            "exercices": [
                                4,
                                4
                            ],
                            "lecture": [
                                3,
                                3
                            ]
                        }
                    },
                    "BasicPhysicsII": {
                        "grades": {
                            "exercices": [
                                5
                            ],
                            "lecture": [
                                5
                            ]
                        }
                    },
                    "AlgorithmsII": {
                        "grades": {
                            "exercices": [
                                5,
                                5
                            ],
                            "lecture": [
                                5,
                                4.5,
                                4
                            ]
                        }
                    }
                }
            }
        },
        {
            "first_name": "Dominika",
            "last_name": "Białkowska",
            "birth_date": "17 JUN 1990",
            "year_of_study": "1",
            "courses": {
                "2016": {
                    "AlgorithmsI": {
                        "grades": {
                            "exercices": [
                                5,
                                5
                            ],
                            "lecture": [
                                3,
                            ]
                        }
                    },
                    "BasicPhysicsI": {
                        "grades": {
                            "exercices": [
                                4,
                                3
                            ],
                            "lecture": [
                                4
                            ]
                        }
                    },
                },
                "2017": {
                    "ProgrammingII": {
                        "grades": {
                            "exercices": [
                                2,
                                2
                            ],
                            "lecture": [
                                5,
                                4
                            ]
                        }
                    },
                    "BasicPhysicsII": {
                        "grades": {
                            "exercices": [
                                2
                            ],
                            "lecture": [
                                5
                            ]
                        }
                    },
                    "AlgorithmsII": {
                        "grades": {
                            "exercices": [
                                5,
                                5
                            ],
                            "lecture": [
                                5,
                                4.5,
                                4
                            ]
                        }
                    }
                }
            }
        },
        {
            "first_name": "Kamil",
            "last_name": "Piotrowski",
            "birth_date": "16 AUG 1996",
            "year_of_study": "1",
            "courses": {
                "2015": {
                    "Databases": {
                        "grades": {
                            "exercices": [
                                5,
                                5
                            ],
                            "lecture": [
                                3,
                                4
                            ]
                        }
                    },
                    "BasicPhysicsI": {
                        "grades": {
                            "exercices": [
                                5,
                                2,
                                3
                            ],
                            "lecture": [
                                4
                            ]
                        }
                    },
                    "Graphic interfaces": {
                        "grades": {
                            "exercices": [
                                4.5,
                                3,
                                5
                            ],
                            "lecture": [
                                2,
                                3.5
                            ]
                        }
                    }
                },
                "2016": {
                    "ProgrammingII": {
                        "grades": {
                            "exercices": [
                                4,
                                4
                            ],
                            "lecture": [
                                3,
                                3
                            ]
                        }
                    },
                    "BasicPhysicsII": {
                        "grades": {
                            "exercices": [
                                5
                            ],
                            "lecture": [
                                5
                            ]
                        }
                    },
                    "Python": {
                        "grades": {
                            "exercices": [
                                5,
                                5
                            ],
                            "lecture": [
                                5,
                                4
                            ]
                        }
                    }
                }
            }
        },
        {
            "first_name": "Katarzyna",
            "last_name": "Wójcik",
            "birth_date": "16 AUG 1990",
            "year_of_study": "1",
            "courses": {
                "2015": {
                    "Databases": {
                        "grades": {
                            "exercices": [
                                5,
                                5
                            ],
                            "lecture": [
                                3,
                                4
                            ]
                        }
                    },
                    "BasicPhysicsI": {
                        "grades": {
                            "exercices": [
                                5,
                                2,
                                3
                            ],
                            "lecture": [
                                4
                            ]
                        }
                    },
                    "ProgrammingI": {
                        "grades": {
                            "exercices": [
                                5
                            ],
                            "lecture": [
                                3.5
                            ]
                        }
                    }
                },
                "2016": {
                    "ProgrammingII": {
                        "grades": {
                            "exercices": [
                                4,
                                4
                            ],
                            "lecture": [
                                3,
                                3
                            ]
                        }
                    },
                    "BasicPhysicsII": {
                        "grades": {
                            "exercices": [
                                5
                            ],
                            "lecture": [
                                5
                            ]
                        }
                    },
                    "Python": {
                        "grades": {
                            "exercices": [
                                5,
                                5
                            ],
                            "lecture": [
                                5,
                                4
                            ]
                        }
                    }
                }
            }
        }
    ]
}

class Helper {
    constructor() {
    }

    getStudentList(tablicaStudentow) {
        let Array = [];
        let studenci = tablicaStudentow['students']
        //Dodaje studenta do tablicy
        studenci.forEach(function (student) {
            Array.push(student);
        });

        return this._sortByName(Array);
    }

    getStudentListForCourse(tablicaStudentow = [], year = 0, courseName = "") {
        let przedmioty = [];
        let Array = [];

        for (let i = 0; i < tablicaStudentow.length; i++) {
            if (tablicaStudentow[i]['courses'] !== undefined) {
                let przedmiotyDanegoRoku = tablicaStudentow[i]['courses'][year];

                for (let przedmiot in przedmiotyDanegoRoku) {
                    przedmioty.push(przedmiot);
                }

                if (przedmioty.indexOf(courseName) !== -1) {
                    let student = {};
                    student.first_name = tablicaStudentow[i]['first_name'];
                    student.last_name = tablicaStudentow[i]['last_name'];
                    student.year_of_study = tablicaStudentow[i]['year_of_study'];
                    Array.push(student);
                }
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

        let tablicaOcenWszystkichStudentow = [];

        for (let i = 0; i < tablicaStudentow.length; i++) {
            let przedmioty = [];
            let ocenyCwiczenia = [];
            let ocenyWyklad = [];
            let tablicaOcenStudenta = [];
            let przedmiotyDanegoRoku = [];

            if (tablicaStudentow[i]['courses'] !== undefined) {
                przedmiotyDanegoRoku = tablicaStudentow[i]['courses'][year];
                //console.log(przedmiotyDanegoRoku);
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

    _sortByName(Array = []) {
        Array.sort(function (a, b) {
            let textA = a['last_name'].toUpperCase();
            let textB = b['last_name'].toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
        return Array;
    }
}

function dodajOpcjeKurs() {
    let obj = new Helper();
    let studenci = obj.getStudentList(jsonFile);
    let rok;
    let przedmioty = new Set(); //przedmioty - zbiór nazw wszystkich przedmiotów
    let przedmiot;
    let tabstudenci = new Set();
    let dodaneprzedmioty = new Set();
    let dodanistudenci = new Set();

    for (let j = 0; j < studenci.length; j++) {
        let lata = studenci[j]['courses'];
        let nazwa = studenci[j]['first_name'] + " " + studenci[j]['last_name'];
        tabstudenci.add(nazwa);
        // Dodaje do tablicy lata w jakich uczył się student
        for (rok in lata) {
            let przedmiotyDanegoRoku = studenci[j]['courses'][rok];

            //do zbioru dodaje przedmioty i w zbiorze się nie powtarzaja nazwy
            for (przedmiot in przedmiotyDanegoRoku) {
                przedmioty.add(przedmiot);
            }
        }
    }

    let x = document.getElementById("coursetoshow");
    let x2 = document.getElementById("coursesrednia");
    let x3 = document.getElementById("student");
    let x4 = document.getElementById("studentsrednia");
    //Usuwam już wcześniej dodane opcje żeby ni dodać ich więcej razy niz 1
    for (let j = x.length - 1; j >= 0; j--) {
        x.remove(j);
        x2.remove(j)
    }
    for (let j = x3.length - 1; j >= 0; j--) {
        x3.remove(j);
        x4.remove(j)
    }

    for (let opcja of przedmioty) {
        let option = document.createElement("option");
        option.text = opcja;
        x.add(option);
        let option2 = document.createElement("option");
        option2.text = opcja;
        x2.add(option2);
    }
    for (let nazwa of tabstudenci) {
        let option = document.createElement("option");
        option.text = nazwa;
        x3.add(option);
        let option2 = document.createElement("option");
        option2.text = nazwa;
        x4.add(option2);
    }
}


function wyswietlWszystkichStudentow() {
    //Function to show inforamtion on screen
    let info = '<b>Wszyscy Studenci na twojej uczelni:</b><br />';
    let obj = new Helper();
    let przedmiot;
    let studenci = obj.getStudentList(jsonFile);
    let rok;

    info += ol;
    for (let j = 0; j < studenci.length; j++) {


        info = info + li + studenci[j].first_name + " " + studenci[j].last_name + lik;
        info = info + ul + li + "Data urodzenia: " + studenci[j].birth_date + lik;
        info = info + li + "Rok studiów: " + studenci[j].year_of_study + lik;

        let lata = studenci[j]['courses'];

        // Dodaje do tablicy lata w jakich uczył się student

        let tablicaRok = [];
        for (rok in lata) {
            tablicaRok.push(rok);
        }

        for (let k = 0; k < tablicaRok.length; k++) {
            info = info + li + "Przedmioty w roku: " + tablicaRok[k] + lik;
            let przedmiotyDanegoRoku = studenci[j]['courses'][tablicaRok[k]]; //tu w pętli zmieniać
            let przedmioty = [];
            for (przedmiot in przedmiotyDanegoRoku) {
                przedmioty.push(przedmiot);
            }

            info += ol;
            for (let i = 0; i < przedmioty.length; i++) {
                // tu mam oceny z ćwiczeń i wykładów
                info = info + li + przedmioty[i] + lik;
                let ocenyCwiczenia = przedmiotyDanegoRoku[przedmioty[i]]['grades']['exercices'];
                info = info + ul + li + 'Oceny z ćwiczeń: ' + ocenyCwiczenia + lik;

                let ocenyWyklad = przedmiotyDanegoRoku[przedmioty[i]]['grades']['lecture'];
                info = info + li + 'Oceny z wykładu: ' + ocenyWyklad + lik + ulk;

            }
            info = info + olk;
        }
        info = info + ulk;
    }
    info += olk;
    document.getElementById("display").innerHTML = info;
}

function wyswietlStudentowzKursu() {
    let kurs = document.getElementById("coursetoshow").value;
    let info = '<b>Studenci zapisani na kurs ' + kurs + '</b></br/>';
    let obj = new Helper();
    let tablicaRok = new Set();
    let rok;
    let studenci = obj.getStudentList(jsonFile);
    let students_in_course_in_year = [];
    for (let j = 0; j < studenci.length; j++) {
        let lata = studenci[j]['courses'];

        // Dodaje do tablicy lata w jakich uczył się student
        for (rok in lata) {
            tablicaRok.add(rok);
        }
    }
    let i = 0;
    console.log(tablicaRok);
    for (let rok of tablicaRok) {
        students_in_course_in_year.push(
            {
                year: rok,
                students: obj.getStudentListForCourse(studenci, rok, kurs)
            });
    }
    info += ol;
    for (let key in Object.entries(students_in_course_in_year)) {
        info = info + li + students_in_course_in_year[key].year + lik;
        info += ul;
        for (let student in students_in_course_in_year[key].students) {
            let nazwa = students_in_course_in_year[key].students[student];
            info = info + li + nazwa.first_name + " " + nazwa.last_name + " ";
            info = info + "Rok studiów " + nazwa.year_of_study + lik;
        }
        info += ulk;
    }
    info += olk;
    document.getElementById("display").innerHTML = info;
}

function wswietlSrednia() {
    let obj = new Helper();
    let student = document.getElementById("studentsrednia").value;
    let studenci = obj.getStudentList(jsonFile);
    let imie_nazwisko = student.split(" ");

    for (let item in studenci) {
        if (studenci[item].last_name === imie_nazwisko[1]) {
            student = studenci[item];
        }
    }

    let srednia = obj.getAvarageForStudentAllYears(student);
    document.getElementById("display").innerHTML = 'Średnia studenta ' + imie_nazwisko[0] + ' '
        + imie_nazwisko[1] + ' wynosi ' + Math.round(srednia * 1000) / 1000;
}

function wswietlSredniaRoczna() {
    let obj = new Helper();
    let student = document.getElementById("student").value;
    let studenci = obj.getStudentList(jsonFile);

    let imie_nazwisko = student.split(" ");
    let info = '<b>Średnia ocen studenta ' + student + '</b></br/>';

    for (let item in studenci) {
        if (studenci[item].last_name === imie_nazwisko[1]) {
            student = studenci[item];
        }
    }

    let lata = student['courses'];
    let srednia = 0.0;
    let tablicaRok = [];
    let rok;
    // Dodaje do tablicy lata w jakich uczył się student
    for (rok in lata) {
        tablicaRok.push(rok);
    }

    // Liczę średnią dla każdego roku
    for (let i in tablicaRok) {
        info = info + li + 'W roku ' + tablicaRok[i] + lik;
        srednia = obj.getAvarageForStudentInYear(student, tablicaRok[i]);
        srednia = Math.round(srednia * 1000) / 1000;
        info = info + ul + li + 'Średnia wynosiła ' + srednia + ulk + lik;
    }

    document.getElementById("display").innerHTML = info;
}

function wswietlSredniaKursu() {
    let obj = new Helper();
    let course = document.getElementById("coursesrednia").value;
    let studenci = obj.getStudentList(jsonFile);
    let rok;
    let tablicaRok = new Set();
    let students_in_course_in_year = [];
    let info = '<b>Średnia ocen kursu ' + course + '</b></br/>';
    let srednia;

    for (let j = 0; j < studenci.length; j++) {
        let lata = studenci[j]['courses'];
        // Dodaje do tablicy lata w jakich uczył się student
        for (rok in lata) {
            tablicaRok.add(rok);
        }
    }
    let i = 0;
    for (let rok of tablicaRok) {
        students_in_course_in_year.push(
            {
                year: rok,
                srednia: obj.getAverageForCourse(studenci, rok, course)
            });
    }
    console.log(students_in_course_in_year);
    info += ol;

    for (let key in Object.entries(students_in_course_in_year)) {
        info = info + li + 'W roku ' + students_in_course_in_year[key].year + lik;
        if (!isNaN(students_in_course_in_year[key].srednia)) {
            srednia = students_in_course_in_year[key].srednia;
            srednia = Math.round(srednia * 1000) / 1000;
        } else {
            srednia = 0;
        }
        info = info + ul + li + 'Średnia wynosi ' + srednia + lik + ulk;
    }

    info += olk;
    document.getElementById("display").innerHTML = info;
}

function dodajStudenta() {
    let imie = document.getElementById("fname").value;
    let nazwisko = document.getElementById("fsurname").value;
    let data_urodzenia = document.getElementById("fbirthday").value;
    let rok_studiow = document.getElementById("fyear").value;

    let nowy_student = {
        first_name: imie,
        last_name: nazwisko,
        birth_date: data_urodzenia,
        year_of_study: rok_studiow
    };

    jsonFile['students'].push(nowy_student);
    dodajOpcjeKurs();
    document.getElementById("dodano").innerHTML = "Dodano studenta " + nowy_student.first_name + " " + nowy_student.last_name;

    setTimeout(() => {
        document.getElementById("dodano").innerHTML = "";
    }, 3000);
}
