import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { filterSchemes, Occupation, State, Scheme } from '@/data/schemes';
import Header from '@/components/Header';
import SchemeForm from '@/components/SchemeForm';
import SchemeResults from '@/components/SchemeResults';
import { AlertTriangle } from 'lucide-react';

type ViewState = 'form' | 'results';

const Index: React.FC = () => {
  const { t } = useLanguage();
  const [view, setView] = useState<ViewState>('form');
  const [results, setResults] = useState<Scheme[]>([]);

  const handleFormSubmit = (data: {
    name: string;
    ageGroup: string;
    occupation: Occupation;
    income: string;
    state: State;
  }) => {
    const eligibleSchemes = filterSchemes(data.occupation, data.state);
    setResults(eligibleSchemes);
    setView('results');
  };

  const handleBack = () => {
    setView('form');
    setResults([]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        {view === 'form' && (
          <div className="text-center mb-8 space-y-4 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <AlertTriangle className="w-4 h-4" />
              {t('disclaimer')}
            </div>
          </div>
        )}

        {/* Content */}
        <div className="flex justify-center">
          {view === 'form' ? (
            <SchemeForm onSubmit={handleFormSubmit} />
          ) : (
            <SchemeResults schemes={results} onBack={handleBack} />
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-auto py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 {t('appName')} • {t('disclaimer')}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
