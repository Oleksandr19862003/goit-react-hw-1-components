import PropTypes from 'prop-types';
import css from 'components/Transactions/TransactionHistory.module.css';
export const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <tr className={css.itemBlock}>
      <td className={css.tableItem}>{type}</td>
      <td className={css.tableItem}>{amount}</td>
      <td className={css.tableItem}>{currency}</td>
    </tr>
  );
};

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
