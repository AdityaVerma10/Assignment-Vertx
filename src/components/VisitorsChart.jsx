import React, { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaPlus } from "react-icons/fa";
import Chart from "chart.js/auto";
import { InsightsTextLabel } from "./InsightsSection";
import Dropdown from "./reusable/Dropdown";

const VisitorsChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [visitorType, setVisitorType] = useState("Visitors");
  const [timeRange, setTimeRange] = useState("Last 30 days");
  const [showAddMenu, setShowAddMenu] = useState(false);

  const visitorOptions = ["Visitors", "Connections", "Interactions", "Impressions"];
  const timeOptions = ["Today", "Yesterday", "This week", "Last week", "Last 7 days", "Last 30 days"];
  const addOptions = ["Connections", "Interactions", "Impressions"];

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext("2d");

      const labels = [
        "Mar 1",
        "",
        "",
        "",
        "Mar 5",
        "",
        "",
        "",
        "Mar 10",
        "",
        "",
        "",
        "Mar 15",
        "",
        "",
        "",
        "Mar 20",
        "",
        "",
        "",
        "Mar 25",
        "",
        "",
        "",
        "Mar 30",
      ];

      const data = [
        0.5, 0.8, 1.2, 1.5, 1.3, 1.1, 1.4, 1.7, 1.9, 1.6, 1.4, 1.3, 1.5, 1.8,
        2.5, 1.7, 1.5, 1.3, 1.6, 1.8, 1.5, 1.7, 1.9, 2.1, 2.3,
      ];

      chartInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: visitorType,
              data: data,
              borderColor: "rgba(255, 255, 255, 0.8)",
              backgroundColor: "transparent",
              tension: 0.4,
              pointRadius: 0,
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              mode: "index",
              intersect: false,
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              titleColor: "#fff",
              bodyColor: "#fff",
              borderColor: "#333",
              borderWidth: 1,
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
                drawBorder: false,
              },
              ticks: {
                color: "rgba(255, 255, 255, 0.5)",
                font: {
                  size: 10,
                },
                maxRotation: 0,
              },
            },
            y: {
              grid: {
                color: "rgba(255, 255, 255, 0.1)",
                drawBorder: false,
              },
              ticks: {
                color: "rgba(255, 255, 255, 0.5)",
                font: {
                  size: 10,
                },
                callback: function (value) {
                  return value + "k";
                },
              },
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [visitorType, timeRange]);

  const handleVisitorChange = (option) => {
    setVisitorType(option);
  };

  const handleTimeChange = (option) => {
    setTimeRange(option);
  };

  const handleAddOption = (option) => {
    // Logic to add a new data series
    console.log(`Adding ${option} to chart`);
    setShowAddMenu(false);
  };

  return (
    <div className="bg-[#111111] lg:w-[70%] rounded-lg p-5 mb-5">
      <div className="mb-4">
        <div className="flex gap-4 flex-wrap">
          <Dropdown 
            options={visitorOptions} 
            defaultValue={visitorType} 
            onChange={handleVisitorChange} 
          />
          
          <Dropdown 
            options={timeOptions} 
            defaultValue={timeRange} 
            onChange={handleTimeChange} 
          />
          
          <div className="relative">
            <div 
              className="flex items-center bg-[#000] bg-opacity-5 px-3 py-2 rounded-xl cursor-pointer text-sm"
              onClick={() => setShowAddMenu(!showAddMenu)}
            >
              <FaPlus className="mr-2 text-xs" />
              <span>Add</span>
            </div>
            
            {showAddMenu && (
              <div className="absolute z-10 mt-1 w-48 bg-[#111] border border-[#333] rounded-lg shadow-lg">
                <div className="py-1">
                  {addOptions.map((option, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 text-sm cursor-pointer hover:bg-[#222]"
                      onClick={() => handleAddOption(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mb-5">
        <InsightsTextLabel
          value={"13.49K"}
          percentageChanged={"+4.6%"}
          totalValueChanged={"197"}
        />
      </div>

      <div className="h-48 relative">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default VisitorsChart;
