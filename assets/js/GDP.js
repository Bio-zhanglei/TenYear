(function(){
    let file='./data/GDP_China.json';
    let id='figure-GDP';

    // Basebar
    $(document).ready(function(){
        $.when(
            $.getJSON(file),
            ).done(function (AjaxFile) {
                  let app = {};
                  let option;
                  let dataMap = {};

                  dataMap = AjaxFile;
                  let figure = document.getElementById(id);
                  let myChart = echarts.init(figure, null, {
                    renderer: 'canvas',
                    useDirtyRect: false
                  });
                  
                  option = {
                  baseOption: {
                    timeline: {
                      axisType: 'category',
                      // realtime: false,
                      // loop: false,
                      autoPlay: false,
                      // currentIndex: 2,
                      playInterval: 1000,
                      // controlStyle: {
                      //     position: 'left'
                      // },
                      data: [
                        '2011-12-31',
                        '2012-12-31',
                        '2013-12-31',
                        {
                          value: '2014-12-31',
                          tooltip: {
                            // formatter: '{b} GDP增长进入新常态'
                            formatter: '2014年 GDP增长进入新常态'
                          },
                          symbol: 'diamond',
                          symbolSize: 16
                        },
                        '2015-12-31',
                        '2016-12-31',
                        '2017-12-31',
                        '2018-12-31',
                        '2019-12-31',
                        {
                          value: '2020-12-31',
                          tooltip: {
                            // formatter: function (params) {
                            //   return params.name + 'GDP全球唯一正增长';}
                            formatter: '2020年 GDP全球唯一正增长'
                            
                          },
                          symbol: 'diamond',
                          symbolSize: 18
                        },
                        '2021-12-31',
                      ],
                      label: {
                        formatter: function (s) {
                          return new Date(s).getFullYear();
                        }
                      }
                    },
                    title: {
                      subtext: '数据来自国家统计局'
                    },
                    tooltip: {},
                    legend: {
                      left: 'right',
                      data: ['第一产业', '第二产业', '第三产业', 'GDP', '农林牧渔业'],
                      selected: {
                        'GDP': false,
                        '农林牧渔业': false,
                      }
                    },
                    calculable: true,
                    grid: {
                      top: 80,
                      bottom: 100,
                      left:55,
                      right:0,
                      tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                          type: 'shadow',
                          label: {
                            show: true,
                            formatter: function (params) {
                              return params.value.replace('\n', '');
                            }
                          }
                        }
                      }
                    },
                    xAxis: [
                      {
                        type: 'category',
                        axisLabel: { interval: 0 },
                        data: [
                          '北京',
                          '\n天津',
                          '河北',
                          '\n山西',
                          '内蒙古',
                          '\n辽宁',
                          '吉林',
                          '\n黑龙江',
                          '上海',
                          '\n江苏',
                          '浙江',
                          '\n安徽',
                          '福建',
                          '\n江西',
                          '山东',
                          '\n河南',
                          '湖北',
                          '\n湖南',
                          '广东',
                          '\n广西',
                          '海南',
                          '\n重庆',
                          '四川',
                          '\n贵州',
                          '云南',
                          '\n西藏',
                          '陕西',
                          '\n甘肃',
                          '青海',
                          '\n宁夏',
                          '新疆'
                        ],
                        splitLine: { show: false }
                      }
                    ],
                    yAxis: [
                      {
                        type: 'value',
                        name: '生产总值（亿元）'
                      }
                    ],
                    series: [
                      { name: '第一产业', type: 'bar' },
                      { name: '第二产业', type: 'bar' },
                      { name: '第三产业', type: 'bar' },
                      { name: 'GDP', type: 'bar' },
                      { name: '农林牧渔业', type: 'bar' },
                      {
                        name: 'GDP占比',
                        type: 'pie',
                        center: ['75%', '35%'],
                        radius: '28%',
                        z: 100,
                        itemStyle :{
                          normal:{
                            label:{
                              //模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。
                              formatter:'{b}{d}%',
                            //也可以自己定义函数把自己想要的值提取出来
                            // formatter: function (params) {
                            // console.log(params)
                            //   return params.name+params.percent+'%';}                              
                            }
                          }
                        }
                      }
                    ]
                  },
                  options: [
                    {
                      title: { text: '2011全国宏观经济指标' },
                      series: [
                        { data: dataMap.first['2011'] },
                        { data: dataMap.second['2011'] },
                        { data: dataMap.third['2011'] },
                        { data: dataMap.GDP['2011'] },
                        { data: dataMap.agri['2011'] },
                        // { data: dataMap.dataTI['2011'] },
                        {
                          data: [
                            { name: '第一产业', value: dataMap.first['2011sum'] },
                            { name: '第二产业', value: dataMap.second['2011sum'] },
                            { name: '第三产业', value: dataMap.third['2011sum'] }
                          ]
                        }
                      ]
                    },
                    {
                      title: { text: '2012全国宏观经济指标' },
                      series: [
                        { data: dataMap.first['2012'] },
                        { data: dataMap.second['2012'] },
                        { data: dataMap.third['2012'] },
                        { data: dataMap.GDP['2012'] },
                        { data: dataMap.agri['2012'] },
                        // { data: dataMap.dataTI['2012'] },
                        {
                          data: [
                            { name: '第一产业', value: dataMap.first['2012sum'] },
                            { name: '第二产业', value: dataMap.second['2012sum'] },
                            { name: '第三产业', value: dataMap.third['2012sum'] }
                          ]
                        }
                      ]
                    },
                    {
                      title: { text: '2013全国宏观经济指标' },
                      series: [
                        { data: dataMap.first['2013'] },
                        { data: dataMap.second['2013'] },
                        { data: dataMap.third['2013'] },
                        { data: dataMap.GDP['2013'] },
                        { data: dataMap.agri['2013'] },
                        // { data: dataMap.dataTI['2013'] },
                        {
                          data: [
                            { name: '第一产业', value: dataMap.first['2013sum'] },
                            { name: '第二产业', value: dataMap.second['2013sum'] },
                            { name: '第三产业', value: dataMap.third['2013sum'] }
                          ]
                        }
                      ]
                    },
                    {
                      title: { text: '2014全国宏观经济指标' },
                      series: [
                        { data: dataMap.first['2014'] },
                        { data: dataMap.second['2014'] },
                        { data: dataMap.third['2014'] },
                        { data: dataMap.GDP['2014'] },
                        { data: dataMap.agri['2014'] },
                        // { data: dataMap.dataTI['2014'] },
                        {
                          data: [
                            { name: '第一产业', value: dataMap.first['2014sum'] },
                            { name: '第二产业', value: dataMap.second['2014sum'] },
                            { name: '第三产业', value: dataMap.third['2014sum'] }
                          ]
                        }
                      ]
                    },
                    {
                      title: { text: '2015全国宏观经济指标' },
                      series: [
                        { data: dataMap.first['2015'] },
                        { data: dataMap.second['2015'] },
                        { data: dataMap.third['2015'] },
                        { data: dataMap.GDP['2015'] },
                        { data: dataMap.agri['2015'] },
                        // { data: dataMap.dataTI['2015'] },
                        {
                          data: [
                            { name: '第一产业', value: dataMap.first['2015sum'] },
                            { name: '第二产业', value: dataMap.second['2015sum'] },
                            { name: '第三产业', value: dataMap.third['2015sum'] }
                          ]
                        }
                      ]
                    },
                    {
                      title: { text: '2016全国宏观经济指标' },
                      series: [
                        { data: dataMap.first['2016'] },
                        { data: dataMap.second['2016'] },
                        { data: dataMap.third['2016'] },
                        { data: dataMap.GDP['2016'] },
                        { data: dataMap.agri['2016'] },
                        // { data: dataMap.dataTI['2016'] },
                        {
                          data: [
                            { name: '第一产业', value: dataMap.first['2016sum'] },
                            { name: '第二产业', value: dataMap.second['2016sum'] },
                            { name: '第三产业', value: dataMap.third['2016sum'] }
                          ]
                        }
                      ]
                    },
                    {
                      title: { text: '2017全国宏观经济指标' },
                      series: [
                        { data: dataMap.first['2017'] },
                        { data: dataMap.second['2017'] },
                        { data: dataMap.third['2017'] },
                        { data: dataMap.GDP['2017'] },
                        { data: dataMap.agri['2017'] },
                        // { data: dataMap.dataTI['2017'] },
                        {
                          data: [
                            { name: '第一产业', value: dataMap.first['2017sum'] },
                            { name: '第二产业', value: dataMap.second['2017sum'] },
                            { name: '第三产业', value: dataMap.third['2017sum'] }
                          ]
                        }
                      ]
                    },
                    {
                      title: { text: '2018全国宏观经济指标' },
                      series: [
                        { data: dataMap.first['2018'] },
                        { data: dataMap.second['2018'] },
                        { data: dataMap.third['2018'] },
                        { data: dataMap.GDP['2018'] },
                        { data: dataMap.agri['2018'] },
                        // { data: dataMap.dataTI['2018'] },
                        {
                          data: [
                            { name: '第一产业', value: dataMap.first['2018sum'] },
                            { name: '第二产业', value: dataMap.second['2018sum'] },
                            { name: '第三产业', value: dataMap.third['2018sum'] }
                          ]
                        }
                      ]
                    },
                    {
                      title: { text: '2019全国宏观经济指标' },
                      series: [
                        { data: dataMap.first['2019'] },
                        { data: dataMap.second['2019'] },
                        { data: dataMap.third['2019'] },
                        { data: dataMap.GDP['2019'] },
                        { data: dataMap.agri['2019'] },
                        // { data: dataMap.dataTI['2019'] },
                        {
                          data: [
                            { name: '第一产业', value: dataMap.first['2019sum'] },
                            { name: '第二产业', value: dataMap.second['2019sum'] },
                            { name: '第三产业', value: dataMap.third['2019sum'] }
                          ]
                        }
                      ]
                    },
                    {
                      title: { text: '2020全国宏观经济指标' },
                      series: [
                        { data: dataMap.first['2020'] },
                        { data: dataMap.second['2020'] },
                        { data: dataMap.third['2020'] },
                        { data: dataMap.GDP['2020'] },
                        { data: dataMap.agri['2020'] },
                        // { data: dataMap.dataTI['2020'] },
                        {
                          data: [
                            { name: '第一产业', value: dataMap.first['2020sum'] },
                            { name: '第二产业', value: dataMap.second['2020sum'] },
                            { name: '第三产业', value: dataMap.third['2020sum'] }
                          ]
                        }
                      ]
                    },
                    {
                      title: { text: '2021全国宏观经济指标' },
                      series: [
                        { data: dataMap.first['2021'] },
                        { data: dataMap.second['2021'] },
                        { data: dataMap.third['2021'] },
                        { data: dataMap.GDP['2021'] },
                        { data: dataMap.agri['2021'] },
                        // { data: dataMap.dataTI['2021'] },
                        {
                          data: [
                            { name: '第一产业', value: dataMap.first['2021sum'] },
                            { name: '第二产业', value: dataMap.second['2021sum'] },
                            { name: '第三产业', value: dataMap.third['2021sum'] }
                          ]
                        }
                      ]
                    },                    
                  ]
                };
        option && myChart.setOption(option);
        window.addEventListener('resize', myChart.resize);
      })
	})
})();