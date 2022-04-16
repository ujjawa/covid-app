
import React, { Component, useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";



class Chart extends Component {

  //console.log(data);
  state = {
    data: []
  }

  // componentDidMount() {
  //   const fdata = this.props.data;
  //   console.log(fdata);

  //   const { confirmed, recovered, deaths } = fdata;
  //   //console.log(confirmed.value)
  //   const kdata = [
  //     {
  //       name: "confirmed",
  //       confirmed: confirmed?.value,

  //     },
  //     {
  //       name: "recovered",
  //       recovered: recovered?.value,
  //     },
  //     {
  //       name: "deaths",
  //       deaths: deaths?.value,
  //     }
  //   ];

  //   this.setState({ data: kdata });
  //   console.log(fdata);
  // }


  render() {

    return (

      <BarChart
        width={800}
        height={500}
        data={this.props.data}
        margin={{
          top: 10,
          right: 3,
          left: 40,
          bottom: 20
        }}
      >
        <CartesianGrid strokeDasharray="4 4" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="confirmed" fill="yellow" width={100} />
        <Bar dataKey="recovered" fill="green" />
        <Bar dataKey="deaths" fill="red" />
      </BarChart>
    )
  }
};

const ChartHOC = (props) => {
  const [data, setData] = useState([])
  useEffect(() => {
    const fdata = props.data;
    const { confirmed, recovered, deaths } = fdata;
    //console.log(confirmed.value)
    const kdata = [
      {
        name: "confirmed",
        confirmed: confirmed?.value,

      },
      {
        name: "recovered",
        recovered: recovered?.value,
      },
      {
        name: "deaths",
        deaths: deaths?.value,
      }
    ];
    setData(kdata);
  }, [props.data])
  return (
    <Chart data={data} />
  )
}
export default ChartHOC;

/*
<Bar dataKey="confirmed" fill="yellow" width={100}/>
<Bar dataKey="recovered" fill="green" />
<Bar dataKey="deaths" fill="red" />
   async componentDidMount(){
    const fdata=await this.props.data;
    
    const {confirmed,recovered,deaths}=fdata;
    //console.log(confirmed.value)
    const kdata=[
      {
        name:"confirmed",
        confirmed:confirmed.value,

      },
      {
       name:"recovered",
       recovered:recovered.value,
      },
      {
       name:"deaths",
       deaths:deaths.value,
      }
    ];
    this.setState({data:kdata});
    //console.log(fdata);
  }*/ 