import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'


const ContactMe = () => {
    return (
        <div>
            <Layout>
                <Head title="Contact" />
                <h1>Don't be shy and contact us!!</h1>
                <p>Complete the form to be a part of it!</p>
                document.write( '<a class=\"typeform-share button\" href=\"https://form.typeform.com/to/FCeSE83W\" data-mode=\"popup\" style=\"display:inline-block;text-decoration:none;background-color:#FF2B13;color:white;cursor:pointer;font-family:Helvetica,Arial,sans-serif;font-size:22px;line-height:55px;text-align:center;margin:0;height:55px;padding:0px 36px;border-radius:27px;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:bold;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;\" target=\"_blank\">Be a part of HC Malagón! </a> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id=\"typef_orm_share\", b=\"https://embed.typeform.com/\"; if(!gi.call(d,id)){ js=ce.call(d,\"script\"); js.id=id; js.src=b+\"embed.js\"; q=gt.call(d,\"script\")[0]; q.parentNode.insertBefore(js,q) } })() </script>' );

            </Layout>
        </div>
    )
}

export default ContactMe