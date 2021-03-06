import {
  Button,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React, { useContext, useState } from "react";
import ImageIcon from "@material-ui/icons/Image";
import axios from "axios";
import { UidContext } from "../UserContext";

const AdminPage = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [previewSource, setPreviewSource] = useState();
  const Uid = useContext(UidContext)
   const [category, setCategory] = React.useState("");
   const [open, setOpen] = React.useState(false);

   const handleChange = (event) => {
     setCategory(event.target.value);
   };

   const handleClose = () => {
     setOpen(false);
   };

   const handleOpen = () => {
     setOpen(true);
   };

  const resetInput = () => {
    setTitle("");
    setPrice("");
    setDescription("");
    setPreviewSource("");
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmit = async (e) => {
    console.log("coucou");
    e.preventDefault();
    if (!previewSource) return;
    uploadImg(previewSource)
  };

  const uploadImg = async (base64EncodedImg) => {
    try {
      await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}api/articles`,
        data: {
          title: title,
          description: description,
          price: price,
          file: base64EncodedImg,
          posterId: Uid,
          category: category
        },
      })
        .then((res) => {
          if(res.errors) console.log(res.errors);
          // else {

          // }
          resetInput();
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="admin-page">
      <form onSubmit={handleSubmit}>
        <h1>Ajouter un article</h1>
        <div className="add-article-head">
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            id="standard-basic"
            label="Titre de l'article"
            endAdornment={<InputAdornment position="end">???</InputAdornment>}
          />
          <FormControl>
            <Input
              id="standard-adornment-weight"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              endAdornment={<InputAdornment position="end">???</InputAdornment>}
              label="Prix de l'article"
              inputProps={{
                "aria-label": "weight",
              }}
            />
          </FormControl>
          <div>
            <FormControl >
              <InputLabel id="demo-controlled-open-select-label">
                Cat??gory
              </InputLabel>
              <Select
                // labelId="demo-controlled-open-select-label"
                // id="demo-controlled-open-select"

                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={category}
                onChange={handleChange}
              >
                <MenuItem value={"voyage"}>Voyage</MenuItem>
                <MenuItem value={"Luxe"}>Luxe</MenuItem>
                <MenuItem value={"high-tech"}>High-Tech</MenuItem>
                <MenuItem value={"sport"}>Sport</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="img-upload">
          <Button variant="contained" color="default" startIcon={<ImageIcon />}>
            Image
            <input
              type="file"
              onChange={(e) => previewFile(e.target.files[0])}
            />
          </Button>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          {previewSource && (
            <img
              src={previewSource}
              alt=""
              style={{
                width: "15rem",
                boxShadow: "0px 1px 5px black",
                margin: "auto",
              }}
            />
          )}
        </div>
        <TextField
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          id="standard-multiline-static"
          label="Description"
          style={{ padding: 8 }}
          multiline
          placeholder="Description de l'article"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <div style={{ width: "40%", margin: "auto" }}>
          <Button
            type="submit"
            size="large"
            color="primary"
            variant="contained"
            style={{ width: "100%" }}
          >
            Ajouter
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdminPage;
