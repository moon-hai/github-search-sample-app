import clsx from 'clsx';
import { FC } from 'react';

type PaginationProps = {
  page?: number;
  perPage?: number;
  onChange: (page: number) => void;
  total: number;
};

const Pagination: FC<PaginationProps> = ({ total, onChange, page = 1, perPage = 20 }) => {
  const pageCount = Math.ceil(total / perPage);

  return (
    <nav aria-label="Page navigation example" className="text-center py-6">
      <ul className="inline-flex -space-x-px text-sm">
        {Array(pageCount)
          .fill(null)
          .map((_, idx) => (
            <li role="button" onClick={() => onChange(idx + 1)} key={idx}>
              <span
                className={clsx(
                  [
                    'flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-300 hover:text-gray-700 cursor-pointer',
                  ],
                  {
                    '!bg-cyan-500 !border-cyan-500 !text-white': idx + 1 === page,
                  },
                )}
              >
                {idx + 1}
              </span>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Pagination;
