import React, { useState} from 'react'
import './Cardform.css'

const CardForm = () => {

    const [inputName, setInputName] = useState('');
    const [inputDate, setInputDate] = useState('');
    const [inputAmount, setInputAmount] = useState('');


    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setInputDate(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const submitData = {
            name: inputName,
            date: new Date(inputDate),
            amount: inputAmount
        }

        console.log(submitData);

        setInputName('');
        setInputDate('');
        setInputAmount('');
    }

    return (
        <form onSubmit={submitHandler} className="wrap__form">
            <div className="form-group">
                <label>Name</label>
                <input 
                    onChange={nameChangeHandler} 
                    type="text" 
                    value={inputName}
                    className="form-control" 
                    placeholder="name">
                </input>
            </div>
            <div className="form-group">
                <label>Date</label>
                <input 
                    onChange={dateChangeHandler} 
                    type="date" 
                    value={inputDate}
                    className="form-control"> 
                </input>
            </div>
            <div className="form-group">
                <label>Amount</label>
                <input 
                    onChange={amountChangeHandler} 
                    type="number" 
                    value={inputAmount}
                    className="form-control" 
                    min="0.01" step="0.01">
                </input>
            </div>
            <button className="btn btn-primary form-control" type="submit">Submit</button>

        </form>
    );
}

export default CardForm