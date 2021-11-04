export interface Geo {
    country: {id: number, name: string}
    district: unknown
    locality: unknown
    province: {id: number, name: string}
    
} 

export type Yesterday = {
    temp: number
}

export interface Fact {
feels_like: number
wind_speed: number
temp: number
}

export interface Coords {
    lat: number;
    lon: number
}