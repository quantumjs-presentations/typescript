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
  basicReactTypescript: require("../images/basic-react-typescript.png"),
  basicAngular: require("../images/basic-angular.png"),
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
              TypeScript in 2017
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
                  <TableHeaderItem>V1.7</TableHeaderItem>
                </TableRow>
                </thead>
                <tbody>
                <TableRow>
                  <TableItem>ES6 Modules</TableItem>
                  <TableItem>JSX support</TableItem>
                  <TableItem>async/await -> es6 target</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>TSConfig</TableItem>
                  <TableItem>Intersection types</TableItem>
                  <TableItem>this-typing</TableItem> {/*resolved to correct type, not just base class*/}
                </TableRow>
                <TableRow>
                  <TableItem>Destructuring</TableItem>
                  <TableItem>Local type declarations</TableItem>
                  <TableItem>ES7 ** operator</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>namespace keyword</TableItem>
                  <TableItem>Class expressions </TableItem>
                  <TableItem>Improved checking for destructuring</TableItem> {/*https://github.com/Microsoft/TypeScript/wiki/What%27s-new-in-TypeScript#improved-checking-for-destructuring-object-literal*/}
                </TableRow>
                <TableRow>
                  <TableItem>for..of</TableItem>
                  <TableItem></TableItem>
                  <TableItem>Decorator support for ES3</TableItem>
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
            <Heading caps fit size={1}>
              More updates
            </Heading>
            <Layout>
              <Table>
                <thead>
                <TableRow>
                  <TableHeaderItem>V1.8</TableHeaderItem>
                    <TableHeaderItem>V1.8 (cont)</TableHeaderItem>
                  <TableHeaderItem>V1.8 (cont)</TableHeaderItem>
                </TableRow>
                </thead>
                <tbody>
                <TableRow>
                  <TableItem>Type parameters as constraints</TableItem>{/*https://github.com/Microsoft/TypeScript/wiki/What%27s-new-in-TypeScript#type-parameters-as-constraints*/}
                  <TableItem>Simplified props type mgt React</TableItem>
                  <TableItem>this-based type guards</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Control flow analysis</TableItem>{/*https://github.com/Microsoft/TypeScript/wiki/What%27s-new-in-TypeScript#control-flow-analysis-errors*/}
                  <TableItem>Augmenting module scope</TableItem>
                  <TableItem>Official TypeScript NuGet package</TableItem> {/*resolved to correct type, not just base class*/}
                </TableRow>
                <TableRow>
                  <TableItem>Stateless Fn Comps React</TableItem>
                  <TableItem>amd + commons concat with --outFile</TableItem>
                  <TableItem>Prettier error messages</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Class expressions </TableItem>
                  <TableItem>Modules emitted with "use strict"</TableItem>
                  <TableItem>Colorization of JSX code in VS 2015</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>String literal types</TableItem>
                  <TableItem>Including .js --allowJs</TableItem>
                  <TableItem>(-p) flag any file path</TableItem> {/*https://github.com/Microsoft/TypeScript/wiki/What%27s-new-in-TypeScript#improved-checking-for-destructuring-object-literal*/}
                </TableRow>
                <TableRow>
                  <TableItem>Improved un/int type inference</TableItem>
                  <TableItem>Custom JSX factories</TableItem>
                  <TableItem> comments in tsconfig.json</TableItem>
                </TableRow>
                </tbody>
              </Table>
            </Layout>
          </Slide>


          <Slide transition={slideTransition}>
            <Heading size={4}>
              Example of typing
            </Heading>
            <p>I use this in my space invaders game</p>
            <CodePane
              lang="js"
              source={require("raw!../examples/somets.ts")}
              margin="20px auto"
            />
          </Slide>


          {/*REACT SECTION*/}

          <Slide transition={slideTransition}>
            <Heading size={4}>
              Typescript with React
            </Heading>
            <h3>minimal project setup part 1</h3>
            <CodePane
              lang="bash"
              source={require("raw!../examples/setup.sh")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={slideTransition}>
            <h3>minimal project setup part 2</h3>
            <p>tsconfig.json</p>
            <CodePane
              lang="js"
              source={require("raw!../examples/tsconfig.json")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={slideTransition}>
            <h3>Simple tsx component</h3>
            <CodePane
              lang="typescript"
              source={require("raw!../examples/Hello.tsx")}
              margin="20px auto"
            />
            or
            <CodePane
              lang="typescript"
              source={require("raw!../examples/HelloClassic.tsx")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={slideTransition}>
            <heading>End result:</heading>
            <Image src={images.basicReactTypescript} margin="0px auto 40px" width="800px"/>
          </Slide>


          {/*angular SECTION*/}

          <Slide transition={slideTransition}>
            <Heading size={4}>
              Typescript with Angular 2
            </Heading>
            <h3>Creating an app with angular-cli</h3>
            <CodePane
              lang="bash"
              source={require("raw!../examples/angular/setup.sh")}
              margin="20px auto"
            />
            <p>This will create a bunch of files (or update existing project) and then run  <code>npm i</code></p>
          </Slide>
          <Slide transition={slideTransition}>
            <h3>Basic component</h3>
            <p>app.component.ts</p>
            <CodePane
              lang="typescript"
              source={require("raw!../examples/angular/app.component.ts")}
              margin="20px auto"
            />
            <p>app.component.html</p>
            <CodePane
              lang="html"
              source={require("raw!../examples/angular/app.component.html")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={slideTransition}>
            <h3>Using the component in an Angular2 app (@NgModule)</h3>
            <CodePane
              lang="typescript"
              source={require("raw!../examples/angular/app.module.ts")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={slideTransition}>
            <h3>Bootstrapping the module</h3>
            <CodePane
              lang="typescript"
              source={require("raw!../examples/angular/main.ts")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={slideTransition}>
            <h3>angular-cli ties all this together</h3>
            <CodePane
              lang="js"
              source={require("raw!../examples/angular/angular-cli.json")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={slideTransition}>
            <heading>End result:</heading>
            <Image src={images.basicAngular} margin="0px auto 40px" width="800px"/>
          </Slide>


          <Slide transition={slideTransition}>
            <Heading size={4}>
              Vanilla TypeScript
            </Heading>
            <h3>Creating a cross framework component from scratch</h3>
            <CodePane
              lang="bash"
              source={require("raw!../examples/IComponent.ts")}
              margin="20px auto"
            />
            <p><a href="https://github.com/quantumjs/vanilla-typescript">https://github.com/quantumjs/vanilla-typescript</a> </p>
            <h4>Is this a framework?</h4>
            <p>Nope, this is just to provide some little level of common sense to the wild west of vanillajs.</p>
          </Slide>
          <Slide transition={slideTransition}>
            <Heading size={4}>
              <a href="https://www.npmjs.com/package/solar-popup">Solar-popup</a>
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../examples/SolarPopup.ts")}
              margin="20px auto"
            />
          </Slide>


          <Slide transition={slideTransition}>
            <h3>Basic component</h3>
            <p>app.component.ts</p>
            <CodePane
              lang="typescript"
              source={require("raw!../examples/angular/app.component.ts")}
              margin="20px auto"
            />
            <p>app.component.html</p>
            <CodePane
              lang="html"
              source={require("raw!../examples/angular/app.component.html")}
              margin="20px auto"
            />
          </Slide>


          <Slide transition={slideTransition}>
            <Link href="https://www.youtube.com/channel/UC0XiDgtbFR8ohoGlstuFgGQ">
              <Heading size={4}>
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
