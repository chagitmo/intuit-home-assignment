import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea, Snackbar } from '@mui/material';
import PhotographerDetails from '@components/photographer-details/photographer-details';
import { PhotographerType, PhotographerDetailsType } from '@type/photographers';

import './photographer-card.scss';

interface PhotographerCardProps {
  photographer: PhotographerType;
  photographerDetails: PhotographerDetailsType | undefined;
  onOpenPhotographer: (photographerId: number) => Promise<void>;
}

const PhotographerCard: React.FC<PhotographerCardProps> = ({ 
  photographer: {id, firstName, lastName, avatar, city, state}, 
  photographerDetails,
  onOpenPhotographer
 }) => {

  const [open, setOpen] = useState(false);  
  
  const handleOpen = useCallback(async () => {
    await onOpenPhotographer(id);
    setOpen(true);
  }, [onOpenPhotographer, id]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <Card onClick={handleOpen} className="photographer-card">
        <CardActionArea>
          <CardMedia
            component="img"
            alt={`${firstName} ${lastName}`}
            height="140"
            image={avatar}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {firstName} {lastName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {city}, {state}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {
        photographerDetails ?
        <PhotographerDetails photographer={photographerDetails} open={open} onClose={handleClose} /> :
        //@TODO handle error othe then 404
        <Snackbar 
          open={open} 
          autoHideDuration={3000} 
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          message="No Photographer Found!" 
          onClose={handleClose} />
      }
    </>
  );
};

export default PhotographerCard;
