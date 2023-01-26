import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

function App() {
    const [author, setAuthor] = useState("");

    const handleChange = (event) => {
        setAuthor(event.target.value);
    };

    return (
        <Box
            sx={{
                margin: "0 auto",
                padding: 2,
                width: 1200,
                height: "100vh",
                backgroundColor: "#B9F3FC",
            }}
        >
            <Typography variant="h3" component="h2" sx={{ textAlign: "center", color: "#5B8FB9", mb: 2 }}>
                My Books
            </Typography>
            <hr />

            <Grid container spacing={2} sx={{ my: 2 }}>
                <Grid item xs={12} md={7}>
                    <form action="">
                        <FormControl fullWidth sx={{ mb: 2 }}>
                            <TextField id="filled-basic" label="Book name" variant="filled" />
                        </FormControl>

                        <FormControl fullWidth sx={{ mb: 2 }}>
                            <TextField id="filled-basic" label="Book genre" variant="filled" />
                        </FormControl>

                        <FormControl fullWidth sx={{ mb: 2 }}>
                            <InputLabel id="demo-simple-select-label">Author</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={author}
                                label="Select author"
                                onChange={handleChange}
                            >
                                <MenuItem value="Minh Quan">Minh Quan</MenuItem>
                                <MenuItem value="Minh Quan">Minh Quan</MenuItem>
                                <MenuItem value="Minh Quan">Minh Quan</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl sx={{ display: "flex", alignItems: "end", justifyItems: "center" }}>
                            <Button variant="contained">Add book</Button>
                        </FormControl>
                    </form>
                </Grid>
                <Grid item xs={12} md={5}>
                    <form action="">
                        <FormControl fullWidth sx={{ mb: 2 }}>
                            <TextField id="filled-basic" label="Author name" variant="filled" />
                        </FormControl>

                        <FormControl fullWidth sx={{ mb: 2 }}>
                            <TextField id="filled-basic" label="Author age" variant="filled" />
                        </FormControl>

                        <FormControl sx={{ display: "flex", alignItems: "end", justifyItems: "center" }}>
                            <Button variant="contained">Add author</Button>
                        </FormControl>
                    </form>
                </Grid>
            </Grid>
            <hr />

            <Grid container spacing={2} sx={{ my: 2 }}>
                <Grid item xs={12} md={8}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <Item>xs=4</Item>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Item>xs=4</Item>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Item>xs=4</Item>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Box
                        sx={{
                            width: 300,
                            height: 300,
                            backgroundColor: "primary.dark",
                            "&:hover": {
                                backgroundColor: "primary.main",
                                opacity: [0.9, 0.8, 0.7],
                            },
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}

export default App;
