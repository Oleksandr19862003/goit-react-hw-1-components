import PropTypes from 'prop-types';
import { StatisticsItem } from '../Statistics/StatisticsItem';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <div className={css.statisticblock}>
        {title && <h2 className={css.title}>{title}</h2>}

        <ul className={css.stat__list}>
          {stats.map(({ id, label, percentage }) => (
            <StatisticsItem label={label} percentage={percentage} key={id} />
          ))}
        </ul>
      </div>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
