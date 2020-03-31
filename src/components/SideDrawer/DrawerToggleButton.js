import React from 'react';
import '../SideDrawer/DrawerToogleButton.css';
const drawerToggleButon= props =>
{
    return (
<button className="toogle-button" onClick = {props.click} >
    <div className="toogle-button_line"  />
    <div className="toogle-button_line" />
    <div className="toogle-button_line"/>

</button>
    )
}

export default drawerToggleButon;