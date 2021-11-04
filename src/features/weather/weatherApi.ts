import {  Coords, Fact, Geo, Yesterday } from "./type";

export type Response  = {now: number, geo_object: Geo, yesterday: Yesterday, fact: Fact };

export const fetchWeather = async ({lat, lon}: Coords): Promise<Response> => {
    const res= await fetch(`/weather?lat=${lat}&lon=${lon}`
    );
    const data = await res.json()
    console.log(data)
    return data
};



