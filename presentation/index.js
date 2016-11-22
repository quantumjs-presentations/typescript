// Import React
import React from "react";
import mapValues from "lodash/mapValues";

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
  List,
  ListItem,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Table,
  TableRow,
  TableHeaderItem,
  TableItem,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./custom.css");

const slideTransition = ["slide"];
const images = mapValues({
  logo: require("../images/qi.png"),
  usageStats: require("../images/usage.png"),
  ts: require("../images/ts.png"),
}, v => v.replace('/', ''));

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "black",
  tertiary: "#09b5c4",
  quartenary: "rgba(255, 219, 169, 0.43)"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={slideTransition} transitionDuration={500}>
          <Slide transition={slideTransition} bgColor="secondary">
            <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
              TypeScript in 2016
            </Heading>
            <Image src={images.ts} margin="40px auto" height="324px"/>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1}>
              Typescript interest <Link
              href="https://www.google.com/trends/explore?geo=GB&q=TypeScript&hl=en-US&tz=480&s=1">over time</Link>
            </Heading>
            <Image src={images.usageStats} margin="40px auto" height="324px"/>
          </Slide>
          <Slide transition={slideTransition}>
            <Appear fid="1">
              <Heading size={2} caps fit>
                Superset of JavaScript
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={2} caps fit textColor="tertiary">
                Not a clean break, like Dart
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={2} caps fit>
                Keeps syntax of Js vs Coffeescript
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={2} caps fit textColor="tertiary">
                Optional Types
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={2} caps fit textColor="tertiary">
                <Link href="http://kangax.github.io/compat-table/es6/">Ecmascript compatibility</Link>
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={slideTransition} bgColor="black">
            <BlockQuote>
              <Quote>TypeScript catches bugs you usually discover in the browser</Quote>
            </BlockQuote>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading caps fit size={1}>
              Updates over time
            </Heading>
            <Layout>
              <Table>
                <thead>
                <TableRow>
                  <TableHeaderItem>V1.1</TableHeaderItem>
                  <TableHeaderItem>V1.3</TableHeaderItem>
                  <TableHeaderItem>V1.4</TableHeaderItem>
                </TableRow>
                </thead>
                <tbody>
                <TableRow>
                  <TableItem>4x faster compiler</TableItem>
                  <TableItem>Tuple types</TableItem>
                  <TableItem>Type Guards</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem></TableItem>
                  <TableItem>Protected</TableItem>
                  <TableItem>Union Types</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem></TableItem>
                  <TableItem></TableItem>
                  <TableItem>Stricter Generics</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem></TableItem>
                  <TableItem></TableItem>
                  <TableItem>let, const</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem></TableItem>
                  <TableItem></TableItem>
                  <TableItem>Template strings</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem></TableItem>
                  <TableItem></TableItem>
                  <TableItem>const enums</TableItem>
                </TableRow>
                </tbody>
              </Table>
            </Layout>
          </Slide>
          <Slide transition={slideTransition}>
            <Heading caps fit size={1}>
              More updates
            </Heading>
            <Layout>
              <Table>
                <thead>
                <TableRow>
                  <TableHeaderItem>V1.5</TableHeaderItem>
                  <TableHeaderItem>V1.6</TableHeaderItem>
                  <TableHeaderItem>V2.1</TableHeaderItem>
                </TableRow>
                </thead>
                <tbody>
                <TableRow>
                  <TableItem>ES6 Modules</TableItem>
                  <TableItem>JSX support</TableItem>
                  <TableItem>Async anywhere</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>TSConfig</TableItem>
                  <TableItem>Intersection types</TableItem>
                  <TableItem>Configuration inheritance</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Destructuring</TableItem>
                  <TableItem>Local type declarations</TableItem>
                  <TableItem>Literal types Inference</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>namespace keyword</TableItem>
                  <TableItem>Class expressions </TableItem>
                  <TableItem></TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>for..of</TableItem>
                  <TableItem></TableItem>

                  <TableItem></TableItem>

                  <TableItem></TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Decorators</TableItem>
                  <TableItem></TableItem>

                  <TableItem></TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Computed properties</TableItem>
                  <TableItem></TableItem>

                  <TableItem></TableItem>
                </TableRow>
                </tbody>
              </Table>
            </Layout>
          </Slide>


          <Slide transition={slideTransition}>
            <Heading size={4}>
              Minimal Demo
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/somets.ts")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={4}>
              Gotchas
            </Heading>
            <Appear><ListItem>To use <code>require(..</code> you need node types: </ListItem></Appear>
            <Appear><ListItem>Run <code>npm install @types/node --save-dev</code></ListItem></Appear>
          </Slide>
          <Slide transition={slideTransition}>
            <Link href="https://www.youtube.com/channel/UC0XiDgtbFR8ohoGlstuFgGQ">
              <Heading size={1}>
                Quantum Information
              </Heading>
            </Link>
            <Image src={images.logo} margin="0px auto 40px" height="524px"/>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading size={1} caps fit textColor="primary">
              Made in London by
            </Heading>
            <Link href="https://twitter.com/bebraw">
              <Heading caps fit size={2} textColor="secondary">
                Nikos Katsikanis
              </Heading>
            </Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
