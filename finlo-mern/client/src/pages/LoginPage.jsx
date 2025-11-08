import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);

    try {
      await authService.login(email, password);
      navigate('/'); // Redirect to homepage on successful login
      window.location.reload(); // Optional: to refresh navbar state
    } catch (error) {
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      setLoading(false);
      setMessage(resMessage);
    }
  };

  // Inline styles for now, you can move these to a CSS file
  const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem',
        maxWidth: '400px',
        margin: '5rem auto',
        backgroundColor: 'var(--card-bg, #16161d)',
        borderRadius: '12px',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },
    input: {
        backgroundColor: '#2a2a3e',
        color: 'white',
        border: '1px solid var(--primary-color, #a855f7)',
        borderRadius: '8px',
        padding: '0.8rem',
        marginBottom: '1rem',
        fontSize: '1rem'
    },
    button: {
        backgroundColor: 'var(--primary-color, #a855f7)',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        padding: '0.9rem',
        fontSize: '1.1rem',
        cursor: 'pointer',
        transition: 'background-color 0.2s'
    },
    message: {
        color: '#ff4d4d',
        marginTop: '1rem'
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login to FINLO</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" disabled={loading} style={styles.button}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
        {message && <p style={styles.message}>{message}</p>}
      </form>
    </div>
  );
};

export default LoginPage;
