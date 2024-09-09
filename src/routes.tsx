import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home';
import {Models} from './Components/Models';
import {MakeupProducts} from './Components/MakeupProducts';
import {FashionEvents} from './Components/FashionEvents';
import {PhotoSales} from './Components/PhotoSales';
import {ExclusiveMenberships} from './Components/ExclusiveMemberships';
import {ContactUs} from './Components/ContactUs';
import {AdminDashboard} from './Components/AdminDashBoard';  

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
