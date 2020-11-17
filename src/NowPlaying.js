import React from 'react';
import sound from './assets/music/PastLife.mp3'

class NowPlaying extends React.Component{
    
    constructor(){
        super();
        this.state = {
            isMounted : true
        }
    }

   
    componentDidMount(){
        let self=this;
        self.props.audio.play();
        self.props.audio.addEventListener("timeupdate",function(){
                if(self.state.isMounted){
                    var time =self.props.audio.currentTime/self.props.audio.duration;
                    self.updateTime();
                    var mins = Math.floor(self.props.audio.currentTime / 60);// current time of audio
                    if (mins < 10) {
                    mins = '0' + String(mins);
                    }
                    var secs = Math.floor(self.props.audio.currentTime % 60);
                    if (secs < 10) {
                        secs = '0' + String(secs);
                      }
                    document.getElementById("currentTimer").innerText = mins + ':' + secs ; 
                    let bar = document.getElementById("bar");// the time bar for audio
                    console.log(bar);
                    if(bar !== null){
                        bar.style.width = time*100 + "%";
                    } 
                    var minutes = parseInt(self.props.audio.duration / 60, 10);// duration for audio
                    var seconds = parseInt(self.props.audio.duration % 60);
                    document.getElementById('durationTimer').innerText = minutes + ':' + seconds +'0' ;
                    
                }
            })
        
    }


    updateTime = () =>{
       
        this.setState({
            audio : this.props.audio
        })
    }
    

    componentWillUnmount(){
        this.state.isMounted = false;
    }

    render(){
          return(
            <div style={styles.nowPlayingContainer}>
                <div style={styles.titleBar}>
                <p style={styles.title}>Now Playing</p>
                        <img style={styles.battery} src="https://image.flaticon.com/icons/svg/3103/3103446.svg"></img>
                </div>
                <div style={styles.songTitle}>
                    <img style={styles.poster} src="https://i.pinimg.com/originals/b1/c9/0e/b1c90eff801ee71c776dfcf7330eef7e.jpg"></img>
                    <div style={styles.subInfo}>   
                     <h3 style={{marginBottom:'0.5rem'}}>Past Life</h3>
                        <p style={{marginBottom:'0',fontSize:'0.9rem'}}>Trevor Daniel</p>
                        <p style={{marginBottom:'0',fontSize:'0.9rem'}}>Selena Gomez</p>
                                 </div>
                    
                </div>

                <div style={styles.statusBar}>
                    <p style={styles.current} id="currentTimer"></p>
                    <div style={styles.barContainer}>
                        <div style={styles.bar} id='bar'></div>
                    </div>
                    <p style={styles.duration} id="durationTimer" ></p>
                </div>
                
            </div>
        );
    }
    
}

const styles = {
    nowPlayingContainer : {
        height : '100%',
        width : '100%',
        display : 'flex',
        flexDirection : 'column',
    },
    poster : {
        height : '60%',
        width : '40%',
        alignSelf : 'center',
        marginTop:5
    },
    songTitle: {
        height : '70%',
        width : '100%',
        display : 'flex',
        justifyContent : 'space-evenly'
    },
    statusBar : {
        width : '100%',
        height : '30%',
        display : 'flex',
        flexWrap : 'wrap',
        justifyContent : 'space-evenly'
    },
    subInfo : {
        alignSelf : 'center',
        marginTop:'-10px'
    },
    barContainer : {
        width:'60%',
        height:'5%',
        border : '1px solid grey',
        cursor: 'pointer',
        alignSelf: 'center',
        display: 'flex',
        borderRadius:'20%',
    },
    bar : {
        height: '90%',
        borderRadius:'20%',
        backgroundColor: 'green',
    },
    current : {
        margin : '0',
        fontSize:'0.75rem',
        alignSelf : 'center'
    },
    duration : {
        margin : '0',
        fontSize:'0.75rem',
        alignSelf : 'center'
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
        justifyContent : 'space-between'

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
    }
}


export default NowPlaying;
