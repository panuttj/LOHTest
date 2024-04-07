import React from 'react';
import ComponentLv2 from './ComponentLV2';
import PropTypes from 'prop-types';

const ComponentLv1 = ({ navigation, categories }) => {

  return (
    <div className="w-auto ">
      <ComponentLv2 navigation={navigation} categories={categories} />
    </div>
  );
};

ComponentLv1.propTypes = {
  navigation: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
};

export default ComponentLv1;
