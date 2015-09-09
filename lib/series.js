'use strict';

function Series (string) {
  if (!(this instanceof Series)) return new Series(string);

  this.string = string;
  this.digits = this.digitsFrom(string);
};

Series.prototype.digitsFrom = function (string) {
  var digits = [];

  []["forEach"].call(string, function (character) {
    digits.push(Number(character))
  })

  return digits;
};

Series.prototype.slices = function (sliceLength) {
  if (sliceLength > this.digits.length) throw(new Error('Slice size is too big.'));

  var slices = [];
  var limit = this.digits.length - sliceLength + 1

  for (var i = 0; i < limit; i++) {
    var slice = this.digits.slice(i, i + sliceLength);

    slices.push(slice);
  }

  return slices;
};
