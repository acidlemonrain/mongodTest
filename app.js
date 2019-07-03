const express = require('express');
const mongoose = require('mongoose');
const app = express();
var kittySchema = new mongoose.Schema({
	name: String
});
kittySchema.methods.speak = function() {
	var greeting = this.name ? 'Meow name is ' + this.name : "I don't have a name";
	console.log(greeting);
};
var Kitten = mongoose.model('Kitten', kittySchema);
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
var fluffy = new Kitten({ name: 'fluffy' });
fluffy.save(function(err, fluffy) {
	if (err) return console.error(err);
	fluffy.speak();
});
Kitten.find(function(err, kittens) {
	if (err) return console.error(err);
	console.log(kittens);
});
app.listen(3000);