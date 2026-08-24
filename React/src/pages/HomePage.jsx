import React from 'react';
import MainLayout from '../layouts/MainLayout';
import HeroSlider from '../components/home/HeroSlider';
import WelcomeArea from '../components/home/WelcomeArea';
import LeadPractitioner from '../components/home/LeadPractitioner';
import ClinicalTrustStrip from '../components/home/ClinicalTrustStrip';
import ProceduresList from '../components/home/ProceduresList';
import StructuredPrograms from '../components/home/StructuredPrograms';
import WellnessJourney from '../components/home/WellnessJourney';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import LatestBlog from '../components/home/LatestBlog';

const HomePage = () => {
  return (
    <MainLayout>
      <HeroSlider />
      <WelcomeArea />
      <LeadPractitioner />
      <ClinicalTrustStrip />
      <ProceduresList />
      <StructuredPrograms />
      <WellnessJourney />
      <WhyChooseUs />
      <Testimonials />
      <LatestBlog />
    </MainLayout>
  );
};

export default HomePage;
