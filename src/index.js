import invariant from 'invariant'

export default function sand ({ React } = {}) {
  invariant(React, 'React is a required dependency of react-sand (hand to factory function).')

  return class Sand extends Component {
    constructor(props) {
      super(props)
      this.state = {}
    }
    render({ Box, children, ...props }) {
      if(Box.propTypes)
        return <pre>{JSON.stringify(Object.keys(Box), null, 2)}</pre>
        //return <span>Add propTypes to the component.</span>
      return (
        <div>
          {Object.entries(Box.propTypes).map(([ propName, propType ], i) => {
            return (
              <label key={i} style={{ display: 'flex', flexFlow: 'column nowrap' }}>
                {propName}:
                <input
                  type="number"
                  onChange={(e) => {
                    try {
                      this.setState({ [propName]: parseInt(e.target.value) }, () => console.info(`${propName} UPDATED`))
                    } catch(err) {}
                  }}
                />
              </label>
            )
          })}
          <Box {...props}>
            {children}
          </Box>
        </div>
      )
    }
  }
}
