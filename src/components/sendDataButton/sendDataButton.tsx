import React from 'react';
import { SendDataButtonProps } from '../../utils/constant';

function SendDataButton({ dogs }: SendDataButtonProps) {
  async function sendData() {
    if (dogs.length === 0) {
      alert("Dogs List is Empty!!");
      return;
    }
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ dogs }),
    });
    const result = await response.json();
    alert(`Status: ${response.status}, Response: ${JSON.stringify(result)}`);
  }

  return (
    <button onClick={sendData} data-testid="send-button">Send Data to Backend</button>
  );
}

export default SendDataButton;
