import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { Form, Input, InputSearchControl, InputWrap } from './NoticesSearch.styled';
import { SearchIcon } from '../icons/SearchIcon';
import { CloseSearchCross } from '../icons/CloseSearchCross';

export const NoticesSearch = ({ defaultValue, onSubmit }) => {
  const [iconSize, setIconSize] = useState(0);
  const [searchQuery, setSearchQuery] = useState(defaultValue);

  const theme = useTheme();

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${theme.breakpoints.tablet[0]})`);

    const onWindowResize = () => setIconSize(media.matches ? 24 : 20);
    onWindowResize();

    window.addEventListener('resize', onWindowResize);
    return () => window.removeEventListener('resize', onWindowResize);
  }, [iconSize, screen]);

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
            <CloseSearchCross size={iconSize} onClick={() => setSearchQuery('')} />
          ) : (
            <SearchIcon size={iconSize} />
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
