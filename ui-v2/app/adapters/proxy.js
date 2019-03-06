import Adapter from './application';
export default Adapter.extend({
  requestForQuery: function(request, { dc, index, id }) {
    if (typeof id === 'undefined') {
      throw new Error('You must specify an id');
    }
    return request`
      GET /v1/catalog/connect/${id}?${{ dc, index }}
    `;
  },
});
