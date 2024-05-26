// グローバルコンテキストの設定
//グローバルコンテキスト→どのコンポーネントからでも呼び出すことができる
import { createContext, useEffect, useReducer } from "react"; //グローバルコンテキストの設定
import AuthReducer from "./AuthReducer";

//初期値になるユーザを定義
//localstorageから情報を取り出す
const initialState = {
  user: JSON.parse(localStorage.getItem("user"))||null,
// user:{
//   _id:"6600202b8ad0a06ab42d2f94",
//   username:
//   "testman",
//   email:
//   "test123@4567",
//   password:
//   "1233456",
//   profilePicture:
//   "/person/1.jpeg",
//   coverPicture:
//   "/post/3.jpeg",
//   followers:[],
//   following:[],
//   isAdmin:
//   false,

//},
  isFetching: false,
  error: false,
};
//状態をグローバルに管理する為のProviderが使用可能になる
export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  useEffect(()=>{
    localStorage.setItem("user",JSON.stringify(state.user))
    
    },[state.user])
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >

        {children}
    </AuthContext.Provider>
  );
  //Children→App.jsの代わりに使用
  //Provider→グローバルに提供する事ができる

  /*
    initialStateは初期値(初期値を更新した値にする)
    AuthReducer→state更新用の関数
    dispatch→reducer実行のための関数

    */
}; //認証の状態を定義
