
import React, { useEffect } from 'react';
import { Card, ProgressBar, Row, Col, Button, Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { fetchFullProgress, completeMission } from '../redux/progressSlice';
import { fetchUser } from '../redux/authSlice'; 
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import pinBike from '../assets/pin-bike.png';
import pinEcofriendly from '../assets/pin-ecofriendly.png';
import pinEcoTrack from '../assets/pin-ecoTrack.png';
import pinEnergia from '../assets/pin-energia.png';
import pinFirst from '../assets/pin-first.png';
import pinLvlExpert from '../assets/pin-lvl-expert.png';
import pinPlasticfree from '../assets/pin-plasticfree.png';
import pinCampioneSostenibilita from '../assets/pin-campione sostenibilita╠Ç (3).png';
import pinForestaAmica from '../assets/pin-foresta amica.png';
import pinRiciclo from '../assets/pin-riciclo.png';

interface User {
  id: number;
  username: string;
  email: string;
  score: number;
}

interface LocationState {
  user: User;
}

const badgeImages: Record<string, string> = {
  'Ciclista Ecologico': pinBike,
  'Eco-Friendly': pinEcofriendly,
  'EcoTrack Hero': pinEcoTrack,
  'Risparmio Energetico': pinEnergia,
  'Pioniere Sostenibile': pinFirst,
  'Esperto di Livello': pinLvlExpert,
  'Plastic Free': pinPlasticfree,
  'Campione di Sostenibilità': pinCampioneSostenibilita,
  'Foresta Amica': pinForestaAmica,
  'Riciclatore Attivo': pinRiciclo,
};

const defaultBadge = pinEcofriendly;

const Profile: React.FC = () => {
  
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const location = useLocation();
  const authUser = useSelector((state: RootState) => state.auth.user) as User | null;

  
  const locationState = location.state as LocationState | undefined;
  const userFromState = locationState?.user;
  const user: User | null = userFromState || authUser;

  
  useEffect(() => {
    if (!authUser) {
      dispatch(fetchUser());
    }
  }, [authUser, dispatch]);

  
  useEffect(() => {
    if (user) {
      dispatch(fetchFullProgress(user.id));
    }
  }, [user, dispatch]);

  
  if (!user) {
    return (
      <Container className="my-5">
        <h3>Caricamento...</h3>
      </Container>
    );
  }

  
  const { missions, score, badges, level } = useSelector((state: RootState) => state.progress);

  
  const handleComplete = (missionId: number) => {
    dispatch(completeMission({ userId: user.id, missionId }));
  };

   
  const computedLevel = level;
  const levelProgress = score % 100;

  
  const activeMissions = missions.filter(m => !m.completed).slice(0, 3);

  return (
    <motion.div 
      className="infopage-container p-4" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.6 }}
    >
      <Container>
        {/* Header Profilo */}
        <Row className="mb-4">
          <Col className="d-flex align-items-center justify-content-end">
            <span>{user.email}</span>
          </Col>
        </Row>

        <motion.div className="text-center mb-5">
          <h2 className="text-success">🌿 Profilo di {user.username}</h2>
          <p className="text-muted">Dettagli e progressi personali</p>
        </motion.div>

        {/* SEZIONE LIVELLO */}
        <Card className="mb-4 shadow">
          <Card.Body className="text-center">
            <h4 style={{ color: '#4e342e' }}>
              Livello Attuale: <strong>{computedLevel}</strong>
            </h4>
            <ProgressBar 
              now={levelProgress} 
              max={100} 
              variant="success" 
              className="my-3" 
              style={{ height: '20px' }} 
            />
            <p>{levelProgress} / 100 XP</p>
            <p className="text-muted">Ogni 100 XP aumenta il livello di 1</p>
          </Card.Body>
        </Card>

        {/* SEZIONE MISSIONI */}
        <Card className="mb-4 shadow">
          <Card.Body>
            <h4 className="text-center" style={{ color: '#4e342e' }}>🏆 Missioni</h4>
            <ProgressBar
              now={missions.length ? Math.round((missions.filter(m => m.completed).length / missions.length) * 100) : 0}
              label={`${missions.length ? Math.round((missions.filter(m => m.completed).length / missions.length) * 100) : 0}%`}
              animated
              className="my-3"
            />
            <Row>
              {activeMissions.length > 0 ? activeMissions.map((mission) => (
                <Col md={6} lg={4} key={mission.id} className="mb-3">
                  <Card className="h-100 shadow-sm">
                    <Card.Body>
                      <Card.Title>{mission.title}</Card.Title>
                      <Card.Text>{mission.description}</Card.Text>
                      <Card.Text><strong>Punti:</strong> {mission.points}</Card.Text>
                      <Button variant="outline-success" onClick={() => handleComplete(mission.id)}>
                        Completa
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              )) : <p className="text-center">Nessuna missione attiva</p>}
            </Row>
          </Card.Body>
        </Card>

        {/* SEZIONE BADGE */}
        <Card className="mb-4 shadow">
          <Card.Body>
            <h4 className="text-center" style={{ color: '#4e342e' }}>🎖 Badge</h4>
            <Row className="text-center">
              {badges.length ? badges.map((badge, i) => (
                <Col key={i} xs={6} md={4} lg={3} className="mb-3">
                  <img src={badgeImages[badge] || defaultBadge} alt={badge} style={{ width: '80px' }} />
                  <p>{badge}</p>
                </Col>
              )) : <p className="text-center">Nessun badge sbloccato</p>}
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </motion.div>
  );
};

export default Profile;
