import ReactECharts from 'echarts-for-react';
import ChartName from "../components/chartName"
import useObserver from "../hooks/useObserver"

function MenuCharts() {

  const [ref,inView] = useObserver()
  let option = {
    tooltip: {
      trigger: 'item',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '110%',
        data: [
          { value: 1200, name: 'Burger' },
          { value: 935, name: 'Pizza' },
          { value: 700, name: 'Sandwitche' },
          { value: 384, name: 'Drinks' },
          { value: 500, name: 'Fries' },
          { value: 1000, name: 'Compo' },
          { value: 900, name: 'Pasta' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: '#fff'
          }
        }
      }
    ]
  };
  return (
    <>
    
    <ChartName chartName={"Our Menu Charts"}/>
    <section ref={ref} className={`menu-charts ${inView ? "animate__animated animate__slideInDown" : ""}`}>
      <ReactECharts option={option}/>
    </section>
    </>
  )
}

export default MenuCharts
