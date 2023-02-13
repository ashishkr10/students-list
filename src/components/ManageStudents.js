import React from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useState, useEffect } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { doc, deleteDoc } from "firebase/firestore";
import ViewModal from "./ViewModal";
import EditModal from "./EditModal";

const ManageStudents = () => {
  const [data, setData] = useState();
  const [view, setView] = useState();
  const [edit, setEdit] = useState();
  const [open, setOpen] = useState(false);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const q = query(collection(db, "data"));
    onSnapshot(q, (querySnapshot) => {
      setData(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Do you really want to delete?")) {
      const taskDocRef = doc(db, "data", id);
      try {
        await deleteDoc(taskDocRef);
      } catch (err) {
        alert(err);
      }
    }
  };
  const handleOpen = () => setOpen(true);
  const handleOpened = () => setOpened(true);

  const handleView = (data) => {
    setView(data);
    handleOpen();
  };
  const handleEdit = (data) => {
    setEdit(data);
    handleOpened();
  };

  return (
    <>
      {data !== undefined ? (
        <Box p={3}>
          <Box display="flex">
            <Box flexGrow={1}>
              <Typography variant="h5">Manage Students</Typography>
            </Box>
            <Box>
              <Typography>{new Date().toLocaleString()}</Typography>
            </Box>
          </Box>
          <Box my={3}>
            <Table>
              <TableHead sx={{ backgroundColor: "red", color: "white" }}>
                <TableRow>
                  <TableCell>
                    <Typography variant="h6" sx={{ color: "white" }}>
                      Name
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6" sx={{ color: "white" }}>
                      Class
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6" sx={{ color: "white" }}>
                      Roll Number
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6" sx={{ color: "white" }}>
                      View/Edit/Delete
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((data, i) => (
                  <TableRow hover key={i}>
                    <TableCell>
                      <Typography color="textPrimary" variant="body1">
                        {data.data.fName + " " + data.data.lName}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography color="textPrimary" variant="body1">
                        {data.data.class + " - " + data.data.division}
                      </Typography>
                    </TableCell>
                    <TableCell>{data.data.roll}</TableCell>
                    <TableCell>
                      <Box display="flex">
                        <Button
                          sx={{ color: "red" }}
                          onClick={() => handleView(data)}
                        >
                          <VisibilityOutlinedIcon />
                        </Button>
                        <Button
                          sx={{ color: "red" }}
                          onClick={() => handleEdit(data)}
                        >
                          <BorderColorOutlinedIcon />
                        </Button>
                        <Button
                          sx={{ color: "red" }}
                          onClick={() => handleDelete(data.id)}
                        >
                          <DeleteOutlinedIcon />
                        </Button>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Box>
      ) : (
        <h1>Loading...</h1>
      )}
      {view !== undefined && (
        <ViewModal
          open={open}
          setOpen={setOpen}
          view={view}
          setData={setData}
        />
      )}
      {edit !== undefined && (
        <EditModal
          opened={opened}
          setOpened={setOpened}
          edit={edit}
          setEdit={setEdit}
          data={data}
          setData={setData}
        />
      )}
    </>
  );
};

export default ManageStudents;
