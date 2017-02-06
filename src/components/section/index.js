import React, {Component} from 'react';
import Slider from './slider';
import IndexSearch from './indexSearch';
import BasicService from './basicService';
import Introduces from './introduces';
import OtherChoice from './otherChoice';
import NewActivity from './newActivity';

class Section extends Component {
    render () {
        return (
            <div className="section">
               <Slider/> 
               <IndexSearch/>
               <BasicService/>
               <Introduces/>
               <OtherChoice/>
               <NewActivity/>
            </div>
        )
    }
}

export default Section;