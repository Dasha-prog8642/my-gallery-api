import React from 'react';
import { ThemeProvider, createTheme, CssBaseline, Typography, Box } from '@mui/material';
import Gallery from './components/Gallery';
import inkBg from './assets/ink-background.jpg';

const inkBg2 = 'https://i.pinimg.com/originals/45/36/f4/4536f4855519cc389c9a4a219f43d481.gif';
const inkBg3 = 'https://i.pinimg.com/originals/8f/29/bd/8f29bdff2c397e5f9ace294cefcae1c7.gif';
const inkBg4 = 'https://i.pinimg.com/originals/53/8d/88/538d88d2332c4b18566808d5e3224cdc.gif';
const inkBg5 = 'https://i.pinimg.com/originals/86/39/c7/8639c726cbe6e35ee1dac450a4b8d9bf.gif';
const inkBg6 = 'https://i.pinimg.com/originals/91/e9/dc/91e9dc377c5ab0f2dfd1075486aecde2.gif';
const inkBg7 = 'https://i.pinimg.com/originals/c4/38/03/c438037dec8de2accd9a77cb49bd11bd.gif';

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

        <div
          className="absolute inset-0 w-500 h-500 opacity-100"
          style={{
            backgroundImage: `url(${inkBg})`,
            backgroundSize: '500px 500px',
            backgroundPosition: 'left',
            backgroundRepeat: 'no-repeat',
            rotate: '36deg',
            top: '70%',
            bottom: '0%',
            left: '-10%',
          }}
        ></div>
        <div
          className="absolute inset-0 w-500 h-500 opacity-100"
          style={{
            backgroundImage: `url(${inkBg})`,
            backgroundSize: '550px 500px',
            backgroundPosition: 'right',
            top: '20%',
            rotate: '18deg',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div
          className="absolute inset-0 w-500 h-500 opacity-100"
          style={{
            backgroundImage: `url(${inkBg})`,
            backgroundSize: '750px 800px',
            backgroundPosition: 'center',
            top: '-30%',
            left: '30%',
            rotate: '-18deg',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div
          className="absolute inset-0 w-500 h-500 opacity-100"
          style={{
            backgroundImage: `url(${inkBg2})`,
            backgroundSize: '350px 350px',
            backgroundPosition: 'left',
            top: '70%',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div
          className="absolute inset-0 w-500 h-500 opacity-100"
          style={{
            backgroundImage: `url(${inkBg3})`,
            backgroundSize: '350px 350px',
            backgroundPosition: 'right',
            bottom: '60%',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div
          className="absolute inset-0 w-500 h-500 opacity-100"
          style={{
            backgroundImage: `url(${inkBg4})`,
            backgroundSize: '350px 350px',
            backgroundPosition: 'left',
            bottom: '25%',
            left: '3%',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div
          className="absolute inset-0 w-500 h-500 opacity-100"
          style={{
            backgroundImage: `url(${inkBg5})`,
            backgroundSize: '500px 350px',
            backgroundPosition: 'center',
            bottom: '50%',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div
          className="absolute inset-0 w-500 h-500 opacity-100"
          style={{
            backgroundImage: `url(${inkBg6})`,
            backgroundSize: '300px 350px',
            backgroundPosition: 'left',
            bottom: '70%',
            left: '15%',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div
          className="absolute inset-0 w-500 h-500 opacity-100"
          style={{
            backgroundImage: `url(${inkBg7})`,
            backgroundSize: '300px 350px',
            backgroundPosition: 'right',
            bottom: '-10%',
            left: '3%',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

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
                  background: '#ffffff',
                  padding: '10px 30px',
                  border: '4px solid black',
                  boxShadow: '10px 10px 0px black',
                  textTransform: 'uppercase'
                }}
              >
                PINTEREST NA MINIMALKAH
              </Typography>
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 600, mt: 4, color: '#000000', backgroundColor: 'rgba(255,255,255,0.8)', padding: '5px 15px', display: 'inline-block', border: '2px solid black' }}>
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
