import clsx from 'clsx';
import { FC, ReactNode } from 'react';

type TextFieldProps = JSX.IntrinsicElements['input'] & {
  leftIcon?: ReactNode;
};

const TextField: FC<TextFieldProps> = ({ leftIcon, ...props }) => {
  return (
    <div className="relative">
      {leftIcon}
      <input
        type="text"
        className={clsx(
          [
            'block p-2 text-sm text-gray-900 !border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500',
          ],
          {
            'pl-10': typeof leftIcon !== 'undefined',
          },
        )}
        {...props}
      />
    </div>
  );
};

export default TextField;
