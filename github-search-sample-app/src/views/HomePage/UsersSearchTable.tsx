import EmptyState from '@/components/EmptyState';
import LoadingIndicator from '@/components/LoadingIndicator';
import Rating from '@/components/Rating';
import { useAppSelector } from '@/store';
import { FC } from 'react';

const UsersSearchTable: FC = () => {
  const { isLoading, users } = useAppSelector((store) => store.user);

  return (
    <div className="relative rounded-xl overflow-auto">
      {!users?.items?.length ? (
        <EmptyState emptyText="No user found" />
      ) : (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 bg-gray-50">
              <tr>
                <th scope="col" className="p-4 text-sm">
                  ID
                </th>
                <th scope="col" className="px-6 py-3 text-sm">
                  User
                </th>
                <th scope="col" className="px-6 py-3 text-sm">
                  Type
                </th>
                <th scope="col" className="px-6 py-3 text-sm">
                  Matching Rate
                </th>
              </tr>
            </thead>
            <tbody>
              {(users.items || []).map((user) => (
                <tr key={user.id} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-800">{user.id}</td>
                  <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                    <img className="w-10 h-10 rounded-full" src={user.avatar_url} alt={user.login} />
                    <div className="pl-3">
                      <p className="text-base font-semibold">{user.login}</p>
                    </div>
                  </th>
                  <td className="px-6 py-4 text-gray-800">{user.type}</td>
                  <td className="px-6 py-4 w-[240px]">
                    <div className="min-w-[120px]">
                      <Rating rate={user.score} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {isLoading && <LoadingIndicator />}
    </div>
  );
};

export default UsersSearchTable;
