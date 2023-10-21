import { FC } from 'react';

type RatingProps = {
  rate: number;
};

const Rating: FC<RatingProps> = ({ rate }) => {
  const rateInPercent = rate * 100;

  return (
    <div className="flex items-center gap-2">
      <div className="w-full bg-gray-200 rounded h-2.5">
        <div className="h-2.5 rounded bg-sky-500" style={{ width: `${rateInPercent}%` }}></div>
      </div>

      <span className="text-sm font-medium text-gray-800">{rateInPercent}%</span>
    </div>
  );
};

export default Rating;
