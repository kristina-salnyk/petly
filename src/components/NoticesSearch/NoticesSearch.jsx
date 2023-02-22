import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form, Input, InputSearchControl, InputWrap } from './NoticesSearch.styled';
import { SearchIcon } from '../icons/SearchIcon';
import { CloseSearchCross } from '../icons/CloseSearchCross';
import { useIconSize } from '../../hooks/useIconSize';

export const NoticesSearch = ({ defaultValue, onSubmit }) => {
  const [iconSize] = useIconSize();
  const [searchQuery, setSearchQuery] = useState(defaultValue);

  const onSubmitSearchQuery = event => {
    event.preventDefault();
    onSubmit(searchQuery.trim());
  };

  return (
    <Form onSubmit={onSubmitSearchQuery}>
      <InputWrap>
        <Input
          type="search"
          name="searchQuery"
          autoComplete="off"
          autoFocus
          placeholder="Search"
          value={searchQuery}
          onInput={event => setSearchQuery(event.target.value)}
        />
        <InputSearchControl>
          {searchQuery ? (
            <CloseSearchCross
              size={iconSize === 's' ? 20 : 24}
              onClick={() => setSearchQuery('')}
            />
          ) : (
            <SearchIcon size={iconSize === 's' ? 20 : 24} />
          )}
        </InputSearchControl>
      </InputWrap>
    </Form>
  );
};

NoticesSearch.propTypes = {
  defaultValue: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
