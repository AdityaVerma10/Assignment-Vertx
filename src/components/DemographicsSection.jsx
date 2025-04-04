import React, { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import * as d3 from "d3";
import * as topojson from "topojson-client";
import { Divider } from "./reusable/Divider";
import { CountryWithFlag } from "./reusable/CountryWithFlag";

const DemographicsSection = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      d3.select(mapRef.current).selectAll("*").remove();

      const width = mapRef.current.clientWidth;
      const height = 300;

      const svg = d3
        .select(mapRef.current)
        .append("svg")
        .attr("width", width)
        .attr("height", height);

      const projection = d3
        .geoMercator()
        .scale(width / 6)
        .translate([width / 2, height / 1.5]);

      const path = d3.geoPath().projection(projection);

      d3.json(
        "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"
      ).then((data) => {
        const countries = topojson.feature(
          data,
          data.objects.countries
        ).features;

        svg
          .selectAll("path")
          .data(countries)
          .enter()
          .append("path")
          .attr("d", path)
          .attr("fill", "#333")
          .attr("stroke", "#111")
          .attr("stroke-width", 0.5);

        const highlightedCountries = [
          { name: "India", coordinates: [78.9629, 20.5937], color: "#4caf50" },
          { name: "USA", coordinates: [-95.7129, 37.0902], color: "#ff9800" },
          {
            name: "Canada",
            coordinates: [-106.3468, 56.1304],
            color: "#f44336",
          },
          { name: "UAE", coordinates: [53.8478, 23.4241], color: "#2196f3" },
        ];

        svg
          .selectAll("circle")
          .data(highlightedCountries)
          .enter()
          .append("circle")
          .attr("cx", (d) => projection(d.coordinates)[0])
          .attr("cy", (d) => projection(d.coordinates)[1])
          .attr("r", 8)
          .attr("fill", (d) => d.color)
          .attr("stroke", "#111")
          .attr("stroke-width", 1);
      });
    }

    const handleResize = () => {
      if (mapRef.current) {
        d3.select(mapRef.current).selectAll("*").remove();

        const width = mapRef.current.clientWidth;
        const height = 300;

        const svg = d3
          .select(mapRef.current)
          .append("svg")
          .attr("width", width)
          .attr("height", height);

        const projection = d3
          .geoMercator()
          .scale(width / 6)
          .translate([width / 2, height / 1.5]);

        const path = d3.geoPath().projection(projection);

        d3.json(
          "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"
        ).then((data) => {
          const countries = topojson.feature(
            data,
            data.objects.countries
          ).features;

          svg
            .selectAll("path")
            .data(countries)
            .enter()
            .append("path")
            .attr("d", path)
            .attr("fill", "#333")
            .attr("stroke", "#111")
            .attr("stroke-width", 0.5);

          const highlightedCountries = [
            {
              name: "India",
              coordinates: [78.9629, 20.5937],
              color: "#4caf50",
            },
            { name: "USA", coordinates: [-95.7129, 37.0902], color: "#ff9800" },
            {
              name: "Canada",
              coordinates: [-106.3468, 56.1304],
              color: "#f44336",
            },
            { name: "UAE", coordinates: [53.8478, 23.4241], color: "#2196f3" },
          ];

          svg
            .selectAll("circle")
            .data(highlightedCountries)
            .enter()
            .append("circle")
            .attr("cx", (d) => projection(d.coordinates)[0])
            .attr("cy", (d) => projection(d.coordinates)[1])
            .attr("r", 8)
            .attr("fill", (d) => d.color)
            .attr("stroke", "#111")
            .attr("stroke-width", 1);
        });
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-[#111111] rounded-lg p-5 mb-5">
      <h2 className="text-xl font-semibold mb-4">Demographics</h2>

      <div className="flex flex-col md:flex-row mb-4">
        <div ref={mapRef} className="flex-1 mr-5 h-[300px] relative"></div>

        <div>
          <div className="md:w-[200px] flex flex-col gap-2 mt-5 md:mt-0">
            <CountryWithFlag country={"India"} percentage={48} />
            <CountryWithFlag country={"USA"} percentage={28} />
            <CountryWithFlag country={"Canada"} percentage={14} />
            <CountryWithFlag country={"UAE"} percentage={7} />
          </div>
          <Divider className="border-gray-700 w-full" />
          <div className="flex items-center justify-end text-sm text-[#aaaaaa] cursor-pointer">
            <span>View detailed insights</span>
            <FaArrowRight className="ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemographicsSection;
