var in_labels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
    26, 27, 28, 29, 31, 32, 33, 34, 35, 36, 37, 39, 42,
    44, 45, 51, 52, 54, 55, 56, 60, 63, 65, 68, 69, 73,
    76, 79, 103
]
var out_labels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 29, 30, 31, 33, 34, 35,
    36, 38, 39, 40, 41, 44, 46, 47, 48, 53, 55, 63, 66, 72, 84
]

var out_deg = [
    2, 4, 5, 12, 10, 16, 20, 17, 9, 12, 12, 10, 15, 11, 10, 5, 9,
    3, 7, 6, 3, 3, 5, 8, 4, 5, 1, 1, 1, 4, 3, 2, 1, 1,
    3, 3, 3, 1, 2, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1
]
var in_deg = [
    3, 12, 14, 14, 13, 17, 18, 12, 16, 6, 13, 8, 5, 7, 9, 5, 9,
    5, 8, 3, 4, 3, 3, 2, 1, 5, 4, 3, 2, 2, 2, 2, 2, 2,
    1, 1, 3, 2, 2, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1
]
var rnd_out_deg = [null, null, null, null, null, null, null, null, 1, 7, 10, 19, 20, 25, 26, 31, 26, 29, 16, 15, 13, 12, 6, 3, null, 1, 1, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null, null, null, null, null, null
]
var rnd_in_deg = [null, null, null, null, null, null, null, 2, 4, 12, 9, 19, 17, 25, 26, 26, 25, 28, 19, 12, 15, 7, 2, 8,
    2, null, null, 2, null, 1, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null, null, null, null,
    null, null, null
]

lineChart = new Chart(document.getElementById("InOutDeg"), {
    type: 'line',
    data: {
        labels: out_labels,
        datasets: [{
            label: "Warcraft Network",
            data: out_deg,
            borderWidth: 1,
            pointBackgroundColor: singleChartColor[0],
            showLine: true,
            backgroundColor: singleChartColor[1],
            borderColor: singleChartColor[0],
        }, {
            label: "Random Network",
            data: rnd_out_deg,
            borderWidth: 1,
            pointBackgroundColor: singleChartColor_2[0],
            showLine: true,
            backgroundColor: singleChartColor_2[1],
            borderColor: singleChartColor_2[0],
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Out-degree Distribution'
        },
        tooltips: {
            callbacks: {
                label: function (tooltipItem) {
                    return tooltipItem.yLabel;
                }
            }
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Out-degree'
                }
            }],
            yAxes: [{
                type: "logarithmic",
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Frequency'
                }
            }]
        }
    }
});

document.getElementById("Out-Degree").addEventListener("click", function () {
    lineChart.destroy();
    lineChart = new Chart(document.getElementById("InOutDeg"), {
        type: 'line',
        data: {
            labels: out_labels,
            datasets: [{
                label: "Warcraft Network",
                data: out_deg,
                borderWidth: 1,
                pointBackgroundColor: singleChartColor[0],
                showLine: true,
                backgroundColor: singleChartColor[1],
                borderColor: singleChartColor[0],
            }, {
                label: "Random Network",
                data: rnd_out_deg,
                borderWidth: 1,
                pointBackgroundColor: singleChartColor_2[0],
                showLine: true,
                backgroundColor: singleChartColor_2[1],
                borderColor: singleChartColor_2[0],
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Out-degree Distribution'
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.yLabel;
                    }
                }
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Out-degree'
                    }
                }],
                yAxes: [{
                    type: "logarithmic",
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Frequency'
                    }
                }]
            }
        }
    });
});

document.getElementById("In-Degree").addEventListener("click", function () {

    lineChart.destroy();
    lineChart = new Chart(document.getElementById("InOutDeg"), {
        type: 'line',
        data: {
            labels: in_labels,
            datasets: [{
                label: "Warcraft Network",
                data: in_deg,
                borderWidth: 1,
                pointBackgroundColor: singleChartColor[0],
                showLine: true,
                backgroundColor: singleChartColor[1],
                borderColor: singleChartColor[0],
            }, {
                label: "Random Network",
                data: rnd_in_deg,
                borderWidth: 1,
                pointBackgroundColor: singleChartColor_2[0],
                showLine: true,
                backgroundColor: singleChartColor_2[1],
                borderColor: singleChartColor_2[0],
            }]
        },
        options: {
            title: {
                display: true,
                text: 'In-degree Distribution'
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.yLabel;
                    }
                }
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'In-degree'
                    }
                }],
                yAxes: [{
                    type: "logarithmic",
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Frequency'
                    }
                }]
            }
        }
    });
});

