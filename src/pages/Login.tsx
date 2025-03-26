
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Form, Button, Modal } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../redux/store';
import { loginUser } from '../redux/authSlice';
import '../styles/login.css';

const Login: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }))
      .unwrap()
      .then(() => {
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
          navigate('/'); 
        }, 1500);
      })
      .catch((error) => {
        console.error('Login error:', error);
      });
  };

  return (
    <motion.div 
      className="login-container d-flex flex-column align-items-center justify-content-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <video autoPlay muted loop className="login-bg-video">
        <source 
          src="https://assets.mixkit.co/videos/preview/mixkit-foliage-in-a-forest-with-a-small-path-34404-large.mp4" 
          type="video/mp4" 
        />
      </video>
      <div className="login-overlay"></div>
      <motion.div
        className="login-wrapper p-4 shadow"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-center mb-4 login-title">EcoTrack</h2>
        <p className="login-subtitle text-center mb-3">
          Accedi per iniziare il tuo viaggio green!
        </p>
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="email" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Inserisci la tua email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="password" className="mb-4">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Inserisci la tua password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="success" type="submit" className="w-100">
            Accedi
          </Button>
        </Form>
        <div className="text-center mt-3">
          <small className="text-black">
            Non hai un account? <Link to="/register" className="register-link">Registrati qui</Link>
          </small>
        </div>
      </motion.div>
      
      <Modal 
        show={showModal} 
        onHide={() => {}} 
        centered 
        className="custom-login-modal"
        backdrop="static" 
      >
        <Modal.Body className="text-center p-5">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ duration: 0.5 }}
          >
            <h4 className="mb-3" style={{ fontWeight: 'bold', color: '#28a745' }}>
              🎉 Login Effettuato!
            </h4>
            <p style={{ fontSize: '1.1rem' }}>Benvenuto su EcoTrack!</p>
          </motion.div>
        </Modal.Body>
      </Modal>
    </motion.div>
  );
};

export default Login;
