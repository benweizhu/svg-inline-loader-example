import React from 'react';
import ReactDOM from 'react-dom';
import family from './icons/family.svg';
import like from './icons/like.svg';
import styles from './index.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);

class SvgComponent extends React.Component {
  render() {
    console.log(family);
    return (
      <div>
        <div className={cx('icon')} dangerouslySetInnerHTML={{ __html: family }}></div>
        <div className={cx('icon red')} dangerouslySetInnerHTML={{ __html: like }}></div>
      </div>
    );
  }
}

ReactDOM.render(<SvgComponent />, document.querySelector('body'));
