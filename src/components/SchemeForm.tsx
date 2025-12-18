import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Occupation, State } from '@/data/schemes';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, User, Calendar, Briefcase, Wallet, MapPin } from 'lucide-react';

interface SchemeFormProps {
  onSubmit: (data: {
    name: string;
    ageGroup: string;
    occupation: Occupation;
    income: string;
    state: State;
  }) => void;
}

const SchemeForm: React.FC<SchemeFormProps> = ({ onSubmit }) => {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [occupation, setOccupation] = useState<Occupation | ''>('');
  const [income, setIncome] = useState('');
  const [state, setState] = useState<State | ''>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (occupation && state && ageGroup && income) {
      onSubmit({
        name,
        ageGroup,
        occupation,
        income,
        state,
      });
    }
  };

  const isFormValid = ageGroup && occupation && income && state;

  return (
    <Card className="w-full max-w-lg mx-auto shadow-card animate-slide-up bg-card border-border">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl text-foreground">{t('findSchemes')}</CardTitle>
        <CardDescription className="text-muted-foreground">{t('subtitle')}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2 text-foreground">
              <User className="w-4 h-4 text-primary" />
              {t('nameOptional')}
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t('namePlaceholder')}
              className="bg-background border-border focus:ring-primary"
            />
          </div>

          {/* Age Group */}
          <div className="space-y-2">
            <Label htmlFor="ageGroup" className="flex items-center gap-2 text-foreground">
              <Calendar className="w-4 h-4 text-primary" />
              {t('ageGroup')}
            </Label>
            <Select value={ageGroup} onValueChange={setAgeGroup}>
              <SelectTrigger className="bg-background border-border">
                <SelectValue placeholder={t('selectAgeGroup')} />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border">
                <SelectItem value="below25">{t('below25')}</SelectItem>
                <SelectItem value="25to60">{t('age25to60')}</SelectItem>
                <SelectItem value="above60">{t('above60')}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Occupation */}
          <div className="space-y-2">
            <Label htmlFor="occupation" className="flex items-center gap-2 text-foreground">
              <Briefcase className="w-4 h-4 text-primary" />
              {t('occupation')}
            </Label>
            <Select value={occupation} onValueChange={(value: Occupation) => setOccupation(value)}>
              <SelectTrigger className="bg-background border-border">
                <SelectValue placeholder={t('selectOccupation')} />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border">
                <SelectItem value="student">{t('student')}</SelectItem>
                <SelectItem value="farmer">{t('farmer')}</SelectItem>
                <SelectItem value="worker">{t('worker')}</SelectItem>
                <SelectItem value="unemployed">{t('unemployed')}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Annual Income */}
          <div className="space-y-2">
            <Label htmlFor="income" className="flex items-center gap-2 text-foreground">
              <Wallet className="w-4 h-4 text-primary" />
              {t('annualIncome')}
            </Label>
            <Select value={income} onValueChange={setIncome}>
              <SelectTrigger className="bg-background border-border">
                <SelectValue placeholder={t('selectIncome')} />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border">
                <SelectItem value="below25L">{t('incomeBelow25L')}</SelectItem>
                <SelectItem value="25Lto5L">{t('income25Lto5L')}</SelectItem>
                <SelectItem value="above5L">{t('incomeAbove5L')}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* State */}
          <div className="space-y-2">
            <Label htmlFor="state" className="flex items-center gap-2 text-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              {t('state')}
            </Label>
            <Select value={state} onValueChange={(value: State) => setState(value)}>
              <SelectTrigger className="bg-background border-border">
                <SelectValue placeholder={t('selectState')} />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border">
                <SelectItem value="telangana">{t('telangana')}</SelectItem>
                <SelectItem value="andhra_pradesh">{t('andhraPradesh')}</SelectItem>
                <SelectItem value="karnataka">{t('karnataka')}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={!isFormValid}
            className="w-full gradient-hero text-primary-foreground font-semibold py-6 text-lg transition-all duration-300 hover:shadow-card-hover disabled:opacity-50"
          >
            <Search className="w-5 h-5 mr-2" />
            {t('findSchemes')}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SchemeForm;
