import React from "react";
import './token.css'
import { PieChart, Pie, Cell } from 'recharts';
import '../css/main.css'
import token from '../images/token.png'
function Token(){
    
  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 200 },
    { name: 'Group F', value: 200 },
    { name: 'Group G', value: 200 },
    { name: 'Group H', value: 200 },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#cf33ee', '#b40000', '#00af0f' ];
  
  const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

    return (
      <div className="container-fluid">
      <div class="text-center wow fadeInUp">
         <h2 class="title-section">TOKEN METRIC</h2>
         <div class="divider mx-auto"></div>
       </div>
     <div className="row">
       <div className="col-md-4 align-self-center text-center order-md-1 order-2">
       <div>
     <img src={token} alt=""/>
     </div>
       </div>
       <div className="col-md-2 align-self-center order-md-2 ">
      <p className="">Private Sale</p>
      <p className="">IDO</p>
      <p className="">Pancakeswap</p>
      <p className="">Play To Earn</p>
      <p className="">Staking Reward</p>
      <p className="">Ecosystem fund</p>
      <p className="">Team</p>
      <p className="">Advisor</p>
      <p className="">DEX Liquidity</p>
      <p className="">Reserves</p>
      </div>
      <div className="col-md-1 align-self-center order-md-2 ">
      <p className="">6%</p>
      <p className="">2%</p>
      <p className="">1%</p>
      <p className="">20%</p>
      <p className="">20%</p>
      <p className="">6%</p>
      <p className="">25%</p>
      <p className="">3%</p>
      <p className="">5%</p>
      <p className="">12%</p>
      </div>
      <div className="col-md-4 align-self-center order-md-2 ">
      <p className="">LOCKED 1 Year, Then vest lineary over 1 year</p>
      <p className="">LOCKED 1 Year, Then vest lineary over 1 year</p>
      <p className="">LOCKED 1 Year, Then vest lineary over 1 year</p>
      <p className="">LOCKED 1 Year, Then vest lineary over 1 year</p>
      <p className="">LOCKED 1 Year, Then vest lineary over 1 year</p>
      <p className="">LOCKED 1 Year, Then vest lineary over 1 year</p>
      <p className="">LOCKED 1 Year, Then vest lineary over 1 year</p>
      <p className="">LOCKED 1 Year, Then vest lineary over 1 year</p>
      <p className="">LOCKED 1 Year, Then vest lineary over 1 year</p>
      <p className="">LOCKED 1 Year, Then vest lineary over 1 year</p>
      </div>
     </div>
 </div>




              

      
    );
} 

      export default Token;

