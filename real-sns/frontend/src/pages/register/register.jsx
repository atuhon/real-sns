import React, { useRef } from 'react'
import './register.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Register() {
    const username=useRef();
    const email=useRef();
    const password=useRef();
    const passwordConfim=useRef();
    const navigate=useNavigate();
    const handleSubmit=async (e)=>{
        
        e.preventDefault();//ログイン時にリダイレクトされない
        if(password.current.value!==passwordConfim.current.value){
            passwordConfim.current.setCustomValidity("パスワードが違います")
            //バリデーション

        }else{
            try{
                //パスワードと一致すればAPIを叩く
                const user={
                    username:username.current.value,
                    email:email.current.value,
                    password:password.current.value,
                };
                await axios.post('/auth/register',user)
                navigate("/login");
                //post('/auth/register',user)の,userがbodyに入る
                
               

            }catch(e){
                console.log(e)

            }
            

        }
    }
    
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className='loginLogo'>Anal SNS</h3>
                <span className="loginDesc">お前のツイートは便器</span>
            </div>
            <div className="loginRight">
                <form className="loginBox"  onSubmit={(e)=>handleSubmit(e)}>
                    <p className="loginMsg">新規登録はこちら</p>
                    <input type="text" className="loginInput" placeholder='ユーザ名' required ref={username} />
                    <input type="text" className="loginInput" placeholder='Eメール'  required  ref={email}/>
                    <input type="text" className="loginInput" placeholder='パスワード'  required minLength="6" ref={password} />
                    <input type="text" className="loginInput" placeholder='パスワード確認'  required minLength="6"  ref={passwordConfim} />
                    <button className="loginButton" type='submit'>新規登録</button>
                    <span className="loginForgot">パスワードを忘れるな</span>
                    <button className="loginRegisterButton">アカウント作成</button>
                    
                </form>
            </div>
        </div>
    </div>
  )
}
