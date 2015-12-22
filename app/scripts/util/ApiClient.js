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
    console.log(jqXHR);
    console.log(textStatus);
    console.log(errorThrown);
    if (jqXHR.status === 404) {
      window.location.href = '404.html';
    }
    failed();
  })

};
