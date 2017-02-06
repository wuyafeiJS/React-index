import React, {Component} from 'react';
import FooterBanner from './footerBanner';
import RelatedLinks from './relatedLinks';
class footer extends Component {
    render () {
        return (
            <div className="mg-top-15">
                <FooterBanner/>
                <RelatedLinks/>
            </div>
        )
    }
}

export default footer;