var names = [
    "A'dal",
    "Alexstrasza",
    "Illidan Stormrage",
    "Kael'thas Sunstrider",
    "Khadgar",
    "Lady Liadrin",
    "Lich King",
    "M'uru",
    "Maiev Shadowsong",
    "Med'an",
    "Remulos",
    "Tirion Fordring",
    "Velen",
    "Aedelas Blackmoore",
    "Arthas Menethil",
    "Danath Trollbane",
    "Taretha Foxton",
    "Terenas Menethil II",
    "Thrall",
    "Aegwynn",
    "Blackhand",
    "Cho'gall",
    "Jaina Proudmoore",
    "Llane Wrynn I",
    "Medivh",
    "Meryl Felstorm",
    "Nielas Aran",
    "Sargeras",
    "Valeera Sanguinar",
    "Varian Wrynn",
    "Aessina",
    "Brann Bronzebeard",
    "Elune", "Malorne", "Ysera",
    "Aethas Sunreaver", "Anasterian Sunstrider",
    "Garrosh Hellscream", "Grand Magister Rommath",
    "Halduron Brightwing", "Kalecgos", "Lor'themar Theron",
    "Malygos", "Rhonin", "Sylvanas Windrunner", "Taran Zhu",
    "Vereesa Windrunner", "Vol'jin", "Agamaggan",
    "Archimonde", "Cenarius", "Malfurion Stormrage",
    "Mannoroth", "Rexxar", "Agatha", "Annhylde the Caller",
    "Aggramar", "Eonar", "Magni Bronzebeard", "Tyr", "Aiden Perenolde",
    "Orgrim Doomhammer", "Uther the Lightbringer", "Akama", "Kil'jaeden",
    "Magtheridon", "Ner'zhul", "Al'Akir", "Cairne Bloodhoof", "Deathwing",
    "Hodir", "N'Zoth", "Ra", "Ragnaros", "Thorim", "Thunderaan",
    "Alexandros Mograine", "Balnazzar", "Baron Rivendare",
    "Darion Mograine", "Draka",
    "Kel'Thuzad",
    "Muradin Bronzebeard",
    "Queen Azshara", "Renault Mograine",
    "Arygos", "Bolvar Fordragon", "Broll Bearmantle",
    "Chronormu", "Ebyssian", "Eranikus", "Fandral Staghelm", "Freya",
    "Galakrond", "Korialstrasz", "Loken", "Nekros Skullcrusher", "Nozdormu",
    "Shandris Feathermoon", "Tyranastrasz", "Tyrande Whisperwind", "Xavius",
    "Algalon the Observer", "Aman'Thul", "Odyn", "Yogg-Saron",
    "Alleria Windrunner", "Anduin Lothar", "Anduin Wrynn", "Arator the Redeemer",
    "Dar'Khan Drathir", "Galadin", "Gelbin Mekkatorque", "Giramar",
    "Kurdran Wildhammer", "L'ura", "Magister Umbric", "Nathanos Blightcaller",
    "Turalyon", "Varok Saurfang", "Xe'ra", "Zendarin Windrunner", "Zul'jin",
    "Alonsus Faol", "Archbishop Benedictus", "Genn Greymane", "Moira Thaurissan",
    "Lei Shen", "Norgannon", "Wrathion", "Y'Shaarj", "Anachronos", "Eitrigg",
    "Soridormi", "Dath'Remar Sunstrider", "Daelin Proudmoore", "Garona Halforcen",
    "Hakkar the Soulflayer", "Kilrogg Deadeye", "Nefarian", "Baine Bloodhoof",
    "Chi-Ji", "Dagran Thaurissan II", "Falstad Wildhammer", "Helya", "Ji Firepaw",
    "Landan Wrynn", "Liam Greymane", "Lorewalker Cho", "Magatha Grimtotem",
    "Mayla Highmountain", "Onyxia", "Sunwalker Dezco", "Talanji", "Xuen", "Zul",
    "Antonidas", "Teron Gorefiend", "Tichondrius", "Anub'arak", "Sapphiron",
    "Anveena Teague", "Jorad Mace", "Kairozdormu", "Trag Highmountain", "Tyrygosa",
    "Anzu", "Terokk", "Kirygosa", "Azgalor", "Gul'dan", "Hakkar the Houndmaster",
    "Jarod Shadowsong", "Yrel", "Dranosh Saurfang", "Falric", "Mal'Ganis",
    "Marwyn", "Thassarian", "Thoras Trollbane", "Varimathras", "C'Thun",
    "Aviana", "Goldrinn", "Aysa Cloudsinger", "Li Li Stormstout",
    "Hamuul Runetotem", "Huln Highmountain", "Jale Rivermane", "Lasan Skyhorn",
    "Rokhan", "Baron Revilgaz", "Dal'rend Blackhand", "Durotan", "Garad",
    "Grand Apothecary Putress", "Rehgar Earthfury", "Broxigar", "Varo'then",
    "Chen Stormstout", "Celebras", "Zaetar", "Liu Lang", "Yu'lon",
    "Emperor Shaohao", "Niuzao", "K'ure", "Dagran Thaurissan",
    "Galen Trollbane", "Dargrul", "Ulan Highmountain", "Koltira Deathweaver",
    "Darius Crowley", "Lorna Crowley", "Khaz'goroth", "Sabellian", "Sintharia",
    "Zuluhed the Whacked", "Dentarg", "Kargath Bladefist", "Fenris Wolfbrother",
    "Drek'Thar", "Muln Earthfury", "Greatmother Geyah", "Master Gadrin",
    "Navarrogg", "Therazane", "Torok Bloodtotem", "Elisande", "Neptulon",
    "Gruul the Dragonkiller", "Tagar Spinebreaker", "Ursoc", "Ursol", "Leoroxx",
    "Millhouse Manastorm", "Vindicator Maraad", "Zalazane", "Golganneth",
    "Master Apothecary Faranell", "Grand Empress Shek'zeer", "Tortolla",
    "Kur'talos Ravencrest", "Lilian Voss", "K'ara", "Othmar Garithos", "Kang",
    "King Ymiron", "Silgryn", "Thargas Anvilmar", "Mimiron", "Smolderon",
    "Rastakhan", "Sen'jin", "Mogor", "Mug'thol", "Nazgrel", "Vilnak'dor",
    "Silas Darkmoon", "Talon King Ikiss", "The Monkey King"
]

