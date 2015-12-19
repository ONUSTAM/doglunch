var ApiClient = function(types, method, params, success, failed) {

  $.ajax({
      url: method,
      type: types,
      data: params,
      dataType: 'json'
  })
  .done(function( data, textStatus, jqXHR ) {
    success(data);
  })
  .fail(function( jqXHR, textStatus, errorThrown ) {
    failed(data);
  })

};
