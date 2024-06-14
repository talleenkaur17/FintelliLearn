import React, { useState } from 'react';
import {
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Grid,
  TextField,
} from '@mui/material';

const Livementoring = () => {
  const [experience, setExperience] = useState('beginner');
  const [profession, setProfession] = useState('fresher');
  const [priceRange, setPriceRange] = useState('');

  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
  };

  const handleProfessionChange = (event, newProfession) => {
    if (newProfession !== null) {
      setProfession(newProfession);
    }
  };

  const handleSearch = () => {
    // Implement search logic based on selected filters
    console.log('Search clicked:', experience, profession, priceRange);
    // Replace with actual search functionality
  };

  return (
    <Box mt={4} p={2} textAlign="center">
      <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold', marginBottom: '20px' }}>
        Find My Mentor
      </Typography>

      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom align="left">
            Experience Level
          </Typography>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="experience-label">Select Experience Level</InputLabel>
            <Select
              labelId="experience-label"
              value={experience}
              onChange={handleExperienceChange}
              label="Select Experience Level"
            >
              <MenuItem value="beginner">Beginner</MenuItem>
              <MenuItem value="intermediate">Intermediate</MenuItem>
              <MenuItem value="advanced">Advanced</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom align="left">
            Profession
          </Typography>
          <ToggleButtonGroup
            value={profession}
            exclusive
            onChange={handleProfessionChange}
            aria-label="Profession"
          >
            <ToggleButton value="fresher">Fresher</ToggleButton>
            <ToggleButton value="professional">Professional</ToggleButton>
          </ToggleButtonGroup>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom align="left">
            Price Range
          </Typography>
          <TextField
            fullWidth
            id="price-range"
            label="Enter Price Range"
            variant="outlined"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <button
            onClick={handleSearch}
            type="button"
            className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Search
          </button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Livementoring;
