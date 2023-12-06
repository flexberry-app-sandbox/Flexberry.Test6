import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-test-здание', 'Unit | Serializer | i-i-s-test-здание', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-test-здание',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-test-квартиры',

    'model:i-i-s-test-здание',
    'model:i-i-s-test-квартира',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
