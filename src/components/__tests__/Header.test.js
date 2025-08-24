const { render, screen, fireEvent } = require("@testing-library/react")
import "@testing-library/jest-dom";
import { Provider } from 'react-redux';
import Header from '../Header';
import appStore from '../../utils/appStore';
import { BrowserRouter } from 'react-router-dom';

it("Should load Header Component with a login button", () => {
    render(
    <BrowserRouter future={{ v7_relativeSplatPath: true }}>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login"});

    expect(loginButton).toBeInTheDocument();
});

it("Should load Cart items", () => {
    render(
    <BrowserRouter future={{ v7_relativeSplatPath: true }}>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
    );

    const cartItems = screen.getByText(/Cart/);

    expect(cartItems).toBeInTheDocument();
});

it("Should change Login Button to Logout on click", () => {
    render(
    <BrowserRouter future={{ v7_relativeSplatPath: true }}>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login"});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", { name: "Logout"});

    expect(logoutButton).toBeInTheDocument();
});