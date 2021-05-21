import React from 'react'
import '../css/styles.css'
import '../css/costum.css'

const MyApp = ({ Component, pageProps }) => {

    return (
        <div>
            <Component {...pageProps} />
        </div>
    )

}

export default MyApp