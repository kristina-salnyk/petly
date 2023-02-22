import PropTypes from 'prop-types';
import { Form, Input, InputSearchControl, InputWrap } from './NoticesSearch.styled';
import { SearchIcon } from '../icons/SearchIcon';
import { CloseSearchCross } from '../icons/CloseSearchCross';
import { useIconSize } from '../../hooks/useIconSize';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchQuery } from '../../redux/notices/selectors';
import { changeSearchQuery } from '../../redux/notices/slice';

export const NoticesSearch = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const [iconSize] = useIconSize();

  const searchQuery = useSelector(selectSearchQuery);

  const onSubmitSearchQuery = event => {
    event.preventDefault();
    onSubmit();
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
          onInput={event => dispatch(changeSearchQuery(event.target.value))}
        />
        <InputSearchControl>
          {searchQuery ? (
            <CloseSearchCross
              size={iconSize === 's' ? 20 : 24}
              onClick={() => dispatch(changeSearchQuery(''))}
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
  onSubmit: PropTypes.func.isRequired,
};
