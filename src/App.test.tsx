import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from './app/store'
import Demo from './pages/demo'

test('renders learn react link', () => {
    render(
        <Provider store={store}>
            <Demo />
        </Provider>
    )

    expect(screen.getByText(/learn/i)).toBeInTheDocument()
})
