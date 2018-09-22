declare var require: any;
let config = require('./../../app.config.json');

export class Config {
  static APP_VERSION = config.APP_VERSION;

  static APP_KEY = config.APP_KEY;

  static APP_TYPE = config.APP_TYPE;

  static APP_NAME = config.APP_NAME;

  static STYLE = config.STYLE;

  static THEME_COLOR = config.THEME_COLOR;

  static DEVICE_MODE: 'mobile' | 'desktop';

  static PLATFORM: 'iOS' | 'android';

  static SPONSORS = config.SPONSORS;

  static COUNTRY = config.COUNTRY;

  static AVAILABLE_LANGUAGES: Array<{code: string, name: string}> = [
    {code: 'en', name: 'English'} ,
    {code: 'ru', name: "Русский"},
    {code: 'pl', name: 'Polski'},
    {code: 'ua', name: 'Українська'}
  ];

  static HOSTS = {
    API: config.HOSTS.API,
    PHOTO: config.HOSTS.PHOTO,
    INFOGRAPHICS: config.HOSTS.INFOGRAPHICS,
    LOCAL: config.HOSTS.LOCAL
  };

}