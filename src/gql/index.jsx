import { gql } from "@apollo/client";

export const GET_TOKEN= gql`
    query getToken ($login: String!, $password: String!) {
        login(login: $login, password: $password)
}`;


export const GET_GOODS = gql`
    query getGoods($query: String!) {
        CategoryFindOne(query: $query) {
            _id
            name
            goods {
                _id
                name
                description
                price
                image {
                    url
                }
            }
        }
    }
`;

export const GET_CATEGORY = gql`
    query getCategory($query: String!){
        CategoryFind(query: $query) {
            _id
            name
            image {
                url
            }
        }
    }
`;