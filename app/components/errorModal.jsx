var  React = require('reast');

var ErrorModal = React.createClass({
    
    render:function(){
        return(
            <div id="error-modal" className="reveal tiny text-center" data-reveal>
                <h4>Some Title </h4>
                <p>Our error message!</p>
                <p>
                    <button className="button hollow" data-close>Okey</button>
                </p>
                
            </div>
        );
    }
});

module.exports = ErrorModal;