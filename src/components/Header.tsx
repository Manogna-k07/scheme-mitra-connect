import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Language } from '@/data/translations';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Globe } from 'lucide-react';

const languages: { value: Language; label: string }[] = [
  { value: 'en', label: 'English' },
  { value: 'te', label: 'తెలుగు' },
  { value: 'hi', label: 'हिंदी' },
];

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="w-full border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg gradient-hero flex items-center justify-center shadow-card">
            <span className="text-primary-foreground font-bold text-lg">SM</span>
          </div>
          <div>
            <h1 className="text-lg font-semibold text-foreground">{t('appName')}</h1>
            <p className="text-xs text-muted-foreground hidden sm:block">{t('tagline')}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-muted-foreground" />
          <Select value={language} onValueChange={(value: Language) => setLanguage(value)}>
            <SelectTrigger className="w-[120px] bg-background border-border">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border">
              {languages.map((lang) => (
                <SelectItem key={lang.value} value={lang.value}>
                  {lang.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </header>
  );
};

export default Header;
