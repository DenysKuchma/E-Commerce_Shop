import { gql } from "@apollo/client";

export const GET_TOKEN= gql`
    query getToken ($login: String!, $password: String!) {
        login(login: $login, password: $password)
}`;

export const CREATE_NEW_USER = gql`
    mutation UserUpsert($user: UserInput) {
        UserUpsert(user: $user) {
            _id
            createdAt
            login
            nick
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

export const GET_GOODS = gql`
    query getGoods($query: String!) {
        CategoryFindOne(query: $query) {
            _id
            name
            goods {
                _id
                name
                price
                images {
                    url
                }
            }
        }
    }
`;

export const GET_ALL_GOODS = gql`
    query getAllGoods($query: String!) {
        GoodFind(query: $query) {
            _id
            name
            price
            images {
                url
            }
        }
    }
`;

export const GET_ONE_GOOD = gql`
    query getGoodOne($query: String!) {
        GoodFindOne(query: $query) {
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