import { gql } from "@apollo/client";

const GET_BOOKS = gql`
    query Query {
        books {
            title
            id
        }
    }
`;

const GET_BOOK_DETAIL = gql`
    query Query($bookId: ID!) {
        book(id: $bookId) {
            id
            title
            genre
            author {
                name
                id
                age
                books {
                    id
                    title
                }
            }
        }
    }
`;

const GET_AUTHORS = gql`
    query Query {
        authors {
            name
            id
        }
    }
`;

export { GET_BOOKS, GET_BOOK_DETAIL, GET_AUTHORS };
