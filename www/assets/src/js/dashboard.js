const getUserChartInfos = () => {

    let today = new Date()
    let lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 14)
    lastWeek = lastWeek.toISOString().split('T')[0]
    let params = ['createdAt', lastWeek, '>']

     fetch(`http://localhost/get-users?params=${encodeURIComponent(JSON.stringify(params))}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'GET',
    }).then((r) => {
        return r.json();
    }).then((data) => {
        let userTab = []
        data.forEach(elem => {
            let date = elem.createdAt.split(' ')
            if (userTab[date[0]]) {
                userTab[date[0]].value++
            } else {
                userTab[date[0]] = {
                    "date": date[0],
                    "value": 1
                }
            }
        })
        buildChart(userTab, "userChart")
    }).catch((error) => {
        console.log('Erreur : ' + error);
    });

     fetch(`http://localhost/get-articles?params=${encodeURIComponent(JSON.stringify(params))}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'GET',
    }).then((r) => {
        return r.json();
    }).then((data) => {
        let articleTab = []
        data.forEach(elem => {
            let date = elem["article_createdAt"].split(' ')
            if (articleTab[date[0]]) {
                articleTab[date[0]].value++
            } else {
                articleTab[date[0]] = {
                    "date": date[0],
                    "value": 1
                }
            }
        })
        buildChart(articleTab, "articleChart")
    }).catch((error) => {
        console.log('Erreur : ' + error);
    });
}

const buildChart = (data, divId) => {
    let root = am5.Root.new(divId);

    root.setThemes([
        am5themes_Animated.new(root)
    ]);

    root.dateFormatter.setAll({
        dateFormat: "yyyy",
        dateFields: ["valueX"]
    });

    let result = []

    for (const key in data) {
        result.push(data[key])
    }

    data = result

    data.sort((a,b) => {
        a = new Date(a.date)
        b = new Date(b.date)
        return a - b
    })

    let chart = root.container.children.push(am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "panX",
        wheelY: "zoomX"
    }));

    let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
        behavior: "zoomX"
    }));
    cursor.lineY.set("visible", false);

    let date = new Date();
    date.setHours(0, 0, 0, 0);
    let value = 100;

    function generateData() {
        value = Math.round((Math.random() * 10 - 5) + value);
        am5.time.add(date, "day", 1);
        return {
            date: date.getTime(),
            value: value
        };
    }

    function generateDatas(count) {
        let data = [];
        for (let i = 0; i < count; ++i) {
            data.push(generateData());
        }
        return data;
    }

    let xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
        maxDeviation: 0,
        baseInterval: {
            timeUnit: "day",
            count: 1
        },
        renderer: am5xy.AxisRendererX.new(root, {}),
        tooltip: am5.Tooltip.new(root, {})
    }));

    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {})
    }));

    let series = chart.series.push(am5xy.ColumnSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        valueXField: "date",
        tooltip: am5.Tooltip.new(root, {
            labelText: "{valueY}"
        })
    }));

    series.data.processor = am5.DataProcessor.new(root, {
        dateFormat: "yyyy-MM-dd",
        dateFields: ["date"]
    });

    chart.set("scrollbarX", am5.Scrollbar.new(root, {
        orientation: "horizontal"
    }));

    series.data.setAll(data);

    chart.appear(1000, 100);
}

const displayChart = (userChartButton, userChartDiv, articleChartButton, articleChartDiv) => {
    articleChartDiv.toggleClass('hidden')
    articleChartButton.toggleClass('selected')
    userChartDiv.toggleClass('hidden')
    userChartButton.toggleClass('selected')
    articleChartDiv.toggleClass('smooth-div')
    userChartDiv.toggleClass('smooth-div')
}

$(document).ready(() => {
    let homeContainer = $('#homeContainer')
    let userChartButton = $('#userChartButton')
    let userChartDiv = $('#userChart')
    let articleChartButton = $('#articleChartButton')
    let articleChartDiv = $('#articleChart')

    if(articleChartButton[0]) {
        getUserChartInfos()
        homeContainer.css("width", 'auto')
        userChartButton.click(function () {
            displayForm(userChartButton, userChartDiv, articleChartButton, articleChartDiv)
        })
        articleChartButton.click(function () {
            displayForm(userChartButton, userChartDiv, articleChartButton, articleChartDiv)
        })
    }

    
})