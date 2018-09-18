import { Meteor } from 'meteor/meteor';
import './eit_data.html';

Template.Eit_data_form.helpers({
        countries(){
            return [
                {name:'Kenya'},
                {name:'Ghana', default:true},
                {name:'Nigeria'},
                {name:'South Africa'},
                {name:'Tanzania'},
                {name:'Zimbabwe'}
            ];
        }
    });

    Template.Eit_data_form.events({
        'submit #eit_data_form'(event){
            event.preventDefault();
            var form = event.target;
            var data = {
                first_name: form.first_name.value,
                last_name: form.last_name.value,
                date_of_birth: form.date_of_birth.value,
                gender: form.gender.value,
            };

            var id = form.id.value;
            if(id){
                Meteor.call('eits.update', id, data);
            }else{
                Meteor.call('eits.insert', data);
            }
            form.reset();
        }
    });

