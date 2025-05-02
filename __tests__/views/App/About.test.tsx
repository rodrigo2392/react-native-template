
import { render,fireEvent } from '../../utils/test.utils';
import AboutScreen from '../../../src/views/app/About';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
      goBack: mockedNavigate,
    }),
  };
});

describe('Renders Home Screen correctly', () => {
    it('Renders Home Screen correctly', () => {
      render(<AboutScreen />, {});
    });
    it('Call button to navigate', async () => {
      const component = render(
            <AboutScreen />,
          {},
        );
      fireEvent.press(component.getByTestId('goToSettingsButton'));
      expect(mockedNavigate).toHaveBeenCalled();
    });
});
