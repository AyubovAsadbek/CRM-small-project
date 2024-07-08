import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const LoginPage = () => {
    const navigate = useNavigate()
    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        const correctLogin = 'admin'
        const correctPassword = '12345'
        if (userName === correctLogin && password === correctPassword) {
            toast.success('Login Successfully')
            navigate('/products')
            setUsername('')
            setPassword('')
        } else {
            toast.error('Login or Password is Incorrect')
        }
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <form className="w-[450px] flex flex-col gap-5 p-10" onSubmit={handleLogin}>
                <h1 className="text-center text-4xl mb-4">Login Page</h1>
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input value={userName} onChange={e => setUsername(e.target.value)} required type="text" className="grow" placeholder="Username" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                            clipRule="evenodd" />
                    </svg>
                    <input value={password} onChange={e => setPassword(e.target.value)} required placeholder="Password" type="password" className="grow" />
                </label>
                <button className="btn btn-primary" type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginPage