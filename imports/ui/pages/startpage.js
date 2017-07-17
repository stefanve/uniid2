
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './startpage.html';

Template.startpage.helpers({
    merchants: function(){
       return Merchants.find();
    }
});

Template.startpage.events({
   "click .js-add-merchant"(e,t){

   }
});