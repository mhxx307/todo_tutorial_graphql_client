import { gql } from "@apollo/client";

const ADD_BOOK = gql`
    mutation add_book($authorId: ID!, $genre: String, $title: String) {
        createBook(authorId: $authorId, genre: $genre, title: $title) {
            id
        }
    }
`;

const ADD_AUTHOR = gql`
    mutation Mutation($name: String, $age: Int) {
        createAuthor(name: $name, age: $age) {
            id
        }
    }
`;

export { ADD_BOOK, ADD_AUTHOR };
