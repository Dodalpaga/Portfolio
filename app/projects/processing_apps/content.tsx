import * as React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

// Import your components directly
import LorentzCanvas from './lorentz';
import FourrierCanvas from './fourrier';
import BifurcationCanvas from './bifurcation';
import PiApproximationCanvas from './pi';

export default function Content() {
  return (
    <Container
      maxWidth={false}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 4,
      }}
    >
      <Grid container spacing={4}>
        {/* Map through an array to reduce redundancy */}
        {[
          { Component: LorentzCanvas },
          { Component: FourrierCanvas },
          { Component: BifurcationCanvas },
          { Component: PiApproximationCanvas },
        ].map(({ Component }, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              className="card"
              sx={{
                position: 'relative',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: 2,
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
                overflow: 'hidden',
                width: '100%',
                aspectRatio: '1 / 1',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Component />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
