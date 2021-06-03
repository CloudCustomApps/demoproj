import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CouponListItem from './CouponListItem';
import { CustomModal } from 'designops';
import { getRandomModalConfig } from '../../libs/modal';
import classNames from 'classnames';

const defaultConfig = {
  modal: {
    size: 'sm',
    title: '',
  },
  selectedItem: {},
};

export default function CouponList(props) {
  const classes = useStyles();
  const { coupons } = props;
  const [modalOpen, setModalOpen] = React.useState(false);
  const [config, setConfig] = React.useState(defaultConfig);

  const onClickItem = (selectedItem) => {
    setConfig({
      modal: {
        title: selectedItem.header,
        ...getRandomModalConfig(),
      },
      selectedItem,
    });

    setModalOpen(true);
  };

  return (
    <>
      <div className={classNames('text-5xl', 'text-red-600')}>
        🔥 Hot Deals 🔥
      </div>
      <Grid container spacing={3} className={classes.root}>
        {coupons.map((coupon, index) => (
          <Grid item xs={12} key={index}>
            <CouponListItem
              coupon={coupon}
              onClick={() => onClickItem(coupon)}
            />
          </Grid>
        ))}
      </Grid>
      <CustomModal
        isOpen={modalOpen}
        handleClose={() => setModalOpen(false)}
        handleSuccess={() => setModalOpen(false)}
        leftBtnText="👎 Not useful"
        rightBtnText="👍 Useful"
        {...config.modal}>
        <div className={classes.content}>
          <div>{config.selectedItem?.desc}</div>
          <img
            className={classes.img}
            src={config.selectedItem?.image}
            alt="coupon product"
          />
        </div>
      </CustomModal>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1.5),
  },
  content: {
    display: 'flex',
    gap: theme.spacing(2),
  },
  img: {
    height: 160,
    width: 160,
    objectFit: 'contain',
    background: 'white',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(2),
    boxShadow: '1px 1px 5px rgba(0,0,0,0.2)',
  },
}));
