import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getDocs, collection, where, query } from 'firebase/firestore';
import { db } from './firebase';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    const dbref = collection(db, "Auth");
    try {
      const emailMatch = query(dbref, where('Email', '==', username));
      const passwordMatch = query(dbref, where('Password', '==', password));
      const emailSnapshot = await getDocs(emailMatch);
      const passwordSnapshot = await getDocs(passwordMatch);

      const emailArray = emailSnapshot.docs.map((doc) => doc.data());
      const passwordArray = passwordSnapshot.docs.map((doc) => doc.data());

      if (emailArray.length > 0 && passwordArray.length > 0) {
        alert('Başarıyla Giriş Yapıldı');
        // JavaScript ile yönlendirme yap
        window.location.href = 'http://localhost:5173/';
      } else {
        alert('Bilgilerinizi Kontrol Edin');
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <div className='container'>
        <div className='form'>
          <h1>Giriş Yap</h1>
          <div className='box'>
            <input
              type='text'
              placeholder='İsim'
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='box'>
            <input
              type='password'
              placeholder='Şifre'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <p>
              Hesabnız Yokmu? →<Link to='/'>Kayıt Ol</Link>
            </p>
            <button onClick={login}>Giriş Yap</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
