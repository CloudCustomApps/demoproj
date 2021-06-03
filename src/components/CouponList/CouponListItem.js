import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

export default function CouponListItem(props) {
  const classes = useStyles();
  const {
    coupon: { header, createdAt, image, desc },
    onClick,
  } = props;

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div
          className={classNames('text-xl', 'text-indigo-800', classes.header)}
          onClick={onClick}>
          {header}
        </div>
        <div className={classNames('text-sm', 'text-gray-500')}>
          {createdAt.toLocaleDateString()}
        </div>

        <div className={classNames('text-base', 'text-gray-600')}>{desc}</div>
      </div>

      <div>
        <img className={classes.img} src={image} alt="coupon product" />
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    display: 'flex',
    gap: theme.spacing(1),
    borderTop: `1px solid ${theme.palette.grey[300]}`,
  },
  content: {
    flex: 1,
  },
  header: {
    cursor: 'pointer',
    '&:hover': {
      color: 'black',
      textDecoration: 'underline',
    },
  },
  img: {
    height: 130,
    width: 130,
    objectFit: 'contain',
  },
}));
