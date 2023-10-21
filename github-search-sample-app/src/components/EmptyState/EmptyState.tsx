import { FC } from 'react';

type EmptyStateProps = {
  emptyText: string;
};

const EmptyState: FC<EmptyStateProps> = ({ emptyText }) => {
  return (
    <div className="text-center min-h-[200px] flex items-center justify-center">
      <p className="text-gray-700 font-medium">{emptyText}</p>
    </div>
  );
};

export default EmptyState;
