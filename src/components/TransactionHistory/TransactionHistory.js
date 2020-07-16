import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';
// import toUpperCaseFirstLetter from '../../utils/FirstBigLetter';

const { transactionHistory, tableHead, tableRow, itemRow } = styles;

const TransactionHistory = ({ items }) => (
  <table className={transactionHistory}>
    <thead className={tableHead}>
      <tr className={tableRow}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id} className={itemRow}>
          {/* <td>{toUpperCaseFirstLetter(type)}</td> */}
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
