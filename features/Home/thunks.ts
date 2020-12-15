import { AppThunk } from '../../store/index';
import { PER_PAGE } from './selectors';
import slice, { fetchUsers } from './slice';

export const search = (): AppThunk => async (dispatch, getState) => {
  dispatch(slice.actions.setCurrentPage(1));
  const keyword = getState().users.inputValue;
  dispatch(
    fetchUsers({
      keyword,
      page: 1,
      perPage: PER_PAGE,
    })
  );
};

export const gotoPage = (page: number): AppThunk => async (
  dispatch,
  getState
) => {
  dispatch(slice.actions.setCurrentPage(page));
  const keyword = getState().users.inputValue;
  dispatch(
    fetchUsers({
      keyword,
      page,
      perPage: PER_PAGE,
    })
  );
};
