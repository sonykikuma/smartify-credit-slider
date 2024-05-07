import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

const marks = [
  {
    value: 500,
    label: "$5\n500 credits",
  },
  {
    value: 1200,
    label: "$10\n1200 credits",
  },
  {
    value: 1700,
    label: "$15\n1700 credits",
  },
  {
    value: 2500,
    label: "$20\n2500 credits",
  },
  {
    value: 3900,
    label: "$25\n3900 credits",
  },
  {
    value: 5000,
    label: "$30\n5000 credits",
  },
];

function valuetext(value) {
  return `${value}°C`;
}

function DiscreteSliderMarks() {
  return (
    <Box sx={{ width: 900, marginTop: "10px" }}>
      <Typography id="non-linear-slider" gutterBottom>
        {/* Credit Purchase Options */}
      </Typography>
      <Slider
        //color="secondary"
        aria-label="Custom marks"
        defaultValue={1200}
        getAriaValueText={valuetext}
        step={null} // This makes the slider snap only to the marks
        valueLabelDisplay="auto" // Shows the value label
        marks={marks}
        min={500}
        max={5000}
        sx={{
          // Applying custom styles directly
          "& .MuiSlider-markLabel": {
            whiteSpace: "pre-line", // Allows us to use newline characters in label strings
            textAlign: "center",
          },
        }}
      />
    </Box>
  );
}

export default DiscreteSliderMarks;
