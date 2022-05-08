// id=lineEconomy
(function(){
	let file='./data/line_GDP.json';
    let id='lineEconomy';

    $(document).ready(function(){
        $.when(
            $.getJSON(file),
            ).done(function (AjaxFile) {
            	let data = AjaxFile
            	let figure = document.getElementById(id);
			    //这次直接调用canvas画布
			    let myChart = echarts.init(figure)
			    let app = {};
				
				let option;  
				  option = {
					legend: {},
					tooltip: {
					  trigger: 'axis',
					  showContent: false
					},
					dataset: {
					  source: data
					},
					xAxis: { type: 'category' },
					yAxis: { gridIndex: 0 },
					grid: { top: '45%' },
					series: [
					//注意这里是3条line
					  {
						type: 'line',
						smooth: true,
						seriesLayoutBy: 'row',
						emphasis: { focus: 'series' }
					  },
					  {
						type: 'line',
						smooth: true,
						seriesLayoutBy: 'row',
						emphasis: { focus: 'series' }
					  },
					  {
						type: 'line',
						smooth: true,
						seriesLayoutBy: 'row',
						emphasis: { focus: 'series' }
					  },
					  {
						type: 'pie',
						id: 'pie',
						radius: '30%',
						center: ['50%', '25%'],
						emphasis: {
						  focus: 'self'
						},
						label: {
						  formatter: '{b}: {@2011} ({d}%)'
						},
						encode: {
						  itemName: '年份',
						  value: '2011',
						  tooltip: '2011'
						}
					  }
					]
				  };
				  myChart.on('updateAxisPointer', function (event) {
					const xAxisInfo = event.axesInfo[0];
					if (xAxisInfo) {
					  const dimension = xAxisInfo.value + 1;
					  myChart.setOption({
						series: {
						  id: 'pie',
						  label: {
							formatter: '{b}: {@[' + dimension + ']} ({d}%)'
						  },
						  encode: {
							value: dimension,
							tooltip: dimension
						  }
						}
					  });
					}
				  });
				  myChart.setOption(option);


					if (option && typeof option === 'object') {
					  myChart.setOption(option);
					}
					//这次用的是canvas不要使用它自带的resize
					// window.addEventListener('resize', myChart.resize);
		});
	});
})();

// id=line1
(function(){
	let file='./data/line_people.json';
    let id='line1';

    $(document).ready(function(){
        $.when(
            $.getJSON(file),
            ).done(function (AjaxFile) {
            	let data = AjaxFile
            	let figure = document.getElementById(id);
			    //这次直接调用canvas画布
			    let myChart = echarts.init(figure)
			    let app = {};
				
				let option;  
				  option = {
					legend: {},
					tooltip: {
					  trigger: 'axis',
					  showContent: false
					},
					dataset: {
					  source: data
					},
					xAxis: { type: 'category' },
					yAxis: { gridIndex: 0 },
					grid: { top: '45%' },
					series: [
					//注意这里是3条line
					  {
						type: 'line',
						smooth: true,
						seriesLayoutBy: 'row',
						emphasis: { focus: 'series' }
					  },
					  {
						type: 'line',
						smooth: true,
						seriesLayoutBy: 'row',
						emphasis: { focus: 'series' }
					  },
					  {
						type: 'line',
						smooth: true,
						seriesLayoutBy: 'row',
						emphasis: { focus: 'series' }
					  },
					  {
						type: 'pie',
						id: 'pie',
						radius: '30%',
						center: ['50%', '25%'],
						emphasis: {
						  focus: 'self'
						},
						label: {
						  formatter: '{b}: {@2011} ({d}%)'
						},
						encode: {
						  itemName: '年份',
						  value: '2011',
						  tooltip: '2011'
						}
					  }
					]
				  };
				  myChart.on('updateAxisPointer', function (event) {
					const xAxisInfo = event.axesInfo[0];
					if (xAxisInfo) {
					  const dimension = xAxisInfo.value + 1;
					  myChart.setOption({
						series: {
						  id: 'pie',
						  label: {
							formatter: '{b}: {@[' + dimension + ']} ({d}%)'
						  },
						  encode: {
							value: dimension,
							tooltip: dimension
						  }
						}
					  });
					}
				  });
				  myChart.setOption(option);


					if (option && typeof option === 'object') {
					  myChart.setOption(option);
					}
					//这次用的是canvas不要使用它自带的resize
					// window.addEventListener('resize', myChart.resize);
		});
	});
})();

