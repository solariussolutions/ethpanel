var React = require('react');
var PropTypes = React.PropTypes;
var BlockItem = require('./BlockItem');

var Blocks = React.createClass({

  getDefaultProps: function() {
    return {
      limit: 20
    };
  },

  propTypes: {
    limit: PropTypes.number,
    blocks: PropTypes.array.isRequired
  },

  shouldComponentUpdate: function(nextProps, nextState) {
    return nextProps.blocks[0].number > this.props.blocks[0].number;
  },

  render: function() {
    var items = [];
    var blocks = this.props.blocks.slice(0, this.props.limit);

    blocks.forEach(function(block) {
      items.push(<BlockItem key={block.number} {...block} />)
    });

    return (
      <div className="blocks">
        <h2>Last {this.props.limit} Blocks</h2>
        <table>
          <thead>
            <tr>
              <th>Number</th>
              <th>Hash</th>
              <th>Time</th>
              <th>Transactions</th>
            </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
        </table>
      </div>
    );
  }

});

module.exports = Blocks;