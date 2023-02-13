import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, MenuItem, TextField } from "@mui/material";
import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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

const EditModal = ({ opened, setOpened, edit, setEdit, data, setData }) => {
  const handleClose = () => setOpened(false);

  const handleChange = (e) => {
    setEdit({
      ...edit,
      data: {
        ...edit.data,
        [e.target.name]: e.target.value,
      },
    });
  };

  console.log(edit);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const taskDocRef = doc(db, "data", edit.id);
    try {
      await updateDoc(taskDocRef, edit.data);
      handleClose();
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      {edit !== undefined ? (
        <div>
          <Modal open={opened} onClose={handleClose}>
            <Box sx={style}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <Typography variant="h5">Edit Student Details</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      required
                      fullWidth
                      label="First Name"
                      variant="outlined"
                      name="fName"
                      value={edit.data?.fName}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      fullWidth
                      label="Middle Name"
                      variant="outlined"
                      name="mName"
                      value={edit.data?.mName}
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
                      value={edit.data.lName}
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
                      value={edit.data.class}
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
                      value={edit.data.division}
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
                      value={edit.data.roll}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      required
                      fullWidth
                      label="Address Line 1"
                      variant="outlined"
                      name="address1"
                      value={edit.data.address1}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      required
                      fullWidth
                      label="Address Line 2"
                      variant="outlined"
                      name="address2"
                      value={edit.data.address2}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      fullWidth
                      label="Landmark"
                      variant="outlined"
                      name="landmark"
                      value={edit.data.landmark}
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
                      value={edit.data.city}
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
                      value={edit.data.pincode}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Button
                      fullWidth
                      variant="contained"
                      size="large"
                      type="submit"
                    >
                      Edit Student
                    </Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button
                      fullWidth
                      variant="contained"
                      size="large"
                      onClick={handleClose}
                    >
                      Cancel
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Modal>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default EditModal;
