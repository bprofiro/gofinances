import { EntityRepository, Repository, getRepository } from 'typeorm';

import Transaction from '../models/Transaction';
// import AppError from '../errors/AppError';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
  public async getBalance(): Promise<Balance> {
    const transactions = getRepository(Transaction);

    const checkBlance = await transactions.find();

    const income = checkBlance
      .filter(transaction => {
        return transaction.type === 'income';
      })
      .reduce((total, transaction) => {
        return total + transaction.value;
      }, 0);

    const outcome = checkBlance
      .filter(transaction => {
        return transaction.type === 'outcome';
      })
      .reduce((total, transaction) => {
        return total + transaction.value;
      }, 0);

    const total = income - outcome;

    // if (outcome > total) {
    //   throw new AppError('You need mor money fot this!');
    // }

    return { income, outcome, total };
  }
}

export default TransactionsRepository;
