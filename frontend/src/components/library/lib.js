import { localize } from 'lib';

export const formatDuration = (duration) => {
  const seconds = duration % 60;
  const minutes = Math.floor(duration / 60);
  const hours = Math.floor(minutes / 60);
  return hours > 0 ? `${hours} ${localize('Build_hours')} ${minutes} ${localize('Build_minutes')}` : `${minutes} ${localize('Build_minutes')} ${seconds} ${localize('Build_seconds')}`
};

export const declination = (number, words) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return words[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
};
