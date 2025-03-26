import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


const Footer: React.FC = () => {
  return (
    <footer className="footer text-white py-4" style={{ backgroundColor: "#322C2A" }}>
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-start">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              © {new Date().getFullYear()} EcoTrack. Tutti i diritti riservati.
            </motion.p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <a href="https://facebook.com/tuoprofilo" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <FaFacebookF size={24} />
              </a>
              <a href="https://instagram.com/tuoprofilo" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com/in/tuoprofilo" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaLinkedinIn size={24} />
              </a>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
