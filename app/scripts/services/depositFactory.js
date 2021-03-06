'use strict';

angular.module('bankPlusApp').factory('depositResource', function($resource){
    var resource = $resource('/bankplus-transactions/rest/:customerId/deposits/:depositId',{depositId:'@id'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false}});
    return resource;
});
