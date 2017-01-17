'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

exports.default = sand;

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function serializePropValue(propValue, propValueType) {
  switch (propValueType) {
    case 'object':
      return (0, _stringify2.default)(propValue, null, 2);
    case 'function':
      return eval(propValue);
    default:
      return propValue;
  }
}

function deserializePropValue(propValue, propValueType) {
  switch (propValueType) {
    case 'object':
      return JSON.parse(propValue);
    default:
      return propValue;
  }
}

function sand() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      React = _ref.React;

  (0, _invariant2.default)(React, 'React is a required dependency of react-sand (hand to factory function).');
  var Component = React.Component,
      PropTypes = React.PropTypes;


  var Prop = function Prop(_ref2) {
    var propName = _ref2.propName,
        propValue = _ref2.propValue,
        _onChange = _ref2.onChange,
        _ref2$propValueType = _ref2.propValueType,
        propValueType = _ref2$propValueType === undefined ? typeof propValue === 'undefined' ? 'undefined' : (0, _typeof3.default)(propValue) : _ref2$propValueType,
        _ref2$serializedValue = _ref2.serializedValue,
        serializedValue = _ref2$serializedValue === undefined ? serializePropValue(propValue, propValueType) : _ref2$serializedValue;


    return React.createElement(
      'label',
      {
        style: { display: 'flex',
          flexFlow: 'column nowrap'
        }
      },
      propName,
      ' <',
      propValueType,
      '>',
      React.createElement('textarea', {
        onChange: function onChange(e) {
          try {
            _onChange(deserializePropValue(e.target.value, propValueType));
          } catch (err) {}
        },
        defaultValue: serializedValue
      })
    );
  };

  return function (_Component) {
    (0, _inherits3.default)(Sand, _Component);

    function Sand(props) {
      (0, _classCallCheck3.default)(this, Sand);

      var _this = (0, _possibleConstructorReturn3.default)(this, (Sand.__proto__ || (0, _getPrototypeOf2.default)(Sand)).call(this, props));

      _this.state = {};
      return _this;
    }

    (0, _createClass3.default)(Sand, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            Box = _props.Box,
            props = (0, _objectWithoutProperties3.default)(_props, ['Box']);
        var displayName = Box.displayName,
            propTypes = Box.propTypes,
            defaultProps = Box.defaultProps;

        var mergedProps = (0, _extends3.default)({}, defaultProps, props);
        if (!propTypes) return React.createElement(
          'span',
          null,
          'Add propTypes to the component.'
        );
        return React.createElement(
          'div',
          {
            style: { display: 'flex',
              flexFlow: 'column nowrap'
            }
          },
          React.createElement(
            'h4',
            null,
            displayName,
            ' Props'
          ),
          React.createElement(
            'div',
            {
              style: { display: 'flex',
                flexFlow: 'column nowrap',
                fontSize: '0.9em'
              }
            },
            (0, _keys2.default)(propTypes).map(function (propName, i) {
              return React.createElement(Prop, {
                key: i,
                propName: propName,
                propValue: mergedProps[propName],
                onChange: function onChange(value) {
                  return _this2.setState((0, _defineProperty3.default)({}, propName, value), function () {
                    return console.info(propName + ' updated!');
                  });
                }
              });
            })
          ),
          React.createElement(
            'div',
            {
              style: { display: 'flex'
              }
            },
            React.createElement(
              'h4',
              null,
              'Children Type: ',
              typeof mergedProps.children === 'function' ? 'Render Callback' : 'Standard'
            )
          ),
          React.createElement(Box, props)
        );
      }
    }]);
    return Sand;
  }(Component);
}