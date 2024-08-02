'use client';

import { EventCardProps } from '@/types/Types';
import { Box, Card, CardMedia, Slide, Typography } from '@mui/material';
import { useState } from 'react';
import { BiCalendar } from 'react-icons/bi';
import { GoLocation } from 'react-icons/go';

const EventCard = ({ category, title, date, location, description, imageUrl }: EventCardProps) => {
  const [hover, setHover] = useState(false);

  return (
    <Card
      sx={{
        maxWidth: 350,
        minHeight: 300,
        maxHeight: 500,
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 3,
        transition: 'transform 0.4s ease-in-out',
        '&:hover': { transform: 'scale(1.05)' },
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Box sx={{ position: 'relative', }}>
        <CardMedia
          component="img"
          image={imageUrl}
          alt={title}
          sx={{ filter: 'brightness(50%)', transition: 'filter 0.3s ease-in-out' }}
        />
        <Box
          sx={{
            overflowY: 'scroll',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            color: '#ffffff',
            textAlign: 'center',
            p: 2,
          }}
        >
          <Typography variant="subtitle1" component="div" sx={{ color: '#a0a0a0', mb: 1, textAlign: 'left' }}>
            {category}
          </Typography>
          <Typography variant="h6" align='left' className='text-base line-clamp-2' component="div">
            {title}
          </Typography>
        </Box>
        <Slide timeout={400} direction="left" in={hover} mountOnEnter unmountOnExit>
          <Box
            sx={{
              overflowY: 'scroll',
              position: 'absolute',
              top: 100,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              flexDirection: 'column',
              color: '#ffffff',
              p: 2,
              pb: 3,
              pt: 0,
              mt: 2,
            }}
          >
            {date && <Typography variant="body2" component="div" sx={{ mt: 2 }}>
              <BiCalendar fontSize={18} className='inline-block align-middle mr-1' />
              {date}
            </Typography>}
           {location && <Typography variant="body2" component="div" sx={{ mt: 1 }}>
              <GoLocation fontSize={18}  className='inline-block align-middle mr-1' />
              {location}
            </Typography>}
            <Typography variant="body2" component="div" sx={{ mt: 2 }}>
              {description}
            </Typography>
          </Box>
        </Slide>
      </Box>
    </Card>
  );
};

export default EventCard;
