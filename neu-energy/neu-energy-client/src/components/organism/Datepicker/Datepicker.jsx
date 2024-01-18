import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { currentYear, minYear } from "../../../constants";
import downloadjs from "downloadjs";
import html2canvas from "html2canvas";

export const DatePicker = ({ initialDate, handleDateChange }) => {
  useEffect(() => {
    handleDateChange(initialDate);
  }, [initialDate, handleDateChange]);

  const handleCaptureClick = async () => {
    const canvas = await html2canvas(document.body);
    const dataURL = canvas.toDataURL("image/png");
    downloadjs(dataURL, "heat-map.png", "image/png");
  };

  const inputValue = initialDate.toISOString().slice(0, 7);

  return (
    <div className="DatePickerContainer">
      <input
        className="DatePickerInput"
        type="month"
        value={inputValue}
        min={`${minYear}-01`}
        max={`${currentYear}-12`}
        onChange={(e) => handleDateChange(new Date(e.target.value))}
      />
      <button className="btn btn-secondary download-button" onClick={handleCaptureClick}>
        <i className="fa-solid fa-download icon" ></i>
      </button>
        
      
    </div>
  );
};

DatePicker.propTypes = {
  initialDate: PropTypes.instanceOf(Date),
  handleDateChange: PropTypes.func.isRequired,
};
