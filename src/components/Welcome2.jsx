import React from 'react';
import axios from "axios";

export default function Welcome2() {
    const makeCorsRequest = () => {
        try {
            console.log(axios.get("http://localhost:5173/greeting?name=Alex")) // "http://localhost:3000/api/v1/configurations"
        } catch (e) {
            console.log(e)
        }

        fetch('http://localhost:5173/greeting?name=Alex', {
            method: 'GET'
        })
            .then(response => {
                if (response.ok) {
                    return response.text();
                } else {
                    throw new Error('Error! Status: ' + response.status);
                }
            })

            .then(data => {
                console.log('Success! Response:', data);
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <>
            <div className="wrapper">
                <h1>Greeting backend</h1>
            </div>
            <button onClick={makeCorsRequest}>Send Greeting Request</button>
        </>
    );
}
