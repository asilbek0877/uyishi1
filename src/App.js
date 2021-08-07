import React from 'react';
import Navbar from "./navbar";
import Saidbar from "./saidbar";
import Body from "./body";

class Uka extends React.Component{
render(){
return(
  <div>
    <Navbar/>
    <Body/>
    <Saidbar/>
    </div>
  )
}
}

export default Uka;