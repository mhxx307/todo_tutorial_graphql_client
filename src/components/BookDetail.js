import { useQuery } from "@apollo/client";
import { Box, Skeleton, Typography } from "@mui/material";
import { memo } from "react";
import { GET_BOOK_DETAIL } from "../apollo-client/queries";

function BookDetail({ bookId }) {
    const { loading, error, data } = useQuery(GET_BOOK_DETAIL, {
        variables: { bookId },
    });

    if (loading) {
        return <Skeleton variant="rectangular" width={300} height={300} />;
    }

    if (data && error) {
        return <p>Error...</p>;
    }

    const book = data ? data.book : null;

    return (
        <Box
            sx={{
                width: 300,
                height: 300,
                padding: 2,
                backgroundColor: "primary.dark",
            }}
        >
            {!book ? (
                <Typography variant="h5" component="h2" sx={{ textAlign: "center", color: "#fff", mb: 2 }}>
                    Chưa có dữ liệu
                </Typography>
            ) : (
                <>
                    <Typography variant="h5" component="h2" sx={{ textAlign: "center", color: "#fff", mb: 2 }}>
                        {book.title}
                    </Typography>
                    <p>Thể loại: {book.genre}</p>

                    <p>Tên tác giả: {book.author.name}</p>

                    <p>Tuổi: {book.author.age}</p>

                    <Typography variant="h6" component="h2" sx={{ color: "#fff" }}>
                        Các tác phẩm liên quan
                    </Typography>
                    {book.author.books.map((book) => (
                        <li key={book.id}>{book.title}</li>
                    ))}
                </>
            )}
        </Box>
    );
}

export default memo(BookDetail);
