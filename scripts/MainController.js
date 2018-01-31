app.controller('MainController',['$scope',function($scope, $http) {
    $scope.timestamp = Date();
    $scope.smallnumber = 0;
    $scope.theMessage = "";
    $scope.checkNumber=function(){
        if(isNaN($scope.smallnumber) || $scope.smallnumber < 1 || $scope.smallnumber > 10){
            $scope.theMessage = "Number was expected to be between 1 and 10";
        } else {
            $scope.theMessage = "Number is good";
        }
    }

    $scope.Articles = [{"Title":"Amazing Museums", "Body":"<p>While most museums are a collection of old artifacts and stuff that no one is really interested in seeing, our museums area the best of the best.</p><p>You won't find anything like these any where else in the world. Our museums rival that of our closest competitors including the Museum of Bad Art, the Paris Sewers Museum and the Museum of Broken Relationships.</p><p>Come check them out...the fun is waiting for you.</p>","Image":"http://lorempixel.com/200/100/city/1"},
    {"Title":"SplashAnyone Waterpark","Body":"<p>Our waterpark is the biggest and best park in the Western World. Just south of interstate 2015, you'll find a sweet mix of Super Slides and lazy rivers.</p><p>If that wasn't enough, we have 376 of the best food trucks in the state serving everything from fried gummy bears to lemonade and pizza. Don't forget if you buy our collectors edition souvenir water park keepsake, you get free refills all year.</p><p>And we wouldn't be SplashAnyone without the rules about splashing... wait there are no rules.</p>","Image":"http://lorempixel.com/200/100/city/2"},
    {"Title":"Best Zoo in Town","Body":"<p>Our zoo is the biggest and best zoo in the whole region. Located right in the downtown area, it is easily accesible and makes for a perfect day in the city.</p><p>We have animals from all around the glob, but of course, we make sure that they are all kept in approprite habitats.  In addition, we make sure to get all our animals from either other zoos or shelters to not hinder those that live in the wild</p><p>Come visit us...We hope to see you soon!</p>","Image":"http://lorempixel.com/200/100/city/3"}];

    $scope.place_holder = 0;
    $scope.quantity = 0;
    $scope.warning = "";
    $scope.coolThings=function(){
        $scope.quantity = $scope.place_holder;
        if(isNaN($scope.quantity)){
            $scope.warning = "Please put a number of cool things";
        } else if ($scope.quantity > 3) {
            $scope.warning = "We don't have that many cool things :(";
        } else if ($scope.quantity < 0) {
            $scope.warning = "Why so negative?";
        } else if ($scope.quantity = 0) {
            $scope.warning = "Check out the cool stuff!";
        } else {
            $scope.quantity = $scope.place_holder;
            $scope.warning = "Sweet!";
        }
    }

    var _first = "Your";
    var _last = "Name";
    $scope.User = {
        firstName: function(first) {return arguments.length ? (_first = first) : _first},
        lastName: function(last) {return arguments.length ? (_last = last) : _last},
        fullName: function() {return _first + ' ' + _last;}
    }
}]);