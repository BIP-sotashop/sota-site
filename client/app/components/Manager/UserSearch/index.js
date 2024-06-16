/**
 *
 * UserSearch
 *
 */

import React from 'react';

import SearchBar from '../../Common/SearchBar';

const UserSearch = props => {
  return (
    <div className='mb-3'>
      <SearchBar
        name='user'
        placeholder='Введите имя пользователя или email'
        btnText='Поиск'
        onSearch={props.onSearch}
        onBlur={props.onBlur}
        onSearchSubmit={props.onSearchSubmit}
      />
    </div>
  );
};

export default UserSearch;
