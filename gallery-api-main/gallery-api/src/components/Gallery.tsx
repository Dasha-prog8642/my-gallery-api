import React, { useState, useEffect } from 'react';
import { fetchPhotos } from '../api/photosApi';
import type { Photo } from '../api/photosApi';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Skeleton,
  Pagination,
  Stack,
  Fade,
  Grow
} from '@mui/material';

const Gallery: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(() => {
    const savedPage = localStorage.getItem('galleryPage');
    return savedPage ? parseInt(savedPage, 10) : 1;
  });

  useEffect(() => {
    const loadPhotos = async () => {
      setLoading(true);
      // Adding a slight artificial delay for a smoother skeleton loading effect
      await new Promise(resolve => setTimeout(resolve, 500));

      try {
        const data = await fetchPhotos(page, 4);
        setPhotos(data);
        localStorage.setItem('galleryPage', page.toString());
      } catch (error) {
        console.error("Failed to load photos", error);
      } finally {
        setLoading(false);
      }
    };

    loadPhotos();
  }, [page]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 min-h-[600px]">
        {loading ? (
          // MUI Skeletons
          Array.from({ length: 4 }).map((_, i) => (
            <div key={`skel-${i}`}>
              <Card sx={{ height: 320, position: 'relative' }}>
                <Skeleton variant="rectangular" height="100%" sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(0,0,0,0.1)' }} />
                <CardContent sx={{ position: 'absolute', bottom: 0, width: '100%', backgroundColor: 'rgba(255,255,255,0.9)', borderTop: '2px solid black' }}>
                  <Skeleton variant="text" width="60%" height={32} sx={{ bgcolor: 'rgba(0,0,0,0.2)' }} />
                </CardContent>
              </Card>
            </div>
          ))
        ) : (
          // Real Photos mapped with a standard MUI layout
          photos.map((photo, index) => (
            <Grow in={!loading} timeout={500 + index * 200} key={photo.id}>
              <div>
                <Card
                  className="group"
                  sx={{
                    height: 320,
                    position: 'relative',
                    cursor: 'pointer',
                    transition: 'all 0.4s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 16px 40px rgba(129, 140, 248, 0.3)'
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    image={photo.download_url}
                    alt={`By ${photo.author}`}
                    sx={{
                      height: '100%',
                      filter: 'grayscale(100%) contrast(120%)',
                      transition: 'filter 0.5s ease',
                      '.group:hover &': {
                        filter: 'grayscale(0%) contrast(100%)'
                      }
                    }}
                  />

                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: '#ffffff',
                      borderTop: '3px solid black',
                      p: 2,
                      transform: 'translateY(100%)',
                      transition: 'transform 0.4s ease',
                      '.group:hover &': {
                        transform: 'translateY(0)',
                      }
                    }}
                  >
                    <Typography variant="h6" component="div" sx={{ color: 'black', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
                      {photo.author}
                    </Typography>
                  </Box>
                </Card>
              </div>
            </Grow>
          ))
        )}
      </div>

      <Box sx={{ mt: 8, display: 'flex', justifyContent: 'center' }}>
        <Stack spacing={2} sx={{
          p: 2,
          background: '#ffffff',
          border: '4px solid black',
          boxShadow: '8px 8px 0px black'
        }}>
          <Pagination
            count={100}
            page={page}
            onChange={handlePageChange}
            color="primary"
            size="large"
            sx={{
              '& .MuiPaginationItem-root': {
                color: 'black',
                fontWeight: 800,
                fontSize: { xs: '0.9rem', sm: '1.1rem' },
                borderRadius: 0,
              },
              '& .Mui-selected': {
                background: 'black !important',
                color: 'white',
              }
            }}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default Gallery;
