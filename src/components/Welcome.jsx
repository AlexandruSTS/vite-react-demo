import React from 'react';
import axios from 'axios'

export default function Welcome() {
    const makeCorsRequest = () => {
        try {
            console.log(axios.get("api/hello")) // "http://localhost:3000/api/v1/configurations"
        } catch (e) {
            console.log(e)
        }

        fetch('api/hello', {
            method: 'GET',
            mode: "cors",
        })
            .then(response => {
                if (response.ok) {
                    return response.text();
                } else {
                    throw new Error('Error! Status: ' + response.text());
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
                <h1>Hello backend</h1>
            </div>
            <button onClick={makeCorsRequest}>Send Hello Request</button>
        </>
    );

}