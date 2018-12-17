const moongose = require('mongoose');

moongose.Promise = global.Promise;
moongose.connect('mongodb://localhost:27017/moongoseTest');

const carSchema = moongose.Schema({
    brand: String,
    model: String,
    year: Number,
    avail: Boolean,
});

const Car = moongose.model('Car', carSchema);

const addCar = new Car({
    brand: 'test4',
    model: 'test4',
    year: 2017,
    avail: true,
})

addCar.save((err, doc) => {
    if(err) return console.log(err);
    console.log(doc);
});


Car.findById("5c15faa9472703382ec2a6f1",(err,doc) => {
    if(err) return console.log(err);
    console.log(doc);

})

Car.remove({brand: 'test3'},(err,doc) => {
    if(err) return console.log(err);
    console.log(doc);
});

Car.update(
    {
        _id: "5c15faca4566033895aae7d6"
    },
    {
        $set: {
            year: 2018
        }
    },
    (err, doc) => {
        if (err) return console.log(err);
        console.log(doc);
    }
)

Car.findByIdAndUpdate(
    "5c15faca4566033895aae7d6",
    {
        $set: {
            year: 2020
        }
    },
    {
        new: false
    },
    (err, doc) => {
            if (err) return console.log(err);
            console.log(doc);
    }
)

Car.findById("5c15faca4566033895aae7d6", (err, car) =>{
    if (err) return console.log(err);

    car.set({
        year: 2022
    });

    car.save((err, doc) =>{
        if (err) return console.log(err);
        console.log(doc);
    })
})