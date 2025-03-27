import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaLeaf } from 'react-icons/fa';
import Logo from '../assets/LOGO VERDE.png';
import Terra from '../assets/ecotrack.png';
import logoM from '../assets/LOGO MARRONE.png';
import '../styles/Home.css';


const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden">
      
      <motion.div
      className="hero vh-100 d-flex flex-column  align-items-center text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.img
        src={Logo}
        alt="Logo Verde"
        className="img-fluid"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        style={{ maxWidth: '550px', width: '100%' }} 
      />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-3"
      >
        <Button 
          variant="outline-success" 
          size="lg" 
          onClick={() => navigate('/info')}
          className="fw-bold px-5 py-3 shadow-lg"
          style={{
            fontSize: '1.5rem',
            borderRadius: '30px',
            backdropFilter: 'blur(5px)',
            marginTop: '-3em'
          }}
        >
          SCOPRI DI PIÙ
        </Button>
      </motion.div>
    </motion.div>

      
      <motion.div
        className="innovation-section vh-100"
        style={{
          backgroundImage: `url(${Terra})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top', 
          backgroundRepeat: 'no-repeat',
          position: 'relative', 
        }}
      >
        
        <div className="welcome-overlay">
  <Container className="py-5 text-start">
    <Row>
      <Col xs={12} md={8}>
        <motion.h2
          className="display-4 mb-3"
          style={{
            background: 'linear-gradient(90deg, #4CAF50, #2E7D32)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: '800',
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          BENVENUTO SU ECOTRACK 🌱
        </motion.h2>

        <motion.p
          className="lead text-dark"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Monitora e migliora il tuo impatto ambientale in modo semplice e divertente. <br />
          Ogni piccola azione fa la differenza!
        </motion.p>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Button
            variant="outline-success"
            size="lg"
            className="mt-4"
            onClick={() => navigate('/Profile')}
          >
            <FaLeaf className="me-2" /> INIZIA LE MISSIONI
          </Button>
        </motion.div>
      </Col>
    </Row>
  </Container>
</div>


        
        <Container className="terra-text-container h-100 d-flex align-items-end">
          <Row className="w-100">
            <Col md={8} className="mx-auto text-center text-white">
              <motion.h1
                className="display-4 fw-bold"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.3 }}
              >
                INNOVA. CAMBIA. ISPIRA.
              </motion.h1>
              <motion.p
                className="lead mt-3"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                Non solo una piattaforma, ma un movimento per trasformare ogni gesto quotidiano in un atto concreto di sostenibilità.
              </motion.p>
            </Col>
          </Row>
        </Container>
      </motion.div>
    
    <Container className="py-5 text-center mt-5 mb-5">
        <motion.h2
          className="display-4 fw-bold mb-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ color: '#3E2723', textShadow: '4px 4px 8px rgba(0, 0, 0, 0.3)' }}
        >
           Il Futuro è Adesso 
        </motion.h2>
        <Row className="align-items-center flex-column-reverse flex-lg-row">
          <Col lg={6} className="text-lg-end text-center mb-4 mb-lg-0">
            <motion.p
              className="lead"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              style={{ fontWeight: 'bold', fontSize: '1.5rem', textShadow: '4px 4px 8px rgba(0, 0, 0, 0.4)', lineHeight: '1.6', color: '#3E2723', marginTop: '2em' }}
            >
              🌍 Ogni innovazione parte da un’idea.<br /><br />
              💡 Trasformiamo quelle idee in azioni concrete.<br /><br />
              🚀 Per un futuro dove l’impatto ambientale è positivo e misurabile.
            </motion.p>
          </Col>
          <Col lg={6} className="d-flex justify-content-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              style={{ position: 'relative' }}
            >
              <motion.img
                src={logoM}
                alt="Logo M"
                className="img-fluid rounded-circle shadow-lg"
                initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                style={{ maxWidth: '280px', border: '10px solid #795548', padding: '20px', background: 'white', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)' }}
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                style={{
                  position: 'absolute',
                  bottom: '-30px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#795548',
                  color: 'white',
                  padding: '0px 22px',
                  borderRadius: '30px',
                  fontWeight: 'bold',
                  fontSize: '1.5rem',
                  boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.3)'
                  
                }}
              >
                🌟 Innovazione Sostenibile 🌟
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;