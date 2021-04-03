import React from 'react'
import Box from '@material-ui/core/Box';

const Footer = () => {
    return (
        <div style={{ width: '100%'}}>
        <Box display="flex" justifyContent="center" alignItems="flex-end" m={1} p={1}>
            <div className="text">
                <b>Diego Díaz - {new Date().getFullYear()}</b>
            </div>
        </Box>
    </div>
    )
}

export default Footer;
