import React from 'react';
import { Form, Select } from 'antd';
import CustomSelect from '../CustomSelect';


const BetForm = (): JSX.Element => {
  const [form] = Form.useForm();

  // Bet
  // Entry
  // Game
  // Market
  // Odd
  // Result


  return (
    <Form
      layout='vertical'
      form={form}
      // initialValues={{ layout: formLayout }}
    >
      <Form.Item label='Category' name='category'>
        <CustomSelect type='category' form={form} fieldName='category'/>
      </Form.Item>

      <Form.Item label='Market' name='market'>
        <CustomSelect type='market' form={form} fieldName='market'/>
      </Form.Item>
    
    </Form>
  );
};

export default BetForm;
