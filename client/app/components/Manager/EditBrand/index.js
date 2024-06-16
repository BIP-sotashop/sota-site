/**
 *
 * EditBrand
 *
 */

import React from 'react';

import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import Input from '../../Common/Input';
import Button from '../../Common/Button';
import Switch from '../../Common/Switch';
import { ROLES } from '../../../constants';

const EditBrand = props => {
  const {
    user,
    brand,
    brandChange,
    formErrors,
    updateBrand,
    deleteBrand,
    activateBrand
  } = props;

  const handleSubmit = event => {
    event.preventDefault();
    updateBrand();
  };

  return (
    <div className='edit-brand'>
      <div className='d-flex flex-row mx-0 mb-3'>
        <label className='mr-1'>Brand link </label>
        <Link to={`/shop/brand/${brand.slug}`} className='default-link'>
          {brand.slug}
        </Link>
      </div>
      <form onSubmit={handleSubmit} noValidate>
        <Row>
          <Col xs='12'>
            <Input
              type={'text'}
              error={formErrors['name']}
              label={'Название'}
              name={'name'}
              placeholder={'Название бренда'}
              value={brand.name}
              onInputChange={(name, value) => {
                brandChange(name, value);
              }}
            />
          </Col>
          <Col xs='12'>
            <Input
              type={'text'}
              error={formErrors['slug']}
              label={'Идентификатор'}
              name={'slug'}
              placeholder={'Идентификатор бренда'}
              value={brand.slug}
              onInputChange={(name, value) => {
                brandChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' md='12'>
            <Input
              type={'textarea'}
              error={formErrors['description']}
              label={'Описание'}
              name={'description'}
              placeholder={'Описание бренда'}
              value={brand.description}
              onInputChange={(name, value) => {
                brandChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' md='12' className='mt-3 mb-2'>
            <Switch
              style={{ width: 100 }}
              tooltip={brand.isActive}
              tooltipContent={`Отключение ${brand.name} также отключит все ${brand.name} товары.`}
              id={`enable-brand-${brand._id}`}
              name={'isActive'}
              label={'Активный?'}
              checked={brand.isActive}
              toggleCheckboxChange={value => activateBrand(brand._id, value)}
            />
          </Col>
        </Row>
        <hr />
        <div className='d-flex flex-column flex-md-row'>
          <Button
            type='submit'
            text='Сохранить'
            className='mb-3 mb-md-0 mr-0 mr-md-3'
          />
          <Button
            variant='danger'
            text='Удалить'
            disabled={user.role === ROLES.Merchant}
            onClick={() => deleteBrand(brand._id)}
          />
        </div>
      </form>
    </div>
  );
};

export default EditBrand;
