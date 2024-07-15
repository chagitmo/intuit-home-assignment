import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Avatar, Grid, Typography } from '@mui/material';
import { PhoneOutlined, EmailOutlined, LocationOnOutlined, EventOutlined  } from '@mui/icons-material';
import { PhotographerDetailsType } from '@type/photographers';

import './photographer-details.scss';

interface PhotographerDetailsProps {
  photographer: PhotographerDetailsType;
  open: boolean;
  onClose: () => void;
}

const PhotographerDetails: React.FC<PhotographerDetailsProps> = ({ photographer, open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Photographer Details</DialogTitle>
      <DialogContent dividers>
        <Grid container>
          <Grid item xs={12} md={4}>
            <Avatar
              src={photographer.avatar}
              alt={`${photographer.firstName} ${photographer.lastName}`}
              sx={{ width: 140, height: 140, marginBottom: {xs: '20px', md: 0} }}
            />
          </Grid>
          <Grid item xs={12} md={8} className="photographer-details-content">
            <Typography variant="h6">{photographer.firstName} {photographer.lastName}</Typography>
            <Grid container alignItems="center" spacing={1}>
              <Grid item>
                <PhoneOutlined/>
              </Grid>
              <Grid item>
                <Typography>{photographer.phoneNumber}</Typography>
              </Grid>
            </Grid>
            <Grid container alignItems="center" spacing={1}>
              <Grid item>
                <EmailOutlined />
              </Grid>
              <Grid item>
                <Typography>{photographer.email}</Typography>
              </Grid>
            </Grid>
            <Grid container alignItems="center" spacing={1}>
              <Grid item>
                <LocationOnOutlined />
              </Grid>
              <Grid item>
                <Typography>{photographer.city}, {photographer.state}</Typography>
              </Grid>
            </Grid>
            <Grid container alignItems="center" spacing={1}>
              <Grid item>
                <EventOutlined />
              </Grid>
              <Grid item>
                <Typography>{photographer.eventType}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PhotographerDetails;
