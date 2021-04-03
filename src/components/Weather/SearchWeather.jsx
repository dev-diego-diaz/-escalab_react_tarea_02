import React, {useState} from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

const SearchWeather = ( {validarTextoBuscar} ) => {
    return (
        <div style={{ width: '100%' }}>
            <Box display="flex" justifyContent="center" m={1} p={1}>
                <div className="contenedorInput">
                    <TextField id="q_ciudad" label="Buscar comuna" onKeyDown={ (e) => validarTextoBuscar(e)}/>
                </div>
            </Box>
        </div>
    )
}

export default SearchWeather;