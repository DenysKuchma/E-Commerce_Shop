import { toast } from "react-toastify";
import { call, put, takeEvery, select } from "redux-saga/effects";
import client from "../../../utils/client";
import { CREATE_NEW_USER, GET_TOKEN, GET_USER_INFO } from "../../../gql";
import "../../../../node_modules/react-toastify/dist/ReactToastify.css"
import { GET_TOKEN_ACTION, GET_TOKEN_LOGIN_ACTION, GET_USER_INFO_ACTION, setUserAuthorized, setUserInfo, setUserTokenAC } from "../reducers/userReducer";


function* getToken(action){
    const res = yield call(() => client.query({
        query: GET_TOKEN,
        variables: {
            ...action.payload
        }
    }))
    if (res.data.login) {
        yield put(setUserTokenAC(res.data.login));
        yield put(setUserAuthorized());
        toast.success("Login success", {
            position: "top-right",
            autoClose: 2000,
        })
        
    } else {
        toast.error("Login failed. Please check your credentials", {
            position: "top-right",
            autoClose: 2000,
        })
    }
}

function* setUser(action) {
  
  try {
    const { login, password } = action.payload;
    const res = yield call(() =>
      client.mutate({
        mutation: CREATE_NEW_USER,
        variables: { user: { login, password } },
      })
    );

    if (res.data.UserUpsert._id) {
      const tokenRes = yield call(() =>
        client.query({
          query: GET_TOKEN,
          variables: { login, password },
        })
      );

      if (tokenRes.data.login) {
          yield put(setUserTokenAC(tokenRes.data.login.token)); 
          toast.success("Registration successful", {
              position: "top-right",
              autoClose: 2000,
          });
      } else {
          toast.error("Registration failed", {
              position: "top-right",
              autoClose: 2000,
          });
      }
    }
  } catch (error) {
    toast.error('User already register', {
      position: "top-right",
      autoClose: 2000,
    });
  }
}

function* getUserInfo(action) {
  const selectUserData = (state) => state.user.userData;
  const selectToken = (state) => state.user.token;
  try {
      const userData = yield select(selectUserData);
      const token = yield select(selectToken);
      const userId = userData.sub.id; 
      const res = yield call(() => client.query({
          query: GET_USER_INFO,
          variables: { userId: JSON.stringify([{ _id: userId }]) },  
          context: {
              headers: {
                  Authorization: `Bearer ${token}`, 
              },
          },
      }));
      console.log("Response data:", res.data);
      if (res.data && res.data.UserFindOne) {
          yield put(setUserInfo(res.data.UserFindOne));  
      }
  } catch (error) {
      console.log(error);
  }
}



export function* userSaga(){
    yield takeEvery(GET_TOKEN_ACTION, getToken)
    yield takeEvery(GET_TOKEN_LOGIN_ACTION, setUser)
    yield takeEvery(GET_USER_INFO_ACTION, getUserInfo);
}