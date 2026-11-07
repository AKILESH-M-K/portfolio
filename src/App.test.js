import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Portfolio Application Tests', () => {
  test('renders hero information, headings, and branding', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Akilesh M K/i);
    expect(screen.getByRole('heading', { name: /about me/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /technical proficiencies/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /featured engineering projects/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /connect & inquire/i })).toBeInTheDocument();
  });

  test('renders all verified featured projects', () => {
    render(<App />);
    expect(screen.getByText(/CineBook — Movie Ticket Reservation Platform/i)).toBeInTheDocument();
    expect(screen.getByText(/EDR Threat Detection & Hunting Lab/i)).toBeInTheDocument();
    expect(screen.getByText(/Decoupled Microservices Architecture/i)).toBeInTheDocument();
    expect(screen.getByText(/Production Engineering Portfolio/i)).toBeInTheDocument();
  });

  test('theme switcher toggles active theme state', () => {
    render(<App />);
    const lightThemeButton = screen.getByRole('button', { name: /light theme/i });
    expect(lightThemeButton).toBeInTheDocument();
    fireEvent.click(lightThemeButton);
    expect(lightThemeButton).toHaveAttribute('aria-pressed', 'true');
  });

  test('contact form requires all fields and blocks empty submission', () => {
    render(<App />);
    const submitButton = screen.getByRole('button', { name: /send message/i });
    expect(submitButton).toBeInTheDocument();

    // Clicking submit with empty fields triggers validation error
    fireEvent.click(submitButton);
    expect(screen.getByText(/all required fields must be completed/i)).toBeInTheDocument();
  });

  test('contact form validates invalid email format', () => {
    render(<App />);
    const nameInput = screen.getByLabelText(/full name/i);
    const emailInput = screen.getByLabelText(/email address/i);
    const subjectInput = screen.getByLabelText(/subject \/ topic/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole('button', { name: /send message/i });

    fireEvent.change(nameInput, { target: { value: 'Alice Smith' } });
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.change(subjectInput, { target: { value: 'Job Opportunity' } });
    fireEvent.change(messageInput, { target: { value: 'Hello, this is a test message for you.' } });

    fireEvent.click(submitButton);
    expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();
  });
});
