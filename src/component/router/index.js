import React from 'react';
import AboutPage from '../../pages/about/AboutPage';
import FrontPage from '../../pages/home/FrontPage'
import { Routes, Route, Navigate } from 'react-router-dom';
import ProjectPage from '../../pages/Projects/ProjectPage';
import ContactPage from '../../pages/Contact/ContactPage';
import ExperiencePage from '../../pages/Experience/ExperiencePage';


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="home" element={<FrontPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="projects" element={<ProjectPage />} />
      <Route path="experience" element={<ExperiencePage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}
