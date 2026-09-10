import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { ScrollManager } from './components/ScrollManager';
import { HomePage } from './pages/HomePage';
import { UniformsPage } from './pages/UniformsPage';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { CookieBanner } from './components/CookieBanner';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ScrollManager />
        <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-950 dark:text-zinc-100 font-sans selection:bg-red-600 selection:text-white flex flex-col transition-colors duration-300">
          <Navbar />

          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/uniformes" element={<UniformsPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          <Footer />
          <WhatsAppFloatingButton />
          <CookieBanner />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}