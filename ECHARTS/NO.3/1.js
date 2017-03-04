
//app.title = '世界人口总量 - 条形图';

$.get('map/worldMap.json', function (worldJson) {
    echarts.registerMap('world', worldJson);
    var chart = echarts.init(document.getElementById("mainCanvas"));
    chart.setOption({
        series: [{
            type: 'map',
            map: 'world'
        }]
    });
});

// 使用刚指定的配置项和数据显示图表。
