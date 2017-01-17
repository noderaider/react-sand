import invariant from 'invariant'

function serializePropValue (propValue, propValueType) {
  switch(propValueType) {
    case 'object':
      return JSON.stringify(propValue, null, 2)
    case 'function':
      return eval(propValue)
    default:
      return propValue
  }
}

function deserializePropValue (propValue, propValueType) {
  switch(propValueType) {
    case 'object':
      return JSON.parse(propValue)
    default:
      return propValue
  }
}

export default function sand ({ React } = {}) {
  invariant(React, 'React is a required dependency of react-sand (hand to factory function).')
  const { Component, PropTypes } = React

  const Prop = ({ propName
                , propValue
                , onChange
                , propValueType = typeof propValue
                , serializedValue = serializePropValue(propValue, propValueType)
                }) => {

    return (
      <label
        style={
          { display: 'flex'
          , flexFlow: 'column nowrap'
          }
        }
      >
        {propName} &lt;{propValueType}&gt;
        <textarea
          onChange={(e) => {
            try {
              onChange(deserializePropValue(e.target.value, propValueType))
            } catch(err) {
            }
          }}
          defaultValue={serializedValue}
        />
      </label>
    )
  }

  return class Sand extends Component {
    constructor(props) {
      super(props)
      this.state = {}
    }
    render() {
      const { Box, ...props } = this.props
      const { displayName, propTypes, defaultProps } = Box
      const mergedProps = { ...defaultProps, ...props }
      if(!propTypes)
        return <span>Add propTypes to the component.</span>
      return (
        <div
          style={
            { display: 'flex'
            , flexFlow: 'column nowrap'
            }
          }
        >
          <h4>{displayName} Props</h4>
          <div
            style={
              { display: 'flex'
              , flexFlow: 'column nowrap'
              , fontSize: '0.9em'
              }
            }
          >
            {Object.keys(propTypes).map((propName, i) => (
              <Prop
                key={i}
                propName={propName}
                propValue={mergedProps[propName]}
                onChange={
                  (value) => this.setState({ [propName]: value }, () => console.info(`${propName} updated!`))
                }
              />
            ))}
          </div>
          <div
            style={
              { display: 'flex'
              }
            }
          >
            <h4>Children Type: {typeof mergedProps.children === 'function' ? 'Render Callback' : 'Standard'}</h4>
          </div>
          <Box {...props} />
        </div>
      )
    }
  }
}
