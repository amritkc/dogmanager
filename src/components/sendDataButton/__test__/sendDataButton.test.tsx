import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SendDataButton from '../sendDataButton';

describe('sendDataButton Component', () => {
    beforeEach(() => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                status: 201,
                json: () => Promise.resolve({ id: 101, dogs: [{ name: 'Rex', age: 12 }] }),
            })
        ) as jest.Mock;
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should alert "Dogs List is Empty!!" when dogs list is empty', () => {
        const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => { });

        render(<SendDataButton dogs={[]} />);

        const button = screen.getByTestId('send-button');
        fireEvent.click(button);

        expect(mockAlert).toHaveBeenCalledWith("Dogs List is Empty!!");

        mockAlert.mockRestore();
    });

    test('should send data and alert with response status and data when dogs list is not empty', async () => {
        const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => { });

        const dogs = [{ name: 'Rex', age: 12 }];
        render(<SendDataButton dogs={dogs} />);

        const button = screen.getByTestId('send-button');
        fireEvent.click(button);

        await waitFor(() => {
            expect(global.fetch).toHaveBeenCalledWith(
                'https://jsonplaceholder.typicode.com/posts',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ dogs }),
                }
            );
        });

        await waitFor(() => {
            expect(mockAlert).toHaveBeenCalledWith('Status: 201, Response: {"id":101,"dogs":[{"name":"Rex","age":12}]}');
        });

        mockAlert.mockRestore();
    });
});
