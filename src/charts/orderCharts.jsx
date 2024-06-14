
import ReactECharts from 'echarts-for-react';
import ChartName from '../components/chartName';
import useObserver from "../hooks/useObserver"

function OrderCharts() {
  const [ref,inView] = useObserver()
  let option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // Use axis to trigger tooltip
        type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '-20%',
      containLabel: true
    },
    xAxis: {
      type: 'value'
    },
    yAxis: {
      type: 'category',
      data: ['2024', '2023', '2022', '2020', '2019', '2018', '2017']
    },
    series: [
      {
        name: 'Burgeer',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [1020, 502, 801, 334, 890, 330, 1320]
      },
      {
        name: 'Pizza',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [1000, 532, 101, 834, 900, 230, 810]
      },
      {
        name: 'Drinks',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [520, 482, 791, 834, 590, 730, 910]
      },
      {
        name: 'Fries',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [1000, 212, 801, 554, 390, 330, 410]
      },
      {
        name: 'sandwiches',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [820, 832, 901, 934, 1290, 1330, 1320]
      },
      {
        name: 'Pasta',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [920, 832, 901, 934, 1290, 1330, 1320]
      },
      {
        name: 'Compo',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [2000, 932, 901, 1034, 1290, 1330, 1220]
      }
    ]
  };
  return (
    <>
    <ChartName chartName={"Order Charts During 6 Years Ago"}/>
    <section ref={ref} className={`order-charts ${inView ? 'animate__animated animate__fadeInDown show' : ''}`}>
      <ReactECharts option={option}/>
    </section>
    </>
  )
}

export default OrderCharts
