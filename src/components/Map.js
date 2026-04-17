import React from 'react'
import {Box} from '@mui/material'
import { makeStyles } from '@mui/styles';
import GoogleMapReact from 'google-map-react'

const useStyles = makeStyles((theme)=>({
    mapContainer:{
        height:'85vh',
        width:'100%'
    }
}))

export default function Map() {
  const classes = useStyles()
  return(
    <Box className={classes.mapContainer}>
        <GoogleMapReact
            bootstrapURLKeys={{key:process.env.GOOGLE_MAP_API_KEY }}
            defaultCenter={{lat:32.6074954,lng:43.941492}}
            defaultZoom={14}
            margin={[50,50,50,50]}
            options = {{disableDefaultUI:true,zoomControl:true}}
        ></GoogleMapReact>
    </Box>
  )
}