var data2 = [{
        x: 21,
        y: 25
    },
    {
        x: 13,
        y: 12
    },
    {
        x: 13,
        y: 16
    },
    {
        x: 13,
        y: 19
    },
    {
        x: 8,
        y: 10
    },
    {
        x: 10,
        y: 14
    },
    {
        x: 22,
        y: 16
    },
    {
        x: 12,
        y: 10
    },
    {
        x: 19,
        y: 19
    },
    {
        x: 11,
        y: 9
    },
    {
        x: 10,
        y: 17
    },
    {
        x: 16,
        y: 13
    },
    {
        x: 12,
        y: 17
    },
    {
        x: 7,
        y: 21
    },
    {
        x: 14,
        y: 11
    },
    {
        x: 22,
        y: 13
    },
    {
        x: 12,
        y: 18
    },
    {
        x: 12,
        y: 13
    },
    {
        x: 16,
        y: 13
    },
    {
        x: 14,
        y: 16
    },
    {
        x: 15,
        y: 16
    },
    {
        x: 10,
        y: 24
    },
    {
        x: 15,
        y: 15
    },
    {
        x: 11,
        y: 15
    },
    {
        x: 19,
        y: 19
    },
    {
        x: 17,
        y: 10
    },
    {
        x: 16,
        y: 22
    },
    {
        x: 9,
        y: 12
    },
    {
        x: 14,
        y: 21
    },
    {
        x: 17,
        y: 17
    },
    {
        x: 12,
        y: 21
    },
    {
        x: 17,
        y: 17
    },
    {
        x: 13,
        y: 10
    },
    {
        x: 14,
        y: 11
    },
    {
        x: 16,
        y: 9
    },
    {
        x: 17,
        y: 14
    },
    {
        x: 15,
        y: 14
    },
    {
        x: 12,
        y: 15
    },
    {
        x: 14,
        y: 18
    },
    {
        x: 8,
        y: 16
    },
    {
        x: 13,
        y: 9
    },
    {
        x: 18,
        y: 11
    },
    {
        x: 14,
        y: 18
    },
    {
        x: 14,
        y: 20
    },
    {
        x: 12,
        y: 13
    },
    {
        x: 19,
        y: 15
    },
    {
        x: 21,
        y: 14
    },
    {
        x: 22,
        y: 13
    },
    {
        x: 17,
        y: 20
    },
    {
        x: 18,
        y: 18
    },
    {
        x: 14,
        y: 10
    },
    {
        x: 14,
        y: 12
    },
    {
        x: 13,
        y: 10
    },
    {
        x: 19,
        y: 18
    },
    {
        x: 9,
        y: 19
    },
    {
        x: 7,
        y: 16
    },
    {
        x: 10,
        y: 15
    },
    {
        x: 14,
        y: 26
    },
    {
        x: 25,
        y: 11
    },
    {
        x: 15,
        y: 11
    },
    {
        x: 16,
        y: 14
    },
    {
        x: 18,
        y: 15
    },
    {
        x: 10,
        y: 17
    },
    {
        x: 13,
        y: 9
    },
    {
        x: 11,
        y: 18
    },
    {
        x: 15,
        y: 10
    },
    {
        x: 12,
        y: 11
    },
    {
        x: 12,
        y: 11
    },
    {
        x: 19,
        y: 16
    },
    {
        x: 18,
        y: 16
    },
    {
        x: 18,
        y: 12
    },
    {
        x: 21,
        y: 13
    },
    {
        x: 12,
        y: 15
    },
    {
        x: 17,
        y: 15
    },
    {
        x: 17,
        y: 12
    },
    {
        x: 7,
        y: 12
    },
    {
        x: 15,
        y: 14
    },
    {
        x: 17,
        y: 18
    },
    {
        x: 15,
        y: 14
    },
    {
        x: 11,
        y: 12
    },
    {
        x: 11,
        y: 18
    },
    {
        x: 15,
        y: 13
    },
    {
        x: 15,
        y: 13
    },
    {
        x: 14,
        y: 17
    },
    {
        x: 13,
        y: 20
    },
    {
        x: 8,
        y: 16
    },
    {
        x: 14,
        y: 9
    },
    {
        x: 12,
        y: 22
    },
    {
        x: 15,
        y: 19
    },
    {
        x: 11,
        y: 13
    },
    {
        x: 14,
        y: 11
    },
    {
        x: 17,
        y: 19
    },
    {
        x: 19,
        y: 16
    },
    {
        x: 17,
        y: 13
    },
    {
        x: 12,
        y: 18
    },
    {
        x: 16,
        y: 15
    },
    {
        x: 19,
        y: 11
    },
    {
        x: 14,
        y: 16
    },
    {
        x: 14,
        y: 22
    },
    {
        x: 13,
        y: 18
    },
    {
        x: 15,
        y: 17
    },
    {
        x: 12,
        y: 11
    },
    {
        x: 12,
        y: 9
    },
    {
        x: 13,
        y: 14
    },
    {
        x: 16,
        y: 21
    },
    {
        x: 10,
        y: 14
    },
    {
        x: 18,
        y: 8
    },
    {
        x: 14,
        y: 11
    },
    {
        x: 18,
        y: 25
    },
    {
        x: 16,
        y: 19
    },
    {
        x: 15,
        y: 12
    },
    {
        x: 11,
        y: 15
    },
    {
        x: 10,
        y: 19
    },
    {
        x: 16,
        y: 14
    },
    {
        x: 12,
        y: 14
    },
    {
        x: 27,
        y: 19
    },
    {
        x: 18,
        y: 17
    },
    {
        x: 18,
        y: 8
    },
    {
        x: 13,
        y: 13
    },
    {
        x: 16,
        y: 15
    },
    {
        x: 17,
        y: 11
    },
    {
        x: 19,
        y: 13
    },
    {
        x: 20,
        y: 12
    },
    {
        x: 14,
        y: 12
    },
    {
        x: 19,
        y: 21
    },
    {
        x: 14,
        y: 19
    },
    {
        x: 10,
        y: 13
    },
    {
        x: 16,
        y: 15
    },
    {
        x: 15,
        y: 13
    },
    {
        x: 16,
        y: 14
    },
    {
        x: 15,
        y: 24
    },
    {
        x: 15,
        y: 14
    },
    {
        x: 11,
        y: 10
    },
    {
        x: 13,
        y: 9
    },
    {
        x: 18,
        y: 13
    },
    {
        x: 11,
        y: 9
    },
    {
        x: 21,
        y: 12
    },
    {
        x: 13,
        y: 13
    },
    {
        x: 14,
        y: 19
    },
    {
        x: 19,
        y: 17
    },
    {
        x: 20,
        y: 16
    },
    {
        x: 14,
        y: 14
    },
    {
        x: 14,
        y: 16
    },
    {
        x: 9,
        y: 11
    },
    {
        x: 18,
        y: 15
    },
    {
        x: 20,
        y: 19
    },
    {
        x: 14,
        y: 7
    },
    {
        x: 14,
        y: 13
    },
    {
        x: 20,
        y: 14
    },
    {
        x: 14,
        y: 12
    },
    {
        x: 19,
        y: 13
    },
    {
        x: 16,
        y: 11
    },
    {
        x: 16,
        y: 9
    },
    {
        x: 13,
        y: 11
    },
    {
        x: 8,
        y: 14
    },
    {
        x: 12,
        y: 11
    },
    {
        x: 14,
        y: 13
    },
    {
        x: 15,
        y: 16
    },
    {
        x: 8,
        y: 21
    },
    {
        x: 12,
        y: 19
    },
    {
        x: 15,
        y: 14
    },
    {
        x: 18,
        y: 14
    },
    {
        x: 12,
        y: 16
    },
    {
        x: 18,
        y: 12
    },
    {
        x: 20,
        y: 17
    },
    {
        x: 9,
        y: 17
    },
    {
        x: 11,
        y: 13
    },
    {
        x: 17,
        y: 15
    },
    {
        x: 16,
        y: 17
    },
    {
        x: 17,
        y: 27
    },
    {
        x: 9,
        y: 16
    },
    {
        x: 6,
        y: 17
    },
    {
        x: 20,
        y: 18
    },
    {
        x: 18,
        y: 11
    },
    {
        x: 19,
        y: 16
    },
    {
        x: 20,
        y: 18
    },
    {
        x: 17,
        y: 13
    },
    {
        x: 11,
        y: 11
    },
    {
        x: 10,
        y: 13
    },
    {
        x: 17,
        y: 17
    },
    {
        x: 19,
        y: 10
    },
    {
        x: 15,
        y: 21
    },
    {
        x: 15,
        y: 16
    },
    {
        x: 12,
        y: 11
    },
    {
        x: 14,
        y: 13
    },
    {
        x: 16,
        y: 17
    },
    {
        x: 15,
        y: 19
    },
    {
        x: 13,
        y: 18
    },
    {
        x: 16,
        y: 16
    },
    {
        x: 9,
        y: 18
    },
    {
        x: 10,
        y: 14
    },
    {
        x: 22,
        y: 16
    },
    {
        x: 15,
        y: 13
    },
    {
        x: 20,
        y: 21
    },
    {
        x: 12,
        y: 23
    },
    {
        x: 11,
        y: 18
    },
    {
        x: 12,
        y: 13
    },
    {
        x: 15,
        y: 18
    },
    {
        x: 15,
        y: 15
    },
    {
        x: 18,
        y: 14
    },
    {
        x: 13,
        y: 21
    },
    {
        x: 19,
        y: 16
    },
    {
        x: 23,
        y: 15
    },
    {
        x: 11,
        y: 18
    },
    {
        x: 22,
        y: 13
    },
    {
        x: 12,
        y: 14
    },
    {
        x: 12,
        y: 18
    },
    {
        x: 16,
        y: 17
    },
    {
        x: 7,
        y: 11
    },
    {
        x: 14,
        y: 18
    },
    {
        x: 18,
        y: 8
    },
    {
        x: 9,
        y: 16
    },
    {
        x: 12,
        y: 16
    },
    {
        x: 12,
        y: 13
    },
    {
        x: 18,
        y: 7
    },
    {
        x: 14,
        y: 18
    },
    {
        x: 18,
        y: 16
    },
    {
        x: 13,
        y: 8
    },
    {
        x: 16,
        y: 10
    },
    {
        x: 12,
        y: 19
    },
    {
        x: 15,
        y: 12
    },
    {
        x: 14,
        y: 10
    },
    {
        x: 17,
        y: 14
    },
    {
        x: 21,
        y: 11
    },
    {
        x: 15,
        y: 19
    },
    {
        x: 10,
        y: 11
    },
    {
        x: 17,
        y: 22
    },
    {
        x: 17,
        y: 11
    },
    {
        x: 14,
        y: 21
    },
    {
        x: 17,
        y: 16
    },
    {
        x: 8,
        y: 24
    },
    {
        x: 12,
        y: 12
    },
    {
        x: 16,
        y: 16
    },
    {
        x: 20,
        y: 19
    },
    {
        x: 13,
        y: 18
    },
    {
        x: 14,
        y: 11
    },
    {
        x: 19,
        y: 10
    },
    {
        x: 15,
        y: 12
    },
    {
        x: 14,
        y: 16
    },
    {
        x: 13,
        y: 15
    },
    {
        x: 15,
        y: 15
    },
    {
        x: 14,
        y: 11
    },
    {
        x: 16,
        y: 6
    },
    {
        x: 14,
        y: 11
    },
    {
        x: 13,
        y: 21
    },
    {
        x: 12,
        y: 10
    },
    {
        x: 17,
        y: 14
    },
    {
        x: 23,
        y: 15
    },
    {
        x: 16,
        y: 19
    },
    {
        x: 13,
        y: 22
    },
    {
        x: 16,
        y: 16
    },
    {
        x: 12,
        y: 19
    },
    {
        x: 15,
        y: 17
    },
    {
        x: 22,
        y: 11
    },
    {
        x: 14,
        y: 18
    },
    {
        x: 15,
        y: 16
    },
    {
        x: 19,
        y: 14
    },
    {
        x: 14,
        y: 19
    },
    {
        x: 19,
        y: 19
    },
    {
        x: 15,
        y: 16
    },
    {
        x: 19,
        y: 18
    },
]

