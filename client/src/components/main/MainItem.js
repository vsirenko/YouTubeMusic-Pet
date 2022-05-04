import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Box } from '@mui/system';

import style from './style/style';

const MainItem = ({ id, img, name, author }) => {
  return (
    <Box sx={style.item}>
      <Link to={`/album:${id}`}>
        <Box component={'img'} src={img} />
      </Link>
      <Box sx={style.item.name.wr}>
        <Box sx={style.item.name.fz}>{name}</Box>
        <Box sx={style.item.author}>{author}</Box>
      </Box>
    </Box>
  );
};

export default memo(MainItem);

MainItem.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
