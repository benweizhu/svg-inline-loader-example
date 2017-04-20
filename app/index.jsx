import React from 'react';
import ReactDOM from 'react-dom';

class SvgComponent extends React.Component {
  render() {
    return (
      <div>Hello Svg</div>
    );
  }
}

ReactDOM.render(<SvgComponent />, document.querySelector('body'));
