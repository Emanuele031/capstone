import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import sfondo from '../assets/ecotrack.png';
import logo from '../assets/LOGO BIANCO.png';
import petBackground from '../assets/tobias-tullius--wR0XMaegRo-unsplash.png';
import premio1 from '../assets/Download premium image of Set of trash bins with recycle symbol about paper, plastic, icon, blue, and trash 475779 senza sfondo.png';
import premio2 from '../assets/Download premium psd _ image of Green trash with a recycle symbol about paper, grass, plastic, icon, and trash 475959 senza sfondo.png';
import premio3 from '../assets/Download premium psd _ image of Yellow trash with a recycle symbol about paper, plastic, icon, trash, and sign 475857 senza sfondo.png';
import pet4 from '../assets/LOGO MARRONE.png';
import pet5 from '../assets/PET.jpg';
import pet6 from '../assets/pin-ecofriendly.png';
import pet7 from '../assets/pin-energia.png';
import pet8 from '../assets/pin-foresta amica.png';
import pet9 from '../assets/pin-riciclo.png';

const InfoPage: React.FC = () => {

  

  return (
    <>
      
      <motion.div
        className="top-menu text-center py-2"
        style={{ backgroundColor: '#322C2A', color: '#E5E7E6', fontWeight: 'bold' }}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        
      </motion.div>

      
      <motion.div
        className="hero-banner"
        style={{
          backgroundImage: `url(${sfondo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          padding: '120px 0'
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <Container className="text-center text-white position-relative" style={{ zIndex: 2 }}>
          <motion.img
            src={logo}
            alt="Logo EcoTrack"
            style={{ maxWidth: '350px' }}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          />
          <motion.h1
            className="mt-4 display-3"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
           
          </motion.h1>
          <motion.p
            className="lead my-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{ fontSize: '1.25rem' }}
          >
            
          </motion.p>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            
          </motion.div>
        </Container>
      </motion.div>

      
      <Container className="mt-5">
        <Row className="align-items-center" style={{ marginTop: '-4em'}}>
          <Col md={6} className="text-center text-md-start" style={{ marginTop: '-9em'}}>
            <h2 className="fw-bold" style={{ color: '#322C2A' }}>COSA FACCIAMO?</h2>
            <p style={{ fontSize: '1.15rem', color: '#322C2A' }}>
              ECOTRACK aiuta a monitorare il proprio impatto ambientale.
              Con il tracciamento di abitudini come trasporti, consumo energetico e riciclo,
              rendiamo il cambiamento sostenibile divertente e gratificante.
            </p>
          </Col>
          <Col md={6} className="text-center">
            <motion.img
              src={petBackground}
              alt="Bottiglie in PET"
              className="img-fluid rounded"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            />
          </Col>
        </Row>
      </Container>

       
        <Row
          as={motion.div}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-5"
        >
          <Col style={{marginTop: "-3em"}}>
            <h2 className="text-center" style={{ color: '#322C2A', fontWeight: 'bold' }}>
              LE NOSTRE PROMESSE
            </h2>
            <p className="text-center" style={{ fontSize: '1.1rem', color: '#322C2A' }}>
              Ci impegniamo per un futuro più verde e sostenibile. Ogni azione, ogni scelta, ogni piccolo gesto conta.
            </p>
          </Col>
        </Row>
        <Row
          className="mb-5"
          as={motion.div}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Col md={6}>
            <motion.img
              src={pet4}
              alt="Impegno Sostenibile"
              style={{ width: '100%', borderRadius: '8px', padding: '10px', marginTop: '-4em' }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            />
          </Col>
          <Col md={6}>
            <motion.img
              src={pet5}
              alt="Innovazione Ambientale"
              style={{ width: '100%', borderRadius: '8px', padding: '10px' }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            />
            <p className="text-center mt-2" style={{ fontSize: '1rem', color: '#322C2A' }}>
              BOTTIGLIE IN PET → FRAMMENTI → FIBRE TESSILI
            </p>
          </Col>
        </Row>

        
        <Row
          as={motion.div}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-5 mt-5"
        >
          <Col className="d-flex flex-wrap justify-content-center">
            <Card className="m-2" style={{ width: '150px', marginTop: '4em', backgroundColor: 'transparent', border: 'none' }}>
              <Card.Img variant="top" src={pet6} alt="Badge EcoFriendly" style={{ objectFit: 'contain' }} />
            </Card>
            <Card className="m-2" style={{ width: '150px', marginTop: '4em', backgroundColor: 'transparent', border: 'none'  }}>
              <Card.Img variant="top" src={pet7} alt="Badge Energia" style={{ objectFit: 'contain' }} />
            </Card>
            <Card className="m-2" style={{ width: '150px', marginTop: '4em', backgroundColor: 'transparent', border: 'none'  }}>
              <Card.Img variant="top" src={pet8} alt="Badge Foresta Amica" style={{ objectFit: 'contain' }} />
            </Card>
            <Card className="m-2" style={{ width: '150px', marginTop: '4em', backgroundColor: 'transparent', border: 'none'  }}>
              <Card.Img variant="top" src={pet9} alt="Badge Riciclo" style={{ objectFit: 'contain' }} />
            </Card>
          </Col>
        </Row>
        <Row
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-5"
        >
          <Col>
            <p className="text-center" style={{ fontSize: '1.1rem', color: '#322C2A' }}>
              Guadagna badge e medaglie mentre migliori il tuo impatto ambientale!
            </p>
          </Col>
        </Row>

        
        <Row
          className="mb-5"
          as={motion.div}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Col>
            <h3 className="text-center" style={{ color: '#322C2A', fontWeight: 'bold', marginTop: "5em"}}>
              I NOSTRI OBIETTIVI
            </h3>
            
          </Col>
        </Row>
        <Row
  className="mb-3"
  as={motion.div}
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.7 }}
>
  <Col md={4} style={{ marginTop: "8em" }}>
    <Card className="text-center" style={{ backgroundColor: 'transparent', border: 'none' }}>
      <Card.Img
        variant="top"
        src={premio1}
        alt="Premio Eco Innovator"
        style={{
          maxHeight: '220px',
          objectFit: 'contain',
          padding: '15px'
        }}
      />
    </Card>
    <div className="mt-4 text-center">
      <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#DC3545' }}>
        Creare consapevolezza e comunità
      </h3>
      <p style={{ fontSize: '1.1rem', color: '#322C2A' }}>
        Promuoviamo la condivisione di buone pratiche e il confronto tra utenti, costruendo una rete di persone impegnate nella sostenibilità.
      </p>
    </div>
  </Col>
  <Col md={4} style={{ marginTop: "8em" }}>
    <Card className="text-center" style={{ backgroundColor: 'transparent', border: 'none' }}>
      <Card.Img
        variant="top"
        src={premio2}
        alt="Premio Sostenibilità"
        style={{
          maxHeight: '220px',
          objectFit: 'contain',
          padding: '15px'
        }}
      />
    </Card>
    <div className="mt-4 text-center">
      <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#28A745' }}>
        Monitorare e ridurre l’impatto ambientale
      </h3>
      <p style={{ fontSize: '1.1rem', color: '#322C2A' }}>
        Aiutare gli utenti a tracciare le loro abitudini quotidiane, fornendo dati e suggerimenti per diminuire la loro impronta ecologica.
      </p>
    </div>
  </Col>
  <Col md={4} style={{ marginTop: "8em" }}>
    <Card className="text-center" style={{ backgroundColor: 'transparent', border: 'none' }}>
      <Card.Img
        variant="top"
        src={premio3}
        alt="Premio Innovazione Green"
        style={{
          maxHeight: '220px',
          objectFit: 'contain',
          padding: '15px'
        }}
      />
    </Card>
    <div className="mt-4 text-center">
      <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#FFD700' }}>
        Incentivare comportamenti sostenibili
      </h3>
      <p style={{ fontSize: '1.1rem', color: '#322C2A' }}>
        Rendere il cambiamento verso uno stile di vita più green divertente e motivante.
      </p>
    </div>
  </Col>
</Row>

       
      
    </>
  );
};

export default InfoPage;
