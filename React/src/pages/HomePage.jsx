import React from 'react';
import MainLayout from '../layouts/MainLayout';
import HeroSlider from '../components/home/HeroSlider';
import WelcomeArea from '../components/home/WelcomeArea';
import ProceduresList from '../components/home/ProceduresList';
import SloganBanner from '../components/home/SloganBanner';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import QuickAppointment from '../components/home/QuickAppointment';
import PricingPlans from '../components/home/PricingPlans';
import LatestBlog from '../components/home/LatestBlog';

const HomePage = () => {
  return (
    <MainLayout>
      <HeroSlider />
      <WelcomeArea />
      <ProceduresList />
      <SloganBanner />
      <WhyChooseUs />
      <Testimonials />
      <QuickAppointment />
      <PricingPlans />
      <LatestBlog />
    </MainLayout>
  );
};

export default HomePage;
