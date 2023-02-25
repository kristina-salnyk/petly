import PropTypes from 'prop-types';
import { selectNewsSearchString } from '../../../redux/news/selectors';
import { useDispatch, useSelector } from 'react-redux';
import {filterNews} from '../../../redux/news/filterSlice'
import { useIconSize } from '../../../hooks/useIconSize';
import {
  SearchNewsForm,
  SearchNewsInput,
  SearchNewsButton,
  InputWrap
} from './NewsSearch.styled';
import { SearchIcon } from '../../../components/icons/SearchIcon';
import { CloseSearchCross } from '../../../components/icons/CloseSearchCross';

const NewsSearchForm = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const [iconSize] = useIconSize();
  const searchQuery = useSelector(selectNewsSearchString);
    
  const onSubmitSearchQuery = e => {
    e.preventDefault();
    onSubmit();
  };
    
  return (
    <SearchNewsForm
      id="searchForm"
      onSubmit={onSubmitSearchQuery}
    >
      <InputWrap>
        <SearchNewsInput
          type="search"
          name="searchQuery"
          autoComplete="off"
          autoFocus
          placeholder="Search"
          value={searchQuery.filter}
          onInput={e => dispatch(filterNews(e.target.value))}
        />
        <SearchNewsButton >
          {searchQuery.filter === '' ? (
            <SearchIcon size={iconSize === 's' ? 20 : 24} />
          
          ) : (
            <CloseSearchCross
              size={iconSize === 's' ? 20 : 24}
              onClick={()=> dispatch(filterNews(''))}/>
          )}
        </SearchNewsButton>
      </InputWrap>
    </SearchNewsForm>
  );
}

export default NewsSearchForm;

NewsSearchForm.propTypes = {
  onSubmit: PropTypes.func,
};