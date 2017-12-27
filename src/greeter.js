import moment from 'moment';

function greet() {
  var day = moment().format('dddd');
  alert('Have a great ' + day);
};

export default greet;
