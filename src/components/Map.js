import React from 'react'
import {makeStyles,Box} from '@mui/material'
const useStyles = makeStyles((theme)=>({
    mapContainer:{
        height:'85vh',
        width:'100%'
    }
}))

export default function Map() {
  const classes = useStyles()
  return
  (
    <Box className={classes.mapContainer}>
        <h1>Map</h1>
    </Box>
  )
}
