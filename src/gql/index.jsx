import { gql } from "@apollo/client";

export const GET_TOKEN= gql`
    query getToken ($login: String!, $password: String!) {
        login(login: $login, password: $password)
}`;


export const GET_GOODS = gql`
    query getGoods($query: String!) {
        GoodFind(query: $query) {
            _id
            name
            description
            price
            images {
                url
            }
        }
    }
`;