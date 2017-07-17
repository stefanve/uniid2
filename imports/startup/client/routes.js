import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import to load these templates
import '/imports/ui/layouts/app-body.js';

import '/imports/ui/customer/add-customer.js';
import '/imports/ui/merchant/add-merchant.js';
import '/imports/ui/components/loading.js';
import '/imports/ui/pages/startpage.js';

// Import to override accounts templates
//import '../../ui/accounts/accounts-templates.js';

FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'startpage' });
  },
});

// the App_notFound template is used for unknown routes and missing lists
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};


FlowRouter.route('/merchant/add', {
    name: 'Merchants.register',
    action() {
        BlazeLayout.render('App_body', { main: 'addMerchant' });
    },
});
