//Module - Dravya Admin Home
(function (app) {
    'use strict';

    app.config(config);
    app.run(run);

    //Routing functionalities
    config.$inject = ['$routeProvider', '$logProvider'];
    function config($routeProvider, $logProvider) {
        $logProvider.debugEnabled(false);
        $routeProvider
            .when("/", {
                templateUrl: "scripts/spa/QBSAdmin/dashboard/dashboard.html",
                controller: "asset.admin.dashboard.ctrl",
                resolve: { isAuthenticated: isAuthenticated }
            })
             .when("/login", {
                 templateUrl: "scripts/spa/QBSAdmin/login/login.html",
                 controller: "loginCtrl",
             })
             .when("/about", {
                 templateUrl: "scripts/spa/QBSAdmin/about/about.html",
                 controller: "asset.admin.dashboard.ctrl",
                 resolve: { isAuthenticated: isAuthenticated }
             })
             .when("/ingredients", {
                 templateUrl: "scripts/spa/QBSAdmin/ingredients/IngredientList.html",
                 controller: "asset.admin.ingredient.ctrl",
                 resolve: { isAuthenticated: isAuthenticated }
             })
              .when("/ingredients/new", {
                  templateUrl: "scripts/spa/QBSAdmin/ingredients/IngredientHeader.html",
                  controller: "asset.admin.ingredient.ctrl",
                  resolve: { isAuthenticated: isAuthenticated }
              })
             .when("/ingredients/detail/:id", {
                 templateUrl: "scripts/spa/QBSAdmin/ingredients/IngredientDetail.html",
                 controller: "asset.admin.ingredient.ctrl",
                 resolve: { isAuthenticated: isAuthenticated }
             })
            .when("/users", {
                templateUrl: "scripts/spa/QBSAdmin/users/UsersList.html",
                controller: "asset.admin.users.ctrl",
                resolve: { isAuthenticated: isAuthenticated }
            })
             .when("/users/new", {
                 templateUrl: "scripts/spa/QBSAdmin/users/UserRegister.html",
                 controller: "asset.admin.users.register.ctrl",
                 resolve: { isAuthenticated: isAuthenticated }
             })
            .when("/users/edit/:id", {
                templateUrl: "scripts/spa/QBSAdmin/users/UserRegister.html",
                controller: "asset.admin.users.register.ctrl",
                resolve: { isAuthenticated: isAuthenticated }
            })
            .when("/transactions/assettransfer", {
                templateUrl: "scripts/spa/QBSAdmin/transactions/AssetTransfer.html",
                controller: "asset.transactions.assettransfer.ctrl",
                resolve: { isAuthenticated: isAuthenticated }
            })
            .when("/transactions/assettest", {
                templateUrl: "scripts/spa/QBSAdmin/transactions/AssetTest.html",
                controller: "assetTestControl",
                resolve: { isAuthenticated: isAuthenticated }
            })

            .when("/departments", {
                templateUrl: "scripts/spa/QBSAdmin/department/departmentList.html",
                controller: "asset.admin.department.ctrl",
                resolve: { isAuthenticated: isAuthenticated }
            })

            .when("/locations", {
                templateUrl: "scripts/spa/QBSAdmin/locations/locations.html",
                controller: "asset.admin.locations.ctrl",
                resolve: { isAuthenticated: isAuthenticated }
            })

            .when("/assettypes", {
                templateUrl: "scripts/spa/QBSAdmin/assettypes/AssetTypeList.html",
                controller: "asset.admin.assettype.ctrl",
                resolve: { isAuthenticated: isAuthenticated }
            })

             .when("/assettypes/new", {
                 templateUrl: "scripts/spa/QBSAdmin/assettypes/AssetType.html",
                 controller: "asset.admin.assettype.new.ctrl",
                 resolve: { isAuthenticated: isAuthenticated }
             })

             .when("/assettypes/edit/:id", {
                 templateUrl: "scripts/spa/QBSAdmin/assettypes/AssetType.html",
                 controller: "asset.admin.assettype.new.ctrl",
                 resolve: { isAuthenticated: isAuthenticated }
             })

            .when("/employees", {
                templateUrl: "scripts/spa/QBSAdmin/employees/EmployeeList.html",
                controller: "asset.admin.employees.ctrl",
                resolve: { isAuthenticated: isAuthenticated }
            })

            .when("/employees/new", {
                templateUrl: "scripts/spa/QBSAdmin/employees/EmployeeRegister.html",
                controller: "asset.admin.employees.ctrl",
                resolve: { isAuthenticated: isAuthenticated }
            })

            .when("/employees/edit/:id", {
                templateUrl: "scripts/spa/QBSAdmin/employees/EmployeeRegister.html",
                controller: "asset.admin.employees.ctrl",
                resolve: { isAuthenticated: isAuthenticated }

            })

            .when("/ownerships", {
                templateUrl: "scripts/spa/QBSAdmin/ownership/ownership.html",
                controller: "asset.admin.ownership.ctrl",
                resolve: { isAuthenticated: isAuthenticated }
            })

            .when("/suppliers", {
                templateUrl: "scripts/spa/QBSAdmin/supplier/supplierList.html",
                controller: "asset.admin.suppliers.ctrl",
                resolve: { isAuthenticated: isAuthenticated }
            })


            .when("/suppliers/edit/:id", {
                templateUrl: "scripts/spa/QBSAdmin/supplier/Supplier.html",
                controller: "asset.admin.suppliers.ctrl",
                resolve: { isAuthenticated: isAuthenticated }
            })

            .when("/suppliers/new", {
                templateUrl: "scripts/spa/QBSAdmin/supplier/Supplier.html",
                controller: "asset.admin.suppliers.ctrl",
                resolve: { isAuthenticated: isAuthenticated }
            })

            .when("/customerLocations", {
                templateUrl: "scripts/spa/QBSAdmin/customerLocations/customerLocationsList.html",
                controller: "asset.admin.customer.location.ctrl",
                resolve: { isAuthenticated: isAuthenticated }
            })

             .when("/customers", {
                 templateUrl: "scripts/spa/QBSAdmin/customer/customerList.html",
                 controller: "asset.admin.customers.ctrl",
                 resolve: { isAuthenticated: isAuthenticated }
             })

            .when("/customers/new", {
                templateUrl: "scripts/spa/QBSAdmin/customer/Customer.html",
                controller: "asset.admin.customers.ctrl",
                resolve: { isAuthenticated: isAuthenticated }
            })

            .when("/customers/edit/:id", {
                templateUrl: "scripts/spa/QBSAdmin/customer/Customer.html",
                controller: "asset.admin.customers.ctrl",
                resolve: { isAuthenticated: isAuthenticated }
            })


            .when("/assetRegister", {
                templateUrl: "scripts/spa/QBSAdmin/assetRegister/assetRegisterList.html",
                controller: "asset.admin.assetRegister.ctrl",
                resolve: { isAuthenticated: isAuthenticated }
            })


            .when("/assetRegister/edit/:id", {
                templateUrl: "scripts/spa/QBSAdmin/assetRegister/assetRegister.html",
                controller: "asset.admin.assetRegister.ctrl",
                resolve: { isAuthenticated: isAuthenticated }
            })

            .when("/assetRegister/new", {
                templateUrl: "scripts/spa/QBSAdmin/assetRegister/assetRegister.html",
                controller: "asset.admin.assetRegister.ctrl",
                resolve: { isAuthenticated: isAuthenticated }
            })

            .when("/demo", {
                templateUrl: "scripts/spa/QBSAdmin/transactions/assettest.html",
                controller: "assetTestControl",
                resolve: { isAuthenticated: isAuthenticated }
            })

            .when("/transactions/purchaseOrder", {
                templateUrl: "scripts/spa/QBSAdmin/transactions/purchaseOrder/purchaseOrder.html",
                controller: "purchaseOrderCtrl",
                resolve: {isAuthenticated: isAuthenticated}

            })

            .when("/transactions/purchase", {
                templateUrl: "scripts/spa/QBSAdmin/transactions/purchase/purchase.html",
                controller: "asset.transactions.purchase.Ctrl",
                resolve: { isAuthenticated: isAuthenticated }

            })

            .when("/tree", {
                templateUrl: "scripts/spa/QBSAdmin/transactions/purchase/treeView.html",
                controller: "treeViewCtrl",
                resolve: { isAuthenticated: isAuthenticated }

            })

            .when("/transactions/assetTransfer", {
                templateUrl: "scripts/spa/QBSAdmin/transactions/AssetTransfer/assetTransfer.html",
                controller: "asset.transactions.assetTransfer.Ctrl",
                resolve: { isAuthenticated: isAuthenticated }

            })

            .when("/transactions/purchaseReturn", {
                templateUrl: "scripts/spa/QBSAdmin/transactions/purchaseReturn/purchaseReturn.html",
                controller: "asset.transactions.purchaseReturn.Ctrl",
                resolve: { isAuthenticated: isAuthenticated }

            })

            .when("/transactions/writeOff", {
                templateUrl: "scripts/spa/QBSAdmin/transactions/writeOff/writeOff.html",
                controller: "asset.transactions.writeOff.Ctrl",
                resolve: { isAuthenticated: isAuthenticated }

            })


            .when("/transactions/consumption", {
                templateUrl: "scripts/spa/QBSAdmin/transactions/expenses/consumption.html",
                controller: "asset.transactions.consumption.Ctrl",
                resolve: { isAuthenticated: isAuthenticated }

            })

            .when("/transactions/maintenance", {
                templateUrl: "scripts/spa/QBSAdmin/transactions/expenses/maintenance.html",
                controller: "asset.transactions.maintenance.Ctrl",
                resolve: { isAuthenticated: isAuthenticated }

            })


            .when("/transactions/otherExpenses", {
                templateUrl: "scripts/spa/QBSAdmin/transactions/expenses/otherExpenses.html",
                controller: "asset.transactions.otherExpense.Ctrl",
                resolve: { isAuthenticated: isAuthenticated }

            })


            .when("/transactions/renewal", {
                templateUrl: "scripts/spa/QBSAdmin/transactions/expenses/Renewal.html",
                controller: "asset.transactions.renewal.Ctrl",
                resolve: { isAuthenticated: isAuthenticated }

            })



            .when("/transactions/sales", {
                templateUrl: "scripts/spa/QBSAdmin/transactions/sales/sales.html",
                controller: "asset.transactions.sales.Ctrl",
                resolve: { isAuthenticated: isAuthenticated }

            })


            .when("/menu", {
                templateUrl: "scripts/spa/QBSAdmin/menu/menuList.html",
                controller: "asset.admin.menu.Ctrl",
                resolve: { isAuthenticated: isAuthenticated }

            })

            //Reports

             .when("/reports/assetDetails", {
                 templateUrl: "scripts/spa/QBSAdmin/reports/assetDetails.html",
                 resolve: { isAuthenticated: isAuthenticated }

             })

             .when("/reports/assetList", {
                 templateUrl: "scripts/spa/QBSAdmin/reports/assetList.html",
                 resolve: { isAuthenticated: isAuthenticated }

             })

             .when("/reports/assetInventorySummary", {
                 templateUrl: "scripts/spa/QBSAdmin/reports/assetInventorySummary.html",
                 resolve: { isAuthenticated: isAuthenticated }

             })

             .when("/reports/assetInventoryDetailed", {
                 templateUrl: "scripts/spa/QBSAdmin/reports/assetInventoryDetailed.html",
                 resolve: { isAuthenticated: isAuthenticated }

             })

            .when("/reports/assetInventoryDeptWise", {
                templateUrl: "scripts/spa/QBSAdmin/reports/assetInventoryDeptWise.html",
                resolve: { isAuthenticated: isAuthenticated }

            })

            .when("/reports/assetEnquiry", {
                templateUrl: "scripts/spa/QBSAdmin/reports/assetEnquiry/enquiry.html",
                controller: "asset.admin.assetEnquiry.ctrl",
                resolve: { isAuthenticated: isAuthenticated }

            })


            .when("/reports/assetTransferEnquiry", {
                templateUrl: "scripts/spa/QBSAdmin/reports/AssetEnquiry/assetTransfer.html",
                controller: "asset.transactions.assetTransferEnquiry.Ctrl",
                resolve: { isAuthenticated: isAuthenticated }

            })




            .when("/reports/assetMovementReport", {
                templateUrl: "scripts/spa/QBSAdmin/reports/assetMovementReport.html",
                resolve: { isAuthenticated: isAuthenticated }

            })

             .when("/reports/assetPOSummary", {
                 templateUrl: "scripts/spa/QBSAdmin/reports/assetPOSummary.html",
                 resolve: { isAuthenticated: isAuthenticated }

             })

             .when("/reports/assetPODetailed", {
                 templateUrl: "scripts/spa/QBSAdmin/reports/assetPODetailed.html",
                 resolve: { isAuthenticated: isAuthenticated }

             })


             .when("/reports/assetPurchaseRegister", {
                 templateUrl: "scripts/spa/QBSAdmin/reports/assetPurchaseRegister.html",
                 resolve: { isAuthenticated: isAuthenticated }

             })

             .when("/reports/assetPurchaseReturnRegister", {
                 templateUrl: "scripts/spa/QBSAdmin/reports/assetPurchaseReturnRegister.html",
                 resolve: { isAuthenticated: isAuthenticated }

             })

            .when("/reports/assetWriteOffRegister", {
                templateUrl: "scripts/spa/QBSAdmin/reports/assetWriteOffRegister.html",
                resolve: { isAuthenticated: isAuthenticated }

            })

             .when("/reports/assetSalesRegister", {
                 templateUrl: "scripts/spa/QBSAdmin/reports/assetSalesRegister.html",
                 resolve: { isAuthenticated: isAuthenticated }

             })

             .when("/reports/documentExpiry", {
                 templateUrl: "scripts/spa/QBSAdmin/reports/documentExpiry.html",
                 resolve: { isAuthenticated: isAuthenticated }

             })

             .when("/reports/documentRenewal", {
                 templateUrl: "scripts/spa/QBSAdmin/reports/documentRenewal.html",
                 resolve: { isAuthenticated: isAuthenticated }

             })

             .when("/reports/consumptionSummary", {
                 templateUrl: "scripts/spa/QBSAdmin/reports/consumptionSummary.html",
                 resolve: { isAuthenticated: isAuthenticated }

             })

             .when("/reports/consumptionDetailed", {
                 templateUrl: "scripts/spa/QBSAdmin/reports/consumptionDetailed.html",
                 resolve: { isAuthenticated: isAuthenticated }

             })

            .when("/reports/RepairSummary", {
                templateUrl: "scripts/spa/QBSAdmin/reports/repairSummary.html",
                resolve: { isAuthenticated: isAuthenticated }

            })

             .when("/reports/RepairDetailed", {
                 templateUrl: "scripts/spa/QBSAdmin/reports/repairDetailed.html",
                 resolve: { isAuthenticated: isAuthenticated }

             })

            .when("/reports/otherExpensesSummary", {
                templateUrl: "scripts/spa/QBSAdmin/reports/otherExpensesSummary.html",
                resolve: { isAuthenticated: isAuthenticated }

            })

             .when("/reports/otherExpensesDetailed", {
                 templateUrl: "scripts/spa/QBSAdmin/reports/otherExpensesDetailed.html",
                 resolve: { isAuthenticated: isAuthenticated }

             })

            .when("/reports/vehicleDetails", {
                templateUrl: "scripts/spa/QBSAdmin/reports/vehicleDetails.html",
                resolve: { isAuthenticated: isAuthenticated }

            })

            .otherwise({ redirectTo: "/" });

    }

    run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];

    //Checks repository
    function run($rootScope, $location, $cookieStore, $http) {
        $rootScope.repository = $cookieStore.get('repository') || { loggedUser: "" };
        if ($rootScope.repository.loggedUser == "") {
            $rootScope.islogged = false;
            $location.path("/login");
        }
        if ($rootScope.repository.loggedUser) {
            $http.defaults.headers.common['Authorization'] = $rootScope.repository.loggedUser.authdata;
        }
    }

    //Checks whether the authentication informations exists in the localstorage
    //If the information exists then allow else redirect to the login
    isAuthenticated.$inject = ['membershipService', '$rootScope', '$location'];
    function isAuthenticated(membershipService, $rootScope, $location) {
        if (!membershipService.isUserLoggedIn()) {
            $rootScope.previousState = $location.path();
            $rootScope.islogged = false;
            $location.path("/login");
        }
        else {
            $rootScope.islogged = true;
        }
    }
    //apiServiceBaseUri: 'http://localhost:1947'
    //apiServiceBaseUri: 'http://afisg001.cloudapp.net:84/'

    app.constant('constants', {
        pageSize: 10,
        dateFormat: 'dd-MM-yyyy',
        apiServiceBaseUri: 'http://localhost:1947',
        defaultDsId: 'BT',
        defaultDeptName: 'BEAUTY THERAPY',
        defaultLocCd: 'SA',
        defaultLocName: 'EMIRATES MEDICAL CENTER-SALALA'
    });

})(angular.module('QBSProjectApp', ['common.core', 'common.ui','ui-notification', 'easyComplete', 'controlDirectives', 'angularTreeview','ngSanitize']));
