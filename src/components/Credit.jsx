import React, { useState } from "react";
import {
  Box,
  Typography,
  Slider,
  Button,
  Switch,
  FormGroup,
  FormControlLabel,
  Link,
} from "@mui/material";

// Component to display the price and credits with styling

const SliderLabel = ({ label, value }) => (
  <div style={{ textAlign: "center" }}>
    <Typography variant="body2" component="div" sx={{ fontWeight: "bold" }}>
      {label}
    </Typography>
    <Typography variant="caption" component="div">
      {value} credits
    </Typography>
  </div>
);
// Slider marks to denote specific points on the Slider

const marks = [
  { value: 500, label: <SliderLabel label="$5" value="500" /> },
  { value: 1200, label: <SliderLabel label="$10" value="1200" /> },
  { value: 1700, label: <SliderLabel label="$15" value="1700" /> },
  { value: 2500, label: <SliderLabel label="$20" value="2500" /> },
  { value: 3900, label: <SliderLabel label="$25" value="3900" /> },
  { value: 5000, label: <SliderLabel label="$30" value="5000" /> },
];

// Main component for credit management in an application

export default function Credit() {
  const [autoTopup, setAutoTopup] = useState(true);
  const [credits, setCredits] = useState(1200);

  // Toggle auto top-up feature
  const handleToggle = () => {
    setAutoTopup(!autoTopup);
  };

  // Handle changes to the slider for selecting credit amounts
  const handleChange = (event, newValue) => {
    setCredits(newValue);
  };

  // Function to simulate confirming an auto-purchase amount
  const handleConfirm = () => {
    console.log(`Auto-purchase amount: ${credits} credits`);
  };

  return (
    <Box sx={{ width: "100%", p: 3 }}>
      <FormGroup>
        <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
          <FormControlLabel
            label="Setup Auto-Top-up"
            control={
              <Switch
                checked={autoTopup}
                onChange={handleToggle}
                sx={{
                  "& .MuiSwitch-switchBase.Mui-checked": {
                    color: "white", // Color of the thumb
                    "& + .MuiSwitch-track": {
                      backgroundColor: "green", // Color of the track
                    },
                  },
                }}
              />
            }
            labelPlacement="start"
            sx={{
              "& .MuiFormControlLabel-label": {
                fontWeight: "bold", // Increase the font weight
              },
            }}
          />
        </Box>
      </FormGroup>
      {autoTopup && (
        <Box>
          <Typography gutterBottom>
            Once the credit goes below a minimum threshold of{" "}
            <Typography
              component="span"
              color="secondary"
              sx={{ fontWeight: "bold" }}
            >
              {" "}
              50{" "}
            </Typography>
            , we will autopurchase{" "}
            <Typography
              component="span"
              color="secondary"
              sx={{ fontWeight: "bold" }}
            >
              {credits}
            </Typography>{" "}
            credits and add them to your account.
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                console.log("Learn more clicked");
              }}
              sx={{
                color: "grey",
                fontWeight: "bold",
                cursor: "pointer",
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Learn more
            </Link>
          </Typography>
          <Slider
            aria-label="Credit slider"
            value={credits}
            onChange={handleChange}
            valueLabelDisplay="auto"
            step={null}
            marks={marks}
            min={500}
            max={5000}
            sx={{
              "& .MuiSlider-thumb": {
                color: "common.white", // Sets the background color of the thumb to white

                //color: "secondary.main", // Change thumb color to secondary
                width: 24, // Size of the thumb
                height: 24, // Size of the thumb
                //borderColor: "secondary.main", // Uses the secondary color for the border

                border: "6px solid #A020F0", // Thick white border to create the inner circle effect
              },
              "& .MuiSlider-track": {
                bgcolor: "secondary.main", // Change color of the track (left of the thumb)
              },
              "& .MuiSlider-rail": {
                bgcolor: "grey.400", // Change color of the rail (right of the thumb)
              },
            }}
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={handleConfirm}
            sx={{ mt: 6 }}
          >
            Confirm Auto-Purchase
          </Button>
        </Box>
      )}
    </Box>
  );
}
