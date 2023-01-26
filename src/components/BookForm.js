import { useMutation, useQuery } from "@apollo/client";
import { Button, CircularProgress, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import { GET_AUTHORS, GET_BOOKS } from "../apollo-client/queries";
import { ADD_BOOK } from "../apollo-client/mutations";

function BookForm() {
    const [author, setAuthor] = useState("");
    const [bookName, setBookName] = useState("");
    const [genre, setGenre] = useState("");

    const { data } = useQuery(GET_AUTHORS);
    const [addBook, { loading }] = useMutation(ADD_BOOK);

    const handleChange = (event) => {
        setAuthor(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({ author, bookName, genre });
        addBook({
            variables: { authorId: author, genre: genre, title: bookName },
            refetchQueries: [
                { query: GET_BOOKS }, // DocumentNode object parsed with gql
            ],
        });
        setGenre("");
        setBookName("");
        setAuthor("");
    };

    return (
        <form action="" onSubmit={handleSubmit}>
            <FormControl fullWidth sx={{ mb: 2 }}>
                <TextField
                    id="filled-basic"
                    label="Book name"
                    variant="filled"
                    required
                    value={bookName}
                    onChange={(e) => setBookName(e.target.value)}
                />
            </FormControl>

            <FormControl fullWidth sx={{ mb: 2 }}>
                <TextField
                    id="filled-basic"
                    label="Book genre"
                    variant="filled"
                    required
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                />
            </FormControl>

            <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="demo-simple-select-label" required>
                    Author
                </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={author}
                    label="Select author"
                    onChange={handleChange}
                    required
                >
                    {data &&
                        data.authors.map((author) => (
                            <MenuItem key={author.id} value={author.id}>
                                {author.name}
                            </MenuItem>
                        ))}
                </Select>
            </FormControl>

            <FormControl sx={{ display: "flex", alignItems: "end", justifyItems: "center" }}>
                <Button variant="contained" disabled={loading} type="submit">
                    {loading && <CircularProgress size={14} />}
                    {!loading && "Add book"}
                </Button>
            </FormControl>
        </form>
    );
}

export default BookForm;
