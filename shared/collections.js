Schemas = {};
var Collections = {};

Merchants = Collections.Merchants = new Mongo.Collection("merchants");
Customers = Collections.Customers = new Mongo.Collection("customers");


Schemas.Address = new SimpleSchema({
    street: {
        type: String,
        label: "Street ",
        optional: true
    },
    house_number: {
        type: String,
        label: "House number",
        optional: true

    },
    zip: {
        type: String,
        label: "ZIP code",
        optional: true
    },
    city: {
        type: String,
        label: "City",
        optional: true
    },
    country: {
        type: String,
        label: "Country",
        optional: true
    }

});

Schemas.Merchant = new SimpleSchema({
    name: {
        type: String,

        optional: false
    },
    website_url:{
        type: String,
        label:  "Website",
        optional: true
    },
    address: {
        type: Schemas.Address
    }

});

Schemas.Customer = new SimpleSchema({
    name: {
        type: String,

        optional: true
    },
    customer_id: {
        type: String,
        label: "Customer Id",
        optional: false
    },
    address: {
        type: Schemas.Address
    }

});

Merchants.attachSchema(Schemas.Merchant);
Customers.attachSchema(Schemas.Customer);