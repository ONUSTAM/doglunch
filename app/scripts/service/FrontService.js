var FrontService = function() {
  console.log('FrontService');

  this.doglunch = function(params) {
    var success = function(data) {
      console.log('success !!');
    };
    var failed = function(data) {
      console.log('failed:', failed);
    };

    ApiClient(config.api.type.get, config.api.method.doglunch, params, success, failed);
  };
};
