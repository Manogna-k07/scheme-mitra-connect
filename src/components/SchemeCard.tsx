import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Scheme } from '@/data/schemes';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Building2, Landmark } from 'lucide-react';

interface SchemeCardProps {
  scheme: Scheme;
  index: number;
}

const SchemeCard: React.FC<SchemeCardProps> = ({ scheme, index }) => {
  const { language, t } = useLanguage();

  const handleVisitWebsite = () => {
    window.open(scheme.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card 
      className="w-full shadow-card hover:shadow-card-hover transition-all duration-300 animate-slide-up bg-card border-border overflow-hidden"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              scheme.type === 'central' 
                ? 'bg-secondary text-secondary-foreground' 
                : 'bg-accent text-accent-foreground'
            }`}>
              {scheme.type === 'central' ? (
                <Landmark className="w-5 h-5" />
              ) : (
                <Building2 className="w-5 h-5" />
              )}
            </div>
            <div>
              <CardTitle className="text-lg text-foreground">{scheme.name[language]}</CardTitle>
              <Badge 
                variant="outline" 
                className={`mt-1 text-xs ${
                  scheme.type === 'central'
                    ? 'border-secondary text-secondary'
                    : 'border-accent text-accent'
                }`}
              >
                {scheme.type === 'central' ? t('centralScheme') : t('stateScheme')}
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="text-muted-foreground text-sm leading-relaxed">
          {scheme.description[language]}
        </CardDescription>
        <Button
          onClick={handleVisitWebsite}
          className="w-full gradient-hero text-primary-foreground font-medium transition-all duration-300 hover:shadow-card-hover"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          {t('visitWebsite')}
        </Button>
      </CardContent>
    </Card>
  );
};

export default SchemeCard;
