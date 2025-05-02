
import { render, fireEvent } from '../../utils/test.utils';
import LoginScreen from '../../../src/views/auth/Login';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
}));

describe('Renders Home Screen correctly', () => {
    it('Renders Home Screen correctly', () => {
      render(<LoginScreen />, {});
    });
    it('Login on click button', async () => {
      const component = render(
          <LoginScreen />, {},
      );
      expect(component.getByTestId('loginButton')).toBeTruthy();
      fireEvent.press(component.getByText('Presiona para entrar'));
      expect(mockDispatch).toHaveBeenCalled();
    });
});
