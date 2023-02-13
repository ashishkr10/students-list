import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const className = [
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "X",
  "XI",
  "XII",
];
const division = ["A", "B", "C", "D", "E"];

const AddStudent = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    fName: "",
    mName: "",
    lName: "",
    class: "",
    division: "",
    roll: "",
    address1: "",
    address2: "",
    landmark: "",
    city: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "data"), data);
      navigate("/manage");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Box m={3}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Box display="flex">
              <Box flexGrow={1}>
                <Typography variant="h5">Add Student</Typography>
              </Box>
              <Box>
                <Typography>{new Date().toLocaleString()}</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <TextField
              required
              fullWidth
              label="First Name"
              variant="outlined"
              name="fName"
              value={data.fName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Middle Name"
              variant="outlined"
              name="mName"
              value={data.mName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              required
              fullWidth
              label="Last Name"
              variant="outlined"
              name="lName"
              value={data.lName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              required
              fullWidth
              select
              label="Select Class"
              name="class"
              value={data.class}
              onChange={handleChange}
            >
              {className.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={4}>
            <TextField
              required
              fullWidth
              select
              label="Select Division"
              name="division"
              value={data.division}
              onChange={handleChange}
            >
              {division.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={4}>
            <TextField
              required
              fullWidth
              label="Enter Roll Number in Digits"
              variant="outlined"
              name="roll"
              type="number"
              InputProps={{ inputProps: { min: 0, max: 99 } }}
              value={data.roll}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              multiline
              label="Address Line 1"
              variant="outlined"
              name="address1"
              value={data.address1}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              multiline
              label="Address Line 2"
              variant="outlined"
              name="address2"
              value={data.address2}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Landmark"
              variant="outlined"
              name="landmark"
              value={data.landmark}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              required
              fullWidth
              label="City"
              variant="outlined"
              name="city"
              value={data.city}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              required
              fullWidth
              label="Pincode"
              variant="outlined"
              name="pincode"
              type="number"
              InputProps={{ inputProps: { min: 0, max: 999999 } }}
              value={data.pincode}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={4}>
            <Button fullWidth variant="contained" size="large" type="submit">
              Add Student
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddStudent;
