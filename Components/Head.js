import Head from 'next/head'
import PropTypes from 'prop-types'
function head({title}){
    return(
        <div>
            <Head>  
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
        </div>
    );
} 
export default head;