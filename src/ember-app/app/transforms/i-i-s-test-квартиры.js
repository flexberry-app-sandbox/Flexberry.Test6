import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import КвартирыEnum from '../enums/i-i-s-test-квартиры';

export default FlexberryEnum.extend({
  enum: КвартирыEnum,
  sourceType: 'IIS.Test.Квартиры'
});
