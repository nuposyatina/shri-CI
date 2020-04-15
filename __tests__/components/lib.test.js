import { formatDuration } from 'library/lib';

describe('formatDuration', () => {
  test.each`
    duration | result
    ${0}     | ${'0 мин 0 сек'}
    ${59}    | ${'0 мин 59 сек'}
    ${61}    | ${'1 мин 1 сек'}
    ${59}    | ${'0 мин 59 сек'}
    ${3599}  | ${'59 мин 59 сек'}
    ${3600}  | ${'1 ч 0 мин'}
    ${3601}  | ${'1 ч 1 мин'}
  `('Функция форматирования времени правильно форматирует продолжительность билда, значение $duration', ({ duration, result }) => {
    expect(formatDuration(duration)).toBe(result);
  })
})