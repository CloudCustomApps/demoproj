import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CouponListItem from './CouponListItem';
import { CustomModal } from 'designops';
import { getRandomModalConfig } from '../../libs/modal';
import classNames from 'classnames';
import SortIcon from '@material-ui/icons/Sort';
import FilterListIcon from '@material-ui/icons/FilterList';

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
  const [isAsc, setIsAsc] = React.useState(false);

  React.useEffect(() => {
    coupons.sort((a, b) =>
      isAsc ? b.createdAt - a.createdAt : a.createdAt - b.createdAt,
    );
  }, [coupons, isAsc]);

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

  const onSortList = () => {
    setIsAsc((prev) => !prev);
  };

  return (
    <>
      <div className={classes.header}>
        <div className={classNames('text-5xl', 'text-red-600', classes.title)}>
          🔥 Hot Deals 🔥
        </div>
        <Button onClick={onSortList} startIcon={<SortIcon />}>
          {`Sort By Date (${isAsc ? 'asc' : 'desc'})`}
        </Button>
        {/* <Button
          onClick={() => {
            console.log('filter');
          }}
          startIcon={<FilterListIcon />}>
          Filter
        </Button> */}
      </div>
      <Grid container spacing={3} className={classes.list}>
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
        <div className={classes.modalContent}>
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
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
  },
  title: { flex: 1 },
  list: {
    padding: theme.spacing(1.5),
  },
  modalContent: {
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
  button: {
    background: 'red',
  },
}));
