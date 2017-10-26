var Member = require('../models/Members');


exports.addMember = function(req, res){
    var val = req.body.member;
    console.log(typeof val);
    console.log(val);
    var member = new Member({
        name: val.name,
        phone: val.phone,
        designation: val.designation,
        email: val.email,
        auto_meal: val.auto_meal,
        today_meal: val.auto_meal
    }).save(function(err, member){
        if(err){
            console.log(err);
        }else{
            res.send({ msg: 'Member Added' });
        }
    })
}


exports.autoUpdateMeal = function(req, res){
    Member.update({ "auto_meal": true }, { $set: { "today_meal" : true } }, { multi: true }, function(err, member){
        if(err){
            console.log(err);
        }else{
            autoMealFalse(function(msg){
                res.send(msg);
            });
            
        }
    })
}

function autoMealFalse(callback){
    Member.update({ "auto_meal": false }, { $set: { "today_meal" : false } }, { multi: true }, function(err, member){
        if(err){
            console.log(err);
        }else{
            var msg = { msg: 'Member Updated' }
            callback(msg);
        }
    })
}


exports.setBoolMeal = function(req, res){
    var val = req.body.bool_meal;

    var id = val.id;
    var bool = val.index;
    var meal = val.name;

    var obj = {};
    obj[meal] = bool;

    Member.findOneAndUpdate({"_id":id}, {$set: obj}, function(err, member){
        if(err){
            console.log(err);
        }else{
            res.send({ msg: 'Member Updated' });
        }
    })
}


exports.getTodayMeal = function( req, res ){
    Member.find({"today_meal": true}, function(err, member){
        if(err){
            console.log(err);
        }else{
            res.send(member);
        }
    })
}


exports.getAutoMeal = function( req, res ){
    Member.find({"auto_meal": true}, function(err, member){
        if(err){
            console.log(err);
        }else{
            res.send(member);
        }
    })
}


exports.getMember = function( req, res ){
    Member.find( function(err, member){
        if(err){
            console.log(err);
        }else{
            res.send(member);
        }
    })
}



