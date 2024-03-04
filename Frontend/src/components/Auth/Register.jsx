import React, { useState } from 'react';
import { Context } from '../../main';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [role, setRole] = useState("");

    const {isAuthorized, setIsAuthorized, user,setUser} = useContext(Context);

    const handleRegister = async (e)=> {
        e.preventDefault();
        try{
            const {data} = await axios.post  (
                "http://localhost:4000/api/v1/user/register",
                {name, email,password,phone,role},
                {
                    withCredentials:true,
                    headers:{
                        "Content-Type": "application/json",

                    },
                }
            );
            toast.success(data.message);
            setName("");
            setEmail("");
            setPhone("");
            setRole("");
            setPassword("");
            setIsAuthorized(true);
        } catch (error){
            toast.error(error.response.data.message)
        }
    };

    if(isAuthorized){
        return <Navigate to={"/"}/>;
    }
    return<>
    <div className='authPage'>
        <div className='container'>
            <div className='header'>
                <img src='' alt=''/>
            </div>
        </div>
    </div>
    
    </>;

    
};
export default Register;