
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import logoNav from '../assets/LOGO BIANCO.png';
import { FaUser } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { logout } from '../redux/authSlice';

const Navigation: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { token, user } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  const navLinks = token ? ['Home', 'Mappa', 'Ranking', 'Info'] : ['Home', 'Mappa', 'Info'];

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
    >
      <Navbar
        expand="lg"
        fixed="top"
        style={{
          background: 'linear-gradient(90deg, rgba(50,44,42,0.95) 0%, rgba(34,30,28,0.95) 100%)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
          padding: '0.75rem 1.5rem'
        }}
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center">
            <motion.img
              src={logoNav}
              alt="EcoTrack Logo"
              height="50"
              width="50"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="mx-auto">
              {navLinks.map((label, idx) => (
                <Nav.Link
                  key={idx}
                  as={NavLink}
                  to={label === 'Home' ? '/' : `/${label.toLowerCase()}`}
                  className="mx-3"
                  style={{
                    fontWeight: 'bold',
                    fontSize: '1.15rem',
                    textShadow: '1px 1px 3px rgba(0,0,0,0.5)'
                  }}
                >
                  {label}
                </Nav.Link>
              ))}
            </Nav>
            <Nav className="ms-auto d-flex align-items-center">
            {token && (
  <motion.div>
    <Nav.Link as={NavLink} to="/profile" className="d-flex align-items-center">
      <motion.div
        whileHover={{ scale: 1.1, boxShadow: '0px 0px 8px rgba(255,255,255,0.8)' }}
        transition={{ type: 'spring', stiffness: 300 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '45px',
          height: '45px',
          borderRadius: '50%',
          border: '2px solid #fff',
          marginRight: '0.5rem'
        }}
      >
        <FaUser size={30} style={{ color: '#fff' }} />
      </motion.div>
      <span style={{ color: '#fff', fontWeight: 'bold' }}>{user?.username}</span>
    </Nav.Link>
  </motion.div>
)}

              {token ? (
                <Button variant="outline-light" onClick={handleLogout} className="ms-3">
                  Logout
                </Button>
              ) : (
                <Nav.Link
                  as={NavLink}
                  to="/login"
                  className="ms-3"
                  style={{
                    fontWeight: 'bold',
                    fontSize: '1.15rem',
                    padding: '0.5rem 1rem',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '5px',
                    transition: 'background 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)';
                  }}
                >
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
};

export default Navigation;