// id=line2
(function(){
	let file='./data/line_assets.json';
    let id='line2';

    $(document).ready(function(){
        $.when(
            $.getJSON(file),
            ).done(function (AjaxFile) {
            	let data = AjaxFile
            	let figure = document.getElementById(id);
			    //这次直接调用canvas画布
			    let myChart = echarts.init(figure)
			    let app = {};
				
				let option;  
				  option = {
					legend: {},
					tooltip: {
					  trigger: 'axis',
					  showContent: false
					},
					dataset: {
					  source: data
					},
					xAxis: { type: 'category' },
					yAxis: { gridIndex: 0 },
					grid: { top: '45%' },
					series: [
					//注意这里是3条line
					  {
						type: 'line',
						smooth: true,
						seriesLayoutBy: 'row',
						emphasis: { focus: 'series' }
					  },
					  {
						type: 'line',
						smooth: true,
						seriesLayoutBy: 'row',
						emphasis: { focus: 'series' }
					  },
					  {
						type: 'line',
						smooth: true,
						seriesLayoutBy: 'row',
						emphasis: { focus: 'series' }
					  },
					  {
						type: 'pie',
						id: 'pie',
						radius: '30%',
						center: ['50%', '25%'],
						emphasis: {
						  focus: 'self'
						},
						label: {
						  formatter: '{b}: {@2011} ({d}%)'
						},
						encode: {
						  itemName: '年份',
						  value: '2011',
						  tooltip: '2011'
						}
					  }
					]
				  };
				  myChart.on('updateAxisPointer', function (event) {
					const xAxisInfo = event.axesInfo[0];
					if (xAxisInfo) {
					  const dimension = xAxisInfo.value + 1;
					  myChart.setOption({
						series: {
						  id: 'pie',
						  label: {
							formatter: '{b}: {@[' + dimension + ']} ({d}%)'
						  },
						  encode: {
							value: dimension,
							tooltip: dimension
						  }
						}
					  });
					}
				  });
				  myChart.setOption(option);


					if (option && typeof option === 'object') {
					  myChart.setOption(option);
					}
					//这次用的是canvas不要使用它自带的resize
					// window.addEventListener('resize', myChart.resize);
		});
	});
})();

// id=line3
(function(){
	let file='./data/line_agri.json';
    let id='line3';

    $(document).ready(function(){
        $.when(
            $.getJSON(file),
            ).done(function (AjaxFile) {
            	let data = AjaxFile
            	let figure = document.getElementById(id);
			    //这次直接调用canvas画布
			    let myChart = echarts.init(figure)
			    let app = {};
				
				let option;  
				  option = {
					legend: {},
					tooltip: {
					  trigger: 'axis',
					  showContent: false
					},
					dataset: {
					  source: data
					},
					xAxis: { type: 'category' },
					yAxis: { gridIndex: 0 },
					grid: { top: '45%' },
					series: [
						//注意这里是四条line
					  {
						type: 'line',
						smooth: true,
						seriesLayoutBy: 'row',
						emphasis: { focus: 'series' }
					  },
					  {
						type: 'line',
						smooth: true,
						seriesLayoutBy: 'row',
						emphasis: { focus: 'series' }
					  },
					  {
						type: 'line',
						smooth: true,
						seriesLayoutBy: 'row',
						emphasis: { focus: 'series' }
					  },
					  {
						type: 'line',
						smooth: true,
						seriesLayoutBy: 'row',
						emphasis: { focus: 'series' }
					  },
					  {
						type: 'pie',
						id: 'pie',
						radius: '30%',
						center: ['50%', '25%'],
						emphasis: {
						  focus: 'self'
						},
						label: {
						  formatter: '{b}: {@2011} ({d}%)'
						},
						encode: {
						  itemName: '年份',
						  value: '2011',
						  tooltip: '2011'
						}
					  }
					]
				  };
				  myChart.on('updateAxisPointer', function (event) {
					const xAxisInfo = event.axesInfo[0];
					if (xAxisInfo) {
					  const dimension = xAxisInfo.value + 1;
					  myChart.setOption({
						series: {
						  id: 'pie',
						  label: {
							formatter: '{b}: {@[' + dimension + ']} ({d}%)'
						  },
						  encode: {
							value: dimension,
							tooltip: dimension
						  }
						}
					  });
					}
				  });
				  myChart.setOption(option);


					if (option && typeof option === 'object') {
					  myChart.setOption(option);
					}
					//这次用的是canvas不要使用它自带的resize
					// window.addEventListener('resize', myChart.resize);
		});
	});
})();

