import React, { useState } from 'react'
import {db} from './firebase'
import './style.css'
import { Link } from 'react-router-dom'
import { getDocs, collection, addDoc, query, where} from "firebase/firestore";
const Sign_up = () => {
    const[name, SetName] = useState('')
    const[email, SetEmail] = useState('')
    const[password, SetPassword] = useState('')
    const dbref = collection(db, 'Auth')
    const signup = async () =>
    {
        const matchEmail = query(dbref, where('Email', '==', email))
        try
        {
            const snapshot = await getDocs(matchEmail)
            const emailMatchingArray = snapshot.docs.map((doc) => doc.data())

            if(emailMatchingArray.length > 0)
            {
                alert('Bu mail zaten kayıtlı')
            
            }
            else 
            {
                 await addDoc(dbref, {Name: name, Email: email, Password: password})
                 alert('Başarıyla kayıt olundu')
            }
           
        }
        catch (error)
        {
            alert(error)
        }
     
    }
  return (
    <>
    <div className='container'>
        <div className='form'>
            <h1>Kayıt ol</h1>
            <div className='box'>
                <input type='text' placeholder='İsim' onChange={(e) => SetName(e.target.value)}></input>
            </div>
            <div className='box'>
                <input type='email' placeholder='E-mail' onChange={(e) => SetEmail(e.target.value)}></input>
            </div>
            <div className='box'>
                <input type='password' placeholder='Şifre' onChange={(e) => SetPassword(e.target.value)}></input>
            </div>
            <div>
                <p>Hesabınız Varmı? →<Link to='/signin'>Giriş</Link></p>
                <button onClick={signup}>Kayıt Ol</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Sign_up