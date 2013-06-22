var customerlist;
function loadCustomers() {
    $.ajax({
        type: "get",
        //url:'http://localhost:15776/api/customers'
        url: "scripts/data.js",
		data:"",
		contentType: "application/json; charset=utf-8",
		dataType: "json",
        async: false,
        success: function (data) {
            customerlist = data;
        }
    });
}


function DataViewModel() {
    var self = this;

	 //properties
    self.customers = ko.observableArray(customerlist);

    self.viewType = ko.observable("home");

	self.currentCustomerCustomerID = ko.observable("");
	self.currentCustomerCompanyName = ko.observable("");
	self.currentCustomerContactName = ko.observable("");
	self.currentCustomerContactTitle = ko.observable("");
	self.currentCustomerAddress = ko.observable("");
	self.currentCustomerCity = ko.observable("");
	self.currentCustomerRegion = ko.observable("");
	self.currentCustomerPostalCode = ko.observable("");
	self.currentCustomerCountry = ko.observable("");
	self.currentCustomerPhone = ko.observable("");
	self.currentCustomerFax = ko.observable("");

	self.CurrentCustomer = ko.observable("");
	self.currentCustomerMapAddress = ko.computed(function () {
	    return self.currentCustomerAddress() + " " + self.currentCustomerCity() + ", " + self.currentCustomerCountry() + " " + self.currentCustomerPostalCode()
	});

	self.viewall = function () {
	    self.viewType("viewall");
	}

	self.detailview = function (customer) {
	    self.CurrentCustomer(customer);
	    self.currentCustomerCustomerID(customer.CustomerID);
	    self.currentCustomerCompanyName(customer.CompanyName);
	    self.currentCustomerContactName(customer.ContactName);
	    self.currentCustomerContactTitle(customer.ContactTitle);
	    self.currentCustomerAddress(customer.Address);
	    self.currentCustomerCity(customer.City);
	    self.currentCustomerRegion(customer.Region);
	    self.currentCustomerPostalCode(customer.PostalCode);
	    self.currentCustomerCountry(customer.Country);
	    self.currentCustomerPhone(customer.Phone);
	    self.currentCustomerFax(customer.Fax);
	    self.viewType("detailview");
	}
	
	self.home = function(){
	    self.viewType("home");
	    $$("body").css({ "opacity": "0.88", "padding-left": "40px", "padding-right": "40px" });
	}

	self.map = function () {
	    var address = document.getElementById("mapaddress").value;	    
	    self.viewType("map");
	    mapinitialize();
	    codeAddress(address);
	    $("body").css({"opacity":"0.99", "padding-left":"20px", "padding-right":"20px"});
	}
	        
}