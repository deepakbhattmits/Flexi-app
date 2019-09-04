import React, { Component } from 'react';
import Flexi from '../components/Flexi';
import { flexiConfig } from '../config/flexiConfig';
class App extends Component {
    onFlexiSubmit = ( e ) => {
        e.preventDefault();
        alert('Click happened');
    }
    render() {
        return (
            <div className='ui container'>
                <div className='custom-div'>
                    <h1 className='ui header'> 
                        Welcome To The Flexi
                    </h1>
                </div>
                <div className="ui segment">
                    <div className="ui two column very relaxed grid">
                        <div className="column">
                            <Flexi 
                                onFlexiSubmit={ this.onFlexiSubmit }
                                config={flexiConfig}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};
export default App;
