'use strict'

const data = [
    {
        "State": "ABIA",
        "Labour Force Population": "1,949,938",
        "Total Employed": 1474151
    },
    {
        "State": "ADAMAWA",
        "Labour Force Population": "1,468,680",
        "Total Employed": 1382205
    },
    {
        "State": "AKWA_IBOM",
        "Labour Force Population": "3,269,128",
        "Total Employed": 2239684
    },
    {
        "State": "ANAMBRA",
        "Labour Force Population": "3,058,884",
        "Total Employed": 2697927
    },
    {
        "State": "BAUCHI",
        "Labour Force Population": "1,855,333",
        "Total Employed": 1710102
    },
    {
        "State": "BAYELSA",
        "Labour Force Population": "1,245,522",
        "Total Employed": 920014
    },
    {
        "State": "BENUE",
        "Labour Force Population": "2,408,883",
        "Total Employed": 2186486
    },
    {
        "State": "BORNO",
        "Labour Force Population": "2,241,422",
        "Total Employed": 1788143
    },
    {
        "State": "CROSS_RIVER",
        "Labour Force Population": "1,774,727",
        "Total Employed": 1465209
    },
    {
        "State": "DELTA",
        "Labour Force Population": "2,905,333",
        "Total Employed": 2456903
    },
    {
        "State": "EBONYI",
        "Labour Force Population": "1,417,750",
        "Total Employed": 1191825
    },
    {
        "State": "EDO",
        "Labour Force Population": "1,952,698",
        "Total Employed": 1616326
    },
    {
        "State": "EKITI",
        "Labour Force Population": "1,704,131",
        "Total Employed": 1490957
    },
    {
        "State": "ENUGU",
        "Labour Force Population": "2,335,772",
        "Total Employed": 1929782
    },
    {
        "State": "GOMBE",
        "Labour Force Population": "830,879",
        "Total Employed": 752531
    },
    {
        "State": "IMO",
        "Labour Force Population": "2,887,423",
        "Total Employed": 2154948
    },
    {
        "State": "JIGAWA",
        "Labour Force Population": "1,390,858",
        "Total Employed": 1158087
    },
    {
        "State": "KADUNA",
        "Labour Force Population": "3,218,256",
        "Total Employed": 2416788
    },
    {
        "State": "KANO",
        "Labour Force Population": "3,666,624",
        "Total Employed": 3045220
    },
    {
        "State": "KATSINA",
        "Labour Force Population": "1,693,271",
        "Total Employed": 1646524
    },
    {
        "State": "KEBBI",
        "Labour Force Population": "1,457,730",
        "Total Employed": 1357225
    },
    {
        "State": "KOGI",
        "Labour Force Population": "2,289,105",
        "Total Employed": 1866795
    },
    {
        "State": "KWARA",
        "Labour Force Population": "1,491,639",
        "Total Employed": 1321468
    },
    {
        "State": "LAGOS",
        "Labour Force Population": "7,026,700",
        "Total Employed": 5952883
    },
    {
        "State": "NASARAWA",
        "Labour Force Population": "1,256,529",
        "Total Employed": 943422
    },
    {
        "State": "NIGER",
        "Labour Force Population": "1,783,690",
        "Total Employed": 1621400
    },
    {
        "State": "OGUN",
        "Labour Force Population": "2,967,100",
        "Total Employed": 2719893
    },
    {
        "State": "ONDO",
        "Labour Force Population": "2,355,144",
        "Total Employed": 2223884
    },
    {
        "State": "OSUN",
        "Labour Force Population": "2,331,077",
        "Total Employed": 2223884
    },
    {
        "State": "OYO",
        "Labour Force Population": "3,850,116",
        "Total Employed": 3546340
    },
    {
        "State": "PLATEAU",
        "Labour Force Population": "1,913,669",
        "Total Employed": 1493600
    },
    {
        "State": "RIVERS",
        "Labour Force Population": "4,246,230",
        "Total Employed": 2718487
    },
    {
        "State": "SOKOTO",
        "Labour Force Population": "1,543,193",
        "Total Employed": 1296328
    },
    {
        "State": "TARABA",
        "Labour Force Population": "2,133,754",
        "Total Employed": 2001590
    },
    {
        "State": "YOBE",
        "Labour Force Population": "1,024,840",
        "Total Employed": 836456
    },
    {
        "State": "ZAMFARA",
        "Labour Force Population": "1,385,908",
        "Total Employed": 1295619
    },
    {
        "State": "FCT",
        "Labour Force Population": "1,608,152",
        "Total Employed": 1394480
    }
]

function openModal(element) {
    document.querySelector('.modal').classList.add('reveal')
    let temp = data.find(item => item['State'].toLowerCase() === element.getAttribute('name').toLowerCase())

    // document.querySelector('.modal-image').innerHTML = ''
    // document.querySelector('.modal-image').appendChild(element)
    document.querySelector('.modal-title').textContent = temp.State
    document.querySelector('.modal-data').textContent = 'Labour Force Population: ' + temp['Labour Force Population'] + '\nTotal Employed: ' + temp['Total Employed'] 
}

document.querySelector('#fct').addEventListener('click', () => {
})

document.querySelector('.modal').addEventListener('click', (e) => {
    if (!document.querySelector(".modal-container").contains(e.target)) {
        document.querySelector('.modal').classList.remove('reveal')
    }
})

