var myChart = echarts.init(document.getElementById("mainCanvas"));
//app.title = '世界人口总量 - 条形图';

var option = {
    title: {
        text: '世界人口总量',
        subtext: '数据来自网络'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        //show: false,
        data: ['2011年', '2012年'],
        orient: 'vertical',
        top: '0'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['巴西','印尼','美国','印度','中国','世界人口(万)'],

        //position: 'top'
        },
        {

            lineStyle: {
                color: 'red',
                width: 2
            },
            //position: 'top'
        }
    ],
    yAxis: {
        type: 'value',
        inverse: true,
        boundaryGap: [0, 0.01],
        position: 'right'
    },
    color: ['#66ffff',  '#FFFF33']
    ,
    series: [
        {
            name: '2011年',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230],

        },
        {
            name: '2012年',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807],

        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);