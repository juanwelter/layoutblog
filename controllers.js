/* controller da pagina details */
myApp.controller('DetailsController', ['$scope', '$http', function ($scope, $http){
    /* pega Url */
    var url = window.location.href;
    /* parametro id */
    var id = url.split('?')[1];
    id = url.split('=')[1];
    $http.get("https://api-fake-blog.onrender.com/postagem/&#39; + id)",
        success(function(data) {
            $scope.publicacao = data;
        }
    ));
  }]);