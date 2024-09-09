import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import { exampleData } from "../../../data/exampleData";
import { useTranslation } from "react-i18next";

export default function Graphic() {
  const svgRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = 470;
    const height = 250;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };

    svg.attr("width", width).attr("height", height);

    const dayNames = ["dl", "dt", "dc", "dj", "dv", "ds", "dg"];

    const formatDateToDay = (date, index) => {
      return dayNames[index % dayNames.length];
    };

    const x = d3
      .scaleBand()
      .domain(exampleData.map((d) => d.date).reverse())
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(exampleData, (d) => d.expense) + 200])
      .nice()
      .range([height - margin.bottom, margin.top]);

    const lineGroup = svg.append("g");

    lineGroup
      .append("line")
      .attr("x1", margin.left)
      .attr("x2", width - margin.right)
      .attr("y1", y(500))
      .attr("y2", y(500))
      .style("stroke", "#d4d4d4")
      .style("stroke-width", "3px")
      .style("stroke-dasharray", "6,3");

    const xAxisGroup = svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom - 2})`)
      .call(d3.axisBottom(x).tickSize(0));

    xAxisGroup.selectAll("text").text((d, i) => formatDateToDay(d, i));

    xAxisGroup
      .select(".domain")
      .style("stroke", "#d4d4d4")
      .style("stroke-width", "3px")
      .style("stroke-dasharray", "6,3");

    xAxisGroup
      .selectAll("text")
      .attr("text-anchor", "middle")
      .attr("dy", "1em")
      .style("fill", "#d4d4d4")
      .style("font-size", "14px");

    const barsGroup = svg.append("g");
    barsGroup
      .selectAll("rect")
      .data(exampleData)
      .enter()
      .append("rect")
      .attr("x", (d) => x(d.date))
      .attr("y", (d) => y(d.expense))
      .attr("width", x.bandwidth())
      .attr("height", (d) => height - margin.bottom - y(d.expense))
      .attr("fill", (d, i, nodes) =>
        i === nodes.length - 7 ? "skyblue" : "salmon",
      )
      .attr("rx", 5)
      .attr("ry", 5);

    const yAxis = d3
      .axisLeft(y)
      .tickValues([0, 500])
      .tickFormat((d) => d);

    const yAxisGroup = svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(yAxis);

    yAxisGroup.select(".domain").remove();
    yAxisGroup.selectAll(".tick line").remove();

    yAxisGroup
      .selectAll("text")
      .style("fill", "#d4d4d4")
      .style("font-size", "14px");
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center">
        <p className="mt-4 text-2xl font-extrabold">{t("graph_headline")}</p>
      </div>
      <svg ref={svgRef}></svg>
    </div>
  );
}
