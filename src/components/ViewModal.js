import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, MenuItem, TextField } from "@mui/material";

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

const ViewModal = ({ open, setOpen, view }) => {
  const handleClose = () => setOpen(false);

  return (
    <>
      {view !== undefined ? (
        <div>
          <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
              <form>
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <Typography variant="h5">Student Details</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      required
                      fullWidth
                      label="First Name"
                      variant="outlined"
                      name="fName"
                      value={view.data?.fName}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      fullWidth
                      label="Middle Name"
                      variant="outlined"
                      name="mName"
                      value={view.data?.mName}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      required
                      fullWidth
                      label="Last Name"
                      variant="outlined"
                      name="lName"
                      value={view.data.lName}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      required
                      fullWidth
                      select
                      label="Select Class"
                      name="class"
                      value={view.data.class}
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
                      value={view.data.division}
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
                      value={view.data.roll}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      required
                      fullWidth
                      label="Address Line 1"
                      variant="outlined"
                      name="address1"
                      value={view.data.address1}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      required
                      fullWidth
                      label="Address Line 2"
                      variant="outlined"
                      name="address2"
                      value={view.data.address2}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      fullWidth
                      label="Landmark"
                      variant="outlined"
                      name="landmark"
                      value={view.data.landmark}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      required
                      fullWidth
                      label="City"
                      variant="outlined"
                      name="city"
                      value={view.data.city}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      required
                      fullWidth
                      label="Pincode"
                      variant="outlined"
                      name="pincode"
                      value={view.data.pincode}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Button
                      fullWidth
                      variant="contained"
                      size="large"
                      onClick={handleClose}
                    >
                      Close
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

export default ViewModal;
