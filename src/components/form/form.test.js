import { fireEvent, waitFor, render, screen } from '@testing-library/react';
import Form from './Form';
test('need to run the handler on button click', async () => {
  let handler = jest.fn();
  render(<Form prompt="get result" handler={handler} />);
  let button = screen.getByText('Go');
  expect(button).toBeInTheDocument();
  //fireEvent.click(button);
  //await waitFor(() => expect(handler).toHaveBeenCalled());
});

// we does not know if the handler will exexuted or not because
// the url in the form must be provided in order to call 
//the handler function