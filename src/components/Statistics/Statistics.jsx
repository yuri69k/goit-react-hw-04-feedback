import PropTypes from 'prop-types';
import { ImNeutral, ImHappy, ImSad } from 'react-icons/im';
import { FcPositiveDynamic } from 'react-icons/fc';
import { BsJournalPlus } from 'react-icons/bs';
import { StatisticsList, StatisticsItem } from './Statistics.styled';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <StatisticsList>
    <StatisticsItem>
      <ImHappy color={'green'} size={35} />
      <span>good : {good}</span>
    </StatisticsItem>
    <StatisticsItem>
      <ImNeutral color={'gray'} size={35} />
      <span>neutral : {neutral}</span>
    </StatisticsItem>
    <StatisticsItem>
      <ImSad color={'red'} size={35} />
      <span>bad : {bad}</span>
    </StatisticsItem>
    <StatisticsItem>
      <BsJournalPlus size={35} />
      <span>total: {total}</span>
    </StatisticsItem>
    <StatisticsItem>
      <FcPositiveDynamic size={35} />
      <span>Positive feedback : {positivePercentage}</span>%
    </StatisticsItem>
  </StatisticsList>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
