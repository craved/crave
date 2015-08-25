var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
var mongoose = require('mongoose');
var User = require(__dirname + '/../models/User');
var FoodPost = require(__dirname + '/../models/FoodPost');

//global to hold id for tests
var id;

//sets up local test mongo database
process.env.MONGO_TEST = 'mongodb://localhost/crave-test';
//instantiates server
require(__dirname + '/../../server.js');
chai.use(chaiHttp);

describe('Test server routes', function() {

  beforeEach(function(done) {
    var user = new User({"username": "testUser", "password": "pass"});
    user.save();
    var foodPost = new FoodPost({"food": "test food", "restaurant": "test restaurant"});
    foodPost.save();
    id = foodPost._id;
    done();

  });
  //after tests, clear databases
  afterEach(function(done) {
    mongoose.connection.db.dropDatabase(function() {
      done();
    });
  });

  describe('get routes', function() {
    it('should respond with a 404 when given a bad route', function(done) {
        chai.request('http://localhost:3000')
            .get('/blah')
            .end(function(err, res) {
              expect(res).to.have.status(404);
              done();
            });
      });

    it('should get response at get /users', function(done) {
      chai.request('http://localhost:3000/api')
        .get('/users')
        .end(function(err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });

    it('should get response at get /foods', function(done) {
      chai.request('http://localhost:3000/api')
        .get('/foods')
        .end(function(err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });

    it('should get response at get /foods', function(done) {
      chai.request('http://localhost:3000/api')
        .get('/foods/food?food=test%20food')
        .end(function(err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });
  });

  describe('post routes', function() {
    it('should get response at post /users', function(done) {
      chai.request('http://localhost:3000/api')
        .post('/users')
        .send({username: "stannis", password: "pass"})
        .end(function(err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });
    it('should get response at post /foods', function(done) {
      chai.request('http://localhost:3000/api')
        .post('/foods')
        .send({food: "test food 2", restaurant: "test rest 2"})
        .end(function(err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });
  });

  describe('put routes', function() {
    it('should get response at put /foods/:food', function(done) {
      chai.request('http://localhost:3000/api')
        .put('/foods/' + id)
        .end(function(err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });
  });

  describe('delete routes', function() {
    it('should get response at delete /users', function(done) {
      chai.request('http://localhost:3000/api')
        .delete('/users')
        .end(function(err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });
  });
});
