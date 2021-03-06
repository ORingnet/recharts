'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _generateCategoricalChart = require('./generateCategoricalChart');

var _generateCategoricalChart2 = _interopRequireDefault(_generateCategoricalChart);

var _PolarAngleAxis = require('../polar/PolarAngleAxis');

var _PolarAngleAxis2 = _interopRequireDefault(_PolarAngleAxis);

var _PolarRadiusAxis = require('../polar/PolarRadiusAxis');

var _PolarRadiusAxis2 = _interopRequireDefault(_PolarRadiusAxis);

var _PolarUtils = require('../util/PolarUtils');

var _Pie = require('../polar/Pie');

var _Pie2 = _interopRequireDefault(_Pie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @fileOverview Pie Chart
 */
exports.default = (0, _generateCategoricalChart2.default)({
  chartName: 'PieChart',
  GraphicalChild: _Pie2.default,
  eventType: 'item',
  legendContent: 'children',
  axisComponents: [{ axisType: 'angleAxis', AxisComp: _PolarAngleAxis2.default }, { axisType: 'radiusAxis', AxisComp: _PolarRadiusAxis2.default }],
  formatAxisMap: _PolarUtils.formatAxisMap,
  defaultProps: {
    layout: 'centric',
    startAngle: 0,
    endAngle: 360,
    cx: '50%',
    cy: '50%',
    innerRadius: 0,
    outerRadius: '80%'
  },
  propTypes: {
    layout: _propTypes2.default.oneOf(['centric']),
    startAngle: _propTypes2.default.number,
    endAngle: _propTypes2.default.number,
    cx: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    cy: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    innerRadius: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    outerRadius: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
  }
});