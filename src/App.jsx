import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "./components/header/Header.jsx";
import { Footer } from "./components/footer/Footer.jsx";
import { Dashboard } from "./components/home/Dashboard.jsx";
import { Services } from "./components/service/Service.jsx";
import { Scheme } from "./components/scheme/Scheme.jsx";
import { Certificate } from "./components/certificates/Certificate.jsx";
import { Complaints } from "./components/complaints/Complaints.jsx";
import { Contact } from "./components/contact/Contact.jsx";
import { Signup } from "./components/signup/Sign-up.jsx";
import { Login } from "./components/login/Login.jsx";
import { ScrollToTop } from "./components/scrolltotop/ScrollToTop.jsx";
import { Birth_certificate } from "./components/birth_certificate/Birth_certificate.jsx";
import { Death_certificate } from "./components/death_certificate/Death_certificate.jsx";
import { Admin } from "./components/admin/Admin.jsx";
import { MyComplaint } from "./components/complaints/Mycomplaint.jsx";
import { Admin_dashboard } from "./pages/Admin_dashboard.jsx";
import { Profile } from "./components/profile/Profile.jsx";
import { Edit } from "./components/profile/Edit.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="citizen-services" element={<Services />} />
          <Route path="government-schemes" element={<Scheme />} />
          <Route path="certificate" element={<Certificate />} />
          <Route path="complaints" element={<Complaints />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="sign-up" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="birth_certificate" element={<Birth_certificate />} />
          <Route path="death_certificate" element={<Death_certificate />} />
          <Route path="admin-dashboard" element={<Admin />} />
          <Route path="my-complaints" element={<MyComplaint />} />
          <Route path="admin-dashboard" element={<Admin_dashboard />} />
          <Route path="my-profile" element={<Profile />} />
          <Route path="edit-profile" element={<Edit />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
