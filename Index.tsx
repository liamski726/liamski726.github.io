
import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MainCategories from '@/components/MainCategories';
import HeadacheView from '@/components/HeadacheView';
import BodyPainView from '@/components/BodyPainView';
import BackPainView from '@/components/BackPainView';
import ColdsFluView from '@/components/ColdsFluView';
import StomachView from '@/components/StomachView';

type ViewState = 'main' | 'headache' | 'bodyPain' | 'bodyParts' | 'backPain' | 'coldsFlu' | 'stomach';

const Index = () => {
  const [currentView, setCurrentView] = useState<ViewState>('main');

  const resetToMain = () => {
    setCurrentView('main');
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'headache':
        return <HeadacheView resetToMain={resetToMain} />;
      case 'bodyPain':
        return <BodyPainView resetToMain={resetToMain} setCurrentView={setCurrentView} />;
      case 'backPain':
        return <BackPainView setCurrentView={setCurrentView} />;
      case 'coldsFlu':
        return <ColdsFluView resetToMain={resetToMain} />;
      case 'stomach':
        return <StomachView resetToMain={resetToMain} />;
      default:
        return <MainCategories setCurrentView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Quick Med Aid Guide</h1>
          <p className="text-gray-600">Find the right medicine for your symptoms</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          {renderCurrentView()}
        </div>

        {currentView !== 'main' && (
          <div className="text-center">
            <Button
              onClick={resetToMain}
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Done
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
