import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Divider } from "./reusable/Divider";

export const InsightsTextLabel = ({
  label,
  value,
  percentageChanged,
  totalValueChanged,
}) => {
  return (
    <div className="flex-1">
      {label && <div className="text-lg text-[#aaaaaa] mb-1">{label}</div>}
      <div className="flex items-center gap-4">
        <p className="text-3xl font-bold mb-1">{value}</p>

        <div className="flex flex-col items-center text-[#4caf50] text-sm">
          <span>{percentageChanged}</span>
          <span className="text-[#aaaaaa] ml-1">({totalValueChanged})</span>
        </div>
      </div>
    </div>
  );
};

const InsightsSection = () => {
  return (
    <div className="bg-[#111111] flex flex-col justify-between lg:w-[30%] rounded-lg p-5 mb-5">
      <div>
        <h3 className="text-lg mb-4">Insights</h3>

        <div className="flex md:flex-col gap-8 mb-4 flex-wrap md:flex-nowrap">
          <InsightsTextLabel
            label={"Founders"}
            value={"7.4K"}
            percentageChanged={"+100%"}
            totalValueChanged={"300"}
          />

          <InsightsTextLabel
            label={"Investors"}
            value={"6.09K"}
            percentageChanged={"+100%"}
            totalValueChanged={"300"}
          />
        </div>
      </div>
      <div>
        <Divider className="border-gray-700" />
        <div className="flex items-center justify-end text-sm text-[#aaaaaa] cursor-pointer">
          <span>View detailed insights</span>
          <FaArrowRight className="ml-2" />
        </div>
      </div>
    </div>
  );
};

export default InsightsSection;
