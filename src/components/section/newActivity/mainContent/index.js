import React from 'react';
import ReactDOM from 'react-dom';

//图片
const ActiviFigure = React.createClass({
    render: function () {
        return (
            <li>
                <a href="#">
                    <img className="img-responsive" src={this.props.content.src} alt=""/>
                    <p className="descrip-text">{this.props.content.desc}</p>
                </a>
            </li>
            
        )
    }
})

var mainContent = React.createClass ({
    data: [
        {src: require('images/img_05.jpg'), desc: '庆祝.top域名上线两周年'},
        {src: require('images/img_06.jpg'), desc: '庆祝.top域名上线两周年'},
        {src: require('images/img_07.jpg'), desc: '庆祝.top域名上线两周年'},
        {src: require('images/img_08.jpg'), desc: '庆祝.top域名上线两周年'},
        {src: require('images/img_05.jpg'), desc: '庆祝.top域名上线两周年'},
        {src: require('images/img_06.jpg'), desc: '庆祝.top域名上线两周年'},
        {src: require('images/img_08.jpg'), desc: '庆祝.top域名上线两周年'},
        {src: require('images/img_08.jpg'), desc: '庆祝.top域名上线两周年'}
    ],
    
    getInitialState: function () {
        return {left: 0,step: this.data.length - 4}
    },
    // componentDidMount: function() {
        
    //     var liDOM = ReactDOM.findDOMNode(this.refs.activiFigure_0),
    //     liWidth = liDOM.scrollWidth,
    //     ulWidth = (liWidth + 14)* this.data.length;
    //     this.constant.width = ulWidth;
    //     console.log(this.constant,liDOM.scrollWidth)
    // },
    handleClickLeft: function() {
        var left =this.state.left + 277;     
        if(this.state.step < (this.data.length - 4)){      
            this.setState({left: left});
            this.setState({step: (this.state.step + 1)});
        }
        console.log(this.state.step)
    },
    handleClickRight: function () {
        var left =this.state.left - 277;
        
        if(this.state.step > 0){
            this.setState({left: left})
            this.setState({step: (this.state.step - 1)});
            
        }
        console.log(this.state.step)
        
    },
    render: function () {
        
        var activiFigures = [];
        this.data.map(function(val, index) {
            activiFigures.push(<ActiviFigure key={index} ref={'activiFigure_'+index} content={val}/>)
        });
        var ulWidth = (263 + 14)* this.data.length;
        var ulLeft=0;
        return (
            <div>
               <div className="arrow-left" onClick={this.handleClickLeft}></div>
               <div className="arrow-right" onClick={this.handleClickRight}></div>
               <div className="clearfix" style={{backgroundColor: '#f9f9f9'}}>
                <div className="activity-list">
                    <ul className="list-unstyled clearfix" style={{width: ulWidth+'px',left: this.state.left+'px'}}>
                        {activiFigures}
                    </ul>
                </div>
            </div>
            </div>
        )
    }
})


export default mainContent;