import React, { useEffect, useState }  from 'react'
import { Fact, Geo, Yesterday } from './type'
import { fetchWeather } from './weatherApi'

interface Props {
    
}

export const Weather: React.FC<Props> = (props) => {
    
    const [geo, setGeo] = useState<Geo>()
    const [yesterday, setYesterday] = useState<Yesterday>()
    const [fact, setFact] = useState<Fact>()

    const getWeather = async () => {
        const {geo_object, yesterday,fact} = await fetchWeather({lat: 53.932591933572326, lon: 27.668968359186046})
        setGeo(geo_object)
        setYesterday(yesterday)
        setFact(fact)
    }
    
    
    
    useEffect(() => {
        getWeather( )
    }, [])
    return (
        <div>
            <p>
            Country: {geo?.country.name}
            </p>
            <p>
                Provinse: {geo?.province.name}
            </p>
            <p>
                Temp {fact?.temp}
            </p>
            <p>
                Yesterday the weather was {yesterday?.temp}
            </p>
            <p>
                Weather fils like {fact?.feels_like}
            </p>
            <p>
                Air speed {fact?.wind_speed}
            </p>

        </div>
    )
}
