/* eslint-disable no-dupe-keys */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-this-before-super */
/* eslint-disable @typescript-eslint/no-unused-vars */

import logo from './logo.svg';
import './App.css';
import CartList from './compnent/card-list/Cart-list.comonent';
import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
// import SearchAppBar from './compnent/Material-UI/AppBar';
import InputBase from '@material-ui/core/InputBase';
import SearchBox from './compnent/Material-UI/Search-Box.component';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Box from '@material-ui/core/Box/Box';




interface mystate{
  // users:[]
  Monsters:[]
  searchMonster:string
}
interface myprops{

}

class App extends Component <any,mystate>{
  constructor(props: any){
    

    super(props);
    this.state={
     Monsters:[],
    //  users:[]
    searchMonster:''
    }
  }



componentDidMount=async()=>{
  // fetch('https://jsonplaceholder.typicode.com/users')
  // .then(Response => Response.json())
  // .then(users => this.setState({Monsters : users}) )
//  myAsyncFunction = async()=>{
    
            try{
    const userResponse= await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await userResponse.json()
    const myMonsterUser = this.setState({Monsters:users})
        }catch(err){
          console.log('I have error Here')
    }
        
}   
// }}
handleChange=(e:any)=>{
  this.setState({searchMonster:e.target.value})
}

  render() {
    // const classes = useStyles();
    const{ Monsters,searchMonster}=this.state
    const filterMonster = Monsters.filter( (monster:any)=>
      monster.name.toLowerCase().includes(searchMonster.toLowerCase())
      )
    return (
      <div className="App">
      
     {/* <SearchAppBar/>
       {/* <InputBase
              type="search" placeholder="Search Monster"
              onChange={(e)=>(this.setState({searchMonster:e.target.value}))}
               /> */} 
      
      <h1>Monster Rolodex</h1>
        <Box color="#0ccac4" display="flex"  marginLeft='42%' marginBottom="20px" >
        <SearchBox
         type="search"
         placeholder=""
         handleChange={this.handleChange}
         />
           <h2>Search Monster</h2>
         </Box>
     


     
         
        <CartList Monsters={filterMonster} />
    
      </div>
     
    );
  }
}

export default App;


