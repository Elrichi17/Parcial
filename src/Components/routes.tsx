import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import {Models} from './Models';
import {MakeupProducts} from './MakeupProducts';
import {FashionEvents} from './FashionEvents';
import {PhotoSales} from './PhotoSales';
import {ExclusiveMenberships} from './ExclusiveMemberships';
import {ContactUs} from './ContactUs';
import {AdminDashboard} from './AdminDashBoard';  

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/models" element={<Models />} />
      <Route path="/makeup-products" element={<MakeupProducts />} />
      <Route path="/fashion-events" element={<FashionEvents />} />
      <Route path="/photo-sales" element={<PhotoSales />} />
      <Route path="/memberships" element={<ExclusiveMenberships />} />
      <Route path="/contact-us" element={<ContactUs />} /> 
      <Route path="/secretURL-admin" element={<AdminDashboard />} /> 
    </Routes>
  </Router>
);

export default AppRoutes;
