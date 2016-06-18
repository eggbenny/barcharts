HTMLWidgets.widget({

  name: 'barcharts',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance

    return {

      renderValue: function(x) {

        // TODO: code to render the widget, e.g.
        //el.innerText = x.message;
        //console.log(x);
        var barchart = echarts.init(el, theme);

        barchart.setOption({
      			title: {
      			  text: x.message.title_text,
      			  subtext: x.message.title_subtext
      			},
      			tooltip: {
      			  trigger: 'axis',
      			  show: true,
      			  formatter: '<strong>{b}</strong> <br/>{a0} : {c0}% <br/> {a1} : {c1}%'
      			},
      			legend: {
      			  x: 100,
      			  data: x.message.legend_titles
      			},
      			toolbox: {
      			  show: true,
      			  feature: {
      				saveAsImage: {
      				  show: true,
      				  title: "Save Image"
      				}
      			  }
      			},
      			calculable: true,
      			xAxis: [{
      			  type: 'value',
      			  min:0,
      			  max:100,
      			  splitNumber:x.message.split_number,
      			  boundaryGap: [0, 0.01]
      			}],
      			yAxis: [{
      			  type: 'category',
      			  axisLabel:{
      			    margin:5
      			  },
      			  data: x.message.category
      			}],
      			series: [{
      			  name: x.message.legend_titles[0],
      			  type: 'bar',
      			  data: x.message.category_data[0]
      			}, {
      			  name: x.message.legend_titles[1],
      			  type: 'bar',
      			  data: x.message.category_data[1]
      			}]
      		});

      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});
