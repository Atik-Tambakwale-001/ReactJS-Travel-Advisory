import React from 'react';
import {Card,CardMedia,CardContent,Typography,Box} from '@mui/material';
import Rating from '@mui/material/Rating';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

export default function PlaceDetails({place}) {
    return (
        <Card elevation={8}>
            <CardMedia 
                style={{height:350}} 
                image={place.photo?
                        place.photo.images.large.url
                        :'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'
                    } 
                    title={place.name}
            ></CardMedia>
            <CardContent>
                <Typography gutterBottom variant="h5">
                    {place.name}
                </Typography>
                <Box display="flex" justifyContent="space-between" my={2}>
                    <Rating name="read-only" value={Number(place.rating)} readOnly />
                    <Typography>
                        {place.num_reviews} review{place.num_reviews > 1 && 's'}
                    </Typography>
                </Box>
                {place.address && (
                    <Typography 
                        gutterBottom 
                        style={{
                            display:'flex',
                            aligItem:"center",
                            justifyContent:"space-between",
                            marginTop:10
                        }}
                    >
                        <LocationOnIcon />
                        {place.address}
                    </Typography>
                )}
                {place.phone && (
                    <Typography 
                        gutterBottom
                        style={{
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"space-between",
                        }}
                    >
                        <PhoneIcon />
                        {place.phone}
                    </Typography>
                )}
            </CardContent>
        </Card>
    )
}
