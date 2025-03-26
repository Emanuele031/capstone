import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Form, Button, Modal } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../redux/store';
import { registerUser } from '../redux/authSlice';
import '../styles/login.css';

const Register: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submit registrazione avviato');
    if (password !== confirmPassword) {
      alert("Le password non corrispondono!");
      return;
    }

    
    dispatch(registerUser({ username: name, email, password }))
      .unwrap()
      .then(() => {
        console.log('Registrazione avvenuta con successo');
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
          navigate('/login');
        }, 1500);
      })
      .catch((error) => {
        console.error('Errore nella registrazione:', error);
        alert("Si è verificato un errore durante la registrazione. Riprova.");
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
        <h2 className="text-center mb-4 login-title">Registrati su EcoTrack</h2>
        <p className="login-subtitle text-center mb-3">
          Crea il tuo account e inizia il tuo viaggio green!
        </p>
        <Form onSubmit={handleRegister}>
          <Form.Group controlId="name" className="mb-3">
            <Form.Label>Nome</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Inserisci il tuo nome" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </Form.Group>
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
          <Form.Group controlId="password" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Inserisci la tua password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </Form.Group>
          <Form.Group controlId="confirmPassword" className="mb-4">
            <Form.Label>Conferma Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Conferma la tua password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              required 
            />
          </Form.Group>
          <Button variant="success" type="submit" className="w-100">
            Registrati
          </Button>
        </Form>
        <div className="text-center mt-3">
          <small className="text-black">
            Hai già un account? <Link to="/login" className="register-link">Accedi qui</Link>
          </small>
        </div>
      </motion.div>
      
      
      <Modal show={showModal} onHide={() => setShowModal(false)} centered backdrop="static">
        <Modal.Body className="text-center p-5">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ duration: 0.5 }}
          >
            <h4 className="mb-3" style={{ fontWeight: 'bold', color: '#28a745' }}>
              Registrazione Completata!
            </h4>
            <p style={{ fontSize: '1.1rem' }}>Benvenuto in EcoTrack!</p>
          </motion.div>
        </Modal.Body>
      </Modal>
    </motion.div>
  );
};

export default Register;
