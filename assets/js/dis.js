
var gender_labels = ['Female', 'Male', 'Unknown']
var fraction_labels = ['Alliance', 'Horde', 'Neutral']
var status_lables = ['Alive', 'Deceased', 'Unknown']
var race_labels = [
    'Air Elemental', 'Ancient Guardian', 'Annihilan', 'Arakkoa',
    'August Celestial', 'Bear', 'Black Drake', 'Blood Elf',
    'Blue Drake', 'Boar', 'Broken', 'Bronze Drake', 'Constellar',
    'Crypt Lord', 'Dark Iron Dwarf', 'Demon', 'Draenei', 'Dread Raven',
    'Drogbar', 'Dwarf', 'Earth Elemental', 'Fel Lord', 'Fel Orc',
    'Fire Elemental', 'Forest Troll', 'Forsaken', 'Frost Wyrm',
    'Gnome', 'Goblin', 'God', 'Green Drake', 'Gronn', 'Half-Elf',
    'Half-Ogre', 'Half-Orc', 'High Elf', 'Highmountain Tauren',
    'Hozen', 'Human', 'Ironforge Dwarf', 'Jungle Troll',
    'Keeper Of The Grove', 'Kyrian', 'Lich', 'Loa', "Mag'Har Orc",
    'Maldraxxi', "Man'Ari Eredar", 'Mantid', 'Mogu', "Mok'Nathal",
    'Mountain Dwarf', 'Naaru', 'Naga', 'Nathrezim', 'Night Elf',
    'Nightborne', 'Ogre', 'Ogre Mage', 'Old God', 'Orc', 'Pandaren',
    'Proto-Drake', 'Red Drake', 'Satyr', 'Stag', 'Tauren', 'Titan',
    'Titanic Watcher', 'Turtle', 'Undead', "Val'Kyr", 'Void Elf',
    'Vrykul', 'Water Elemental', 'Wild God', 'Wildhammer Dwarf',
    'Wisp', 'Worgen', 'Zandalari Troll'
]
// get colors from https://colorcodes.io/
var race_colors = [
    'rgb(231, 241, 245)',   // air element
    'rgb(34, 139, 34)',     // ancient guardian
    'rgb(134, 1, 17)',      // annihilan
    'rgb(105, 105, 105)',   // Arakkoa
    'rgb(8, 146, 208)',     // August celestial
    'rgb(101, 56, 24)',     // Bear
    'rgb(39, 37, 31)',      // Black Drake
    'rgb(218, 165, 32)',    // Blood Elf
    'rgb(8, 146, 208)',     // Blue Drake
    'rgb(85, 51, 34)',      // Boar
    'rgb(177, 156, 217)',   // Broken
    'rgb(227, 175, 102)',   // Bronze Drake
    'rgb(8, 146, 208)',     // Constellar
    'rgb(48, 25, 52)',      // Crypt Lord
    'rgb(45, 48, 51)',      // Dark Iron Dwarf
    'rgb(134, 1, 17)',      // Demon
    'rgb(127, 100, 171)',   // Draenei
    'rgb(0, 53, 158)',      // Dread Raven
    'rgb(211,188,141)',     // Drogbar
    'rgb(240, 221, 215)',   // Dwarf
    'rgb(122, 59, 35)',     // Earth Elemental
    'rgb(115, 211, 0)',     // Fel Lord
    'rgb(115, 211, 0)',     // Fel Orc
    'rgb(199, 0, 0)',       // Fire Elemental
    'rgb(25, 84, 62)',      // Forest Troll
    'rgb(189, 184, 177)',   // Forsaken
    'rgb(187, 236, 242)',   // Frost Wyrm
    'rgb(240, 221, 215)',   // Gnome
    'rgb(44, 81, 0)',       // Goblin
    'rgb(162, 197, 235)',   // God
    'rgb(0, 168, 129)',     // Green Drake
    'rgb(196, 127, 43)',    // Gronn
    'rgb(104, 71, 141)',    // Half-Elf
    'rgb(211, 188, 141)',   // Half-ogre
    'rgb(196, 127, 43)',    // Half-orc
    'rgb(104, 71, 141)',    // High elf
    'rgb(89, 49, 32)',      // Highmountain Tauren
    'rgb(164, 116, 73)',    // Hozen
    'rgb(244, 191, 190)',   // Human
    'rgb(45, 48, 51)',      // Ironforge Dwarf
    'rgb(25, 84, 62)',      // Jungle Troll
    'rgb(56, 110, 31)',     // Keeper Of The Grove
    'rgb(230, 153, 0)',     // Kyrian
    'rgb(189, 184, 177)',   // Lich
    'rgb(25, 84, 62)',      // Loa
    'rgb(92, 62, 42)',      // Mag'Har Orc
    'rgb(87, 156, 121)',    // Maldraxxi
    'rgb(187, 0, 0)',       // Man'Ari Eredar
    'rgb(115, 211, 0)',     // Mantid
    'rgb(183, 119, 41)',    // Mogu
    'rgb(211, 188, 141)',   // Mok'Nathal
    'rgb(45, 48, 51)',      // Mountain Dwarf
    'rgb(254, 252, 215)',   // Naaru
    'rgb(124, 131, 188)',   // Naga
    'rgb(134, 1, 17)',      // Nathrezim
    'rgb(104, 71, 141)',    // Night Elf
    'rgb(104, 71, 141)',    // Nightborne
    'rgb(211, 188, 141)',   // Ogre
    'rgb(211, 188, 141)',   // Ogre Mage
    'rgb(21, 71, 52)',      // Old God
    'rgb(92, 62, 42)',      // Orc
    'rgb(194, 200, 207)',   // Pandaren
    'rgb(8, 146, 208)',     // Proto-Drake
    'rgb(187, 0, 0)',       // Red Drake
    'rgb(190, 159, 103)',   // Satyr
    'rgb(190, 159, 103)',   // Stag
    'rgb(89, 49, 32)',      // Tauren
    'rgb(67, 70, 75)',      // Titan
    'rgb(67, 70, 75)',      // Titanic Watcher
    'rgb(83, 58, 27)',      // Turtle
    'rgb(189, 184, 177)',   // Undead
    'rgb(138, 141, 143)',   // Val'Kyr
    'rgb(104, 71, 141)',    // Void Elf
    'rgb(150, 116, 68)',    // Vrykul
    'rgb(0, 138, 216)',     // Water Elemental
    'rgb(21, 71, 52)',      // Wild God
    'rgb(45, 48, 51)',      // Wildhammer Dwarf
    'rgb(123, 178, 221)',   // Wisp
    'rgb(83, 86, 91)',      // Worgen
    'rgb(25, 84, 62)',      // Zandalari Troll
]
var race_backgroundcolors = [
    'rgba(231, 241, 245, 0.3)',   // air element
    'rgba(34, 139, 34, 0.3)',     // ancient guardian
    'rgba(134, 1, 17, 0.3)',      // annihilan
    'rgba(105, 105, 105, 0.3)',   // Arakkoa
    'rgba(8, 146, 208, 0.3)',     // August celestial
    'rgba(101, 56, 24, 0.3)',     // Bear
    'rgba(39, 37, 31, 0.3)',      // Black Drake
    'rgba(218, 165, 32, 0.3)',    // Blood Elf
    'rgba(8, 146, 208, 0.3)',     // Blue Drake
    'rgba(85, 51, 34, 0.3)',      // Boar
    'rgba(177, 156, 217, 0.3)',   // Broken
    'rgba(227, 175, 102, 0.3)',   // Bronze Drake
    'rgba(8, 146, 208, 0.3)',     // Constellar
    'rgba(48, 25, 52, 0.3)',      // Crypt Lord
    'rgba(45, 48, 51, 0.3)',      // Dark Iron Dwarf
    'rgba(134, 1, 17, 0.3)',      // Demon
    'rgba(127, 100, 171, 0.3)',   // Draenei
    'rgba(0, 53, 158, 0.3)',      // Dread Raven
    'rgba(211,188,141, 0.3)',     // Drogbar
    'rgba(240, 221, 215, 0.3)',   // Dwarf
    'rgba(122, 59, 35, 0.3)',     // Earth Elemental
    'rgba(115, 211, 0, 0.3)',     // Fel Lord
    'rgba(115, 211, 0, 0.3)',     // Fel Orc
    'rgba(199, 0, 0, 0.3)',       // Fire Elemental
    'rgba(25, 84, 62, 0.3)',      // Forest Troll
    'rgba(189, 184, 177, 0.3)',   // Forsaken
    'rgba(187, 236, 242, 0.3)',   // Frost Wyrm
    'rgba(240, 221, 215, 0.3)',   // Gnome
    'rgba(44, 81, 0, 0.3)',       // Goblin
    'rgba(162, 197, 235, 0.3)',   // God
    'rgba(0, 168, 129, 0.3)',     // Green Drake
    'rgba(196, 127, 43, 0.3)',    // Gronn
    'rgba(104, 71, 141, 0.3)',    // Half-Elf
    'rgba(211, 188, 141, 0.3)',   // Half-ogre
    'rgba(196, 127, 43, 0.3)',    // Half-orc
    'rgba(104, 71, 141, 0.3)',    // High elf
    'rgba(89, 49, 32, 0.3)',      // Highmountain Tauren
    'rgba(164, 116, 73, 0.3)',    // Hozen
    'rgba(244, 191, 190, 0.3)',   // Human
    'rgba(45, 48, 51, 0.3)',      // Ironforge Dwarf
    'rgba(25, 84, 62, 0.3)',      // Jungle Troll
    'rgba(56, 110, 31, 0.3)',     // Keeper Of The Grove
    'rgba(230, 153, 0, 0.3)',     // Kyrian
    'rgba(189, 184, 177, 0.3)',   // Lich
    'rgba(25, 84, 62, 0.3)',      // Loa
    'rgba(92, 62, 42, 0.3',       // Mag'Har Orc
    'rgba(87, 156, 121, 0.3)',    // Maldraxxi
    'rgba(187, 0, 0, 0.3)',       // Man'Ari Eredar
    'rgba(115, 211, 0, 0.3)',     // Mantid
    'rgba(183, 119, 41, 0.3)',    // Mogu
    'rgba(211, 188, 141, 0.3)',   // Mok'Nathal
    'rgba(45, 48, 51, 0.3)',      // Mountain Dwarf
    'rgba(254, 252, 215, 0.3)',   // Naaru
    'rgba(124, 131, 188, 0.3)',   // Naga
    'rgba(134, 1, 17, 0.3)',      // Nathrezim
    'rgba(104, 71, 141, 0.3)',    // Night Elf
    'rgba(104, 71, 141, 0.3)',    // Nightborne
    'rgba(211, 188, 141, 0.3)',   // Ogre
    'rgba(211, 188, 141, 0.3)',   // Ogre Mage
    'rgba(21, 71, 52, 0.3)',      // Old God
    'rgba(92, 62, 42, 0.3)',      // Orc
    'rgba(194, 200, 207, 0.3)',   // Pandaren
    'rgba(8, 146, 208, 0.3)',     // Proto-Drake
    'rgba(187, 0, 0, 0.3)',       // Red Drake
    'rgba(190, 159, 103, 0.3)',   // Satyr
    'rgba(190, 159, 103, 0.3)',   // Stag
    'rgba(89, 49, 32, 0.3)',      // Tauren
    'rgba(67, 70, 75, 0.3)',      // Titan
    'rgba(67, 70, 75, 0.3)',      // Titanic Watcher
    'rgba(83, 58, 27, 0.3)',      // Turtle
    'rgba(189, 184, 177, 0.3)',   // Undead
    'rgba(138, 141, 143, 0.3)',   // Val'Kyr
    'rgba(104, 71, 141, 0.3)',    // Void Elf
    'rgba(150, 116, 68, 0.3)',    // Vrykul
    'rgba(0, 138, 216, 0.3)',     // Water Elemental
    'rgba(21, 71, 52, 0.3)',      // Wild God
    'rgba(45, 48, 51, 0.3)',      // Wildhammer Dwarf
    'rgba(123, 178, 221, 0.3)',   // Wisp
    'rgba(83, 86, 91, 0.3)',      // Worgen
    'rgba(25, 84, 62, 0.3)',      // Zandalari Troll
]


