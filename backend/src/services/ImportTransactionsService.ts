import path from 'path';
import csv from 'csvtojson';

import uploadConfig from '../config/upload';
import CreateTransactionService from './CreateTransactionService';
import Transaction from '../models/Transaction';

interface FileName {
  filename: string;
}

class ImportTransactionsService {
  async execute({ filename }: FileName): Promise<Transaction[]> {
    const filePath = path.join(uploadConfig.directory, filename);

    const transactionsFromCSV = await csv().fromFile(filePath);

    const createTransaction = new CreateTransactionService();

    const transactions: Transaction[] = [];

    for (const transaction of transactionsFromCSV) {
      await createTransaction.execute(transaction);

      transactions.push(transaction);
    }

    return transactions;
  }
}

export default ImportTransactionsService;
