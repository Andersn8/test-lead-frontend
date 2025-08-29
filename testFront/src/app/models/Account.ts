export class Account {
  fromAccountId!: string;
  toAccountNumber!: string;
  amount!: number;
  currency: string = 'XAF';
  note!: string;
}
