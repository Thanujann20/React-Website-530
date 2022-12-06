import React from 'react'
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <BottomNavigation >
          <BottomNavigationAction color="red" label="LinkedIn" value="recents" icon={<LinkedInIcon  style={{fill: "#3b5998"}}/>} />
          <BottomNavigationAction label="Twitter" value="favorites" icon={<TwitterIcon  style={{fill: "#1DA1F2"}}/>} />
          <BottomNavigationAction label="Instagram" value="nearby" icon={<InstagramIcon  style={{fill: " #C13584"}}/>} />
        </BottomNavigation>
)
}

export default Footer