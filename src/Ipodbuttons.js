import React from 'react';
import {FaFastBackward,FaFastForward,FaPause,FaPlay} from 'react-icons/fa';
import Zingtouch from 'zingtouch';
import Screen from './Screen';
import sound from './assets/music/PastLife.mp3';

class Ipodbuttons extends React.Component{
    constructor(){
        super();
        this.state={
            activeItem:'Songs',
            activePage:'HomeScreen',
            enter:0,
            play:true
        }
        
    }
    dragging=()=>{
        var change=0;
        var self=this;
        const target=document.getElementById('iconBox');
        const region=new Zingtouch.Region(target);
        self.state.enter+=1;
        //Performing drag Operations
        if(self.state.enter < 2){
            region.bind(target, 'rotate', function(e){
                var currentAngle = e.detail.distanceFromLast;
                if(currentAngle < 0){
                    change++;
                    if(change === 15){
                        change = 0;
                        //iterating through every active items
                        if(self.state.activePage === 'HomeScreen'){
                            if(self.state.activeItem === 'Songs'){
                                self.setState({
                                    activeItem : "Games"
                                })
                            }else if(self.state.activeItem === 'Games'){
                                self.setState({
                                    activeItem : "Settings"
                                })
                            }else if(self.state.activeItem === 'Settings'){
                                self.setState({
                                    activeItem : "Playlist"
                                })
                            }else if(self.state.activeItem === 'Playlist'){
                                self.setState({
                                    activeItem : "Songs"
                                })
                            }
                        }else if(self.state.activePage === 'Songs'){
                            if(self.state.activeItem === 'NowPlaying'){
                                self.setState({
                                    activeItem : "Artists"
                                })
                            }else if(self.state.activeItem === 'Artists'){
                                self.setState({
                                    activeItem : "NowPlaying"
                                })
                            }
                        }
                    }
                }else{
                    console.log(change);
                    change++;
                    if(change === 15){
                        console.log("change state");
                        change = 0;
                        if(self.state.activePage === 'HomeScreen'){
                            if(self.state.activeItem === 'Songs'){
                                self.setState({
                                    activeItem : "Playlist"
                                })
                            }else if(self.state.activeItem === 'Playlist'){
                                self.setState({
                                    activeItem : "Settings"
                                })
                            }else if(self.state.activeItem === 'Settings'){
                                self.setState({
                                    activeItem : "Games"
                                })
                            }else if(self.state.activeItem === 'Games'){
                                self.setState({
                                    activeItem : "Songs"
                                })
                            }
                        }else if(self.state.activePage === 'Songs'){
                            if(self.state.activeItem === 'NowPlaying'){
                                self.setState({
                                    activeItem : "Artist"
                                })
                            }else if(self.state.activeItem === 'Artist'){
                                self.setState({
                                    activeItem : "NowPlaying"
                                })
                            }
                        }
                    }
                }
                });
        }else{
            console.log("Not allowed to enter")
        }
    }

            changePage = () => {
                 //changing active pages
                if(this.state.activeItem === 'Songs'){
                    this.setState({
                        activeItem : 'NowPlaying',
                        activePage : this.state.activeItem
                    })
                  }else if(this.state.activeItem === 'NowPlaying'){
                    this.setState({
                        activeItem : 'NowPlaying',
                        activePage : 'NowPlaying'
                    })
                }else{
                    this.setState({
                        activeItem : this.state.activeItem,
                        activePage : this.state.activeItem
                    })
                }
                
                
            }
            changePageToHomeScreen = () => {

                if(this.state.activeItem === 'NowPlaying' || this.state.activeItem === 'Artist'){
                    this.setState({
                        activeItem : 'Songs',
                        activePage : 'HomeScreen'
                    })
                }else{
                    this.setState({
                        activeItem : this.state.activeItem,
                        activePage : 'HomeScreen'
                    })
                }
                
            }
            //playing and pausing videos
        pauseit=()=>{
            if(this.state.activePage === 'HomeScreen' || this.state.activePage === 'Songs' || this.state.activePage === 'NowPlaying' ){
                if(this.state.play === true){
                    this.state.audio.pause();
                    this.setState({
                        play : false
                    })
                }
            }
        }
        playit=()=>{
            if(this.state.activePage === 'HomeScreen' || this.state.activePage === 'Songs' || this.state.activePage === 'NowPlaying' ){
                if(this.state.play === false){
                    this.state.audio.play();
                    this.setState({
                        play : true
                    })
                }
            }
        }
        componentDidMount=()=>{
            let audio = document.getElementsByClassName("audio-element")[0];
            console.log(audio)
            this.setState({
                audio
            })
            console.log(this.state)
        }
    

    
 render(){
     return(
         <div className="wrapper reflection">
             <audio className="audio-element">
                        <source src={sound}></source>
                    </audio>
             <Screen activeItem={this.state.activeItem} activePage={this.state.activePage} audio={this.state.audio} />
             <div className="buttonCase">
             <div className="buttonBox" id="iconBox" onMouseOver={this.dragging}>
                 <span onClick={this.changePageToHomeScreen} style={{position:"absolute",top:"3%",left:"38%",color:"white",fontWeight:"bolder"}}>MENU</span>
                 <FaFastBackward style={styles.icon1}/> <FaFastForward style={styles.icon2} /> 
                <FaPause onClick={this.playit} style={styles.icon3}/> <FaPlay onClick={this.pauseit} style={styles.icon4} />
                <div className="center" onClick={this.changePage}></div>
             </div>
         </div>
         </div>
     );
 }
}

const styles={
    icon1:{
        position:"absolute",
        top:"45%",
        left:"10%",
        color:"white",
        fontSize:15
    },
    icon2:{
        position:"absolute",
        top:"45%",
        right:"10%",
        color:"white",
        fontSize:15
    },
    icon3:{
        position:"absolute",
        bottom:"10%",
        left:"53%",
        color:"white",
        fontSize:15
    },
    icon4:{
        position:"absolute",
        bottom:"10%",
        left:"43%",
        color:"white",
        fontSize:15
    }
   
}
export default Ipodbuttons;
