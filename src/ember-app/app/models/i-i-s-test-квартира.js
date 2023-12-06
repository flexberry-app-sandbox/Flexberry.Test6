import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as КвартираMixin
} from '../mixins/regenerated/models/i-i-s-test-квартира';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(КвартираMixin, Validations, {
});

defineProjections(Model);

export default Model;
