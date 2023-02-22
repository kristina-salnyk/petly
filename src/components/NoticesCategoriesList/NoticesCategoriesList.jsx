import { useSelector } from 'react-redux';
import { useOutletContext } from 'react-router-dom';
import { NoticeCategoryItem } from '../NoticeCategoryItem';
import { List } from './NoticesCategoriesList.styled';
import { ModalNotice } from '../ModalNotice';
import { selectModal } from '../../redux/modal/selectors';


export const NoticeCategoriesList = () => {
  const [notices] = useOutletContext();
  const isShowModal = useSelector(selectModal);

  return (
    <List>
      {notices.map(item => (
        <NoticeCategoryItem key={item._id} {...item}/>
      ))}
      {isShowModal && <ModalNotice />}
    </List>
  );
};
