jest.mock('../src/config', () => {
  const actual = jest.requireActual('../src/config');
  return {
    ...actual,
    EMAIL_VERIFICATION_SECRET: actual.EMAIL_VERIFICATION_SECRET || 'shhhhh',
  };
});
