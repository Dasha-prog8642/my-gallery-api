import React from 'react';
import { ThemeProvider, createTheme, CssBaseline, Typography, Box } from '@mui/material';
import Gallery from './components/Gallery';

const monochromeTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: 'rgba(255, 255, 255, 0.7)',
    },
  },
  typography: {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(20px)',
          backgroundColor: 'rgba(255, 255, 255, 0.65)',
          border: '2px solid #000000',
          boxShadow: '4px 4px 0px #000000',
          borderRadius: 0,
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: 'uppercase',
          fontWeight: 800,
          letterSpacing: '0.1em',
          border: '2px solid #000000',
        }
      }
    }
  }
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={monochromeTheme}>
      <CssBaseline />

      <div className="relative min-h-screen overflow-hidden text-black">



        {/* Main Interface Content */}
        <div className="relative z-10 container mx-auto px-6 py-12 max-w-6xl">
          <Box component="header" sx={{ mb: 8, textAlign: 'center' }}>
            <Box sx={{ display: 'inline-block', position: 'relative' }}>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 900,
                  mb: 1,
                  color: 'black',
                  letterSpacing: '-2px',
                  background: '#000000',
                  padding: '10px 30px',
                  border: '4px solid black',
                  boxShadow: '10px 10px 0px black',
                  textTransform: 'uppercase'
                }}
              >
                PINTEREST NA MINIMALKAH
              </Typography>
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 600, mt: 4, color: '#ffffff', backgroundColor: 'rgba(0, 0, 0, 0.8)', padding: '5px 15px', display: 'inline-block', border: '2px solid black' }}>
              ©️ MAKSIM BALLA
            </Typography>
          </Box>

          <main>
            <Gallery />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
