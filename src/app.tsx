import React from 'react';
import { Typography } from '@mui/material';
import PhotographersList from './components/photographers-list/photographers-list';

import './app.scss';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Typography 
        variant="h2" 
        component="h1"
        sx={{
          fontSize: {
            xs: '2.5rem',
            sm: '3rem',
            md: '3.5rem',
          },
      }}>Photographers</Typography>
      <PhotographersList />
    </div>
  );
};

export default App;
