
import { Box,Typography,withStyles} from '@material-ui/core';
import {Component} from 'react'
import logo from './images/pic.jpg'
import Cards from './Components/cards'
import { fetchdata } from './services/api';
import Countries from './Components/Countries'
import Chart from './Components/Chart'

const style={
  container:{
    display:'flex',
    alignItems:'center',
   // justifyContent:'center',
    flexDirection:'column',
    //borderStyle:"solid",
  },
  header:{
   // backgroundColor:'red',
   // borderColor:"green",
   // borderStyle:"solid",
    width:400,
    textAlign:'center',
    fontSize:20,
    color:"#777",
    padding:10
  },
  ldate:{
    color:"#777",
    fontSize:12
  }
}
class App extends Component{
state={
  data:{},
  country:''
}

  componentDidMount(){
    //const fdata=await fetchdata();
    //this.setState({data:fdata});
    fetchdata().then(res => {
      this.setState({...this.state,data:res});
    }).catch(err => {
      console.log(err);
    });
    //console.log(fdata);
  }

  changeCountry=async(country)=>{
    const ffdata=await fetchdata(country);
    this.setState({data:ffdata,country:country});
    //console.log(country);
  }
  render(){
    const {data}=this.state;
    console.log(this.state.data);
    return (
    <Box className={this.props.classes.container}>
      
      <Box className={this.props.classes.header}>COVID PANDEMIC STATUS</Box>
      <Typography className={this.props.classes.ldate}>Last Updated:{data.lastUpdate&& new Date(data.lastUpdate).toLocaleString()}</Typography>
      <img style={{width:370}} src={logo} alt="pic"/>
      <Cards data={data}/>
      <Countries changeCountry={this.changeCountry}/>
      <Chart data={this.state.data}/>

    </Box>
  )
  }
}
export default withStyles(style)(App);
