import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('roadmap-list', 'Integration | Component | roadmap list', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{roadmap-list}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#roadmap-list}}
      template block text
    {{/roadmap-list}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
