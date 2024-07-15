import React, { useState, useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Grid, Typography } from '@mui/material';
import PhotographerCard from '@components/photographer-card/photographer-card';
import useFetchPhotographers from '@hooks/useFetchPhotographers';
import useFetchPhotographerDetails from '@hooks/useFetchPhotographerDetails';
import { PAGE_SIZE } from '@consts/photographers';

import './photographers-list.scss';

const PhotographersList: React.FC = () => {
  const [page, setPage] = useState(2);
  const { data: photographers, hasMore, fetchMorePhotographers } = useFetchPhotographers();
  const { data: photographerDetailsMap, fetchPhotographerDetails } = useFetchPhotographerDetails();

  const fetchMoreData = useCallback(async () => {
    await fetchMorePhotographers(page, PAGE_SIZE);
    setPage((prevPage) => prevPage + 1);
  }, [fetchMorePhotographers, page]);

  const onOpenPhotographer = useCallback(async (photographerId: number) => {
    if(!photographerDetailsMap?.[photographerId]) {
      await fetchPhotographerDetails(photographerId);
    }
  }, [fetchPhotographerDetails, photographerDetailsMap]);

  return (
    <InfiniteScroll
      dataLength={photographers.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<Typography variant="h4">Loading...</Typography>}
      scrollThreshold={0.6}
    >
      <Grid container justifyContent="center">
        {photographers.map((photographer) => (
          <Grid className="photographer-item-wrapper" item key={photographer.id} xs={12} sm={6} md={4} lg={3}>
              <PhotographerCard 
                photographer={photographer} 
                photographerDetails={photographerDetailsMap?.[photographer.id]}
                onOpenPhotographer={onOpenPhotographer} />
          </Grid>
        ))}
      </Grid>
    </InfiniteScroll>
  );
};

export default PhotographersList;

