import React from 'react';
import {
  render, screen,
  fireEvent,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { BrowserRouter } from 'react-router-dom';
import Page from '../Pages/Page';
import store from '../store';

describe('Page', () => {
  const history = createMemoryHistory();

  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter history={history}>
          <Page />
        </BrowserRouter>
      </Provider>,
    );
  });

  test('renders the details page', () => {
    expect(screen.getByText(/time series data/i)).toBeInTheDocument();
    expect(screen.getByText(/currency in Euro from/i)).toBeInTheDocument();
    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  test('navigates back to previous page when back button is clicked', () => {
    const backButton = screen.getByRole('button', { name: '' });
    fireEvent.click(backButton);
    expect(history.location.pathname).toBe('/');
  });

  test('renders the details table with the correct data', () => {
    const { details } = store.getState().items;
    const dateCells = screen.getAllByRole('columnheader', { name: /date/i });
    const priceCells = screen.getAllByRole('columnheader', { name: /price/i });

    expect(dateCells).toHaveLength(details.length + 1);
    expect(priceCells).toHaveLength(details.length + 1);

    details.forEach((detail, index) => {
      expect(dateCells[index + 1]).toHaveTextContent(detail.key);
      expect(priceCells[index + 1]).toHaveTextContent(detail.value);
    });
  });
});
