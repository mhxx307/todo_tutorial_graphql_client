import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";

import { AuthorForm, BookForm, BookList } from "./components";

function App() {
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
                    <BookForm />
                </Grid>
                <Grid item xs={12} md={5}>
                    <AuthorForm />
                </Grid>
            </Grid>
            <hr />

            <Grid container spacing={2} sx={{ my: 2 }}>
                <BookList />
            </Grid>
        </Box>
    );
}

export default App;
