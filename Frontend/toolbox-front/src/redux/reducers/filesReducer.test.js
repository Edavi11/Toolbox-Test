import filesReducer, { fetchFiles } from './filesReducer';

test('should return the initial state', () => {
  expect(filesReducer(undefined, {})).toEqual({
    data: [],
    loading: false,
    error: null,
  });
});

test('should handle fetchFiles.fulfilled', () => {
  const previousState = {
    data: [],
    loading: true,
    error: null,
  };
  const newState = filesReducer(previousState, {
    type: fetchFiles.fulfilled.type,
    payload: [{ file: 'test.csv', lines: [] }],
  });
  expect(newState).toEqual({
    data: [{ file: 'test.csv', lines: [] }],
    loading: false,
    error: null,
  });
});
