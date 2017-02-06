import React, {Component} from 'react';
import { Grid, Row } from 'react-bootstrap';
import MainContent from './mainContent';
import Title from './title';

class otherChoice extends Component {
    render () {
        return (
            <Grid className="content new-activities">
              
                    <Title/>
                    <MainContent/>             
            </Grid>
        )
    }
}

export default otherChoice;