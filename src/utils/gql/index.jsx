import { gql } from "@apollo/client";

export const GET_TOKEN= gql`
    query getToken ($login: String!, $password: String!) {
        login(login: $login, password: $password)
}`;
