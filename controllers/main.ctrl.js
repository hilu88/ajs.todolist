(function () {
    'use strict';
    
    angular
        .module('app')
        .controller('MainController', Controller);
    
    function Controller($scope, $rootScope, $localStorage) {

        $scope.items = [];

        if(!$localStorage.itemsTask){
            $scope.items = [
                {
                    title: 'First item with custom name',
                    isActive: false,
                    comments: ['Atlantis (Ancient Greek: Ἀτλαντὶς νῆσος, "island of Atlas") is a fictional island mentioned within an allegory on the hubris of nations in Plato\'s works Timaeus and Critias, where it represents the antagonist naval power that besieges "Ancient Athens", the pseudo-historic embodiment of Plato\'s ideal state in The Republic. In the story, Athens repels the Atlantean attack unlike any other nation of the known world,[1] supposedly giving testament to the superiority of Plato\'s concept of a state.[2][3] The story concludes with Atlantis falling out of favor with the deities and submerging into the Atlantic Ocean.'
                        , 'Despite its minor importance in Plato\'s work, the Atlantis story has had a considerable impact on literature. The allegorical aspect of Atlantis was taken up in utopian works of several Renaissance writers, such as Francis Bacon\'s New Atlantis and Thomas More\'s Utopia.[4][5] On the other hand, nineteenth-century amateur scholars misinterpreted Plato\'s narrative as historical tradition, most notably in Ignatius L. Donnelly\'s Atlantis: The Antediluvian World. Plato\'s vague indications of the time of the events—more than 9,000 years before his time[6]—and the alleged location of Atlantis—"beyond the Pillars of Hercules"—has led to much pseudoscientific speculation.[7] As a consequence, Atlantis has become a byword for any and all supposed advanced prehistoric lost civilizations and continues to inspire contemporary fiction, from comic books to films.'
                        , 'While present-day philologists and classicists agree on the story\'s fictional character,[8][9] there is still debate on what served as its inspiration. As for instance with the story of Gyges,[10] Plato is known to have freely borrowed some of his allegories and metaphors from older traditions. This led a number of scholars to investigate possible inspiration of Atlantis from Egyptian records of the Thera eruption,[11][12] the Sea Peoples invasion,[13] or the Trojan War.[14] Others have rejected this chain of tradition as implausible and insist that Plato created an entirely fictional nation as his example,[15][16][17] drawing loose inspiration from contemporary events such as the failed Athenian invasion of Sicily in 415–413 BC or the destruction of Helike in 373 BC.']
                },
                {
                    title: 'Second item',
                    isActive: true,
                    comments: ['NUMBERS', '1', '2', '3', '7', '77', '777', '777']
                },
                {
                    title: 'Hello World',
                    isActive: false,
                    comments: ['Hello world']
                }];
        } else {
            $scope.items = $localStorage.itemsTask;
        }

        $scope.active = null;

        function init() {
            for (var i = 0; i < $scope.items.length; i++){
                if($scope.items[i].isActive){
                    $scope.active = $scope.items[i];
                    $scope.active.isActive = true;
                }
            }
        }

        init();

        $scope.add = function () {
            if(!$scope.addItem){
                alert('Cant find text');
                return;
            }
            if($scope.items.indexOf($scope.addItem)==-1){
                var newItem = {title: $scope.addItem, isActive: false, comments: []};
                $scope.items.push(newItem);
                $scope.addItem = "";
            }
        };
        
        $scope.delete = function (item) {
            $scope.items.splice(item, 1);
            $localStorage.itemsTask = $scope.items
            $scope.active = null;
        };

        $scope.showComments = function (item) {
            $scope.active = item;
            $scope.items.map(function (item) {
                item.isActive = false;
            });
            $scope.active.isActive = true;
        };
        
        $scope.addComments = function () {
            if(!$scope.addComment){
                alert('Cant find text');
                return;
            }
            $scope.active.comments.push($scope.addComment);
            $scope.addComment = '';
            $localStorage.itemsTask = $scope.items;
        }

    }

})();