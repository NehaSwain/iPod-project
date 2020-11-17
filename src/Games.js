import React from 'react';

class Games extends React.Component{
    
    render(){
        return(
            <div style={styles.settings} >
                 <div style={styles.titleBar}>
                    <p style={styles.title}>Games</p>
                    <img style={styles.battery} src="https://image.flaticon.com/icons/svg/3103/3103446.svg"></img>
                    </div>
                <div style={{width : '100%' , height : '90%'}}>
                    <img style={styles.vortex} src= "https://thumbs.gfycat.com/ColorfulHardtofindGrayreefshark-size_restricted.gif" />
                </div>
            </div>
        );
    }
    
}

const styles = {
    settings : {
        width : '100%',
        height : '100%',
        display : 'flex',
        justifyContent : 'center',
        flexWrap:'wrap'
          },
    vortex : {
        width:'100%',
        height:'100%',
        alignSelf : 'center',
        borderRadius:'0 0 5% 5%'
    },
    titleBar : {
        position:'relative',
        height:'5%',
        width:'100%',
        borderRadius:'12px 12px 0 0',
        backgroundImage: 'linear-gradient(0deg, #777, white)',
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


export default Games;