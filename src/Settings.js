import React from 'react';

class Settings extends React.Component{
    
    render(){
        return(
            <div style={styles.settings} >
                <div style={styles.titleBar}>
                <p style={styles.title}>Settings</p>
                        <img style={styles.battery} src="https://image.flaticon.com/icons/svg/3103/3103446.svg"></img>
                </div>
                <div style={{width : '100%' , height : '90%',display:'flex' , flexDirection : 'row' , justifyContent: 'center'}}>
                    <img style={styles.image} src="https://image.flaticon.com/icons/svg/929/929435.svg" />
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
        flexWrap : 'wrap'
    },
    image : {
        width:'65%',
        height:'65%',
        alignSelf : 'center'
    },
    titleBar : {
        position:'relative',
        height:'5%',
        width:'100%',
        borderRadius:'12px 12px 0 0',
        backgroundImage: 'linear-gradient(0deg, #777, white)',
        borderBottom: '1px solid black',
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
        right:2,
        width : '20px',
        height: '20px',
    }
}

export default Settings;