// src/pages/Assignments/04/routes.js
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";

import Assignment03Layout from "./Pages/miniSPALayout";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import FeedbackPage from "./Pages/FeedbackPage";
import ThankYouPage from "./Pages/ThankYouPage";

import AccountLayout from "./Account/AccountLayout";
import ProfilePage from "./Account/ProfilePage";
import SettingsPage from "./Account/SettingsPage";

export default function miniSPA({ basePath }) {
  return (
    <section style={{height: "100%", width: "100%"}}>
      <Header basePath={basePath}/>
        <Routes>

          <Route path="/" element={<Assignment03Layout />}>
          
            <Route index element={<HomePage basePath={basePath}/>} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage basePath={basePath}/>} />
            <Route path="feedback" element={<FeedbackPage />} />
            <Route path="thank-you" element={<ThankYouPage />} />
            
            <Route path="account" element={<AccountLayout />}>
              <Route path="profile" element={<ProfilePage />} />
              <Route path="settings" element={<SettingsPage />} />
            </Route>

          </Route>
          
        </Routes>
    </section>
  );
}
