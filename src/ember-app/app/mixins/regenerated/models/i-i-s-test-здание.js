import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наимен: DS.attr('string')
});

export let ValidationRules = {
  наимен: {
    descriptionKey: 'models.i-i-s-test-здание.validations.наимен.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗданиеE', 'i-i-s-test-здание', {
    наимен: attr('Наимен', { index: 0 })
  });

  modelClass.defineProjection('ЗданиеL', 'i-i-s-test-здание', {
    наимен: attr('Наимен', { index: 0 })
  });
};
