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

        console.log(dSeries);

        // Set Legend option to none if only one serie
        var legend_yn = true;
        var grid_y = 40;

        if (dSeries.length == 1) {
          legend_yn = false;
          grid_y = 0;
        } else {
          legend_yn = true;
          grid_y = 40;
        }

        var barchart = echarts.init(el, theme);

        barchart.setOption({
            grid: { // Set margin
              x: 95,
              x2: 40,
              y: grid_y,
              y2: 30,
            },
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
      			  show: legend_yn,
      			  x: 100,
      			  data: x.message.legend_titles,
      			  textStyle: {
                fontFamily: 'Source Sans Pro, Helvetica Neue, Helvetica, Arial, sans-serif',
                fontSize: 12,
                fontStyle: 'normal',
                fontWeight: 'normal',
              },
      			},
      			toolbox: {
      			  show: true,
      			  feature: {
      				saveAsImage: {
      				  show: false,
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
      			  boundaryGap: [0, 0.01],
      			  textStyle: {
                fontFamily: 'Source Sans Pro, Helvetica Neue, Helvetica, Arial, sans-serif',
                fontSize: 12,
                fontStyle: 'normal',
                fontWeight: 'normal',
              },
      			}],
      			yAxis: [{
      			  type: 'category',
      			  axisLabel:{
      			    margin:5,
      			    textStyle: {
                  fontFamily: 'Source Sans Pro, Helvetica Neue, Helvetica, Arial, sans-serif',
                  fontSize: 12,
                  fontStyle: 'normal',
                  fontWeight: 'normal',
                },
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
