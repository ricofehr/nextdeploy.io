import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('twitter-widget', 'Integration | Component | twitter widget', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{twitter-widget}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#twitter-widget}}
      template block text
    {{/twitter-widget}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
