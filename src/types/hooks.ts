import { PhotographerType, PhotographerDetailsType } from '@type/photographers';

export interface BaseFetchHook<T> {
    data: T,
    isLoading: boolean,
}

export interface UsePhotographerDetails extends BaseFetchHook <Record<string, PhotographerDetailsType>>{
    fetchPhotographerDetails: (photographerId: number) => Promise<void>
}

export interface UsePhotographers extends BaseFetchHook<PhotographerType[]>{
    hasMore: boolean, 
    fetchMorePhotographers: (page?: number, pageSize?: number) => Promise<void>
}