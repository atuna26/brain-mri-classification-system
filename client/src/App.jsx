import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import HomeLandingPage from './homeLandingPage';
import DashboardPage from "./adminPageScenes/DashboardPage";
import LoginPage from "./LoginPage";
import Navbar from "./adminPageScenes/Navbar";
import styles from "./style";
import PatientList from "./adminPageScenes/components/PatientList";
import CompletedReviews from "./adminPageScenes/components/Reviews/CompletedReviews";
import PendingReviews from "./adminPageScenes/components/Reviews/PendingReviews";

function App() {
  const isAuth = true; // isAuth değişkeni burada tanımlanıyor
  const location = useLocation();

  return (
    <div>
      {isAuth && location.pathname.includes("admin") ? (
        <div className='bg-white w-full overflow-hidden'>
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>
          <div className={`${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Routes>
                <Route path="/admin" element={<Navigate to="/admin/dashboard"/>} />
                <Route path="/admin/dashboard" element={<DashboardPage />} />
                <Route path="/admin/all-patient" element={<PatientList />} />
                <Route path="/admin/reviews/completed-reviews" element={<CompletedReviews />} />
                <Route path="/admin/reviews/pending-reviews" element={<PendingReviews />} />
              </Routes>
            </div>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<HomeLandingPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      )}
    </div>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}