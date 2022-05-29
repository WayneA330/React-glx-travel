import React from 'react';
import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import TrainingSection from '../components/Training'
import Navbar from '../components/Navbar';

const Training = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading='TRAINING' text='Pre-Flight & In-Flight Training'/>
      <TrainingSection />
      <Footer />
    </div>
  )
}

export default Training