// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { motion } from 'framer-motion';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import RequestConsultant from './pages/RequestConsultant';
import DigifabricProduct from './pages/products/DigifabricProduct';
import DigidoxProduct from './pages/products/DigidoxProduct';
import FigifloProduct from './pages/products/FigifloProduct';
import TransformationConsulting from './pages/services/TransformationConsulting';
import CorePlatformModernization from './pages/services/CorePlatformModernization';
import DigitalBankingServices from './pages/services/DigitalBankingServices';
import BankingCloudServices from './pages/services/BankingCloudServices';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/digifabric" element={<DigifabricProduct />} />
            <Route path="/products/digidox" element={<DigidoxProduct />} />
            <Route path="/products/figiflo" element={<FigifloProduct />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/transformation-consulting" element={<TransformationConsulting />} />
            <Route path="/services/core-platform-modernization" element={<CorePlatformModernization />} />
            <Route path="/services/digital-banking" element={<DigitalBankingServices />} />
            <Route path="/services/banking-cloud" element={<BankingCloudServices />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/request-consultant" element={<RequestConsultant />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;