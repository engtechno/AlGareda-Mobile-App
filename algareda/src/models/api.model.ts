export type NewsAPIParams = {
  page?: number;
  pageSize?: number;
  language?:
    | 'ar'
    | 'de'
    | 'en'
    | 'es'
    | 'fr'
    | 'he'
    | 'it'
    | 'nl'
    | 'no'
    | 'pt'
    | 'ru'
    | 'sv'
    | 'ud'
    | 'zh';
  q?: string;
};
