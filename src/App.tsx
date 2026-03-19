import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/ui/NavBar';
import HomePage from './pages/HomePage';
import LearnIndexPage from './pages/LearnIndexPage';
import CoverageDetailPage from './pages/CoverageDetailPage';
import QuizLandingPage from './pages/QuizLandingPage';
import QuizSessionPage from './pages/QuizSessionPage';
import QuizResultsPage from './pages/QuizResultsPage';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <main className="app__main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/learn" element={<LearnIndexPage />} />
            <Route path="/learn/:id" element={<CoverageDetailPage />} />
            <Route path="/quiz" element={<QuizLandingPage />} />
            <Route path="/quiz/session" element={<QuizSessionPage />} />
            <Route path="/quiz/results" element={<QuizResultsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
