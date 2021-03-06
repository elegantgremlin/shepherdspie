import React from 'react';
import PropTypes from 'prop-types';

const Content = (props) => {
  const { children } = props;
  return (<div className="content">{children}</div>);
};

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
