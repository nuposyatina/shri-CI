export const formatDuration = (duration) => {
  const seconds = duration % 60;
  const minutes = Math.floor(duration / 60);
  const hours = Math.floor(minutes / 60);
  return hours > 0 ? `${hours} ч ${minutes} мин` : `${minutes} мин ${seconds} сек`
};
