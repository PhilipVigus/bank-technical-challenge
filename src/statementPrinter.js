function StatementPrinter(actions) {
  const STATEMENT_HEADER = 'date || credit || debit || balance';
  const accountActions = actions;

  function dateToString(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  function depositStatementLine(date, amount, lineBalance) {
    return `${dateToString(date)} || ${amount.toFixed(2)} || || ${lineBalance.toFixed(2)}`;
  }

  function withdrawlStatementLine(date, amount, lineBalance) {
    return `${dateToString(date)} || || ${amount.toFixed(2)} || ${lineBalance.toFixed(2)}`;
  }

  function accountActionsToStatementString() {
    const statement = accountActions.map((action) => {
      if (action.type === 'deposit') {
        return depositStatementLine(action.date, action.amount, action.balance);
      } else {
        return withdrawlStatementLine(action.date, action.amount, action.balance);
      }
    }).join('\n');

    return statement;
  }

  this.printStatement = function printStatement() {
    if (accountActions.length === 0) {
      return STATEMENT_HEADER;
    }

    return `${STATEMENT_HEADER}\n${accountActionsToStatementString()}`;
  };
}

module.exports = StatementPrinter;
