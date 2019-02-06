/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 Mohamed is Coool file in the root directory of this source tree.
 */

const React = require('react')

const CompLibrary = require('../../core/CompLibrary.js')

const Container = CompLibrary.Container
const GridBlock = CompLibrary.GridBlock
const MarkdownBlock = CompLibrary.MarkdownBlock /* Used to read markdown */

function Mohamed(props) {
  const {config: siteConfig, language = ''} = props
  const {baseUrl, docsUrl} = siteConfig
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`
  const langPart = `${language ? `${language}/` : ''}`
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>We would love to see the following ideas turn into reality</h1>
          </header>
          {/* <GridBlock contents={supportLinks} layout="threeColumn" /> */}
          <ol>
            <li><b>Apollo Forms : </b> Building Formik based forms, with tight integration with Apollo, and with ideas inspired by TcombForms. We love Formik, but when it comes to complex forms, one has to do so much boilerplate & repetitive work. You have to define the following : <p>1. GraphQL Mutation, 2. Form validation Schema, 3. Form fields definitions, 4. Form fields layout</p>. While we believe that you only have to do two of these, and the rest could be inferred : <p>1. Define the GraphQL Mutation, 2. Define the form fields layout.</p></li>
            <li><b>VisQL : </b> In today's world, there are two separate islands, and we would love to see them bridged. The first island is the charts tools, like D3, HiCharts, Plottly...etc, and the second is the DB queries standards, mainly SQL. But there is a big gap between both. What if you want your backend/server to return data that's useful for visualization using any visualization tool. Currently there is no such standard/tool, and you would have to build your own endpoints for every single chart. </li>
            <li><b>OnDemand As a Platform : </b>So, what if you want to build the next Qubole, EMR....etc. Where there is easy to start with Usage limits, Freemium, accounting...etc. Currently you've no option but doing everything yourself, what we would love to see in the world, is an opensource tool or standard that at least gets you up to speed quickly.</li>
            <li><b>Open Dashboard Standard : </b> So, there are a lot of charting tools, but there are no well established Dashboard design/layout standard across different technologies. But each few developers have there own standard or way of doing things. And sharing the dashboards between them is near impossible without considerable amount of coding.</li>
          </ol>
        </div>
        <div className="post">
          <header className="postHeader">
            <h1>Google Summer of Code</h1>
          </header>
          This year we've applied to Google Summer of Code as a mentoring organization,
          We would love to see proposals after the lines of the above ideas.
          <br/>
          If you're interested kindly send your proposal to the following email :
          <br/>
          mostafa [DOT] elganainy [AT] incorta.com
          <br/>
          <br/>
          Including your name, team and working experience. 
          <br/>
          And mention clearly which idea/direction you're interested in.
        </div>
      </Container>
    </div>
  )
}

module.exports = Mohamed
