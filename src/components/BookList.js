import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import BookDetail from "./BookDetail";
import { GET_BOOKS } from "../apollo-client/queries";
import { useQuery } from "@apollo/client";
import { useState } from "react";

function BookList() {
    const [bookId, setBookId] = useState(null);
    const { loading, error, data } = useQuery(GET_BOOKS);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!loading && error) {
        return <p>Error...</p>;
    }

    return (
        <>
            <Grid item xs={12} md={8}>
                <Grid container spacing={2}>
                    {data.books.map((book) => (
                        <Grid
                            item
                            xs={12}
                            md={4}
                            key={book.id}
                            onClick={() => setBookId(book.id)}
                            sx={{ cursor: "pointer" }}
                        >
                            <Item>{book.title}</Item>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            <Grid item xs={12} md={4}>
                <BookDetail bookId={bookId} />
            </Grid>
        </>
    );
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    "&:hover": {
        backgroundColor: "rgb(7, 177, 77, 0.42)",
    },
}));

export default BookList;
