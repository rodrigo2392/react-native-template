
import { fireEvent, render } from '../../utils/test.utils';
import SettingsScreen from '../../../src/views/app/Settings';
import { setTheme } from '../../../src/redux/slices/app.slice';

const mockDispatch = jest.fn();
const mockedNavigate = jest.fn();


jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
}));

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
    render(<SettingsScreen />, {});
  });


  it('Check light theme exists', async () => {
    const component = render(
      <SettingsScreen />,
      {
        actionToDispatch: setTheme('dark'),
      },
    );
    const darkButton = await component.findByTestId('lightText');
    expect(darkButton).toBeTruthy();
  });

  it('Check dark theme exists', async () => {
    const component = render(
      <SettingsScreen />,
      {
        actionToDispatch: setTheme('light'),
      },
    );
    const darkButton = await component.findByTestId('darkText');
    expect(darkButton).toBeTruthy();
  });

  it('click button to change theme to dark', async () => {
    const component = render(
      <SettingsScreen />,
      {
        actionToDispatch: setTheme('light'),
      },
    );
    fireEvent.press(await component.findByTestId('themeButton'));
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('click button to change theme to light', async () => {
    const component = render(
      <SettingsScreen />,
      {
        actionToDispatch: setTheme('dark'),
      },
    );
    fireEvent.press(await component.findByTestId('themeButton'));
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('Go back', async () => {
    const component = render(
      <SettingsScreen />,
      {
      },
    );
    fireEvent.press(component.getByText('Atrás'));
    expect(mockedNavigate).toHaveBeenCalled();
  });
});
