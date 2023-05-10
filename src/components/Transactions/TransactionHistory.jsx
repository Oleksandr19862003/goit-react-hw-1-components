import PropTypes from 'prop-types';
import css from 'components/Transactions/TransactionHistory.module.css';
import { TransactionHistoryItem } from 'components/Transactions/TransactionHistoryItem';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr className={css.tableHeaderBlock}>
          <th className={css.tableHeader}>Type</th>
          <th className={css.tableHeader}>Amount</th>
          <th className={css.tableHeader}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionHistoryItem
            type={type}
            amount={amount}
            currency={currency}
            key={id}
          />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
