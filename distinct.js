flxDistinct = {
  getArray: function(oColl, sfield, oWhere) {
    var distinctArray = this.getObject(oColl, sfield, oWhere)
    return _.pluck(distinctArray, sfield);
  },
  getObject: function(oColl, sfield, oWhere) {
    var sFields = {};
    sFields[sfield] = 1;

    var sSort = {};
    sSort[sfield] = 1;

    var myArray = oColl.find(oWhere, {fields: sFields, sort: sSort}).fetch();
    var dataO = _.uniq(myArray, false, function(d) {
      return d[sfield]
    });
    return dataO
  }
}
