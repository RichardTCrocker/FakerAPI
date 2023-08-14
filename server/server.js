const express = require("express");
const app = express();
const port = 8000;
const {faker} = require('@faker-js/faker')

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/api/testing', (req,res) => {
    res.json({message:"Hello World"});
});

const createUser = () =>{
    const newFakeUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phonenumber: faker.phone.number(),
        lastname: faker.person.firstName(),
        firstname: faker.person.lastName(),
        _id: faker.string.uuid()
    }
    return newFakeUser;
}

const createCompany = () =>{
    const newFakeCompany = {
        _id: faker.string.uuid(),
        name: faker.company.name(),
        address:{
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
    }
    return newFakeCompany;
}

const createdNewUser = createUser()
const newFakeCompany = createCompany()

app.get('/api/users/new', (req,res)=>{
    res.json(createdNewUser);}
)
app.get('/api/companies/new', (req,res)=>{
    res.json(newFakeCompany);}
)
app.get('/api/user/company', (req,res)=>{
    res.json({createdNewUser,newFakeCompany});}
)

app.listen(port, ()=>console.log('Listening on port: 8000'))