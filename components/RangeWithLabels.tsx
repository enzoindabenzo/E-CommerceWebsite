// *********************
// Role of the component: Range with labels for price intented to be on the shop page
// Name of the component: RangeWithLabels.tsx
// Developer: Lorenco Zeza
// Component call: <RangeWithLabels />
// Input parameters: no input parameters
// Output: range input with the labels
// *********************

"use client";

import React, { useState } from "react";

const RangeWithLabels = () => {
  const [currentRangeWLabelsValue, setCurrentRangeWLabelsValue] =
    useState<number>(0);

  // function for handling range change
  const handleRangeWLabelsValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentRangeWLabelsValue(parseInt(e.target.value));
  };

  return (
    <div>
      <span className="label-text text-lg text-black">Price filter:</span>
      <input
        type="range"
        min={0}
        max="1000"
        value={currentRangeWLabelsValue}
        onChange={(e) => handleRangeWLabelsValue(e)}
        className="range range-warning"
        step="200"
      />
      <div className="w-full flex justify-between text-xs px-2">
        <span>ALL 0</span>
        <span>ALL 20000</span>
        <span>ALL 40000</span>
        <span>ALL 60000</span>
        <span>ALL 400000</span>
      </div>
    </div>
  );
};

export default RangeWithLabels;
