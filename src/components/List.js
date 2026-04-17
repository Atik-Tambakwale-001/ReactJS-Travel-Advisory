import {React} from 'react'
import {makeStyles} from '@mui/styles'
import {FormControl,InputLabel,Select,MenuItem} from '@mui/material'

const useStyles = makeStyles((theme)=>({
    container:{
        padding:25
    },
    formControl:{
        margin:10,
        minWidth:120,
        marginBottom:30
    },
}));

export default function List({type,setType,isLoading,childClicked,places}) {
    const classes = useStyles();

  return (
    <div className={classes.container}>
        <FormControl className={classes.formControl}>
            <InputLabel id="Type">Type</InputLabel>  
            <Select id="placeType" value={type} onChange={(e)=>setType(e.target.value)}>
                <MenuItem value="restaurants">Restaurants</MenuItem>
                <MenuItem value="hotels">Hotels</MenuItem>
                <MenuItem value="attractions">Attractions</MenuItem>
            </Select>          
        </FormControl>

    </div>
  )
}
