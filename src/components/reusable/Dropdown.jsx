import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

const Dropdown = ({ 
  options, 
  defaultValue, 
  onChange, 
  className = "",
  dropdownClassName = ""
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultValue || options[0]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <div 
        className="flex items-center bg-[#000] rounded-xl bg-opacity-5 px-3 py-2 cursor-pointer text-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedOption}</span>
        <FaChevronDown className="ml-2 text-xs" />
      </div>

      {isOpen && (
        <div className={`absolute z-10 mt-1 bg-[#111] border border-[#333] rounded-lg shadow-lg ${dropdownClassName}`}>
          <div className="py-1">
            {options.map((option, index) => (
              <div
                key={index}
                className={`px-4 py-2 text-sm cursor-pointer hover:bg-[#222] ${
                  option === selectedOption ? "bg-[#222]" : ""
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;