var data1 = [{
        x: 12,
        y: 11
    },
    {
        x: 33,
        y: 42
    },
    {
        x: 36,
        y: 55
    },
    {
        x: 38,
        y: 29
    },
    {
        x: 55,
        y: 65
    },
    {
        x: 31,
        y: 16
    },
    {
        x: 44,
        y: 76
    },
    {
        x: 11,
        y: 8
    },
    {
        x: 25,
        y: 20
    },
    {
        x: 25,
        y: 19
    },
    {
        x: 12,
        y: 11
    },
    {
        x: 17,
        y: 25
    },
    {
        x: 44,
        y: 34
    },
    {
        x: 5,
        y: 11
    },
    {
        x: 41,
        y: 56
    },
    {
        x: 11,
        y: 10
    },
    {
        x: 6,
        y: 5
    },
    {
        x: 21,
        y: 23
    },
    {
        x: 84,
        y: 103
    },
    {
        x: 14,
        y: 17
    },
    {
        x: 23,
        y: 23
    },
    {
        x: 16,
        y: 22
    },
    {
        x: 72,
        y: 73
    },
    {
        x: 15,
        y: 15
    },
    {
        x: 27,
        y: 33
    },
    {
        x: 8,
        y: 4
    },
    {
        x: 5,
        y: 6
    },
    {
        x: 33,
        y: 51
    },
    {
        x: 23,
        y: 21
    },
    {
        x: 66,
        y: 60
    },
    {
        x: 4,
        y: 1
    },
    {
        x: 15,
        y: 31
    },
    {
        x: 31,
        y: 27
    },
    {
        x: 18,
        y: 16
    },
    {
        x: 31,
        y: 27
    },
    {
        x: 17,
        y: 12
    },
    {
        x: 9,
        y: 18
    },
    {
        x: 40,
        y: 63
    },
    {
        x: 20,
        y: 12
    },
    {
        x: 22,
        y: 21
    },
    {
        x: 30,
        y: 37
    },
    {
        x: 47,
        y: 37
    },
    {
        x: 19,
        y: 25
    },
    {
        x: 39,
        y: 35
    },
    {
        x: 66,
        y: 79
    },
    {
        x: 14,
        y: 18
    },
    {
        x: 36,
        y: 25
    },
    {
        x: 38,
        y: 42
    },
    {
        x: 6,
        y: 1
    },
    {
        x: 25,
        y: 39
    },
    {
        x: 23,
        y: 29
    },
    {
        x: 46,
        y: 54
    },
    {
        x: 20,
        y: 27
    },
    {
        x: 22,
        y: 17
    },
    {
        x: 2,
        y: 1
    },
    {
        x: 4,
        y: 2
    },
    {
        x: 5,
        y: 8
    },
    {
        x: 10,
        y: 10
    },
    {
        x: 39,
        y: 45
    },
    {
        x: 11,
        y: 11
    },
    {
        x: 4,
        y: 13
    },
    {
        x: 30,
        y: 34
    },
    {
        x: 25,
        y: 18
    },
    {
        x: 6,
        y: 6
    },
    {
        x: 22,
        y: 36
    },
    {
        x: 5,
        y: 8
    },
    {
        x: 19,
        y: 45
    },
    {
        x: 9,
        y: 9
    },
    {
        x: 13,
        y: 19
    },
    {
        x: 53,
        y: 69
    },
    {
        x: 6,
        y: 5
    },
    {
        x: 18,
        y: 52
    },
    {
        x: 4,
        y: 16
    },
    {
        x: 14,
        y: 25
    },
    {
        x: 9,
        y: 7
    },
    {
        x: 3,
        y: 3
    },
    {
        x: 13,
        y: 11
    },
    {
        x: 14,
        y: 16
    },
    {
        x: 6,
        y: 3
    },
    {
        x: 19,
        y: 13
    },
    {
        x: 18,
        y: 11
    },
    {
        x: 23,
        y: 31
    },
    {
        x: 23,
        y: 21
    },
    {
        x: 23,
        y: 32
    },
    {
        x: 4,
        y: 5
    },
    {
        x: 10,
        y: 10
    },
    {
        x: 29,
        y: 26
    },
    {
        x: 15,
        y: 19
    },
    {
        x: 13,
        y: 8
    },
    {
        x: 19,
        y: 13
    },
    {
        x: 12,
        y: 8
    },
    {
        x: 16,
        y: 16
    },
    {
        x: 13,
        y: 10
    },
    {
        x: 10,
        y: 14
    },
    {
        x: 30,
        y: 28
    },
    {
        x: 13,
        y: 16
    },
    {
        x: 9,
        y: 8
    },
    {
        x: 22,
        y: 26
    },
    {
        x: 35,
        y: 25
    },
    {
        x: 7,
        y: 3
    },
    {
        x: 48,
        y: 51
    },
    {
        x: 17,
        y: 17
    },
    {
        x: 7,
        y: 4
    },
    {
        x: 14,
        y: 10
    },
    {
        x: 11,
        y: 10
    },
    {
        x: 24,
        y: 22
    },
    {
        x: 38,
        y: 32
    },
    {
        x: 21,
        y: 26
    },
    {
        x: 63,
        y: 68
    },
    {
        x: 16,
        y: 8
    },
    {
        x: 13,
        y: 15
    },
    {
        x: 10,
        y: 8
    },
    {
        x: 19,
        y: 11
    },
    {
        x: 10,
        y: 8
    },
    {
        x: 24,
        y: 13
    },
    {
        x: 6,
        y: 5
    },
    {
        x: 7,
        y: 4
    },
    {
        x: 25,
        y: 22
    },
    {
        x: 34,
        y: 37
    },
    {
        x: 36,
        y: 39
    },
    {
        x: 9,
        y: 10
    },
    {
        x: 12,
        y: 8
    },
    {
        x: 12,
        y: 8
    },
    {
        x: 16,
        y: 14
    },
    {
        x: 21,
        y: 6
    },
    {
        x: 41,
        y: 28
    },
    {
        x: 23,
        y: 15
    },
    {
        x: 9,
        y: 20
    },
    {
        x: 8,
        y: 6
    },
    {
        x: 26,
        y: 26
    },
    {
        x: 5,
        y: 8
    },
    {
        x: 12,
        y: 6
    },
    {
        x: 22,
        y: 16
    },
    {
        x: 5,
        y: 5
    },
    {
        x: 8,
        y: 6
    },
    {
        x: 18,
        y: 24
    },
    {
        x: 30,
        y: 18
    },
    {
        x: 4,
        y: 8
    },
    {
        x: 12,
        y: 12
    },
    {
        x: 12,
        y: 14
    },
    {
        x: 39,
        y: 44
    },
    {
        x: 11,
        y: 12
    },
    {
        x: 9,
        y: 8
    },
    {
        x: 20,
        y: 9
    },
    {
        x: 12,
        y: 13
    },
    {
        x: 14,
        y: 14
    },
    {
        x: 6,
        y: 4
    },
    {
        x: 6,
        y: 4
    },
    {
        x: 14,
        y: 20
    },
    {
        x: 10,
        y: 10
    },
    {
        x: 23,
        y: 16
    },
    {
        x: 14,
        y: 17
    },
    {
        x: 7,
        y: 5
    },
    {
        x: 16,
        y: 18
    },
    {
        x: 13,
        y: 18
    },
    {
        x: 7,
        y: 13
    },
    {
        x: 16,
        y: 15
    },
    {
        x: 10,
        y: 8
    },
    {
        x: 16,
        y: 18
    },
    {
        x: 8,
        y: 7
    },
    {
        x: 5,
        y: 3
    },
    {
        x: 15,
        y: 10
    },
    {
        x: 5,
        y: 4
    },
    {
        x: 10,
        y: 9
    },
    {
        x: 5,
        y: 4
    },
    {
        x: 11,
        y: 7
    },
    {
        x: 2,
        y: 2
    },
    {
        x: 2,
        y: 2
    },
    {
        x: 10,
        y: 4
    },
    {
        x: 4,
        y: 6
    },
    {
        x: 18,
        y: 33
    },
    {
        x: 6,
        y: 11
    },
    {
        x: 12,
        y: 14
    },
    {
        x: 6,
        y: 6
    },
    {
        x: 12,
        y: 9
    },
    {
        x: 8,
        y: 6
    },
    {
        x: 12,
        y: 17
    },
    {
        x: 3,
        y: 4
    },
    {
        x: 12,
        y: 6
    },
    {
        x: 12,
        y: 16
    },
    {
        x: 13,
        y: 15
    },
    {
        x: 14,
        y: 12
    },
    {
        x: 13,
        y: 3
    },
    {
        x: 9,
        y: 10
    },
    {
        x: 11,
        y: 2
    },
    {
        x: 14,
        y: 10
    },
    {
        x: 24,
        y: 20
    },
    {
        x: 13,
        y: 14
    },
    {
        x: 6,
        y: 7
    },
    {
        x: 7,
        y: 6
    },
    {
        x: 24,
        y: 14
    },
    {
        x: 0,
        y: 1
    },
    {
        x: 11,
        y: 4
    },
    {
        x: 18,
        y: 18
    },
    {
        x: 8,
        y: 7
    },
    {
        x: 8,
        y: 10
    },
    {
        x: 16,
        y: 13
    },
    {
        x: 11,
        y: 14
    },
    {
        x: 7,
        y: 6
    },
    {
        x: 18,
        y: 14
    },
    {
        x: 5,
        y: 5
    },
    {
        x: 6,
        y: 6
    },
    {
        x: 0,
        y: 2
    },
    {
        x: 7,
        y: 7
    },
    {
        x: 7,
        y: 6
    },
    {
        x: 6,
        y: 5
    },
    {
        x: 3,
        y: 5
    },
    {
        x: 4,
        y: 5
    },
    {
        x: 3,
        y: 4
    },
    {
        x: 6,
        y: 7
    },
    {
        x: 7,
        y: 7
    },
    {
        x: 7,
        y: 3
    },
    {
        x: 9,
        y: 3
    },
    {
        x: 7,
        y: 5
    },
    {
        x: 3,
        y: 2
    },
    {
        x: 10,
        y: 6
    },
    {
        x: 12,
        y: 9
    },
    {
        x: 7,
        y: 3
    },
    {
        x: 5,
        y: 3
    },
    {
        x: 9,
        y: 9
    },
    {
        x: 13,
        y: 7
    },
    {
        x: 16,
        y: 8
    },
    {
        x: 5,
        y: 3
    },
    {
        x: 10,
        y: 4
    },
    {
        x: 9,
        y: 7
    },
    {
        x: 6,
        y: 2
    },
    {
        x: 11,
        y: 5
    },
    {
        x: 7,
        y: 6
    },
    {
        x: 5,
        y: 2
    },
    {
        x: 8,
        y: 5
    },
    {
        x: 7,
        y: 3
    },
    {
        x: 3,
        y: 2
    },
    {
        x: 10,
        y: 6
    },
    {
        x: 5,
        y: 3
    },
    {
        x: 3,
        y: 2
    },
    {
        x: 3,
        y: 2
    },
    {
        x: 19,
        y: 7
    },
    {
        x: 6,
        y: 6
    },
    {
        x: 6,
        y: 3
    },
    {
        x: 5,
        y: 1
    },
    {
        x: 1,
        y: 1
    },
    {
        x: 3,
        y: 1
    },
    {
        x: 6,
        y: 7
    },
    {
        x: 15,
        y: 10
    },
    {
        x: 3,
        y: 1
    },
    {
        x: 5,
        y: 1
    },
    {
        x: 1,
        y: 1
    },
    {
        x: 3,
        y: 2
    },
    {
        x: 6,
        y: 2
    },
    {
        x: 7,
        y: 4
    },
    {
        x: 7,
        y: 5
    },
    {
        x: 1,
        y: 5
    },
    {
        x: 8,
        y: 5
    },
    {
        x: 4,
        y: 5
    },
    {
        x: 3,
        y: 0
    },
    {
        x: 2,
        y: 1
    },
    {
        x: 9,
        y: 3
    },
    {
        x: 4,
        y: 2
    },
    {
        x: 1,
        y: 0
    },
    {
        x: 2,
        y: 1
    },
    {
        x: 6,
        y: 0
    }
]; // Add data values to array
// End Defining data


