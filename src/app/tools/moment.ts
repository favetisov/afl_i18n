import * as originalMoment from 'moment-timezone';

export function moment(...args) {
  var self = originalMoment(...args);
  self.__proto__ = moment.prototype;
  return self;
}

moment.prototype.__proto__ = originalMoment.prototype;

moment.prototype.originalFormat = moment.prototype.format;

moment.prototype.format = function(f) {
  if (moment()['_d']+''.indexOf('(EET)') != -1) {
    return this.originalFormat(f);
  }
  if (moment()['_d']+''.indexOf('(MSK)') != -1) {
    return this.utc().utcOffset('+0300').originalFormat(f);
  }
  return this.originalFormat(f);
};
