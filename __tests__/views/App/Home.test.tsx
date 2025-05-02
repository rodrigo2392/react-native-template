
import {fireEvent, render} from '../../utils/test.utils';
import HomeScreen from '../../../src/views/app/Home';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
}));

describe('Renders Home Screen correctly', () => {
  it('Renders Home Screen correctly', () => {
    render(<HomeScreen />, {});
  });

  it('Click logout button functionality', async () => {
    const component = render(
      <HomeScreen />, {}
    );
    fireEvent.press(await component.findByTestId('logoutButton'));
    expect(mockDispatch).toHaveBeenCalled();
  });
});