document.getElementById("corr").addEventListener("click", function () {
    lineChart.destroy();
    lineChart = new Chart(document.getElementById("InOutDeg"), {
        type: 'scatter',
        data: {
            datasets: [{
                labels: names,
                label: 'Warcraft Network', // Name the series
                data: data1, // Specify the data values array
                pointBackgroundColor: singleChartColor[2],
                backgroundColor: singleChartColor[2],
                borderColor: singleChartColor[2],
            }, {
                label: 'Random Network', // Name the series
                data: data2, // Specify the data values array
                pointBackgroundColor: singleChartColor_2[2],
                backgroundColor: singleChartColor_2[2],
                borderColor: singleChartColor_2[2],
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Correlation Between In- and Out-degree'
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        var dataset = data.datasets[tooltipItem.datasetIndex]
                        var index = tooltipItem.index
                        // var label = data.labels[tooltipItem.index];
                        if ('labels' in dataset) {
                            var label = dataset.labels[index]
                            return label + ' (' + tooltipItem.xLabel + ', ' + tooltipItem.yLabel + ')';
                        } else {
                            return '(' + tooltipItem.xLabel + ', ' + tooltipItem.yLabel + ')'
                        }
                    }
                }
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Out-degree'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'In-degree'
                    }
                }]
            }
        }
    });
});