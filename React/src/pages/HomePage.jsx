import React from 'react';
import MainLayout from '../layouts/MainLayout';
import HeroSlider from '../components/home/HeroSlider';
import WelcomeArea from '../components/home/WelcomeArea';
import LeadPractitioner from '../components/home/LeadPractitioner';
import ClinicalTrustStrip from '../components/home/ClinicalTrustStrip';
import ProceduresList from '../components/home/ProceduresList';
import SloganBanner from '../components/home/SloganBanner';
import WellnessJourney from '../components/home/WellnessJourney';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import QuickAppointment from '../components/home/QuickAppointment';
import StructuredPrograms from '../components/home/StructuredPrograms';
import LatestBlog from '../components/home/LatestBlog';

const HomePage = () => {
  return (
    <MainLayout>
      <HeroSlider />
      <WelcomeArea />
      <LeadPractitioner />
      <ClinicalTrustStrip />
      <ProceduresList />
      <SloganBanner />
      <WellnessJourney />
      <WhyChooseUs />
      <Testimonials />
      <QuickAppointment />
      <StructuredPrograms />
      <LatestBlog />
    </MainLayout>
  );
};

export default HomePage;
