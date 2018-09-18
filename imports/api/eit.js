import{Meteor} from 'meteor/meteor';
import{Mongo} from 'meteor/mongo';
import{check} from 'meteor/check';

//create a new collection
export const Eits = new Mongo.Collection('eits');
if(Meteor.isServer){
    Meteor. publish('eits', function eitsPublication(){
       return Eits.find();
    });
}

Meteor.methods({
    'eits.insert'(data){
        Eits.insert(data);
    },

    'eits.update'(id,data){
 
    Eits.update(
        id,
        { $set : data}
    );
    
    },
    'eits.remove'(id){
        check(id,String);
        Eits.remove(id);
    }
});