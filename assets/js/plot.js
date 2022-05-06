  // 定义Fun1-json转为二维数组
  const toArray = (json) => {
    let allArray = []
    let year = []
    for(i in json){
      let oneArray = []
      var style = []
      for(j in json[i]){
        oneArray.push(json[i][j]) // 获取每一年领域的文章数量
        style.push(j)// 获取领域名称
      }
      allArray.push(oneArray)
      year.push(i)
    }
    return [allArray,year,style] //[数量,年份,领域名称]
  }

  // 定义Fun2-绘制基础条形图
  const BaseBar = (AjaxFile,id,color) => {
          let data = toArray(AjaxFile);
          let number = data[0];// 每一年的数据
          let year = data[1]; // 年份
          let style = data[2];// 领域名称

          let figure = document.getElementById(id);
          let myChart = echarts.init(figure); 

          let option;
          // 用2011年的数据，绘制第一张图(把总体框架确定好)
          plot_data = number[0]
          option = {
            grid: {
              top: 10,
              bottom: 30,
              left: 140,
              right: 50,
              },
            xAxis: {max: 'dataMax',},
            yAxis: {
            axisLabel: {
              fontSize: 14,
              fontFamily:'YaHei'
              },
            type: 'category',
            data: style, // 赋予name属性,方便画图
            inverse: true,
            animationDuration: 300,
            animationDurationUpdate: 300,
            // max: 11 // only the largest n bars will be displayed
            },
            series: [ 
            {
              realtimeSort: true,
              type: 'bar',
              data: plot_data,
              label: {
              // bar上面的label
                show: true,
                position: 'right',
                valueAnimation: true
              },
            itemStyle: {
              color: function(param) {
                // 根据每一个绘图的name确定颜色
                return color[param.name]
                }
               }
              },
             ],
            legend: {
            show: false
            },
            graphic: {
              elements: [
              {
                type: 'text',
                right: 10,
                bottom: 60,
                style: {
                  text: year[0],
                  font: '80px Arial',
                  fill: 'rgba(100, 100, 100, 0.25)'
                },
              }],
             },
            animationDuration: 0,
            animationDurationUpdate: 1000,
            animationEasing: 'linear',
            animationEasingUpdate: 'linear',
          };
          myChart.setOption(option)

          return myChart

  }
  // 定义Fun3-基于基础条形图绘制动态条形图
  const AnimationBar = (AjaxFile,myChart) => {
          let data = toArray(AjaxFile);
          let number = data[0];// 每一年的数据
          let year = data[1]; // 年份
          let style = data[2];// 领域名称

          //绘制后面几年的图
          function run(i) {
            plot_data = number[i];
            text_year = year[i]
            myChart.setOption({
            series: [
              {
              type: 'bar',
              data: plot_data
              }
            ],
            graphic: {
              elements: [
              {
                type: 'text',
                right: 10,
                bottom: 60,
                style: {
                text: text_year,
                font: '80px Arial',
                fill: 'rgba(100, 100, 100, 0.25)'
                },
                // z: 100
              }
              ]
            }
            });
          }
          //添加计时器,每隔3000ms绘一次后面年份的图,与第一张图的update时间一致
          //一次点击的计时器保存起来，下一次点击把上一次的集中清除
          let timerArray=[]
          for (i=0;i<year.length;i++){
            timer = setTimeout(run.bind(null,i), (i-1)*1000);// 这里要么i从1开始，要么从0开始(0和1要一起开始)，不然会卡顿
            timerArray.push(timer)
          } 
          return timerArray
        };


// id=figure1
(function(){
    // colors的key要与yaxisLabel一致
   let colors = {
                   '农业工程学': '#00008b',
                   '乳品和动物科学': '#f00',
                   '农业-多学科': '#ef2b2d',
                   '农学': '#002a8f',
                   '水产学': '#003580',
                   '食品科学': '#ed2939',
                   '林学': '#00247d',
                   '植物科学': '#003897',
                   '土壤科学': '#e30a17',
                   '兽医学': '#bc002d',
                   '动物学': '#024fa2',
                   };
    let file='./data/SCI_Agricul.json'
    let id='figure1'


    // Basebar
    let myChart
    $(document).ready(function(){
        $.when(
            $.getJSON(file),
            ).done(function (AjaxFile) {
                myChart = BaseBar(AjaxFile,id,colors)
            })
    })

    //Animation
    let timerAll = []
    document.getElementById(id).onclick = function (){
        $.when(
            $.getJSON(file),
            ).done(function (AjaxFile) {
                let timerArray =  AnimationBar(AjaxFile,myChart)
                timerAll.push(timerArray)//把计时连续两次点击的计时器存起来

                //下一次点击把上一次的计时器集中清除
                if (timerAll.length > 1){
                    for (i=0;i<timerAll[0].length;i++) {// 第0个计时器组就是上一次计时器组
                        clearTimeout(timerAll[0][i])
                    }
                    timerAll.shift()//把上一次的计时器列表给去除
                }
            });
        }
    })();
    
  






