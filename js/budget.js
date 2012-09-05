function Budgetizer($scope) {
    $scope.budgetTables = [
        {
            label:'Inkomsten',
            parts:
                [{
                    label: 'Inkomsten per maand',
                    key: 'inkomsten-per-maand',
                    items:
                        [
                            { label: 'Netto maandsalaris kostwinner', value: 0 },
                            { label: 'Inkomsten uit uitkeringen', value: 0 },
                            { label: '(Bij)verdiensten man en/of vrouw', value: 0 },
                            { label: 'Reiskostenvergoeding', value: 0 },
                            { label: 'Tegemoetkoming ziektekosten', value: 0 },
                            { label: 'Vakantietoeslag', value: 0 },
                            { label: 'Gratifikatie/13e maand', value: 0 },
                            { label: 'Kinderbijslag', value: 0 },
                            { label: 'Tegemoetkoming Studiekosten/Studiefinanciering', value: 0 },
                            { label: 'Huursubsidie/subsidie koopwoning', value: 0 },
                            { label: 'Alimentatie', value: 0 },
                            { label: 'Kostgeld inwonende personen', value: 0 },
                            { label: 'Belastingteruggave', value: 0 }
                        ]
                }],
            SubTotal: 0
        },
        {
            label:'Vaste lasten',
            parts:
                [{
                    label: 'Huur/hypotheek',
                    key: 'huur-hypotheek',
                    items:
                        [
                            { label: 'Huur of rente en aflossing hypotheek', value: 0 },
                            { label: 'Servicekosten', value: 0 }
                        ],
                    SubSubTotal: 0
                },
                {
                    label: 'Gas, Water, Electriciteit',
                    key: 'gas-water-electriciteit',
                    items:
                        [
                            { label: 'Gas/andere brandstoffen', value: 0 },
                            { label: 'Elektriciteit', value: 0 },
                            { label: 'Water', value: 0 }
                        ],
                    SubSubTotal: 0
                },
                {
                    label: 'Heffingen',
                    key: 'heffingen',
                    items:
                        [
                            { label: 'Onroerende zaakbelasting', value: 0 },
                            { label: 'Reinigingsrecht/rioolrecht', value: 0 },
                            { label: 'Waterzuiveringsheffing', value: 0 },
                            { label: 'Inkomstenbelasting (voor zover niet in salaris/inkomsten verwerkt)', value: 0 },
                            { label: 'Overige heffingen', value: 0 }
                        ],
                    SubSubTotal: 0
                },
                {
                    label: 'Verzekeringen',
                    key: 'verzekeringen',
                    items:
                        [
                            { label: 'Ziektekostenverzekering (aanvullende zf-premie en nominale zf-premie)', value: 0 },
                            { label: 'Aansprakelijkheidsverz. particulieren', value: 0 },
                            { label: 'Inboedelverzekering', value: 0 },
                            { label: 'Opstalverzekering', value: 0 },
                            { label: 'Levensverzekering(en)', value: 0 },
                            { label: 'Begrafenis-/crematieverzekering', value: 0 }
                        ],
                    SubSubTotal: 0
                },
                {
                    label: 'Contributies/abonnementen',
                    key: 'contributies-abonnementen',
                    items:
                        [
                            { label: 'Abonnementen kranten/tijdschriften', value: 0 },
                            { label: 'Contributies (sport)verenigingen', value: 0 },
                            { label: 'Goede doelen/collectes', value: 0 },
                            { label: 'Overige contributies/abonnementen', value: 0 },
                            { label: 'Vaste telefoon/internet/televisie', value: 0 },
                            { label: 'Mobiele telefoon', value: 0 },
                        ],
                    SubSubTotal: 0
                },
                {
                    label: 'Auto, motor, bromfiets (alle kosten)',
                    key: 'auto-motor-bromfiets',
                    items:
                        [
                            { label: 'Belasting, kentekenbewijs deel III', value: 0 },
                            { label: 'Verzekering', value: 0 },
                            { label: 'Onderhoud', value: 0 },
                            { label: 'Afbetaling/afschrijving', value: 0 },
                            { label: 'Brandstof', value: 0 },
                            { label: ' Garagehuur', value: 0 },
                        ],
                    SubSubTotal: 0
                },
                {
                    label: 'Overig',
                    key: 'overig',
                    items:
                        [
                            { label: 'Alimentatie', value: 0 },
                            { label: 'Afbetalingen', value: 0 },
                        ],
                    SubSubTotal: 0
                },
            ],
            SubTotal: 0
        },
        {
            label:'Reserveringen',
            parts:
                [{
                    label: 'Reserveringsuitgaven per maand',
                    key: 'reserveringsuitgaven',
                    items:
                        [
                            { label: 'Kleding en schoeisel', value: 0 },
                            { label: 'Inventaris', value: 0 },
                            { label: 'Onderhoud en tuin', value: 0 },
                            { label: 'Extra ziektekosten', value: 0 },
                            { label: 'Vrijetijdsuitgaven', value: 0 },
                            { label: 'Uitgaan', value: 0 },
                            { label: 'Vakantie en weekenden', value: 0 },
                            { label: 'Extra sparen', value: 0 },
                            { label: 'Onvoorzien', value: 0 },
                        ],
                    SubSubTotal: 0
                }],
            SubTotal: 0
        },
        {
            label:'Huishouding',
            parts:
                [{
                    label: 'Huishoudelijke uitgaven per maand',
                    key: 'huishoudelijke-uitgaven',
                    items:
                        [
                            { label: 'Voeding', value: 0 },
                            { label: 'Versnaperingen', value: 0 },
                            { label: 'Roken', value: 0 },
                            { label: 'Reiniging', value: 0 },
                            { label: 'Persoonlijke verzorging', value: 0 },
                            { label: 'Huishoudelijke dienstverlening', value: 0 },
                            { label: 'Huisdieren', value: 0 },
                            { label: 'Postzegels, bloemen, tijdschriften', value: 0 },
                            { label: 'Cadeaus, collectes, giften', value: 0 },
                            { label: 'Speelgoed', value: 0 },
                        ],
                    SubSubTotal: 0
                }],
            SubTotal: 0
        },
    ];

    $scope.calculate = function() {
        angular.forEach($scope.budgetTables, function(budgetTable) {
            var totalPart = 0;
            angular.forEach(budgetTable.parts, function(part) {
                var totalItem = 0;
                angular.forEach(part.items, function(item) {
                    totalItem = totalItem + item.value;
                });

                part.SubSubTotal = totalItem;

                totalPart = totalPart + part.SubSubTotal;
            });

            budgetTable.SubTotal = totalPart;
        });
    };

    $scope.GetTotalIncome = function() {
        return $scope.budgetTables[0].SubTotal;
    };

    $scope.GetTotalOutcome = function() {
        return $scope.budgetTables[1].SubTotal + $scope.budgetTables[2].SubTotal + $scope.budgetTables[3].SubTotal;
    };

    $scope.GetSum = function() {
        var outcome = $scope.GetTotalIncome() - $scope.GetTotalOutcome();
        return outcome;
    };

    $scope.GetSumClass = function() {
        var outcome = $scope.GetTotalIncome() - $scope.GetTotalOutcome();
        if (outcome > 0) {
            return 'alert-success';
        }
        else {
            return 'alert-error';
        }
    };

    $scope.flipTable = function(part) {
        $('#' + part.key + ' thead span').toggleClass('icon-minus').toggleClass('icon-plus');
        $('#' + part.key + ' tr:not(.info) td').fadeToggle();
    };

}
