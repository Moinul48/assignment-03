// https://github.com/Moinul48/assignment-03

// Kilometer to Meter Conviersion

function kilometerToMeter(kilometer){
    if(Math.sign(kilometer) < 0){
        console.log("EROOR! Please give +ve value.");
        return;
    }
    else{
        var meter = kilometer * 1000;
        return meter;
    }
}


// Budget calculator for three products:

var watchPrice = 50;
var phonePrice = 100;
var laptopPrice = 500;

function budgetCalculator(watch, phone, laptop){
    if(Math.sign(watch, phone, laptop) < 0){
        console.log("Error! Plese type positive number.");
        return;
    }
    else{
        var watchCost = watchPrice * watch;
        var phoneCost = phonePrice * phone;
        var laptopCost = laptopPrice * laptop;

        var totalBudget = watchCost + phoneCost + laptopCost;
        return totalBudget;
    }
}


// Hotel cost calculator:

var firstTenDaysRentRate = 100;
var elevenToTwentyDaysRentRate = 80;
var twentyDaysMoreRentRate = 50;

function hotelCost(days){
    if(days < 0){
        console.log("Error! Put the positive days live in hotel.");
        return;
    }
    else if(days <= 10){
        var totalRent = firstTenDaysRentRate * days;
        return totalRent;
    }
    else if(days <= 20){
        var firstTenDaysRent = firstTenDaysRentRate * 10;
        var remainingDaysRent = elevenToTwentyDaysRentRate * (days - 10)

        var totalRent = firstTenDaysRent + remainingDaysRent;

        return totalRent;
    }
    else{
        var firstTenDaysRent = firstTenDaysRentRate * 10;
        var nextTenDaysRent = elevenToTwentyDaysRentRate * 10;
        var remainingDaysRent = twentyDaysMoreRentRate * (days - 20);

        var totalRent = firstTenDaysRent + nextTenDaysRent + remainingDaysRent;

        return totalRent;
    }
}


// Find the lengthy name form an array

var megaFriends = [];

function megaFriend(friends) {
    var friendlen = 0;
    for(var i = 0; i < friends.length; i++){
        if(friendlen < friends[i].length){
            friendlen = friends[i].length;
        }
    }                                       //find the maximam length of the given words.    
    
    for(var j = 0; j < friends.length; j++){
        if(friends[j].length == friendlen){
            megaFriends.push(friends[j]);
        }
    }                                       //make an array with the maximam lengthy words. 
    
    if(megaFriends.length == 1){
        return megaFriends[0];
    }
    else{
        return megaFriends;
    }
}