function plotTs() {
    params = {
        metric: document.getElementById("ts_metric").value,
        breakdown: document.getElementById("ts_breakdown").value,
        resample: document.getElementById("ts_resample").value,
        replies: document.getElementById("ts_replies").value != "include"
    }
    const lines = commentData.filter(
        d => d.breakdown == params.breakdown && d.metric == params.metric && d.resample == params.resample && d.replies == params.replies
    )
    const plotData = lines.map(l => {
        const line = { width: 4 }
        const label = shortCommunityName(l.label)
        if (labelToRGB[label]) {
            line.color = labelToRGB[label][0]
        }
        return {
            mode: 'lines+markers',
            name: label,
            y: l.y,
            x: l.x,
            line,
            marker: {
                size: 10
            }
        }
    })
    const fixString = s => (s[0].toUpperCase() + s.slice(1)).replace('_', ' ')
    Plotly.newPlot(
        document.getElementById('tsPlotElement'),
        plotData,
        {
            title: 'Time Series Analysis of Wowhead Comments',
            xaxis: {
                title: 'Date'
            },
            yaxis: {
                title: `${fixString(params.metric)}`
            },
            margin: {
                l: 100,
                r: 20,
                t: 100
            },
        },
        {
            responsive: true
        }
    )
}
plotTs()