const fs = require('fs')

class Handler {
    constructor(querymethod = null, data = null) {
        this.querymethod = querymethod;
        this.data = JSON.stringify(data);
    }

    createUser(data) {

        const file = `./data/user_expense.json`
        let user_expense = []
        let users = fs.readFileSync(file);
        users = JSON.parse(users)

        let expense_total = 0
        data.expenses.forEach((i) => {
            expense_total += parseFloat(i.amount)
        })

        const user = {
            user: data.user,
            user_name: data.user_name,
            expense_total,
            expenses: data.expenses
        }

        user_expense = [...users, user]
        fs.writeFileSync(file, JSON.stringify(user_expense))
        this.createFund(user_expense)
    }

    createFund(users) {
        const file = `./data/fund.json`

        let fund = fs.readFileSync(file);
        fund = JSON.parse(fund)

        let expense_total = 0.00
        users.forEach((i) => {
            i.expenses.forEach((c) => {
                expense_total += parseFloat(c.amount)
            })
        })

        let fund_midpoint = parseFloat(expense_total) / parseInt(users.length)
        fund_midpoint = parseFloat(fund_midpoint)

        let fund_users = []
        let user_total = 0
        users.forEach((i) => {
            let fund_user = {
                user: 0,
                expense_total: 0,
                status: '',
                offset: 0
            }
            user_total = 0
            i.expenses.forEach((c) => {
                user_total += parseFloat(c.amount)
            })

            fund_user.user = i.user
            fund_user.expense_total = user_total
            fund_user.status = user_total >= fund_midpoint ? 'up' : 'down'
            fund_user.offset = Math.abs(fund_midpoint - parseFloat(user_total))
            fund_users = [...fund_users, fund_user]
        })

        const funded = {
            fund_total: expense_total,
            fund_midpoint: fund_midpoint,
            users: fund_users
        }
        fs.writeFileSync(file, JSON.stringify(funded))
    }

    getFile(method) {
        let file = ''

        if (method) {
            file = `./data/${method}.json`
        }
        return file
    }

    readFile() {
        let file = this.getFile(this.querymethod)
        let data = fs.readFileSync(file);
        return JSON.parse(data)
    }

    writeFile() {
        let file = this.getFile(this.querymethod)
        fs.writeFileSync(file, this.data);
    }

}

module.exports = Handler;
