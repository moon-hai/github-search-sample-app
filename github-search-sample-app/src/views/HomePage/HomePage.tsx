import Pagination from '@/components/Pagination';
import TextField from '@/components/TextField';
import { useDebounce } from '@/core/hooks/useDebounce';
import { AppState, useAppDispatch, useAppSelector } from '@/store';
import { setToast } from '@/store/toast/actions';
import { resetUserStore, searchGithubUsers } from '@/store/user/actions';
import { useEffect, useMemo, useState } from 'react';
import UsersSearchTable from './UsersSearchTable';
import { PER_PAGE, TOTAL_SHOWED_USERS } from './constants';

const MINIMUM_SEARCH_LENGTH = 3;

const HomePage = () => {
  const dispatch = useAppDispatch();
  const userStore = useAppSelector((store: AppState) => store.user);
  const [searchVal, setSearchVal] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const debouncedSearchVal = useDebounce(searchVal, 1000);

  const doSearchGithubUsers = (pageNo = currentPage) => {
    if (debouncedSearchVal.length < MINIMUM_SEARCH_LENGTH) {
      if (debouncedSearchVal.length > 0) {
        dispatch(
          setToast({
            message: 'Input at least 3 characters for search',
            type: 'info',
          }),
        );
      }

      if (!!userStore.users) {
        dispatch(resetUserStore());
      }
      return;
    }

    dispatch(
      searchGithubUsers({
        page: pageNo,
        per_page: PER_PAGE,
        q: encodeURIComponent(debouncedSearchVal.trim()),
      }),
    );
  };

  const handlePageChange = (pageNo: number) => {
    setCurrentPage(pageNo);
    doSearchGithubUsers(pageNo);
  };

  useEffect(() => {
    setCurrentPage(1);
    doSearchGithubUsers(1);
  }, [debouncedSearchVal]);

  const totalShowedUsers = useMemo(() => {
    if (!userStore.users) return 0;

    return Math.min(TOTAL_SHOWED_USERS, userStore.users.total_count);
  }, [userStore.users]);

  useEffect(() => {
    if (userStore.isError) {
      dispatch(setToast({ message: 'Error occurs, please try again', type: 'error' }));
    } else {
      dispatch(setToast(null));
    }
  }, [userStore.isError]);

  return (
    <div className="px-4 py-6 mx-auto max-w-[1000px]">
      <div className="mb-2">
        <TextField
          placeholder="Please input at least 3 characters to search"
          leftIcon={
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
          }
          value={searchVal}
          onChange={(e) => {
            setSearchVal(e.target.value);
          }}
        />
      </div>

      <UsersSearchTable />

      {totalShowedUsers > 0 ? (
        <Pagination page={currentPage} total={totalShowedUsers} onChange={handlePageChange} />
      ) : null}
    </div>
  );
};

export default HomePage;
