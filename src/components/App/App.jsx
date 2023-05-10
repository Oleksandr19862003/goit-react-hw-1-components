import user from 'components/data/user.json';
import data from 'components/data/data.json';
import { Profile } from 'components/Profile/Profile';
import { StatisticTitle } from 'components/Statistic/StatisticTitle';
import { StatisticItem } from 'components/Statistic/StatisticItem';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        followers={user.stats.followers}
        view={user.stats.view}
        likes={user.stats.likes} />

      <StatisticTitle Title="Upload stats" stats={data} />
      <StatisticItem StatList="Upload stats" stats={data} />
    </>
  );
};