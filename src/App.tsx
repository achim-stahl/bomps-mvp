import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddOnPage from './pages/AddOnPage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import Login2Page from './pages/Login2Page';
import RegisterPage from './pages/RegisterPage';
import Register2Page from './pages/Register2Page';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ForgotPassword2Page from './pages/ForgotPassword2Page';
import NotFoundPage from './pages/NotFoundPage';
import DashboardLayout from './components/dashboard/DashboardLayout';
import DashboardHomePage from './pages/dashboard/DashboardHomePage';
import CustomersPage from './pages/dashboard/CustomersPage';
import CustomersListPage from './pages/dashboard/CustomersListPage';
import AddOnManagerPage from './pages/dashboard/AddOnManagerPage';
import ProfilePage from './pages/dashboard/ProfilePage';
import { CookieBanner } from './components/CookieBanner';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/add-on" element={<AddOnPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login2" element={<Login2Page />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/register2" element={<Register2Page />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/forgot-password2" element={<ForgotPassword2Page />} />
        
        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHomePage />} />
          <Route path="customers" element={<CustomersPage />} />
          <Route path="customers/list" element={<CustomersListPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="subscription" element={<div className="text-gray-900 dark:text-white">Subscription Page - Coming Soon</div>} />
          <Route path="add-on-manager" element={<AddOnManagerPage />} />
          <Route path="helpdesk" element={<div className="text-gray-900 dark:text-white">Helpdesk Page - Coming Soon</div>} />
          <Route path="cms" element={<div className="text-gray-900 dark:text-white">CMS Page - Coming Soon</div>} />
          <Route path="email-template" element={<div className="text-gray-900 dark:text-white">Email Template Page - Coming Soon</div>} />
          <Route path="notification-template" element={<div className="text-gray-900 dark:text-white">Notification Template Page - Coming Soon</div>} />
          <Route path="settings" element={<div className="text-gray-900 dark:text-white">Settings Page - Coming Soon</div>} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <CookieBanner />
      <ScrollToTop />
    </Router>
  );
}

export default App;
