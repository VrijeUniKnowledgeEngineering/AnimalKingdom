var express = require('express');
var router = express.Router();

var fs = require('fs');
// var rdf = require('rdf')
// var rdfstore = require('rdfstore')

var filename = './AnimalKingdom_AnimalsCountries.ttl';

var path = require('path');
var rdf = require('rdflib');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Finn
var imageAnimal;
var nameAnimal;
var abstractAnimal;
var animalKingdom;
var animalPhylum;
var animalClass;
var animalOrder;
var animalFamily;
var typeOfFood;

var inputSearch;

var	searchQueryUser = false;
var userSearch = "";


// router.get('/index/:id', function(req, res, next) {
//
//
//
//     try {
//
//         console.log('wtf');
//         nameAnimal = 'fuck';
//
//         console.log(req.body.id + "id = ");
//
//         abstractAnimal = 'fdsafds';
//
//         var rdfData = fs.readFileSync(filename).toString();
//         var store = rdf.graph();
//         var contentType='text/turtle';
//         var baseUrl="http://www.w3.org/2002/07/owl#Thing";
//         // var body = '<a> <b> <c> .';
//         rdf.parse(rdfData,store,baseUrl,contentType);
//         var country = rdf.sym("http://www.semanticweb.org/dre/ontologies/2017/9/untitled-ontology-41/Country");
//         var animal = rdf.sym("http://127.0.0.1:3333/African_Elephant");
//
//         // var cou = store.any(animal, undefined, undefined);
//         // console.log('========', cou.uri)
//
//
//         var stms = store.statementsMatching(animal, undefined , undefined);
//         for (var i=0; i<stms.length;i++) {
//             console.log("\n");
//             var stm = stms[i];
//             var subject = stm.subject.uri;
//             var predicate = stm.predicate.uri;
//             var object = stm.object.uri;
//             console.log("subject: "+ subject);
//             console.log("predicate: "+ predicate);
//             console.log("object: "+ object);
//             abstractAnimal = object;
//             console.log(stm) // the WebID of a friend
//
//         }
//
//     } catch (err) {
//         console.log("ERROR: " + err.message)
//     }
//
//     res.render('index', {nameAnimal: nameAnimal, abstractAnimal : abstractAnimal});
// });


router.post('/index/submit', function (req, res, next) {
    var id = req.body.id;
    console.log("the animal is: " + id);
    // res.redirect('/index/' + id);
    nameAnimal = 'fuck';
    abstractAnimal = 'fdsafds';



    try {

        console.log('wtf');
        nameAnimal = 'fuck';

        console.log(req.body.id + "id = ");

        abstractAnimal = 'fdsafds';

        var rdfData = fs.readFileSync(filename).toString();
        var store = rdf.graph();
        var contentType='text/turtle';
        var baseUrl="http://www.w3.org/2002/07/owl#Thing";
        // var body = '<a> <b> <c> .';
        rdf.parse(rdfData,store,baseUrl,contentType);
        var country = rdf.sym("http://www.semanticweb.org/dre/ontologies/2017/9/untitled-ontology-41/Country");
        var animal = rdf.sym("http://127.0.0.1:3333/" + req.body.id); //African_Elephant

        // var cou = store.any(animal, undefined, undefined);
        // console.log('========', cou.uri)


        var stms = store.statementsMatching(animal, undefined , undefined);
        for (var i=0; i<stms.length;i++) {
            console.log("\n");
            var stm = stms[i];
            var subject = stm.subject.uri;
            var predicate = stm.predicate.uri;
            var object = stm.object.uri;
            console.log("subject: "+ subject);
            console.log("predicate: "+ predicate);
            console.log("object: "+ object);
            nameAnimal = subject;
            abstractAnimal = object;
            console.log(stm) // the WebID of a friend

        }

    } catch (err) {
        console.log("ERROR: " + err.message)
    }
    
    res.render('index', {nameAnimal: nameAnimal, abstractAnimal : abstractAnimal});
});




