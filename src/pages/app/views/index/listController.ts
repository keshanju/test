import * as echarts from 'echarts';
import {Vue, Component} from 'vue-property-decorator'
import { ToolsApi } from '../../apis/ToolsApi';
import EchartsData from '../../assets/json/response.json'

@Component({
  components:  {}
})
export default class Index extends Vue {
  public lineData: any  = []

  async  mounted() {
    this.lineData = JSON.parse(EchartsData.data)
    console.log(this.lineData)
    // await this.getSignalData()
    this.initChart()
  }

  public async getSignalData (){
    const options = {
      type: 'array'
    }
    const backData = await new ToolsApi().getSignalValue(options)
    if(backData.status ===  200) {
      console.log(backData)
    }
  }

  public async initChart(){
    let myChart = echarts.init(document.getElementById("echartsContainer"))
    let base = +new Date(1988, 9, 3);
    let oneDay = 24 * 3600 * 1000;
    let data = [[base, Math.random() * 300]];
    for (let i = 1; i < 20000; i++) {
      let now = new Date((base += oneDay));
      data.push([+now, Math.round((Math.random() - 0.5) * 20 + data[i - 1][1])]);
    }
    const option = {
      title: {
        left: 'center',
        text: '折线图实例'
      },
      toolbox: {
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          restore: {},
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'time',
        boundaryGap: false
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%']
      },
      dataZoom: [
        {
          type: 'inside',
          start: 0,
          end: 20
        },
        {
          start: 0,
          end: 20
        }
      ],
      series: [
        {
        name: '收益指-时间',
        type: 'line',
        symbol: 'none',
        smooth: true,
        data: this.lineData,
        sampling: 'average'
      }],
    }
    myChart.setOption(option)
  }
}