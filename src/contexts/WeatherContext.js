import React, {createContext, useState} from 'react';
import {getWeather, getIcon} from '../constants/index';

export const WeatherContext = createContext();

const WeatherContextProvider = ({children}) => {

    const [doneFetch, setDoneFetch] = useState(false);
    const [ciudadActual, setCiudadActual] = useState('');
    const [dataClima, setDataClima]       = useState({});

    // Se encarga de validar el texto en el input "Buscar comuna"
    const validarTextoBuscar = (e,  q_ciudad = document.querySelector('#q_ciudad').value.toLowerCase().trim()) => {
        if(e.code === 'Enter' && e.key !== ''){
            if (q_ciudad && q_ciudad !== ciudadActual) {
                setCiudadActual(q_ciudad);
                getClima(q_ciudad);
            }
        }
    }

    // Obtiene el clima de la comuna ingresada
    const getClima = q_clima => {

        setDoneFetch(true);

        fetch(getWeather(q_clima))
        .then(res => res.json())
        .then(data => {

            const {speed}             = data.wind;
            const {sunrise, sunset}   = data.sys;
            const {description, icon} = data.weather[0];
            const {temp, temp_min, temp_max, feels_like, humidity} = data.main;

            let amanecer = new Date(sunrise * 1000).toString();
            let amanecerSplit = amanecer.split(' ');
            amanecer = amanecerSplit[4];

            let atardecer = new Date(sunset * 1000).toString();
            let atardecerSplit = atardecer.split(' ');
            atardecer = atardecerSplit[4];
            
            setDataClima({
                'icono'             : getIcon(icon),
                'descripcion'       : description,
                'temperatura'       : temp+'º',
                'sensacion_termica' : feels_like+'º',
                'temperatura_min'   : temp_min+'º',
                'temperatura_max'   : temp_max+'º',
                'humedad'           : humidity+'%',
                'velocidad_viento'  : speed+' km/h',
                'amanecer'          : amanecer,
                'atardecer'         : atardecer
            });

            setDoneFetch(false);

        })
        .catch(err => console.log(err));
    }

    return (
        <div>
            <WeatherContext.Provider value={{validarTextoBuscar, dataClima, ciudadActual, doneFetch}}>
                {children}
            </WeatherContext.Provider>
            
        </div>
    )
}

export default WeatherContextProvider;