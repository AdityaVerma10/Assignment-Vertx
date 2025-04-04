export const Slider = ({ color, fillPercentage }) => {
  return (
    <div className="w-full flex rounded-lg bg-[#292828]">
      <div
        className={`p-1 rounded-lg`}
        style={{
          width: `${fillPercentage}%`,
          backgroundColor: color,
        }}
      ></div>
    </div>
  );
};