var chr = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var options = {
    scales: { 
        yAxes: [{ ticks: { beginAtZero: true } }],
        xAxes: [{ 
            ticks: { 
                autoSkip: false,
                maxRotation: 0,
                minRotation: 0 
            }
        }]
    },
    legend: {
        display: false
    },
}
var data = {
    type: "bar",
    data: {
        labels: race_labels,
        datasets: [{
            data: [
                2, 1, 3, 2, 4, 2, 7, 9, 5, 1, 1, 5, 1, 1, 1, 1, 3,
                1, 2, 2, 1, 1, 2, 2, 1, 7, 1, 3, 1, 1, 2, 1, 3, 1,
                2, 4, 6, 1, 36, 2, 5, 3, 1, 1, 1, 3, 2, 2, 1, 1, 1,
                2, 6, 1, 4, 9, 2, 1, 3, 4, 19, 9, 1, 3, 1, 1, 7, 7,
                8, 1, 1, 3, 2, 1, 1, 2, 2, 1, 2, 4
            ],
            borderColor: race_colors,
            backgroundColor: race_backgroundcolors,
            borderWidth: 1,
        }]
    },
    options: {
        scales: { 
            yAxes: [{ ticks: { beginAtZero: true } }],
            xAxes: [{ 
                ticks: { 
                    autoSkip: false,
                    maxRotation: 90,
                    minRotation: 90 
                }
            }]
        },
        legend: {
            display: false
        },
    }
};

