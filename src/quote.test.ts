import { fetchQuote } from './quotes';

test('fetchQuote returns a quote', async () => {
  const quote = await fetchQuote();
  expect(quote).not.toBeNull();
  expect(quote).toHaveProperty('content');
  expect(quote).toHaveProperty('author');
});