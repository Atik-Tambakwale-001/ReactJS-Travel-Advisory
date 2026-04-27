import Header from "./components/Header";
import {CssBaseline} from '@mui/material';
import Grid from '@mui/material/Grid';
import Map from "./components/Map";
import List from "./components/List";
import {useState,useEffect} from 'react'
import {getPlacesData} from './api/travelAdvisorAPI'

function App() {
  const [type,setType] = useState('restaurants');
  const [isLoading,setIsLoading] = useState(false);
  const [places,setPlaces] = useState([]);
  const [coords,setCoords] = useState({});
  const [bounds,setBounds] = useState({});
  const [childClicked,setChildClicked] = useState(null); 

  useEffect(() => {
    if(bounds){
      setIsLoading(true);
      getPlacesData(type,bounds.ne,bounds.sw).then((data) => {
        setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
        setIsLoading(false); 
      });
    }
  }, [type,setPlaces,bounds]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude }}) => {
      setCoords({ lat: latitude, lng: longitude });
    });
  }, []); 

  return (
    <div>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List
            type={type}
            setType={setType}
            childClicked={childClicked}
            isLoading={isLoading}
            places={places}
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <Map places = {places} coords={coords} setBounds ={(bounds)=> setBounds(bounds) } setCoords={(coords) => setCoords(coords) }  />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
