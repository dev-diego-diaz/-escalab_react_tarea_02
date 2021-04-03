import React, {useContext} from 'react';
import {WeatherContext} from '../../contexts/WeatherContext';

import SearchWeather from "./SearchWeather";
import DataWeather from "./DataWeather";
import NoData from '../Common/NoData';
import { CircularProgress } from '@material-ui/core';

export const Weather = () => {

    const { validarTextoBuscar, ciudadActual, dataClima, doneFetch } = useContext(WeatherContext);
    return (
        <>
            <SearchWeather validarTextoBuscar={validarTextoBuscar} />

            {
                ciudadActual
                ?

                    doneFetch 
                    ? <CircularProgress />
                    : <DataWeather ciudadActual={ciudadActual} dataClima={dataClima}/>
                    
                :
                    <NoData />
            }


        </>
    );

}
