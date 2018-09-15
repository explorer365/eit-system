import{Meteor} from 'meteor/meteor';
import{Mongo} from 'meteor/mongo';
import{check} from 'meteor/check';

export const Eits = new Mongo.Collection('eits');

if(Meteor.isServer){
    Meteor.publish('eits',function eitsPublication(){
        return Eits.find();
    });
}

Meteor.methods({
    'eits.insert'(data){
    //form validation

    check(data.first_name,String);
    check(data.last_name,String);
    check(data.date_of_birth,String);
    check(data.country,String);
    check(data.gender,String);
    check(data.cohort,String);
    Eits.insert(data);
    
    },
})
