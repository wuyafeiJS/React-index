import React, {Component} from 'react';
import { Grid } from 'react-bootstrap';
import MainContent from './mainContent';
import Title from './title';

class otherChoice extends Component {
    render () {
        return (
            <Grid className="content">
                <Title/>
                <MainContent/> 
            </Grid>
        )
    }
}

export default otherChoice;