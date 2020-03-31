
import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'


class App extends Component 
{
  state = {
    sideDrawerOpen :false,

  };
  drawerToogleClickHandler = () =>{
    this.setState(prevState =>{
      return {sideDrawerOpen:!prevState.sideDrawerOpen}

    });
  }
  backdropClickHandler = () => {
this.setState({sideDrawerOpen:false })
  }
  render() 
  {
    let sideDrawer;
    let backdrop;
    if(this.state.sideDrawerOpen)
    {
      
      backdrop=<Backdrop click = {this.backdropClickHandler} />
      sideDrawer=<SideDrawer/>
    }
    return(
       
<div style = {{height:'100%'}}>

    <Toolbar  drawerClickHandler = {this.drawerToogleClickHandler }  />
    {sideDrawer}
    {backdrop} 
<main style = {{marginTop:'64px'}}>
  <p>This content Logo</p>
  </main>
  
</div>
    );
}
}
export default App;
