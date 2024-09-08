
import '../styles/AdminDashboard.css';
import { AdminCredentials } from '../Models/AdminCredentials';
import { useState } from 'react';


export const AdminDashboard = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [credentials, setCredentials] = useState<AdminCredentials>({ username: '', password: '' });
  
    const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setCredentials({ ...credentials, [name]: value });
    };
  
    const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      //falta hacer verificacion
    if (credentials.username === 'admin' && credentials.password === 'password') {
        setIsLoggedIn(true);
      } else {
        alert('Invalid credentials');
      }
    };
  
    const handleLogout = () => {
      setIsLoggedIn(false);
    };
  
    if (!isLoggedIn) {
      return (
        <>
        <div className="admin-login-container">
          <h1>Admin Login</h1>
          <form onSubmit={handleLoginSubmit} className="admin-login-form">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={credentials.username}
              onChange={handleLoginChange}
              required
            />
            
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleLoginChange}
              required
            />
            
            <button type="submit" className="login-button">Login</button>
          </form>
        </div>
        </>
      );
    }
  
  return (
    <>    <div className="admin-dashboard-container">
    <button onClick={handleLogout} className="logout-button">Logout</button>
    <h1>Admin Dashboard</h1>
    <div className="dashboard-sections">
      <div className="dashboard-section">
        <h2>Manage Models</h2>
        <button className="manage-button">Go to Models</button>
      </div>
      <div className="dashboard-section">
        <h2>Manage Products</h2>
        <button className="manage-button">Go to Products</button>
      </div>
      <div className="dashboard-section">
        <h2>Manage Events</h2>
        <button className="manage-button">Go to Events</button>
      </div>
      <div className="dashboard-section">
        <h2>Manage Photos</h2>
        <button className="manage-button">Go to Photos</button>
      </div>
      <div className="dashboard-section">
        <h2>Manage Memberships</h2>
        <button className="manage-button">Go to Memberships</button>
      </div>
      <div className="dashboard-section">
        <h2>Analytics</h2>
        <button className="manage-button">View Analytics</button>
      </div>
    </div>
  </div></>
  )
}
