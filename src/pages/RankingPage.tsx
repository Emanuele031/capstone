import React, { useEffect, useState } from 'react';
import { Table, Container, Spinner, Alert, Card, Form, Button, ListGroup } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRanking } from '../redux/rankingSlice';
import type { RootState, AppDispatch } from '../redux/store';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { addHabit, fetchRecommendations } from '../redux/habitsSlice';


const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 }
  })
};

const RankingPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  
  
  const { ranking, loading, error } = useSelector((state: RootState) => state.ranking);
  
  
  const habits = useSelector((state: RootState) => state.habits.habits);
  const recommendations = useSelector((state: RootState) => state.habits.recommendations);
  const [habitInput, setHabitInput] = useState('');

  useEffect(() => {
    dispatch(fetchRanking());
  }, [dispatch]);
  

  useEffect(() => {
    dispatch(fetchRecommendations());
  }, [dispatch, habits]);

  
  

  const handleAddHabit = () => {
    if (habitInput.trim()) {
      dispatch(addHabit({ text: habitInput, type: "GENERICO" }))
        .unwrap()
        .then(() => {
          // Dopo aver aggiunto l'abitudine, aggiorna la classifica
          dispatch(fetchRanking());
          dispatch(fetchRecommendations());
        })
        .catch((err) => {
          console.error("Errore nell'aggiunta dell'abitudine", err);
        });
      setHabitInput('');
    }
  };
  

  if (loading) {
    return (
      <Container className="text-center my-5">
        <Spinner animation="border" variant="primary" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="my-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <motion.div
      className="ranking-page-container py-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{ minHeight: '100vh' }}
    >
      <Container>
        <motion.h2
          className="text-center mb-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ color: '#28a745', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
        >
          Classifica EcoTrack
        </motion.h2>
        <Card className="shadow mb-4" style={{ background: 'rgba(255,255,255,0.95)', border: 'none' }}>
          <Card.Body>
            <Table striped bordered hover responsive className="mb-0">
              <thead>
                <tr style={{ background: 'linear-gradient(90deg, #28a745, #218838)', color: '#fff' }}>
                  <th>Posizione</th>
                  <th>Nome Utente</th>
                  <th>Punteggio</th>
                </tr>
              </thead>
              <tbody>
                <AnimatePresence>
                  {ranking.map((user, index) => (
                    <motion.tr
                      key={user.id}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={rowVariants}
                      style={{ cursor: 'pointer' }}
                      onClick={() => navigate('/profile', { state: { user } })}
                    >
                      <td>{index + 1}</td>
                      <td>{user.username}</td>
                      <td>{user.score}</td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </Table>
          </Card.Body>
        </Card>

        {/* SEZIONE ABITUDINI */}
        <Card className="mb-4 shadow">
          <Card.Body>
            <h4 className="text-center" style={{ color: '#4e342e' }}>📝 La Tua Abitudine</h4>
            <Form className="my-3">
              <Form.Group controlId="habitInput">
                <Form.Label>Inserisci una nuova abitudine</Form.Label>
                <Form.Control
                  type="text"
                  value={habitInput}
                  onChange={(e) => setHabitInput(e.target.value)}
                  placeholder="Es. Bevo acqua in bottiglia"
                />
              </Form.Group>
              <div className="text-center mt-3">
                <Button variant="success" onClick={handleAddHabit}>Salva</Button>
              </div>
            </Form>
            {habits.length > 0 && (
              <ListGroup variant="flush">
                <ListGroup.Item>🌱 {habits[habits.length - 1].text}</ListGroup.Item>
              </ListGroup>
            )}
          </Card.Body>
        </Card>

        {/* SEZIONE CONSIGLI */}
        <Card className="mb-4 shadow">
          <Card.Body>
            <h4 className="text-center" style={{ color: '#4e342e' }}>💡 Suggerimento</h4>
            <ListGroup>
              {recommendations.length ? (
                <ListGroup.Item>✅ {recommendations[recommendations.length - 1]}</ListGroup.Item>
              ) : (
                <ListGroup.Item>⏳ Inserisci un'abitudine per ottenere consigli.</ListGroup.Item>
              )}
            </ListGroup>
          </Card.Body>
        </Card>
      </Container>
    </motion.div>
  );
};

export default RankingPage;
