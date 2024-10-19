import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

export default function Forms() {
  // State to hold form values
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    type: "",
    city: "",
    role: "",
    currency: "EUR",
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing
    console.log("Form Data Submitted:", formData);
  };

  return (
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        required
        name="name"
        label="Name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <TextField
        required
        name="number"
        label="Number"
        value={formData.number}
        onChange={handleInputChange}
      />
      <TextField
        required
        name="type"
        label="Type"
        value={formData.type}
        onChange={handleInputChange}
      />
      <TextField
        required
        name="city"
        label="City"
        value={formData.city}
        onChange={handleInputChange}
      />
      <TextField
        required
        name="role"
        label="Role"
        value={formData.role}
        onChange={handleInputChange}
      />
      <TextField
        name="search"
        label="Search field"
        type="search"
        value={formData.search}
        onChange={handleInputChange}
      />
      <div>
        <TextField
          name="currency"
          select
          label="Select Currency"
          value={formData.currency}
          onChange={handleInputChange}
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        sx={{ mt: 2 }} // Add some margin to the top
      >
        Submit
      </Button>
    </Box>
  );
}
