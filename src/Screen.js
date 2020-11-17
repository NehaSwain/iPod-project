import React from 'react';
import HomeScreen from './HomeScreen';
import Songs from './Songs';
import Games from './Games';
import Settings from './Settings';
import Playlist from './Playlist';
import NowPlaying from './NowPlaying';
import Artist from './Artist';

class Screen extends React.Component{
  //organising active pages and active element
    render(){
        return(
            <div style={styles.screen} id='screen-container'>
                {this.props.activePage==='HomeScreen'?<HomeScreen activeItem={this.props.activeItem}/> : null}
                {this.props.activePage==='Songs'?<Songs activeItem={this.props.activeItem}/> : null}
                {this.props.activePage==='Games'?<Games /> : null}
                {this.props.activePage==='Settings'?<Settings /> : null}
                {this.props.activePage==='Playlist'?<Playlist /> : null}
                {this.props.activePage==='NowPlaying'?<NowPlaying audio={this.props.audio} /> : null}
                {this.props.activePage==='Artist'?<Artist /> : null}
                
            </div>
        );
    }
    
}

const styles = {
    screen : {
        height : '45%',
        width : '85%',
         marginTop:'1rem',
        marginLeft:'1rem',
        marginRight:'1rem',
        borderRadius : '5%',
        backgroundColor : 'white',
        border : '1px solid black',
       
    }
}

export default Screen;