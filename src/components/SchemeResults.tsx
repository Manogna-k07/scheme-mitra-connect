import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Scheme } from '@/data/schemes';
import SchemeCard from './SchemeCard';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileSearch } from 'lucide-react';

interface SchemeResultsProps {
  schemes: Scheme[];
  onBack: () => void;
}

const SchemeResults: React.FC<SchemeResultsProps> = ({ schemes, onBack }) => {
  const { t } = useLanguage();

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="text-muted-foreground hover:text-foreground hover:bg-muted"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t('backToForm')}
        </Button>
      </div>

      {/* Results Header */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold text-foreground">{t('eligibleSchemes')}</h2>
        {schemes.length > 0 && (
          <p className="text-muted-foreground">
            <span className="text-primary font-semibold text-xl">{schemes.length}</span>{' '}
            {t('schemesFound')}
          </p>
        )}
      </div>

      {/* Scheme Cards */}
      {schemes.length > 0 ? (
        <div className="grid gap-4">
          {schemes.map((scheme, index) => (
            <SchemeCard key={scheme.id} scheme={scheme} index={index} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 space-y-4 animate-scale-in">
          <div className="w-20 h-20 mx-auto rounded-full bg-muted flex items-center justify-center">
            <FileSearch className="w-10 h-10 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-medium text-foreground">{t('noSchemesFound')}</h3>
          <p className="text-muted-foreground">{t('tryDifferentCriteria')}</p>
          <Button 
            onClick={onBack}
            className="gradient-hero text-primary-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('backToForm')}
          </Button>
        </div>
      )}
    </div>
  );
};

export default SchemeResults;
