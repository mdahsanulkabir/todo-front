import React, { useState } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
const Home = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div 
      style={{backgroundColor: 'lightgray', 
              width: '1200px',
              height: '80vh',
              maxWidth: '80vw', 
              marginInline: 'auto'}}>
        <p>Signed In User: {user.user?.displayName}</p>
      </div>
    );
  }

  return (
    <div className="home"
      style={{backgroundColor: 'lightgray', 
              width: '1200px',
              height: '80vh',
              maxWidth: '80vw', 
              marginInline: 'auto'}}
    >
      <h1>Ahsan</h1>
      <form action="">
      <label for="email">Email:</label>
      <input
        type="email"
        value={email}
        name='email'
        onChange={(e) => setEmail(e.target.value)}
      /> <br />
      <label for="password">Password:</label>
      <input
        type="password"
        value={password}
        name='password'
        onChange={(e) => setPassword(e.target.value)}
      /> <br />
      <button onClick={() => signInWithGoogle()}>Sign In</button>
      </form>
    </div>
  );
};

export default Home;