//
// function sparqlQuery(userSearch){
//
//
//     if(searchQueryUser == true){
//
//         $("div #textBox").show("textField")
//         $("div #thumbnail").show("thumbnail");
//         $("p").show();
//
//         var url = "http://localhost:5820/animalKindgom/query/";
//         var query =
//
//             "SELECT  ?thumbnailAnimal ?labelAnimal ?abstactAnimal ?kingdomAnimal ?phylumAnimal ?classAnimal ?orderAnimal ?familyAnimal ?typeOfFood "+
//             "WHERE {"+
//             "dbr:"+ userSearch + " A:label ?labelAnimal."+
//             "dbr:"+ userSearch + " A:abstract ?abstactAnimal."+
//             "dbr:"+ userSearch + " A:isThumbnailOf ?thumbnailAnimal."+
//             "dbr:"+ userSearch + " A:ofKingdom ?kingdomAnimal."+
//             "dbr:"+ userSearch + " A:ofPhylum ?phylumAnimal."+
//             "dbr:"+ userSearch + " A:ofClass ?classAnimal."+
//             "dbr:"+ userSearch + " A:ofOrder ?orderAnimal."+
//             "dbr:"+ userSearch + " A:ofFamily ?familyAnimal."+
//             "dbr:"+ userSearch + " C:eats ?typeOfFood."+
//             "}";
//         $.ajax({
//             headers : {
//                 Accept: 'application/sparql-results+json'
//             },
//             url: url,
//             data: {
//                 query: query
//             },
//             success: function(data) {
//                 var results = data.results.bindings;
//                 //Get result of the query
//                 var animalLabel = results[0].labelAnimal.value;
//                 var animalTumbnail = results[0].thumbnailAnimal.value;
//                 var animalAbstract = results[0].abstactAnimal.value;
//                 var animalKingdom = results[0].kingdomAnimal.value;
//                 var animalPhylum = results[0].phylumAnimal.value;
//                 var animalClass  = results[0].classAnimal.value;
//                 var animalOrder  = results[0].orderAnimal.value;
//                 var animalFamily = results[0].familyAnimal.value;
//                 var typeOfFood = results[0].typeOfFood.value;
//
//
//                 updateProperties();
//
//
//                 function updateProperties(){
//
//                     animalKingdomURI = encodeURI(JSON.stringify(animalKingdom));
//                     var animalKingdomString = makeStringdbpedia(animalKingdomURI);
//
//                     animalPhylumURI = encodeURI(JSON.stringify(animalPhylum));
//                     var animalPhylumString = makeStringdbpedia(animalPhylumURI);
//
//                     animalClassURI = encodeURI(JSON.stringify(animalClass));
//                     var animalClassString = makeStringdbpedia(animalClassURI);
//
//                     animalOrderURI = encodeURI(JSON.stringify(animalOrder));
//                     var animalOrderString = makeStringdbpedia(animalOrderURI);
//
//                     animalFamilyURI = encodeURI(JSON.stringify(animalFamily));
//                     var animalFamilyString = makeStringdbpedia(animalFamilyURI);
//
//                     typeOfFoodURI = encodeURI(JSON.stringify(typeOfFood));
//                     var typeOfFoodString = makeStringOwnOntology(typeOfFoodURI);
//
//                     //Convert the URI in a String
//                     function	makeStringdbpedia(animalURI){
//                         stringURI = encodeURI(JSON.stringify(animalURI));
//                         stringArray = stringURI.split("%22%2522http://dbpedia.org/resource/");
//                         stringArray = stringArray[1].split("%2522%22");
//                         return stringArray;
//                     }
//
//                     //Convert the URI in a String
//                     function	makeStringOwnOntology(URI){
//                         stringURI = encodeURI(JSON.stringify(URI));
//                         stringArray = stringURI.split("#");
//                         stringArray = stringArray[1].split("%2522%22");
//                         return stringArray;
//                     }
//
//                     // var imageAnimal = imageAnimal;
//                     // nameAnimal = ;
//                     // abstractAnimal = ;
//                     animalKingdom = animalKingdomString;
//                     animalPhylum = animalPhylumString;
//                     animalClass = animalClassString;
//                     animalOrder = animalOrderString;
//                     animalFamily = animalFamilyString;
//                     typeOfFood = typeOfFoodString;
//
//                     //Update the elements on HTML file
//                     //
//                     // nameAnimal.innerHTML = animalLabel;;
//                     // $("img").attr("src", animalTumbnail);
//                     // abstractAnimal.innerHTML = animalAbstract;
//                     // document.getElementById('animalKingdom').innerHTML = animalKingdomString[0]
//                     // document.getElementById('animalPhylum').innerHTML = animalPhylumString[0]
//                     // document.getElementById('animalClass').innerHTML = animalClassString[0]
//                     // document.getElementById('animalOrder').innerHTML = animalOrderString[0]
//                     // document.getElementById('animalFamily').innerHTML = animalFamilyString[0]
//                     // document.getElementById('animalFamily').innerHTML = animalFamilyString[0]
//                     // document.getElementById('typeOfFood').innerHTML = typeOfFoodString[0]
//
//
//                 };
//
//             }
//         });
//
//     };
//
// }







module.exports = router;

