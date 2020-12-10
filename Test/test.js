var should = require("should");
var request = require("request");
var expect = require("chai").expect;
var baseUrl = "http://localhost:5000";


// -----Test for get user endpoint--------
describe("Returns yvette", function(){
    it("Returns yvette", function(done){
        request.get({url: baseUrl + '/user/yvette@mail.com'},
            function(error, response, body){
                    var bodyObj = JSON.parse(body);
                    expect(bodyObj[0].firstName).to.equal("Yvette ");
                    console.log(bodyObj);                    
                done();
            });
    });
});

// -----Test for delete user endpoint-------
describe("Deletes lucca", function(){
    it("Deletes lucca", function(done){
        request.delete({url: baseUrl + '/user/lucca@email.com'},
            function(error, response, body){
                    var bodyObj = JSON.parse(body);
                    console.log(bodyObj);                    
                    expect(bodyObj).to.equal("User has been deleted");
                done();
            });
    });
});




// ------Test for get match endpoint-------
describe("Returns match", function(){
    it("Returns match", function(done){
        request.get({url: baseUrl + '/match/maxime@mail.com'},
            function(error, response, body){
                    var bodyObj = JSON.parse(body);
                    expect(bodyObj[0].userTwoId).to.equal("asher@mail.com");
                    console.log(bodyObj);                    
                done();
            });
    });
});

// -----Test for delete match endpoint-------
describe("Deletes match", function(){
    it("Deletes match", function(done){
        request.delete({url: baseUrl + '/match/JUBs73VAlGMTecQW'},
            function(error, response, body){
                    var bodyObj = JSON.parse(body);
                    console.log(bodyObj);                    
                    expect(bodyObj).to.equal("Match has been deleted");
                    done();
            });
    });
});




// ------Test for get visits endpoint--------
describe("Returns visits", function(){
    it("Returns visits", function(done){
        request.get({url: baseUrl + '/visits/yvette@mail.com'},
            function(error, response, body){
                    var bodyObj = JSON.parse(body);
                    expect(bodyObj[0].visits[0]).to.equal("asher@mail.com");
                    console.log(bodyObj);  
                done();
            });
    });
});
