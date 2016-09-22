$(document).ready(function() {  
   var chart = {
      backgroundColor:'#2D89EF',
      padding:'10'
   };
   var title = {
      text: ''   
   };
   var subtitle = {
      text: ''  
   };
   var xAxis = {
   		tickWidth: 0,/*刻度线宽度*/
   		lineWidth:0,/*坐标轴宽度*/
   		labels: {
   				enabled: true,//x轴坐标值是否显示
                y: 20, //x轴刻度往下移动20px
                style: {
                    color: '#fff',//颜色
                    fontSize:'14px'  //字体
                	   }
               	},
      	categories: ['','2','4','6','8','10','12','14','16','18','20','22','24','26','28','30'],
      	crosshair: true,
      	gridLineColor: 'rgba(124,181,236,0.2)',
      	gridLineWidth: 1
   		};
   var yAxis = {
      min: 0,
      labels: {
                style: {
                    color: '#fff',//颜色
                    fontSize:'14px'  //字体
                	   }
               	},
      gridLineDashStyle: 'solid',
      gridLineWidth: 1,/*网格线宽度*/
      gridLineColor: 'rgba(124,181,236,0.2)',
      plotLines: [{
      value: 0,
      width: 0,
      color: 'red'
   }],
      title: {
         text: ''         
      }      
   };
   var tooltip = {
      headerFormat: '<span style="font-size:10px"></span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">undefineded of {point.x:.1f} =</td>' +
         '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
   };
   var plotOptions = {
      column: {
         pointPadding: 0,
         borderWidth: 0,
         pointWidth:7,/*柱宽度*/
      }
   };  
   var credits = {
      enabled: false
   };
   
   	var series= [{
   			type:'column',
   			name:'',
            data: [2000, 3000, 1800, 4000, 2000, 1600, 4500, 3000, 4000, 3000, 2800, 2200, 2000, 3000, 1800, 4000, 2000, 1600, 4500, 3000, 4000, 3000, 2800, 2200, 2000, 3000, 1800, 4000, 2000, 1600, 4500, 3000, 4000, 3000, 2800, 2200, 2000, 3000, 1800, 4000, 2000, 1600, 4500, 3000, 4000, 3000, 2800, 2200, 2000, 3000, 1800, 4000, 2000, 1600, 4500, 3000, 4000, 3000, 2800, 2200,2000, 3000]
        },{
   			type:'line',
   			color:'#fff',
   			name:'',
            data: [800, 200, 800, 500, 300, 1000, 400, 200, 400, 600, 800, 800, 200, 500, 800, 400, 200, 600, 500, 200, 400, 300, 800, 200, 100, 600, 900, 400, 500, 600, 500, 800, 800, 200, 800, 500, 300, 1000, 400, 200, 400, 600, 800, 800, 200, 800, 200, 800, 500, 300, 1000, 400, 200, 400, 600, 800, 800, 200, 600, 800, 800, 200],
            marker: {
                lineWidth: 0,
                enabled: false,
                lineColor: '#fff',/*折线线颜色*/
                fillColor: 'rgba(255,255,255,0)'
            }
        }];  
   var json = {};   
   json.chart = chart; 
   json.title = title;   
   json.subtitle = subtitle; 
   json.tooltip = tooltip;
   json.xAxis = xAxis;
   json.yAxis = yAxis;  
   json.series = series;
   json.plotOptions = plotOptions;  
   json.credits = credits;
   $('#container').highcharts(json);
  
});