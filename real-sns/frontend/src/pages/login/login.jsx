import React, { useContext, useRef } from 'react'
import './login.css'
import { loginCall } from '../../actionCalls';
import { AuthContext } from '../../state/AuthContext';
export default function Login() {
    const email=useRef();
    const password=useRef();
 const { user,isFetching,error,dispatch}=useContext(AuthContext)
 console.log (user)

    // useContext→AuthContextグローバルコンテキストとして使用できる
    // userの状態を利用してsessionのようなことをしている？

    const handleSubmit=(e)=>{
        e.preventDefault();//ログイン時にリダイレクトされない
        console.log(email.current.value)
        loginCall({
            email:email.current.value,
            password:password.current.value,
        },
    dispatch)
    }

    console.log("login.jsの表示",user);
    //email.current.value→ログイン時の入力値を取得できる
    
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className='loginLogo'>Anal SNS</h3>
                <span className="loginDesc">お前のツイートは便器</span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={(e)=>handleSubmit(e)}>
                    <p className="loginMsg">ログインはこちら</p>
                    <input type="email" className="loginInput" placeholder='Eメール' required ref={email}  />
                    <input type="password" className="loginInput" placeholder='パスワード' required minLength="5" ref={password}  />
                    <button className="loginButton">ログイン</button>
                    <span className="loginForgot">パスワードを忘れるな</span>
                    <button className="loginRegisterButton">アカウント作成</button>
                    
                </form>
            </div>
        </div>
    </div>
  )
}
// required→入力を必須にする
/**
 * useRef
 * →ref(email) →refが設定された要素（<input type="email" className="loginInput" placeholder='Eメール' required ref={email}  />）を監視する
 * 今回はログインを押した際に値を取得する操作を実装する
 * .current.value内に入力値が格納されている
 *  */ 
