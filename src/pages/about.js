import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout pageTitle='AboutPage'>
            <p>Hi there i am the proud creator of this site</p>
        </Layout>
    )
}

export const Head = () => <title>About Me</title>
export default AboutPage