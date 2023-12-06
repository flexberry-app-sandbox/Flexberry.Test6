import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTestЗданиеLForm from './forms/i-i-s-test-здание-l';
import IISTestКвартираLForm from './forms/i-i-s-test-квартира-l';
import IISTestЗданиеEForm from './forms/i-i-s-test-здание-e';
import IISTestКвартираEForm from './forms/i-i-s-test-квартира-e';
import IISTestЗданиеModel from './models/i-i-s-test-здание';
import IISTestКвартираModel from './models/i-i-s-test-квартира';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-test-здание': IISTestЗданиеModel,
    'i-i-s-test-квартира': IISTestКвартираModel
  },

  'application-name': 'Test',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Test',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test',
          title: 'Test'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        test: {
          caption: 'Test',
          title: 'Test',
          'i-i-s-test-здание-l': {
            caption: 'Здание',
            title: ''
          },
          'i-i-s-test-квартира-l': {
            caption: 'Квартира',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-test-здание-l': IISTestЗданиеLForm,
    'i-i-s-test-квартира-l': IISTestКвартираLForm,
    'i-i-s-test-здание-e': IISTestЗданиеEForm,
    'i-i-s-test-квартира-e': IISTestКвартираEForm
  },

});

export default translations;
