var FrontController = function() {
  var frontService = new FrontService();

  $('#button-doglucnh').click(function(){
    var params = {
      id: '00001',
      name: 'xxxooo'
    }
    doglunch(params);
  });

  var doglunch = function(params) {
    frontService.doglunch(params);
  };
};
