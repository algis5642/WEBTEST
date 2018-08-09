let metalas;
let itampa;
let apkrova;
let ilgis;

let lentele = {
    "varis": {
        "mazas": [
            {
                "range": [0, 4.1],
                "diameter": 1.5
            },

            {
                "range": [4.1, 5.9],
                "diameter": 2.5
            },
            {
                "range": [5.9, 8.3],
                "diameter": 4
            },
            {
                "range": [8.3, 10.1],
                "diameter": 6
            },
            {
                "range": [10.1, 15.4],
                "diameter": 10
            },
            {
                "range": [15.4, 18.7],
                "diameter": 16
            }, {
                "range": [18.7, 25.3],
                "diameter": 25
            }, {
                "range": [25.3, 29.7],
                "diameter": 35
            },
            {
                "range": [29.7, 38.5],
                "diameter": 50
            },
            {
                "range": [38.5, 47.3],
                "diameter": 70
            },
            {
                "range": [47.3, 57.2],
                "diameter": 95
            },
            {
                "range": [57.2, 66],
                "diameter": 120
            }],
        "didelis": [
            {
                "range": [0, 10.5],
                "diameter": 1.5
            },

            {
                "range": [10.5, 16.5],
                "diameter": 2.5
            },
            {
                "range": [16.5, 19.8],
                "diameter": 4
            },
            {
                "range": [19.8, 26.4],
                "diameter": 6
            },
            {
                "range": [26.4, 33],
                "diameter": 10
            },
            {
                "range": [33, 49.5],
                "diameter": 16
            }, {
                "range": [49.5, 59.4],
                "diameter": 25
            }, {
                "range": [59.4, 75.9],
                "diameter": 35
            },
            {
                "range": [75.9, 95.7],
                "diameter": 50
            },
            {
                "range": [97.7, 118.8],
                "diameter": 70
            },
            {
                "range": [118.8, 145.2],
                "diameter": 95
            },
            {
                "range": [145.2, 171.6],
                "diameter": 120
            }

        ]
    },


    "aliuminis":
        {
            "mazas":
                [
                    {
                        "range": [0, 4.4],
                        "diameter": 2.5
                    },
                    {
                        "range": [4.4, 6.1],
                        "diameter": 4
                    },
                    {
                        "range": [6.1, 7.9],
                        "diameter": 6
                    },
                    {
                        "range": [7.9, 11],
                        "diameter": 10
                    },
                    {
                        "range": [11, 13.2],
                        "diameter": 16
                    }, {
                    "range": [13.2, 18.7],
                    "diameter": 25
                }, {
                    "range": [18.7, 22],
                    "diameter": 35
                },
                    {
                        "range": [22, 29.7],
                        "diameter": 50
                    },
                    {
                        "range": [29.7, 36.3],
                        "diameter": 70
                    },
                    {
                        "range": [36.3, 44],
                        "diameter": 95
                    },
                    {
                        "range": [44, 50.6],
                        "diameter": 120
                    }],
            "didelis":
                [
                    {
                        "range": [0, 12.5],
                        "diameter": 2.5
                    },
                    {
                        "range": [12.5, 15.1],
                        "diameter": 4
                    },
                    {
                        "range": [15.1, 19.8],
                        "diameter": 6
                    },
                    {
                        "range": [19.8, 25.7],
                        "diameter": 10
                    },
                    {
                        "range": [25.7, 36.3],
                        "diameter": 16
                    },
                    {
                        "range": [36.3, 46.2],
                        "diameter": 25
                    }, {
                    "range": [46.2, 56.1],
                    "diameter": 35
                },
                    {
                        "range": [56.1, 72.6],
                        "diameter": 50
                    },
                    {
                        "range": [72.6, 92.4],
                        "diameter": 70
                    },
                    {
                        "range": [92.4, 112.2],
                        "diameter": 95
                    },
                    {
                        "range": [112.2, 132],
                        "diameter": 120
                    }

                ]
        }
};

function skaiciuoti() {

    metalas = document.getElementById("metalas").value;
    itampa = document.getElementById("itampa").value;
    apkrova = document.getElementById("apkrova").value;
    let radau = false;
    let parinktaLentele = lentele[metalas];
    let parinktasGalingumas = parinktaLentele[itampa]
    for (let i = 0 ; i< parinktasGalingumas.length; i++){
        let range = parinktasGalingumas[i];
        if (apkrova >= range.range[0] && apkrova < range.range[1]){
            document.getElementById('rez').innerHTML = range.diameter;
            radau = true;
            break;
        }
    }
    if (!radau){
        if (apkrova < 0)
        document.getElementById('rez').innerHTML = "Nurodoma galia negali būti neigiama!";
        else{

            document.getElementById('rez').innerHTML = "Nurodyta vertė nerasta!";
        }

    }


}