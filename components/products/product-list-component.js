angular.
module("buyblue").
component("productsList", {
    templateUrl: 'components/products/productList.html',
    controller: ['$http',
        function ProductsListController($http) {
            var self = this;
            $http({
                method: 'GET',
                url: 'assets/productsJson/data.json'
            }).then(function successCallback(response) {
                self.Products = response.data;
            }, function errorCallback(response) {
                 console.log("error in retriving data");
            });
            $http({
                method: 'GET',
                url: 'assets/productsJson/fashion.json'
            }).then(function successCallback(response) {
                self.fashion = response.data.fash;
                self.slideImg=response.data.fash[0];
                console.log(self.slideImg.imageUrl[0],"url");
                self.brand = response.data.brand;
            }, function errorCallback(response) {
                 console.log("error in retriving data in fashion");
            });
             self.scrolImg = function(imgUrl){
               self.slideImg = imgUrl;
            }
        }
    ],
    controllerAs: 'productListC'
})
