import React from 'react'
import Box from '@material-ui/core/Box';

const DataWeather = ({ciudadActual, dataClima}) => {
    return (
        <div style={{ width: '100%' }}>
            <Box display="flex" justifyContent="center" m={1} p={1}>
                <div className="contenedorData">

                    {/* Titulo */}
                    <Box className="tituloCard" flexDirection="column" display="flex" justifyContent="center" alignContent="center">
                        <Box display="flex" justifyContent="center" alignContent="center" className="ciudadText">{ciudadActual}</Box>
                        <Box display="flex" justifyContent="center" alignContent="center" className="descripcionText">{dataClima.descripcion}</Box>
                    </Box>

                    {/* Representación */}
                    <Box display="flex" flexDirection="row" justifyContent="center" alignContent="center">
                        <Box display="flex" flexDirection="column"  justifyContent="center" alignContent="center">
                            <img src={dataClima.icono} alt=""/>
                        </Box>
                        <Box display="flex" flexDirection="column" justifyContent="center" alignContent="center">
                            <h2>{dataClima.temperatura}</h2>
                        </Box>
                    </Box>

                    <Box display="flex" justifyContent="space-between">
                        <div>Sensación Térmica</div> <div>{dataClima.sensacion_termica}</div>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <div>Temperatura Máxima</div> <div>{dataClima.temperatura_max}</div>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <div>Temperatura Mínima</div> <div>{dataClima.temperatura_min}</div>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <div>Humedad</div> <div>{dataClima.humedad}</div>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <div>Velocidad del viento</div> <div>{dataClima.velocidad_viento}</div>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <div>Amanecer</div> <div>{dataClima.amanecer}</div>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <div>Atardecer</div> <div>{dataClima.atardecer}</div>
                    </Box>

                    <br/>
                    
                </div>
            </Box>
        </div>
    )
}

export default DataWeather;