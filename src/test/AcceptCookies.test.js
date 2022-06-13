import { render, screen, fireEvent, getByLabelText } from '@testing-library/react';
import AcceptCookies from '../components/AcceptCookies';

describe('AcceptCookies component', () => {

    let checkbox;
    let article;
    beforeEach(() => {
        render(<AcceptCookies />);
        checkbox = screen.getByLabelText('Acepta las cookies');
        article = screen.getByRole('article', { name: 'confirmación cookies' });
    })

    test('si el checkbox está en el componente y está desactivado', () => {
        expect(checkbox).toBeInTheDocument();
        expect(checkbox).not.toBeChecked();
    });

    test('si cambia el texto al pulsar el checkbox', () => {
        fireEvent.click(checkbox);
        expect(checkbox).toBeChecked();
        expect(article.textContent).toBe('Cookies aceptadas');
    })

})