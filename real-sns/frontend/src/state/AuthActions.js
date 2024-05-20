//ユーザ入力に応じたアクションの設定
export const LoginStart=(user)=>({
    type:"LOGIN_START"
})
export const LoginSuccess=(user)=>({
    type:"LOGIN_SUCCESS",
    payload:user
})
export const LoginError=(error)=>({
    type:"LOGIN_ERROR",
    payload:error
})
/**
 * type→アクション名
 * user→userの状態
 * payload→ユーザの状態を返す
 *  */ 