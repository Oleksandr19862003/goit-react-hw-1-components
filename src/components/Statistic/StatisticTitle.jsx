import PropTypes from 'prop-types';
import { StatContainer} from 'components/Statistic/StatisticTitle.styled';

export const StatisticTitle = ({ StatTitle }) => {
  return (
    <StatContainer>
      <StatTitle>
        UPLOAD STATS
      </StatTitle>
    </StatContainer>
  );
};

StatisticTitle.propTypes =
  { text: PropTypes.string.isRequired, };