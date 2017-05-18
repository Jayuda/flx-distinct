# flx-distinct

## about
This package use to distict field / document in collection Meteor Mongodb.

## Usage
flxDistinct can use at CLIENT and SERVER.

### RETURN ARRAY
let say you have collection CUSTOMER and want distict fields *country*
```javascript
var dataArray = flxDistinct.getArray(CUSTOMER, 'country', {aktifYN:true});
console.log(dataArray);

```

Will return :
```
['INDONESIA', 'SINGAPORE']
```

### RETURN OBJECT
let say you have collection CUSTOMER and want distict fields *country*
```javascript
var dataObject = flxDistinct.getObject(CUSTOMER, 'country', {aktifYN:true});
console.log(dataObject);

```

Will return :
```
[
  {
    _id:'2314asj123jlkj23jk',
    country:'INDONESIA'
  },
  {
    _id:'s98a0s9d6t23hjkdasd',
    country:'SINGAPORE'
  }
]
```
