import React from 'react';
import { ListGroup } from 'react-bootstrap';
import imgT from './assets/images/TrevorDaniel.jpg';
import imgS from './assets/images/SelenaGomez.jpg';

class Artist extends React.Component{
    render(){
        return( <div style={styles.artistContainer}>
            <div style={styles.titleBar}>
            <p style={styles.title}>Artist</p>
                    <img style={styles.battery} src="https://image.flaticon.com/icons/svg/3103/3103446.svg"></img>
            </div>
            <ListGroup>
                <ListGroup.Item style={styles.itemstyle}><img src={imgT} style={styles.itemimg}/> Trevor Daniel</ListGroup.Item>
                <ListGroup.Item style={styles.itemstyle}><img src={imgS} style={styles.itemimg}/> Selena Gomez</ListGroup.Item>
                </ListGroup>
    </div>)
    }
}
const styles ={
    artistContainer : {
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
        height:'50%',
        margin:'2 0 2 0',
        fontWeight:'bold',
        padding:'3px 0 5px 0',
        display:'flex',
        justifyContent : 'space-evenly'
    },
    itemimg :{
        width:'20%',
        height:'95%',
        borderRadius:'10%',
        marginLeft:'8px'
    }
    }
export default Artist;