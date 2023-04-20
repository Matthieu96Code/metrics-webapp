import React from 'react';
// import renderer from 'react-test-renderer';
import {
  render, screen,
  fireEvent,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import {
  // getItems,
  filter,
} from '../redux/ItemSlice';

const mockStore = configureMockStore([thunk]);

describe('Home', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      items: {
        filtered: [],
        field: '',
        items: [
          {
            id: 1,
            code: 'AED',
            description: 'United Arab Emirates Dirham',
          },
          {
            id: 2,
            code: 'AFN',
            description: 'Afghan Afghani',
          },
        ],
      },
    });
    store.dispatch = jest.fn();
  });

  test('renders the Home component with items', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
    expect(screen.getByText('AED')).toBeInTheDocument();
    expect(screen.getByText('United Arab Emirates Dirham')).toBeInTheDocument();
  });

  test('renders the Home component with filtered items', () => {
    store.getState().items.filtered = [
      {
        id: 2,
        code: 'AFN',
        description: 'Afghan Afghani',
      },
    ];
    store.getState().items.field = 'AFN';
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
    expect(screen.getByText('AFN')).toBeInTheDocument();
    expect(screen.queryByText('Afghan Afghani')).toBeInTheDocument();
    expect(screen.queryByText('United Arab Emirates Dirham')).not.toBeInTheDocument();
  });

  test('dispatches filter when input value changes', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'AED' } });
    expect(store.dispatch).toHaveBeenCalledWith(filter('AED'));
  });
});
