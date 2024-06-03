import React, { useState } from 'react';
import { setSearch, deleteSearch } from '../../../filterSlice';
import { useAppDispatch } from '../../../../core/store/hooks';
import { IoSearchSharp } from 'react-icons/io5';
import { LuDelete } from 'react-icons/lu';
import style from '../scss/products.module.scss';

import { useDebounce } from '../hooks/customDebonce';

export const SearchInput: React.FC = () => {
  const [value, setValue] = useState('');

  const dispatch = useAppDispatch();

  const handleDeleteValue = () => {
    setValue('');
    dispatch(deleteSearch());
  };

  const updateSearchValue = (str: string) => {
    dispatch(setSearch(str));
  };
  const customDebounce = useDebounce(updateSearchValue, 550);

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    customDebounce(event.target.value);
  };

  return (
    <div className={style.searchInput}>
      <input type="text" value={value} onChange={onChangeInput} />
      <span className={style.searchInput__iconSearch}>
        <IoSearchSharp />
      </span>
      {value && (
        <span className={style.searchInput__iconDelete}>
          <LuDelete onClick={handleDeleteValue} />
        </span>
      )}
    </div>
  );
};
