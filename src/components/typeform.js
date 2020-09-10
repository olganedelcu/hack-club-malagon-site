import React, { Component } from 'react'
import * as typeformEmbed from '@typeform/embed'
import buttonStyle from './button.module.scss'

class Series extends Component {
    componentDidMount(){
            const popup1 = typeformEmbed.makePopup(
                'https://form.typeform.com/to/FCeSE83W',
                {
                    mode: 'popup',
                    autoClose: 3000,
                    hideHeaders: true,
                    onSubmit: function() {
                    console.log('Typeform successfully submitted')
                    }
                }
                )
                document.getElementById('bt-popup').addEventListener('click',function()
                {
                    popup1.open();
                });
    }
    render() {
        return(
            <div >
                <button id="bt-popup" className={buttonStyle.button}>Be part of Hack Club Malagón</button>
            </div>
        )
    }
}


export default Series;