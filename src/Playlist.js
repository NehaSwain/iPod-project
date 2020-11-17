import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Falling from './assets/images/Falling.jpg';
import BeKind from './assets/images/BeKind.jpg';
import Cradles from './assets/images/Cradles.jpg';
import Surrender from './assets/images/Surrender.jpg';
import CallYouMine from './assets/images/CallYouMine.jpg';



class Playlist extends React.Component{
    //additional playlist songs
    render(){
        return(
            <div style={styles.playlistContainer}>
                <div style={styles.titleBar}>
                <p style={styles.title}>Playlist</p>
                        <img style={styles.battery} src="https://image.flaticon.com/icons/svg/3103/3103446.svg"></img>
                </div>
                <ListGroup>
                    <ListGroup.Item style={styles.itemstyle}><img src={Falling} style={styles.itemimg}/> Falling</ListGroup.Item>
                    <ListGroup.Item style={styles.itemstyle}><img src={Surrender} style={styles.itemimg}/> Surrender</ListGroup.Item>
                    <ListGroup.Item style={styles.itemstyle}><img src={Cradles} style={styles.itemimg}/> Cradles</ListGroup.Item>
                    <ListGroup.Item style={styles.itemstyle}><img src={BeKind} style={styles.itemimg}/> Be Kind</ListGroup.Item>
                    <ListGroup.Item style={styles.itemstyle}><img src={CallYouMine} style={styles.itemimg}/> Call You Mine</ListGroup.Item>
                </ListGroup>
        </div>
        )

    }
}
const styles ={
playlistContainer : {
    height : '100%',
    width : '100%',
    display : 'flex',
    flexDirection : 'column',
},
titleBar : {
    position:'relative',
    height:'5%',
    width:'95.5%',
    borderRadius:'12px 12px 0 0',
    backgroundImage:'linear-gradient(0deg, #777, white)',
    borderBottom: '1px solid #6c757d',
    padding : '1px 5px 10px 8px',
    display:'flex',
    justifyContent : 'space-between',
    verticalAlign:"center"

},
title:{
    display:'inline-block',
    fontSize:'1rem',
    fontWeight:'bold',
    marginTop:'-0.1px'
},
battery :{
    position:'absolute',
    top:2,
    right:2,
    width : '20px',
    height: '20px',
},
itemstyle:{
    width:'90%',
    height:'15%',
    margin:'2 0 2 0',
    // fontWeight:'bold',
    padding:'3px 0 5px 0'
},
itemimg :{
    width:'10%',
    height:'95%',
    borderRadius:'10%',
    marginLeft:'8px'
}
}
export default Playlist;