import React, { useEffect, useState, useContext } from 'react';

import _map from 'lodash/map';

import { Select } from 'antd';
import { FormInstance } from 'antd/lib/form';

import betService from '../../services/firebase/bet';
import { BetContext } from '../../contexts/bet';


interface Props {
  type: string;
  form: FormInstance;
  fieldName: string;
}

export interface OptionsType {
  value: string;
  id: string;
  [key: string]: unknown;
}

const categoryOptions = [
  { id: 'table_tenis', value: 'Tênis de Mesa' },
  { id: 'league_of_legends', value: 'League of Legends'},
];



const CustomSelect = ({ type, form, fieldName }: Props) => {
  const { getBetsCategories, categories } = useContext(BetContext)
  const [loading, setLoading] = useState<boolean>();
  const [options, setOptions] = useState({} as OptionsType[]);

  const getOptionsByType = async (type: string) => {
    const options = {};
    setLoading(true);
    switch (type) {
      case 'category':
        await getBetsCategories();
        setOptions(categoryOptions);
        break;
      case 'market':
        const formValues = form.getFieldsValue();
        console.log(formValues)
        break;
      default:
        break;
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    if (type === 'category') {
      form.setFieldsValue({[fieldName]: e});
    }
  }

  useEffect(() => {
    getOptionsByType(type);
  }, [])
  

  return (
    <Select loading={loading} onChange={handleChange}>
      {_map(options, opt => <Select.Option key={opt.id} value={opt.id}>{opt.value}</Select.Option>)}
    </Select>
  )
};

export default CustomSelect;