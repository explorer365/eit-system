import { Meteor } from 'meteor/meteor';
import { Templating} from 'meteor/templating';

import './eit_data.html';

Template.Eit_data_form.helpers({
    cohorts(){
        var startYear = 2008;
        var currentYear = (new Date()).getFullYear() + 1;
        var years = [];
        for (var i=startYear; i<=(currentYear+2); i++) {
            var year = {
                year: i
            };
            if (i == currentYear){
                year.current = true;
            }
            years.push(year);
            }

            return years;
        },
        
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
                country: form.country.value,
                gender: form.gender.value,
                cohort: form.cohort.value
            };

            Meteor.call('eits.insert', data);
        }
    });

