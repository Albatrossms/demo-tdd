import React from 'react'
import { render } from '@testing-library/react';
import App from './App';
import mockData from './mockData'

beforeEach(()=>{
    fetchMock.once(JSON.stringify(mockData));
});

describe(
    '<app/> test', () => {
        it('renders <app>', () => {
            render(<App />);
        }
        );
    }
);