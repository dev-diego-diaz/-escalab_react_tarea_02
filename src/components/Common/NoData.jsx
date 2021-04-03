import { Box } from '@material-ui/core';
import React from 'react'

import CloudOutlinedIcon from '@material-ui/icons/CloudOutlined';

const NoData = () => {
    return (
        <div style={{ width: '100%' }}>
            <Box display="flex" justifyContent="center" flexShrink={1} m={1} p={1}>
                <div className="contenedorData">
                    <Box display="flex" flexDirection="column">
                        <Box display="flex" justifyContent="center" alignContent="center">
                            <h2>No hay datos</h2>
                        </Box>
                        <Box display="flex" justifyContent="center" alignContent="center">
                            <CloudOutlinedIcon color="action" style={{ fontSize: 100 }}  />
                        </Box>
                        <br/>
                    </Box>
                </div>
            </Box>
        </div>
    )
}

export default NoData;