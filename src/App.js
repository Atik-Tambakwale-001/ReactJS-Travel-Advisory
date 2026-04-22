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
  const [childClicked,setChildClicked] = useState(null); 

  useEffect(() => {
    setIsLoading(true);
    getPlacesData(type).then((data) => {
      setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
      setIsLoading(false); 
    });
  }, [type,setPlaces]);

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
            places={places}
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
