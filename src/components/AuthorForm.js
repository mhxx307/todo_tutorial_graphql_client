import { useMutation } from "@apollo/client";
import { Button, CircularProgress, FormControl, TextField } from "@mui/material";
import { ADD_AUTHOR } from "../apollo-client/mutations";
import { useState } from "react";
import { GET_AUTHORS } from "../apollo-client/queries";

function AuthorForm() {
    const [name, setName] = useState(null);
    const [age, setAge] = useState();
    const [addAuthor, { loading }] = useMutation(ADD_AUTHOR);

    const handleSubmit = (e) => {
        e.preventDefault();
        addAuthor({
            variables: {
                name,
                age: parseInt(age),
            },
            refetchQueries: [
                { query: GET_AUTHORS }, // DocumentNode object parsed with gql
            ],
        });
        setName("");
        setAge("");
    };

    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <FormControl fullWidth sx={{ mb: 2 }}>
                    <TextField
                        id="filled-basic"
                        label="Author name"
                        variant="filled"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </FormControl>

                <FormControl fullWidth sx={{ mb: 2 }}>
                    <TextField
                        id="filled-basic"
                        label="Author age"
                        variant="filled"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </FormControl>

                <FormControl sx={{ display: "flex", alignItems: "end", justifyItems: "center" }}>
                    <Button variant="contained" disabled={loading} type="submit">
                        {loading && <CircularProgress size={14} />}
                        {!loading && "Add author"}
                    </Button>
                </FormControl>
            </form>
        </>
    );
}

export default AuthorForm;
