import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кв: DS.attr('i-i-s-test-квартиры'),
  номер: DS.attr('number'),
  здание: DS.belongsTo('i-i-s-test-здание', { inverse: null, async: false })
});

export let ValidationRules = {
  кв: {
    descriptionKey: 'models.i-i-s-test-квартира.validations.кв.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-test-квартира.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  здание: {
    descriptionKey: 'models.i-i-s-test-квартира.validations.здание.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КвартираE', 'i-i-s-test-квартира', {
    номер: attr('Номер', { index: 0 }),
    кв: attr('Кв', { index: 1 }),
    здание: belongsTo('i-i-s-test-здание', 'Здание', {
      наимен: attr('Наимен', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наимен' })
  });

  modelClass.defineProjection('КвартираL', 'i-i-s-test-квартира', {
    номер: attr('Номер', { index: 0 }),
    кв: attr('Кв', { index: 1 }),
    здание: belongsTo('i-i-s-test-здание', 'Наимен', {
      наимен: attr('Наимен', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
