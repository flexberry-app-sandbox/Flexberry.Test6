import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-test-здание-l');
  this.route('i-i-s-test-здание-e',
  { path: 'i-i-s-test-здание-e/:id' });
  this.route('i-i-s-test-здание-e.new',
  { path: 'i-i-s-test-здание-e/new' });
  this.route('i-i-s-test-квартира-l');
  this.route('i-i-s-test-квартира-e',
  { path: 'i-i-s-test-квартира-e/:id' });
  this.route('i-i-s-test-квартира-e.new',
  { path: 'i-i-s-test-квартира-e/new' });
});

export default Router;
