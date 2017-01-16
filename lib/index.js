'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = require('babel-runtime/core-js/object/entries');

var _entries2 = _interopRequireDefault(_entries);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

exports.default = sand;

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sand() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      React = _ref.React;

  (0, _invariant2.default)(React, 'React is a required dependency of react-sand (hand to factory function).');

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
      value: function render(_ref2) {
        var _this2 = this;

        var Box = _ref2.Box,
            children = _ref2.children,
            props = (0, _objectWithoutProperties3.default)(_ref2, ['Box', 'children']);

        if (Box.propTypes) return React.createElement(
          'pre',
          null,
          (0, _stringify2.default)((0, _keys2.default)(Box), null, 2)
        );
        //return <span>Add propTypes to the component.</span>
        return React.createElement(
          'div',
          null,
          (0, _entries2.default)(Box.propTypes).map(function (_ref3, i) {
            var _ref4 = (0, _slicedToArray3.default)(_ref3, 2),
                propName = _ref4[0],
                propType = _ref4[1];

            return React.createElement(
              'label',
              { key: i, style: { display: 'flex', flexFlow: 'column nowrap' } },
              propName,
              ':',
              React.createElement('input', {
                type: 'number',
                onChange: function onChange(e) {
                  try {
                    _this2.setState((0, _defineProperty3.default)({}, propName, parseInt(e.target.value)), function () {
                      return console.info(propName + ' UPDATED');
                    });
                  } catch (err) {}
                }
              })
            );
          }),
          React.createElement(
            Box,
            props,
            children
          )
        );
      }
    }]);
    return Sand;
  }(Component);
}