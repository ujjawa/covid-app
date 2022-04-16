import {CardContent,Grid,Box, Typography,Card,makeStyles} from "@material-ui/core"
import CountUp from 'react-countup'
const useStyle=makeStyles({
    header:{
      padding:15,
      background:"#F5F5F5"
    }
});
const Cardcomponent=({cardtitle,value,desc,lastUpdate})=>{
  const classes=useStyle();
    return(
        <Grid component={Card} style={{margin:25,borderBottom:"9px solid green"}}>
          <Box className={classes.header}>
            <Typography variant="h5" color="textSecondary">{cardtitle}</Typography>
          </Box>
          <CardContent>
            <Typography variant="h5">
              <CountUp start={0} end={value} duration={2} separator=","/>
            </Typography>
            <Typography color="textSecondary">{desc}</Typography>
            <Typography>{new Date(lastUpdate).toLocaleString()}</Typography>
          </CardContent>
        </Grid>

    )
}
export default Cardcomponent;