var barchr = new Chart(ctx, data);
document.getElementById("gender").addEventListener("click", function () {
    barchr.data = {
        labels: gender_labels,
        datasets: [{
            data: [48, 199, 14],
            borderColor: [
                labelToRGB['Female'][0],
                labelToRGB['Male'][0],
                labelToRGB['Unknown'][0],
            ],
            backgroundColor: [
                labelToRGB['Female'][1],
                labelToRGB['Male'][1],
                labelToRGB['Unknown'][1],
            ],
            borderWidth: 1
        }],
    }
    barchr.options = options
    barchr.update();
});

document.getElementById("fraction").addEventListener("click", function () {
    barchr.data = {
        labels: fraction_labels,
        datasets: [{
            data: [41, 41, 179],
            borderColor: [
                labelToRGB['Alliance'][0],
                labelToRGB['Horde'][0],
                labelToRGB['Neutral'][0],
            ],
            backgroundColor: [
                labelToRGB['Alliance'][1],
                labelToRGB['Horde'][1],
                labelToRGB['Neutral'][1],
            ],
            borderWidth: 1
        }],
    }
    barchr.options = options
    barchr.update();
});

document.getElementById("status").addEventListener("click", function () {
    barchr.config.data = {
        labels: status_lables,
        datasets: [{
            data: [150, 107, 4],
            borderColor: [
                labelToRGB['Alive'][0],
                labelToRGB['Deceased'][0],
                labelToRGB['Unknown'][0],
            ],
            backgroundColor: [
                labelToRGB['Alive'][1],
                labelToRGB['Deceased'][1],
                labelToRGB['Unknown'][1],
            ],
            borderWidth: 1
        }],
    }
    barchr.options = options
    barchr.update();
});

document.getElementById("race").addEventListener("click", function () {
    barchr.config.data = {
        labels: race_labels,
        datasets: [{
            data: [
                2, 1, 3, 2, 4, 2, 7, 9, 5, 1, 1, 5, 1, 1, 1, 1, 3,
                1, 2, 2, 1, 1, 2, 2, 1, 7, 1, 3, 1, 1, 2, 1, 3, 1,
                2, 4, 6, 1, 36, 2, 5, 3, 1, 1, 1, 3, 2, 2, 1, 1, 1,
                2, 6, 1, 4, 9, 2, 1, 3, 4, 19, 9, 1, 3, 1, 1, 7, 7,
                8, 1, 1, 3, 2, 1, 1, 2, 2, 1, 2, 4
            ],
            borderColor: race_colors,
            backgroundColor: race_backgroundcolors,
            borderWidth: 1,
        }],
    }
    barchr.options = {
        scales: { 
            yAxes: [{ ticks: { beginAtZero: true } }],
            xAxes: [{ 
                ticks: { 
                    autoSkip: false,
                    maxRotation: 90,
                    minRotation: 90 
                }
            }]
        },
        legend: {
            display: false
        },
    }
    barchr.update();
});