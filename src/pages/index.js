import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


const IndexPage = () => {
    return (

        <Layout pageTitle='IndexPage'>
            <p>I made this by following the tutorial</p>
            <StaticImage
                alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                src="../images/icon.png" />
        </Layout>)



}

export const Head = () => <title>Home Page</title>

export default IndexPage
