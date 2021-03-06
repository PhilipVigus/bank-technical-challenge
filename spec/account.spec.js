const Account = require('../src/account.js');

describe('Account', () => {
  describe('.printStatement', () => {
    it('calls print on the statement', () => {
      const statementMockInstance = {
        print() {},
      };
      spyOn(statementMockInstance, 'print');
      const StatementMockFunction = function StatementMockFunction() {
        return statementMockInstance;
      };

      const account = new Account({ Deposit: {}, Withdrawl: {} });
      account.printStatement(StatementMockFunction);
      expect(statementMockInstance.print).toHaveBeenCalled();
    });
  });

  describe('.deposit', () => {
    it('creates a new deposit', () => {
      const DepositMock = function DepositMock() {
        return {};
      };

      const transactionTypes = {
        Deposit: DepositMock,
        Withdraw: {},
      };

      const account = new Account(transactionTypes);
      expect(account.deposit(100)).toEqual('100.00 successfully deposited');
    });
  });

  describe('.withdraw', () => {
    it('creates a withdrawl', () => {
      const WithdrawlMock = function WithdrawlMock() {
        return {};
      };

      const transactionTypes = {
        Deposit: {},
        Withdrawl: WithdrawlMock,
      };

      const account = new Account(transactionTypes);
      expect(account.withdraw(100)).toEqual('100.00 successfully withdrawn');
    });
  });
});
