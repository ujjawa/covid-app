import {Typography,makeStyles,Box,Grid,CircularProgress} from "@material-ui/core";
import Card from "./allcards"
const useStyles=makeStyles({
    container:{
        color:"green",
        marginBottom:20,
        display:"flex",
        justifyContent:"center",
        alignItems:'center',
        //flexDirection:'column'
    },
    component:{
        margin:"45px 0px"
    }
});
const Cards=({data:{confirmed,recovered,lastUpdate,deaths}})=>{
    const classes=useStyles();

    if(!confirmed)
    {
    return <CircularProgress/>
    }
    
    return(
        
        <Box className={classes.component}>
            <Typography variant="h5" className={classes.container}>TOTAL COVID19 CASES IN THE WORLD</Typography>
            <Grid container spacing={2}>
                <Card cardtitle="Infected" value={confirmed.value} desc="Number of infected people from COVID19" lastUpdate={lastUpdate}/>
                <Card cardtitle="Recovered" value={recovered.value} desc="Number of recovered people from COVID19" lastUpdate={lastUpdate}/>
                <Card cardtitle="Deaths" value={deaths.value} desc="Number of deaths of people from COVID19" lastUpdate={lastUpdate}/>
            </Grid>
        </Box>
    )
}
export default Cards;