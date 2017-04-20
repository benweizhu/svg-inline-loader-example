import React from 'react';
import ReactDOM from 'react-dom';
import family from './icons/family.svg';
import styles from './index.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);

class SvgComponent extends React.Component {
  render() {
    return (
      <div>
        <div className={cx('icon')} dangerouslySetInnerHTML={{ __html: family }}></div>
        <div className={cx('icon')} dangerouslySetInnerHTML={{ __html: family }}></div>
      </div>
    );
  }
}

ReactDOM.render(<SvgComponent />, document.querySelector('body'));
