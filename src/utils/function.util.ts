export const toQueryString = (
  params: Record<string, string | number | boolean>,
): string => {
  return new URLSearchParams(params as Record<string, string>).toString();
};

export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const trimString = (str: string, length: number = 18): string => {
  if (str?.length > length) return str.substring(0, length) + '...';

  return str;
};
