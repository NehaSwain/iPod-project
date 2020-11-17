import React from 'react';
import { ListGroup } from 'react-bootstrap';
import {FaAngleRight} from 'react-icons/fa';

class Songs extends React.Component{
 //extended options in songs for audio playing and artists
    render(){
        return(
            <div style={styles.musicScreen} id='music-screen'>
                <div style={styles.menuList} id='menu-list'> 
                <div style={styles.titleBar}>
                   <p style={styles.title}>Songs</p>
                   <img style={styles.battery} src="https://image.flaticon.com/icons/svg/3103/3103446.svg"></img>
                    </div>
                
                    <ListGroup  style={{borderRadius:'0'}}>
                        <ListGroup.Item style={{padding: '0.5rem 1rem'}} className={this.props.activeItem==='NowPlaying'?'active':''}>
                            NowPlaying {this.props.activeItem==='NowPlaying'?<span style={{float:'right' ,fontWeight:'bold',color:'white'}}><FaAngleRight/></span>:''}
                        </ListGroup.Item>
                        <ListGroup.Item style={{padding: '0.5rem 1rem'}} className={this.props.activeItem==='Artist'?'active':''}>
                            Artist {this.props.activeItem==='Artist'?<span style={{float:'right' ,fontWeight:'bold',color:'white'}}><FaAngleRight/></span>:''}
                        </ListGroup.Item>
                    </ListGroup>
                </div>
                <div style={styles.imageContainer} id='image-container'>
                </div>
            </div>
        );
    }
    
}

const styles = {
    musicScreen : {
        height : '100%',
        width : '100%',
        display : 'flex',
        flexDirecton : 'row',
        flexWrap:'wrap',
        backgroundImage : 'url("https://wallpapers.net/misty-pink-sunset-hd-wallpaper/download/640x1136.jpg")',
        backgroundSize : 'cover',
        backgroundPosition : 'center',
        borderRadius:'5%'
    },
    menuList : {
        height : '100%',
        width : '50%',
        boxShadow: '10px 0px 15px -5px rgba(0,0,0,0.75)',
        backgroundColor:'white',
        zIndex : '1',
        borderRadius:'5px 0 0 5px'
    },
    titleBar : {
        height:'5%',
        width:'91%',
        borderRadius:'12px 12px 0 0',
        backgroundImage:'linear-gradient(0deg, #777, white)' ,
        borderBottom: '1px solid #6c757d',
        padding : '0 5px 8px 7px',
        display:'flex',
        justifyContent : 'space-between'

    },
    title:{
        display:'inline-block',
        fontSize:'1rem',
        fontWeight:'bold',
        marginTop:'-0.1px'
    },
    battery :{
        width : 25,
        height: 25,
        marginTop:'-1.2px'
    }
}


export default Songs;