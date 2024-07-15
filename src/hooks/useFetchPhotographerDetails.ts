import { useCallback, useState } from 'react';
import { PhotographerDetailsType } from '@type/photographers';
import { UsePhotographerDetails } from '@type/hooks';
import { getPhotographerDetails } from '@services/photographers-service';

const useFetchPhotographerDetails = (): UsePhotographerDetails => {
  const [data, setData] = useState<Record<string, PhotographerDetailsType>>({});
	const [isLoading, setIsLoading] = useState(false);

  const fetchPhotographerDetails = useCallback(async (photographerId: number): Promise<void> => {
      if(isLoading) return;
      try {
        setIsLoading(true);
        const response = await getPhotographerDetails(photographerId);
        setData((prev) => ({...prev, [photographerId]: response}));
      } catch (error) {
        console.error('Error fetching photographer details:', error);
      }  finally {
        setIsLoading(false);
      }
  }, [isLoading]);
    
	return { data, isLoading, fetchPhotographerDetails };
};

export default useFetchPhotographerDetails;