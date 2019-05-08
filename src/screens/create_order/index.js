import '../../styles/create_order.scss';

import { Box, Column } from 'rbx';
import React from 'react';

import Order from '../../components/order';
import OrderForm from '../../components/order_form';

const CreateOrder = (props) => (
  <Column.Group centered>
    <Column size="4">
      <OrderForm />
    </Column>
    <Column size="3" offset="1">
      <Box className="shopping_cart">
        <Order finish_btn_active={false} />
      </Box>
    </Column>
  </Column.Group>
);

export default CreateOrder;