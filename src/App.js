import {createTheme, ThemeProvider, makeStyles} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'; 
import NavBar from './components/NavBar'
import Grid from './components/Grid'
import Footer from './components/Footer'
import './App.css';

import AcccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import AddPhotoIcon from '@material-ui/icons/AddAPhoto';
import BrokenImageIcon from '@material-ui/icons/BrokenImage';



const theme = createTheme({
  palette: {
    primary: {
      main:"#0AE",
    },
    secondary: {
      main:"#E1C17C",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "70%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "2rem"
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})

function App() {
  const classes = styles(); 

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar/>
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
             My Experience:
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
            In order to install react I had to download node.js first. I then had to run a few commands on terminal,
            including npx create-react-app *name* in order to install the react app. This installed all of the dependencies.
            One of the challenges I faced was installing Material UI, which is a React UI framework. My original
            command didn't work so i had to add -f with the command to force install it. I used online resources such
            as stack overflow to help with most of these challenges. Material UI allowed me to build different
            components like the buttons. Building the website was easier once I saw a few tutorials.
            There was a lot of importing, which was kind of annoying. Obviously, the framework used a lot of what
            I learned from HTML and CSS, so a lot of the css parts weren't difficult. I noticed that some knowledge of
            classes benefited me while expoloring. As I was editing this, I encountered
            a bunch of errors when I checked my page, but I executed the command "npm run start" again and it was back to normal.
            I believe it was due to me moving the folder with all my react stuff into a new location by accident.
            Overall, there were a bunch of tutorials and helpful resources to help me build something simple and learn at the same time.


          </Typography>
        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<AcccessAlarmIcon style={{fill: "#0B2946", height:"100", width:"100"}}/>}  title="clock" btnTitle="Fake Button" />
          <Grid icon={<AddPhotoIcon style={{fill: "#1B5561", height:"100", width:"100"}}/>} title="camera" btnTitle="Fake Button"/>
          <Grid icon={<BrokenImageIcon style={{fill: "#73BEB8", height:"100", width:"100"}}/>}  title="random" btnTitle="Fake Button"/>
        </div>
        <div className={classes.bigSpace}>
          <Footer/>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;