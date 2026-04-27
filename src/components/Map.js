import React from 'react'
import {Box} from '@mui/material'
import { makeStyles } from '@mui/styles';
import {Typography,Paper} from '@mui/material'
import GoogleMapReact from 'google-map-react'
import LocationonOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Rating from '@mui/material/Rating';

const useStyles = makeStyles((theme)=>({
    mapContainer:{
        height:'85vh',
        width:'100%'
    },
    paper:{
        width:100,
        display:"flex",
        justifyContent:"center",
        padding:10
    },
    cardImage:{
        height:85,
        width:85,
        cursor:"pointer",

    }
}))

export default function Map({places,coords,setBounds,setCoords}) {
  const classes = useStyles()
  return(
    <Box className={classes.mapContainer}>
        <GoogleMapReact
            bootstrapURLKeys={{key:process.env.GOOGLE_MAP_API_KEY }}
            defaultCenter={coords}
            defaultZoom={14}
            margin={[50,50,50,50]}
            options = {{disableDefaultUI:true,zoomControl:true}}
            onChange={ (event) =>{
                setCoords({lat:event.center.lat,lng:event.center.lng})
                setBounds({ne:event.marginBounds.ne,sw:event.marginBounds.sw})
            }}
        >{
            places.length && places.map((place,index) =>
                <div 
                lat={Number(place.latitude)} 
                lng={Number(place.longitude)} 
                key={index}>
                    <LocationonOutlinedIcon color='primary' fontSize='large' />
                    <Paper className={classes.paper}>
                        <Typography>
                        {place.name}
                        </Typography>
                        <img 
                        className ={classes.cardImage}                        
                        src={
                            (place.photo?
                             place.photo.images.large.url
                             :"https:www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg")
                        }
                        alt="Map showing user's current location"
                        />
                        <Rating readOnly size={"small"} value={Number(place.rating)}/>
                    </Paper>
                </div>
            )
        }</GoogleMapReact>
    </Box>
  )
}
