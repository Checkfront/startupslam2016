// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#2196F3"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Using React JS for the first time
            </Heading>
            <Text textSize="1.5em" margin="20px 0px 0px" bold>
              This workshop will focus on basic concepts of using React and what you need to know before you start.
            </Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="Here we'll talk about why react is awesome">
            
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              What are the benefits of react?
            </Heading>
            <List>
              <Appear><ListItem textColor="primary" textFont="primary">Imperative vs Declarative</ListItem></Appear>
              <Appear><ListItem textColor="primary" textFont="primary">Component Composition</ListItem></Appear>
              <Appear><ListItem textColor="primary" textFont="primary">Not another templating language</ListItem></Appear>
              <Appear><ListItem textColor="primary" textFont="primary">Web Components combining html, css, and js</ListItem></Appear>
              
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="white" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Layout>
              <Fill style={{marginRight: 60}}>
                <Heading size={2} caps fit textColor='primary' textFont='primary'>
                  Imperative
                </Heading>
                <CodePane
                  lang="js"
                  source={require("raw!../assets/imperative.example")}
                  margin="20px auto"
                />
              </Fill>
              <Fill >
                <Heading size={2} caps fit textColor='primary' textFont='primary'>
                  Declarative
                </Heading>
                <CodePane
                  lang="jsx"
                  source={require("raw!../assets/declarative.example")}
                  margin="20px auto"
                />
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Full Width
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Background Imagery
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Component Composition</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading>
              
            </Heading>
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
