import ReactECharts from "echarts-for-react";
import useObserver from "../hooks/useObserver";
function ChartsSales() {
  const [ref, inView] = useObserver();

  let option = {
    tooltip: {
      trigger: "axis",
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Burgers",
        type: "line",
        stack: "Total",
        data: [120, 132, 101, 134, 90, 230, 500],
      },
      {
        name: "Pizza",
        type: "line",
        stack: "Total",
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: "Sandwiches",
        type: "line",
        stack: "Total",
        data: [150, 232, 201, 300, 190, 600, 410],
      },
      {
        name: "Drinks",
        type: "line",
        stack: "Total",
        data: [500, 332, 301, 1004, 390, 330, 320],
      },
      {
        name: "Pasta",
        type: "line",
        stack: "Total",
        data: [500, 332, 800, 1500, 390, 330, 1000],
      },
      {
        name: "Combes",
        type: "line",
        stack: "Total",
        data: [820, 932, 901, 934, 1290, 1330, 1320],
      },
      {
        name: "Fries",
        type: "line",
        stack: "Total",
        data: [500, 1500, 901, 2000, 1290, 1330, 1500],
      },
    ],
  };
  return (
    <section
      ref={ref}
      className={`charts-sales ${
        inView ? "animate__animated  animate__zoomIn show" : ""
      }`}>
      <h2 className="section-name">
        Our latest <strong>sales</strong> during the week
      </h2>
      <ReactECharts option={option} />
    </section>
  );
}

export default ChartsSales;
