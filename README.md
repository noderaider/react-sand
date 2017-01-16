[![NPM](https://raw.githubusercontent.com/noderaider/react-sand/master/public/png/react-sand.png)](https://npmjs.com/packages/react-sand)

**Demo your components abilities. A simple component that wraps your components and gives component inputs to adjust their props.**

**:exclamation: Demo at [gridiron.js.org](https://gridiron.js.org) (each component is wrapped with <Sand /> to allow playing with it)**

[![Build Status](https://travis-ci.org/noderaider/react-sand.svg?branch=master)](https://travis-ci.org/noderaider/react-sand)
[![codecov](https://codecov.io/gh/noderaider/react-sand/branch/master/graph/badge.svg)](https://codecov.io/gh/noderaider/react-sand)

[![NPM](https://nodei.co/npm/react-sand.png?stars=true&downloads=true)](https://nodei.co/npm/react-sand/)

___

## Usage

```jsx
import React, { Component, PropTypes } from 'react'
import sand from 'react-sand'

const Sand = sand({ React })

class FancyComponent extends Component {
  static propTypes = (
    { stringProp: PropTypes.string
    , numberProp: PropTypes.number
    , comboProp: PropTypes.oneOf([ 'foo', 'bar' ])
    }
  );
  render() {
    // RENDER SOMETHING
  }
}

export default props => (
  <Sand Box={FancyComponent}>
    <span>Some children</span>
  </Sand>
)
```

## Output

**In the example above you will see the FancyComponent rendered within a sandbox containing controls to alter its props in the browser.**

<sup>Note: Under active development. This is not done yet. Pull requests welcome!</sup>
