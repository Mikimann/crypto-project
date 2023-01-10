import { useState } from 'react';
import Input from '../../constants/styled-components/Input';
import Button from '../../constants/styled-components/Button';
import { useAuth } from '../../providers/useAuth';
import './Login.css';

function Login() {
  const [user, setUser] = useState('');
  const auth = useAuth();

  const handleLogin = () => {
    auth.login(user);
  };

  return (
    <div className="main">
      <p className="sign">Login</p>
      <form className="form">
        <Input
          className="login-input"
          type="text"
          placeholder="Enter your email"
          onChange={(e) => setUser(e.target.value)}
        />
        <div>
          <Button onClick={handleLogin}>Log in</Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
