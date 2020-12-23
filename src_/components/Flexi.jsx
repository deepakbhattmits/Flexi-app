import React, { useState } from 'react';
import PropTypes from 'prop-types'; 
const Flexi = props => {
    const [ name, setName ]= useState('');
    const [ state, setState ]= useState('');
    const onFlexiChange = ( e ) => {
        setName( e.target.value );
    }
    const renderFields = () => {
        return props.config && props.config.items && props.config.items.map( (el,i) => { 
            switch (el.type) {
                  case "TextField":
                    return (
                    <div className="field" key={ i }>
                        <label className="">{ el.label }</label>
                        <div className="ui input"> 
                            <input 
                                type='input'
                                name={el.name}
                                label={el.label}
                                value={name}
                                onChange={onFlexiChange}
                                
                            />  
                        </div>
                        </div>
                    );  
                  case "DropDown":
                    return (
                        
                     <div className="field" key={ i } >
                      <label className="">{ el.label }</label>
                        <select className='select' onChange={ ( e )=> { setState( e.target.value )}} value={ state }>
                        { el.values.map( (el,i) => { 
                            return ( 
                                    <option key={ i } value={ el } >
                                        { el }
                                    </option>
                                )
                            })
                        }    
                        </select>
                        </div>
                    );
                  default:
                    return null;
                }
        }); 
    }
    return (
        <form className="ui form " onSubmit={ props.onFlexiSubmit }>
            { renderFields() }
            <button className="ui button primary " type="submit">Save Data</button>
        </form>
    )
};
Flexi.propTypes = {
    config: PropTypes.object,
    items: PropTypes.shape({
            label: PropTypes.string,
            name: PropTypes.string,
            values: PropTypes.arrayOf(PropTypes.string)
            }) 
  };
export default Flexi;
