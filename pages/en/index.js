/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react')

const CompLibrary = require('../../core/CompLibrary.js')

const MarkdownBlock = CompLibrary.MarkdownBlock /* Used to read markdown */
const Container = CompLibrary.Container
const GridBlock = CompLibrary.GridBlock

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props
    const {baseUrl, docsUrl} = siteConfig
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`
    const langPart = `${language ? `${language}/` : ''}`
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`
    const splashUrl = `${baseUrl}img/home-splash.png`

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <Background />
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    )

    const Background = props => (
      <div className="home-page-splash" style={{'background-image': `url('${splashUrl}')`}}/>
    )

    const ProjectTitle = () => (
      <div>
        <h2 className="projectTitle">
          {siteConfig.title}
          <small>{siteConfig.tagline}</small>
        </h2>
        <p style={{width: '50%', margin: 'auto'}}>
          Bractal is a platform that enables you to get your React Apps,
          off-the-ground so quickly with a high quality initial infrastructure
          and UI components.
        </p>
      </div>
    )

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    )

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    )

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href="https://badrit.github.io/bractal/">Try It Out</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    )
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props
    const {baseUrl} = siteConfig

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}
      >
        <GridBlock
          align={props.align || 'center'}
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    )

    const Projects = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}
      >
        <h2>Feature Callout</h2>
        <MarkdownBlock>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris
        </MarkdownBlock>
      </div>
    )

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content: 'Bractaaal is cooooooool',
            image: `${baseUrl}img/logo-icon.png`,
            imageAlign: 'right',
            title: 'Try it Out',
          },
        ]}
      </Block>
    )

    const Description = () => (
      <div className='description-block'>
        <Block background="light" align='left'>
          {[
            {
              content: `Built after the ideas/concepts of Atomic Design, by Brad Forrest.
                        Composed of a hierarchy of abstraction of Atoms, Molecules, Templates and Pages.
                        This pattern provides two main advantages for the consumer of Bractal,
                        first the consumer can choose the level of consumption,
                        like using only basic UI components, like buttons and labels,
                        or going up on more levels and consume whole features like search and filtering components.
                        The second main advantage, is the consistency across different components and ease of maintenance/customization`,
              image: `${baseUrl}img/modular-big.jpg`,
              imageAlign: 'left',
              title: 'Modular UI Kit',
            },
          ]}
        </Block>
        <Block background="light" align='left'>
          {[
            {
              content: `Bractal is based on GraphQL, and if you're going to use anything with a level higher than atoms,
                        i.e. search and filtering components.
                        We assume a certain conditions about how your GraphQL endpoints are written.
                        For example, pagination components, expects the GraphQL, to have a page,
                        limit and start whenever the API is expected to return a paginated API.
                        We're totally aware that this might be kinda limiting/irritating if the consumer has a different GraphQL Schema,
                        but we choose to stick to this opinionated approach to make it easier for those choosing to follow our approach till the end.
                        This assumption/approach might be less restricted in future, but we have no plans to do so at the moment.
                        `,
              image: `${baseUrl}img/conventions-big.png`,
              imageAlign: 'right',
              title: 'Conventions Based',
            },
          ]}
        </Block>
        <Block background="light" align='left'>
          {[
            {
              content: `This assumption/restriction might look weird for those who haven't decided,
                        to embrace GraphQL yet. But, we believe that for React Apps specifically, it would be
                        so weird not to do so. We find it extremely convenient/intuitive to depend on the Relay/Apollo stores,
                        to handle the global store. And we can't imagine our lives without this convenience.
                        Thus Bractal is too opinionanted in that regard and our Templates/Molecules assumes the existence,
                        of GraphQL endpoints with certain configurations. Also, Bractal provides a wide range of
                        GraphQL helpers`,
              image: `${baseUrl}img/graphql-big.png`,
              imageAlign: 'left',
              title: 'GraphQL Based',
            },
          ]}
        </Block>
      </div>
    )

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content: 'Talk about learning how to use this',
            image: `${baseUrl}img/logo-icon.png`,
            imageAlign: 'left',
            title: 'Learn How',
          },
        ]}
      </Block>
    )

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'Bractal offers a wide range of easily customizable main components used in most web apps. Plus an easy way to extend and add additional components/modules of your own.',
            image: `${baseUrl}img/modular-icon.png`,
            imageAlign: 'top',
            title: 'Modular UI Kit',
          },
          {
            content: "Building on the game changing RoR framework's idea, of Convention over configuration. Bractal's UI componentns and modules, enables the consumer to write minimal amount of code as long as he follows the conventions of the framework",
            image: `${baseUrl}img/conventions-icon.png`,
            imageAlign: 'top',
            title: 'Conventions Based',
          },
          {
            content: "We're pro-GraphQL, and Bractal is opinionated in that regard, we currently support only Relay, and in future would add support for Apollo as well.",
            image: `${baseUrl}img/graphql-icon.png`,
            imageAlign: 'top',
            title: 'GraphQL Based',
          },
        ]}
      </Block>
    )

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <Description />
          {/* <Projects /> */}
          {/* <LearnHow />
          <TryOut />
          <Showcase />*/}
        </div>
      </div>
    )
  }
}

module.exports = Index
