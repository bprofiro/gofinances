import { getRepository, getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';
import Category from '../models/Category';
import TransactionsRepository from '../repositories/TransactionsRepository';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
}

class CreateTransactionService {
  public async execute({
    title,
    value,
    type,
    category,
  }: Request): Promise<Transaction> {
    const categoriesRepository = getRepository(Category);

    const checkCategoryExists = await categoriesRepository.findOne({
      where: { title: category },
    });

    if (!checkCategoryExists) {
      const createNewCategory = categoriesRepository.create({
        title: category,
      });

      await categoriesRepository.save(createNewCategory);
    }

    const searchCaregoryID = await categoriesRepository.find({
      where: { title: category },
    });

    const category_id = searchCaregoryID[0].id;

    const transactionRepository = getRepository(Transaction);
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const balance = transactionsRepository.getBalance();

    if (type === 'outcome' && (await balance).total < value) {
      throw new AppError("You don't have money enough to do this transaction!");
    }

    const createNewTransaction = transactionRepository.create({
      title,
      value,
      type,
      category,
      category_id,
    });

    await transactionRepository.save(createNewTransaction);

    return createNewTransaction;
  }
}

export default CreateTransactionService;
