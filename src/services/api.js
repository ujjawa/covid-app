import axios from 'axios'
const url="https://covid19.mathdro.id/api";

export const fetchdata=async(country)=>{
    let newurl=url;
    if(country)
    newurl=`${url}/countries/${country}`;
    try{
    const {data:{confirmed,recovered,deaths,lastUpdate}}=await axios.get(newurl);
    console.log(confirmed)
    return {confirmed,recovered,deaths,lastUpdate};
    }
    catch(error){
        return error;
    }
}

export const fetchcountries=async()=>{
    try{
       const {data:{countries}}=await axios.get(`${url}/countries`);
       return countries.map((country)=>{
           return country.name;
       })
    }
    catch(error){
        return error;
    }
}