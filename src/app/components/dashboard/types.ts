
export interface User {
    user: number;
    name: string;
    expense_total: number;
    expenses: any[];
}

export interface Expense {
    name: string;
    amount: number;
}

export interface UserFund {
    user: number;
    expense_total: number;
    status: string;
    offset: number;
}

export interface Fund {
    fund_total: number;
    fund_midpoint: number;
    users: any[]
}

export interface ExpenseCategories {
    value: string;
    label: string;
}

