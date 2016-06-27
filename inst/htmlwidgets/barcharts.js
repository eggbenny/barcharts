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

        var dSeries = [], cFormatter = '<strong>{b}</strong>';

        //dynamic series and formatter
        for(i=0; i<x.message.legend_titles.length; i++){
          dSeries.push({name: x.message.legend_titles[i], type: 'bar',data: x.message.category_data[i]});
          cFormatter = cFormatter +  ' <br/>{a' + i + '} : {c' + i + '}%';
        }

        var barchart = echarts.init(el, theme);

        barchart.setOption({
      			title: {
      			  text: x.message.title_text,
      			  subtext: x.message.title_subtext
      			},
      			tooltip: {
      			  trigger: 'axis',
      			  show: true,
      			  formatter: cFormatter
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
      			series: dSeries
      		});

      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});
