import PropTypes from 'prop-types';
import { StatList, StatItem, StatLabel, StatPercentage } from './StatisticItem.styled';


export const StatisticItem = ({ stats }) => {
    return (
        <StatList>
            {stats.map(({ label, percentage, id }) => {
                return (
                    <StatItem key={id}>
                        <StatLabel>{label}</StatLabel>
                        <StatPercentage>{percentage}%</StatPercentage>
                    </StatItem>
                );
            })}
        </StatList>
    );
};


StatisticItem.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired,
};

