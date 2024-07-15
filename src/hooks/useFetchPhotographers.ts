import { useCallback, useEffect, useState } from 'react';
import { PhotographerType } from '@type/photographers';
import { UsePhotographers } from '@type/hooks';
import { PAGE_SIZE } from '@consts/photographers';
import { getPhotographersList } from '@services/photographers-service';

const useFetchPhotographers = (): UsePhotographers => {
    const [data, setData] = useState<PhotographerType[]>([]);
	  const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const fetchMorePhotographers = useCallback(async (page: number = 1, pageSize: number = PAGE_SIZE): Promise<void> => {
        if(isLoading) return;
        try {
          setIsLoading(true);
          const response = await getPhotographersList(page, pageSize);
          setData((prev) => [...prev, ...response]);
          if (response.length < pageSize) {
            setHasMore(false);
          }
        } catch (error) {
          console.error('Error fetching more photographers:', error);
        } finally {
          setIsLoading(false);
        }
    }, [isLoading]);
    
	useEffect(() => {
		fetchMorePhotographers();
	}, []);

	return { data, isLoading, hasMore, fetchMorePhotographers };
};

export default useFetchPhotographers;
