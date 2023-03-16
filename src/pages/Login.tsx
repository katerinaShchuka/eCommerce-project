import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../redux/hooks';

const Login = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const user = useAppSelector(state => state.userReducer.currentUser)
    const dispatch = useAppDispatch()
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
}
console.log(email, password)

  return (
    <div>
        <form onSubmit={onSubmit}>
            Email: <input type="email" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
            Password: <input type="password" value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
        
    </div>
  )
}

export default Login

function userAppSelector(arg0: (state: any) => any) {
    throw new Error('Function not implemented.')
}
