import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
    const expenses = [
        {
            id: 'e1',
            title: 'Oreo',
            amount: 940.12,
            date: new Date(2020, 7, 14),
        },
        { id: 'e2', title: 'New Oreo Deck', amount: 799.49, date: new Date(2021, 2, 12) },
        {
            id: 'e3',
            title: 'Oreo Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: 'New Desk (Oreo)',
            amount: 450,
            date: new Date(2021, 5, 12),
        },

    ];
    //return React.createElement('div', {}, React.createElement(Expenses, { items: expenses }));

    
    return (
    <div>
        <NewExpense/>
        <Expenses items={expenses} />
    </div>
    );
    
}

export default App;