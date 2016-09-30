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
  markdown: require("../assets/markdown.png"),
  categoryPage: require("../assets/CategoryPage.png"),
  categoryComponents: require("../assets/CategoryPageComponents.png"),
  facebookPage: require("../assets/CheckfrontFacebook.png"),
  facebookComponents: require("../assets/CheckfrontFacebookComponents.png"),
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
          <Slide bgColor="white" transition={["fade"]}>
            <Heading size={1} caps fit textColor="primary">
              Component Composition
            </Heading>
            <Image
              src={images.facebookPage}
              display='block'
              height='550px'
            />
          </Slide>
          <Slide bgColor="black" transition={["fade"]}>
            <Heading size={1} caps fit textColor="tertiary">
              Component Composition
            </Heading>
            <Image
              src={images.facebookComponents}
              display='block'
              height='550px'
            />
          </Slide>
          <Slide bgColor="white" transition={["fade"]}>
            <Image
              src={images.categoryPage}
              display='block'
              height='700px'
            />
          </Slide>
          <Slide bgColor="black" transition={["fade"]}>
            <Image
              src={images.categoryComponents}
              display='block'
              height='700px'
            />
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Heading caps fit textColor="primary">
              Not another templating language
            </Heading>
            <Markdown>
              **It's just a view library.**
            </Markdown>
            <Markdown>
              React is not another MVC framework, or any other kind of framework.
              It's just a library for rendering your views.
              React is just the 'V' in  MVC.
            </Markdown>
          </Slide>
          <Slide transition={["slide"]}>
            <Layout>
              <Fill>
                <Heading size={2} caps fit textColor='tertiary' textFont='primary'>
                  Web Components combining html, css, and js
                </Heading>
                <CodePane
                  lang="jsx"
                  source={require("raw!../assets/Category.example")}
                  margin="20px auto"
                />
              </Fill>
            </Layout>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
