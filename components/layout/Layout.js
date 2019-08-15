import Head from 'next/head';

import Header from './Header';
import Navigation from './Navigation';

export default function Layout (props) {
    return (
        <div className="wrapper">
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600&display=swap" rel="stylesheet" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css" rel="stylesheet" />
                <link href="/static/css/style.css" rel="stylesheet" />
            </Head>

            <Header />
            
            <div className="container">
                {props.children}
            </div>

            <Navigation />
        </div>
    );
}