String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "");
};

var Person = Backbone.Model.extend({

	defaults: {
        firstname:"",
        lastname: "",
        phone: "",
        gender: "",
        address: "",
        email: "",
        group: "",
        photo:"images/dummy.png"
    },
	
	initialize: function(){
	},

    clear: function() {
        this.destroy();
    },

    // validate: function(attrs) {

    //     // var p = /[0-9]*-*\d{3}-\d{3}-\d{4}/;
    //     // var e = /.+@.+\..+/;
    //     // if (attrs.photo.trim() == ""){
    //     //     this.set("photo", this.defaults["photo"]);
    //     // }

    //     // if (attrs.firstname.trim() == "") {
    //     //     return "First name can't be empty";
    //     // }else if (attrs.lastname.trim() == "") {
    //     //     return "Last name can't be empty";
    //     // }else if (!p.test(attrs.phone.trim())) {
    //     //     return "Invalid phone number; It must be of this format: ddd-ddd-dddd or d-ddd-ddd-dddd.";
    //     // }else if (!e.test(attrs.email.trim())) {
    //     //     return "Invalid email address; Hint: email@emailprovider.tld"
    //     // }else if(attrs.group.trim() == "") {
    //     //     return "Contact must belong to a group"
    //     // }
    // }
    validation: {
        email: {
            required: true,
            pattern: 'email',
            msg: 'Please enter a valid email address',
        },
        firstname: {
            required: true,
        },
        lastname: {
            required: true,
        },
        phone: 
            [{
                required: true,
                msg: 'Phone number cannot be left blank',
            }, {
                pattern: 'digits',
                msg: 'Please enter digits only',
            }, {
                minLength: 5,
                msg: 'Phone number should be at least 5 digits',
            }, {
                maxLength: 12,
                msg: 'Phone number can not exceed 12 digits',
            }],
        address: {
            required: true,
            msg: 'Please enter the contact\'s address',
        },
        group: {
            required: true,
            msg: 'Please give the contact a group',
        }
    },
    
});
