var myChart = echarts.init(document.getElementById("mainCanvas"));
var data= [16167, 14412, 14974, 13652, 18108, 11865];
function sumDate() {
    var sum = 0;
    for(i of data){
        sum+=i;
    }
    return sum;
};
//console.log([16167, 14412/all, 14974/all, 13652/all, 18108/all, 11865/all]);
var all = sumDate();
console.log(all);
var option = {
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
        data:['number']
    },
    xAxis: {
        data: ["沟通","数据库","开发经验","精通","熟练","计算机"]
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
            show: false
        }
    },
    series: [
        {
        name: 'number',
        type: 'bar',
        data: data
        },
        {
            name: 's',
            type: 'line',
            data: data,
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);