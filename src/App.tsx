import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { HomePage } from '@/pages/HomePage';
import { BuiltWithAIPage } from '@/pages/BuiltWithAIPage';
import { DistillGeniePage } from '@/pages/DistillGeniePage';
import { AIToolsPage } from '@/pages/AIToolsPage';
import { Author } from '@/components/sections/Author';
import { PasswordGate } from '@/components/PasswordGate';

function App() {
  return (
    <PasswordGate>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/ai-tools" element={<AIToolsPage />} />
              <Route path="/distillgenie" element={<DistillGeniePage />} />
              <Route path="/built-with-ai" element={<BuiltWithAIPage />} />
            </Routes>
          </main>
          <Author />
          <footer className="bg-uatp-navy text-white py-8">
            <div className="container mx-auto px-4 text-center">
              <p className="text-gray-300">
                &copy; {new Date().getFullYear()} Distillery. All rights reserved.
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Built with GPT 5.1, Claude Code, Cursor and other AI tools by Francisco Maurici
              </p>
            </div>
          </footer>
        </div>
      </Router>
    </PasswordGate>
  );
}

export default App;
