import React, { Component } from 'react'
import './Button.css'

class Button extends Component {

    

//     jQuery(document).on('click','.next',function(){
//         jQuery('.inner-form-heading').css("display", "none");

// });
    render(){
        
        return (

            <>
    <button id="mystyle" className="next" onClick={this.clickhandlesna} >Next</button>
            </>
        )
    }
  
}

export default Button