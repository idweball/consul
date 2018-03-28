import Controller from '@ember/controller';
import { computed } from '@ember/object';
import WithFiltering from 'consul-ui/mixins/with-filtering';
export default Controller.extend(WithFiltering, {
  columns: [25, 25, 25, 25],
  unhealthy: computed('filtered', function() {
    return this.get('filtered').filter(function(item) {
      return item.get('isUnhealthy');
    });
  }),
  healthy: computed('filtered', function() {
    return this.get('filtered').filter(function(item) {
      return item.get('isHealthy');
    });
  }),
  filter: function(item, { s = '', status = '' }) {
    return (
      item
        .get('Node')
        .toLowerCase()
        .indexOf(s.toLowerCase()) === 0 && item.hasStatus(status)
    );
  },
});
