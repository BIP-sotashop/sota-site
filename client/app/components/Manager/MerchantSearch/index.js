/**
 *
 * MerchantSearch
 *
 */

import React from 'react';

import SearchBar from '../../Common/SearchBar';

const MerchantSearch = props => {
  return (
    <div className='mb-3'>
      <SearchBar
        name='merchant'
        placeholder='Введите email, номер телефона, бренд или статус'
        btnText='Поиск'
        onSearch={props.onSearch}
        onBlur={props.onBlur}
        onSearchSubmit={props.onSearchSubmit}
      />
    </div>
  );
};

export default MerchantSearch;
