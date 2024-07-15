export interface PhotographerType {
    id: number,
    firstName: string,
    lastName: string,
    avatar: string,
    city: string,
    state: string,
}

export interface PhotographerDetailsType extends PhotographerType {
    phoneNumber: string, 
    email: string, 
    eventType: string
}