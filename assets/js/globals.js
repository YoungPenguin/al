// const labelToColor = {
//     'Horde': '#FF3333',
//     'Alliance': '#3399FF',
//     'Neutral': '#A0A0A0',
//     'Male': '#3399FF',
//     'Female': '#D44ACC',
//     'Alive': '#27CF1F',
//     'Deceased': '#A0A0A0',
//     "Khadgar, Illidan, Lor'themar": '#808000',
//     "Deathwing, Sargeras, Yogg-Saron": '#ff4500',
//     "Sylvanas, Lich King, Varian Wrynn": '#c71585',
//     "Tyrande, Malfurion, Alexstrasza": '#00ff00	',
//     "Thrall, Ner'zhul, Orgrim": '#00ffff',
//     "Anzu, Terokk, Talon King Ikiss": '#0000ff',
//     "Jaina Proudmoore, Anduin Wrynn, Garrosh": '#1e90ff'
// }

const shortCommunityName = (s) => s.replace(' Stormrage', '').replace(' Windrunner', '').replace(' Theron', '').replace(' Whisperwind', '').replace(' Doomhammer', '').replace(' Hellscream', '').replace(' Wrynn', '').replace(' Proudmoore', '')

const labelToRGB = {
    'Alive': ['rgb(34, 139, 34)', 'rgba(34, 139, 34, 0.2)'],
    'Deceased': ['rgb(52, 52, 52)', 'rgba(52, 52, 52, 0.2)'],
    'Unknown': ['rgb(160, 160, 160)', 'rgba(160, 160, 160, 0.2)'],
    'Alliance': ['rgb(51, 153, 255)', 'rgba(51, 153, 255, 0.2)'],
    'Horde': ['rgb(255, 51, 51)', 'rgba(255, 51, 51, 0.2)'],
    'Neutral': ['rgb(160, 160, 160)', 'rgba(160, 160, 160, 0.2)'],
    'Male': ['rgb(0, 105, 209)', 'rgba(0, 105, 209, 0.2)'],
    'Female': ['rgb(212, 74, 204)', 'rgba(212, 74, 204, 0.2)'],
    "Khadgar, Illidan, Lor'themar": ['#62704d', '--'],
    "Deathwing, Sargeras, Yogg-Saron": ['#53868b', '--'],
    "Sylvanas, Lich King, Varian": ['#8e635e', '--'],
    "Tyrande, Malfurion, Alexstrasza": ['#f5a791', '--'],
    "Thrall, Ner'zhul, Orgrim": ['#8c7549', '--'],
    "Anzu, Terokk, Talon King Ikiss": ['#b3c598', '--'],
    "Jaina, Anduin, Garrosh": ['#432f20', '--']
}



const singleChartColor = ['rgb(149, 125, 173)', 'rgba(149, 125, 173, 0.3)', 'rgba(149, 125, 173, 0.6)']
const singleChartColor_2 = ['rgb(0, 138, 216)', 'rgba(0, 138, 216, 0.3)', 'rgba(0, 138, 216, 0.6)']
