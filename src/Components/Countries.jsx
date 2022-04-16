import { fetchcountries } from "../services/api";
import {useEffect,useState} from "react"
import { NativeSelect, Typography } from "@material-ui/core";

const Countries=({changeCountry})=>{

    const [countries,setCountries]=useState([]);
    useEffect(()=>{
     const fetchApi=async()=>{
        setCountries(await fetchcountries());
     }
     fetchApi();
    },[])

return (<>
    <Typography style={{marginBottom:20}} color="textSecondary" variant="h4">Total cases or deaths by country</Typography>
    <NativeSelect onChange={(e)=>changeCountry(e.target.value)}>
        <option  value="">India</option>
        {
            countries.map((cntry,i)=>{

            return (<option key={i} value={cntry}>{cntry}</option>)
            })
        }
    </NativeSelect>
</>)
}
export default Countries;