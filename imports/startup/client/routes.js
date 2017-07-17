import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import to load these templates
import '/imports/ui/layouts/app-body.js';

import '/imports/ui/customer/add-customer.js';

// Import to override accounts templates
//import '../../ui/accounts/accounts-templates.js';

FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'app_rootRedirector' });
  },
});

// the App_notFound template is used for unknown routes and missing lists
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};


FlowRouter.route('/merchants/add', {
    name: 'Merchants.register',
    action() {
        BlazeLayout.render('App_body', { main: 'addMerchant' });
    },
});
