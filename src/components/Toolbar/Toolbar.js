import React  from 'react'; 
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

//import './SideDrawer/DrawerToggleButton.css'
const toolbar=props=>
{
    return(
        <header className="toolbar">
          <nav className="toolbar_navigation">
              <div>
                  <DrawerToggleButton click = {props.drawerClickHandler}/>
              </div>
              <div className ="toolbar_logo">
               <a href="/" >The Logo</a>   
              </div>
              <div className="spacer" />
              <div className="toolbar_navigation_items">
                  <ul>
                      <li> <a href="/" >Product</a>

                      </li>
                      <li> <a href="/" >User</a>

                      </li>
                  </ul>
              </div>
              
              </nav>  
        </header>
        

    );
}


export default toolbar;