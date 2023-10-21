import { useAppDispatch, useAppSelector } from '@/store';
import { setToast } from '@/store/toast/actions';
import { FC, useEffect, useRef } from 'react';

const Toast: FC = () => {
  const { toast: toastData } = useAppSelector((store) => store.toast);
  const dispatch = useAppDispatch();
  const toastTimeoutRef = useRef<any>(null);

  useEffect(() => {
    if (!!toastData) {
      toastTimeoutRef.current = setTimeout(() => {
        dispatch(setToast(null));
      }, 2500);
    }

    return () => {
      clearTimeout(toastTimeoutRef.current);
      toastTimeoutRef.current = null;
    };
  }, [toastData]);

  const toastIcon = () => {
    if (!toastData) return null;

    switch (toastData.type) {
      case 'error':
        return (
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-rose-500 bg-red-100 rounded-lg">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
            </svg>
          </div>
        );
      default:
        return (
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
            </svg>
          </div>
        );
    }
  };

  return (
    <>
      {!!toastData ? (
        <div
          className="flex items-center w-full max-w-xs px-4 py-2 mb-4 text-gray-500 bg-white rounded-lg shadow fixed top-4 right-4"
          role="alert"
        >
          {toastIcon()}
          <div className="ml-3 text-sm font-normal text-zinc-800">{toastData.message}</div>
          <button
            type="button"
            className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8"
            aria-label="Close"
            onClick={() => dispatch(setToast(null))}
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Toast;
