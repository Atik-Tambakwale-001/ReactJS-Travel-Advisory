import {React} from 'react'
import {makeStyles} from '@mui/styles'
import Grid from '@mui/material/Grid';
import {FormControl,InputLabel,Select,MenuItem,CircularProgress} from '@mui/material'
import PlaceDetails from './../components/PlaceDetails';

const useStyles = makeStyles((theme)=>({
    container:{
        padding:25
    },
    formControl:{
        margin:10,
        minWidth:120,
        marginBottom:30
    },
    loading:{
        height:"100%",
        width:"600px",
        display:"flex",
        justifyContent:"center",        
        alignItems:"center"
    }
}));

export default function List({type,setType,isLoading,childClicked,places}) {
    const classes = useStyles();

  return (
    <div className={classes.container}>
        {isLoading?(
            <div className={classes.loading}>
                <CircularProgress />
            </div>
        ):(
            <div>
                <FormControl className={classes.formControl}>
                    <InputLabel id="Type">Type</InputLabel>  
                    <Select id="placeType" value={type} onChange={(e)=>setType(e.target.value)}>
                        <MenuItem value="restaurants">Restaurants</MenuItem>
                        <MenuItem value="hotels">Hotels</MenuItem>
                        <MenuItem value="attractions">Attractions</MenuItem>
                    </Select>          
                </FormControl>
                <Grid container spacing={3} className={classes.list}>
                    {places?.map((place,index)=>{
                        return (
                            <Grid item xs={12}>
                                <PlaceDetails place={place} key={index} />
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        )}

    </div>
  )
}
