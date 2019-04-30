//Database SetUp
var config = {
    apiKey: "AIzaSyCpXTdQTEtA-QsZL_449ze5Oro57COqcXs",
    authDomain: "gotdeathpool-69524.firebaseapp.com",
    databaseURL: "https://gotdeathpool-69524.firebaseio.com",
    projectId: "gotdeathpool-69524",
    storageBucket: "gotdeathpool-69524.appspot.com",
    messagingSenderId: "397695094964"
};
firebase.initializeApp(config);
var database = firebase.database();

//Pull from Database

var arrayofplayers = []

database.ref().on("child_added", function (snapshot) {
    var newplayername = snapshot.val().dbplayername;
    var newJonSnowstatus = snapshot.val().dbJonSnowstatus;
    var newSansaStarkstatus = snapshot.val().dbSansaStarkstatus;
    var newAryaStarkstatus = snapshot.val().dbAryaStarkstatus;
    var newBranStarkstatus = snapshot.val().dbBranStarkstatus;
    var newCerseiLannisterstatus = snapshot.val().dbCerseiLannisterstatus;
    var newJamieLannisterstatus = snapshot.val().dbJamieLannisterstatus;
    var newTyrionLannisterstatus = snapshot.val().dbTyrionLannisterstatus;
    var newDanerysTargaryenstatus = snapshot.val().dbDanerysTargaryenstatus;
    var newYaraGreyjoystatus = snapshot.val().dbYaraGreyjoystatus;
    var newTheonGreyjoystatus = snapshot.val().dbTheonGreyjoystatus;
    var newTheHoundstatus = snapshot.val().dbTheHoundstatus;
    var newTheMounatianstatus = snapshot.val().dbTheMountainstatus;
    var newJorahMormontstatus = snapshot.val().dbJorahMormontstatus;
    var newTormnudGiantsbainestatus = snapshot.val().dbTormundGiantsbanestatus;
    var newBaricDondarrionstatus = snapshot.val().dbBaricDondarrionstatus;
    var newSamwellTarlystatus = snapshot.val().dbSamwellTarlystatus;
    var newGillystatus = snapshot.val().dbGillystatus;
    var newLittleSamstatus = snapshot.val().dbLittleSamstatus;
    var newVarysstatus = snapshot.val().dbVarysstatus;
    var newMelisandrestatus = snapshot.val().dbMelisandrestatus;
    var newBronnstatus = snapshot.val().dbBronnstatus;
    var newDavosSeasworthstatus = snapshot.val().dbDavosSeaworthstatus;
    var newBrienneofTarthstatus = snapshot.val().dbBrienneofTarthstatus;
    var newPodrickPaynestatus = snapshot.val().dbPodrickPaynestatus;
    var newGendrystatus = snapshot.val().dbGendrystatus;
    var newEuronGreyjoystatus = snapshot.val().dbEuronGreyjoystatus;
    var newTheNightKingstatus = snapshot.val().dbTheNightKingstatus;
    var newTheMountianstatus = snapshot.val().dbTheMountainstatus;
    var newViserionIceDragonstatus = snapshot.val().dbViserionIceDragonstatus;
    var newRhaegalYellowDragonstatus = snapshot.val().dbRhaegalYellowDragonstatus;
    var newDrogonDanysDragonstatus = snapshot.val().dbDrogonDanysDragonstatus;
    var newIronThronestatus = snapshot.val().dbIronThronestatus

    // console.log(newplayername)
    // console.log(newJonSnowstatus)
    // console.log(newSansaStarkstatus)
    // console.log(newAryaStarkstatus)
    // console.log(newBranStarkstatus)
    // console.log(newCerseiLannisterstatus)
    // console.log(newJamieLannisterstatus)
    // console.log(newTyrionLannisterstatus)
    // console.log(newDanerysTargaryenstatus)
    // console.log(newYaraGreyjoystatus)
    // console.log(newTheonGreyjoystatus)
    // console.log(newTheHoundstatus)
    // console.log(newTheMountianstatus)
    // console.log(newJorahMormontstatus)
    // console.log(newTormnudGiantsbainestatus)
    // console.log(newBaricDondarrionstatus)
    // console.log(newSamwellTarlystatus)
    // console.log(newGillystatus)
    // console.log(newLittleSamstatus)
    // console.log(newVarysstatus)
    // console.log(newMelisandrestatus)
    // console.log(newBronnstatus)
    // console.log(newDavosSeasworthstatus)
    // console.log(newBrienneofTarthstatus)
    // console.log(newPodrickPaynestatus)
    // console.log(newGendrystatus)
    // console.log(newEuronGreyjoystatus)
    // console.log(newTheNightKingstatus)
    // console.log(newTheMounatianstatus)
    // console.log(newViserionIceDragonstatus)
    // console.log(newRhaegalYellowDragonstatus)
    // console.log(newDrogonDanysDragonstatus)
    // console.log(newIronThronestatus )


    //Score keeping variable
    var x = 0

    var tdata4 = []
    var tdata5 = []

    if (currentJonSnow === newJonSnowstatus) {
        x++
        console.log("your score:" + x)
            tdata4.push(" John Snow") 
    }
    else{
        tdata5.push(" John Snow")
    }

    if (currentSansaStark === newSansaStarkstatus) {
        x++
        console.log("your score:" + x)
        tdata4.push(" Sansa Stark") 
    }
    else{
        tdata5.push(" Sansa Stark")
    }

    if (currentAryaStark === newAryaStarkstatus) {
        x++
        console.log("your score:" + x)
        tdata4.push(" Arya Stark") 
    }
    else{
        tdata5.push(" Arya Stark")
    }

    if (currentBranStark === newBranStarkstatus) {
        x++
        console.log("your score:" + x)
        tdata4.push(" Bran Stark") 
    }
    else{
        tdata5.push(" Brank Stark")
    }
    if (currentCerseiLannister === newCerseiLannisterstatus) {
        x++
        console.log("your score:" + x)
        tdata4.push(" Cersei Lannister") 
    }
    else{
        tdata5.push(" Cersei Lannister")
    }
    if (currentJamieLannister === newJamieLannisterstatus) {
        x++
        console.log("your score:" + x)
        tdata4.push(" Jamie Lannister") 
    }
    else{
        tdata5.push(" Jamie Lannister")
    }
    if (currentTyrionLannister === newTyrionLannisterstatus) {
        x++
        console.log("your score:" + x)
        tdata4.push(" Tyrion Lannister") 
    }
    else{
        tdata5.push(" Tyrion Lannister")
    }
    if (currentDanerysTargaryen === newDanerysTargaryenstatus) {
        x++
        console.log("your score:" + x)
        tdata4.push(" Danerys Targaryen") 
    }
    else{
        tdata5.push(" Danerys Targaryen")
    }
    if (currentYaraGreyjoy === newYaraGreyjoystatus) {
        x++
        console.log("your score:" + x)
        tdata4.push(" Yara Greyjoy") 
    }
    else{
        tdata5.push(" Yara Greyjoy")
    }
    if (currentTheonGreyjoy === newTheonGreyjoystatus) {
        x++
        console.log("your score:" + x)
        tdata4.push(" Theon Greyjoy") 
    }
    else{
        tdata5.push(" Theon Greyjoy")
    }
    if (currentTheHound === newTheHoundstatus) {
        x++
        console.log("your score:" + x)
        tdata4.push(" The Hound") 
    }
    else{
        tdata5.push(" The Hound")
    }
    if (currentTheMountain === newTheMountianstatus) {
        x++
        console.log("your score:" + x)
        tdata4.push(" The Mountain") 
    }
    else{
        tdata5.push(" The Mountain")
    }
    if (currentJorahMormont === newJorahMormontstatus) {
        x++
        console.log("your score:" + x)
        tdata4.push(" Jorah Mormont") 
    }
    else{
        tdata5.push(" Jorah Mormont")
    }
    if (currentTormundGiantsbane === newTormnudGiantsbainestatus) {
        x++
        console.log("your score:" + x)
        tdata4.push(" Tormund Giantsbaine") 
    }
    else{
        tdata5.push(" Tormund Giantsbaine")
    }
    if (currentSamwellTarly === newSamwellTarlystatus) {
        x++
        console.log("your score:" + x)
        tdata4.push(" Samwell Tarley") 
    }
    else{
        tdata5.push(" Samwell Tarley")
    }
    if (currentGilly === newGillystatus) {
        x++
        console.log("your score:" + x)
        tdata4.push(" Gilly") 
    }
    else{
        tdata5.push(" Gilly")
    }
    if (currentLittleSam === newLittleSamstatus) {
        x++
        console.log("your score:" + x)
        tdata4.push(" Little Sam") 
    }
    else{
        tdata5.push(" Little Sam")
    }
    if (currentVarys === newVarysstatus) {
        x++
        console.log("your score:" + x)
        tdata4.push(" Varys") 
    }
    else{
        tdata5.push(" Varys")
    }
    if (currentMelisandre === newMelisandrestatus) {
        x++
        console.log("your score:" + x)
        tdata4.push(" Melisandre") 
    }
    else{
        tdata5.push(" Melisandre")
    }
    if (currentBronn === newBronnstatus) {
        x++
        console.log("your score:" + x)
        tdata4.push(" Bronn") 
    }
    else{
        tdata5.push(" Bronn")
    }
    if (currentDavosSeaworth === newDavosSeasworthstatus) {
        x++
        console.log("your score:" + x)
        tdata4.push(" Davos Seasworth") 
    }
    else{
        tdata5.push(" Davos Seasworth")
    }
    if (currentBrienneofTarth === newBrienneofTarthstatus) {
        x++
        console.log("your score:" + x)
        tdata4.push(" Brienne of Tarth") 
    }
    else{
        tdata5.push(" Brienne of Tarth")
    }
    if (currentPodrickPayne === newPodrickPaynestatus) {
        x++
        console.log("your score:" + x)
        tdata4.push(" Podrick Payne") 
    }
    else{
        tdata5.push(" Podrick Payne")
    }
    if (currentGendry === newGendrystatus) {
        x++
        console.log("your score:" + x)
        tdata4.push(" Gendry") 
    }
    else{
        tdata5.push(" Gendry")
    }
    if (currentEuronGreyjoy === newEuronGreyjoystatus) {
        x++
        console.log("your score:" + x)
        tdata4.push(" Euron Greyjoy") 
    }
    else{
        tdata5.push(" Euron Greyjoy")
    }
    if (currentTheNightKing === newTheNightKingstatus) {
        x++
        console.log("your score:" + x)
        tdata4.push(" The Night King") 
    }
    else{
        tdata5.push(" The Night King")
    }
    if (currentViserionIceDragon === newViserionIceDragonstatus) {
        x++
        console.log("your score:" + x)
        tdata4.push(" Viserion Ice Dragon") 
    }
    else{
        tdata5.push(" Viserion Ice Dragon")
    }
    if (currentRhaegalYellowDragon === newRhaegalYellowDragonstatus) {
        x++
        console.log("your score:" + x)
        tdata4.push(" Rhaegal Yellow Dragonstatus") 
    }
    else{
        tdata5.push(" Rhaegal Yellow Dragonstatus")
    }
    if (currentDrogonDanysDragon === newDrogonDanysDragonstatus) {
        x++
        console.log("your score:" + x)
            tdata4.push(" Drogon Dany's Dragon") 
    }
    else{
        tdata5.push(" Drogon Dany's Dragon")
    }
    if (currentIronThrone === newIronThronestatus) {
        x++
        console.log("your score:" + x)
            tdata4.push(" Iron Throne") 
    }
    else{
        tdata5.push(" Iron Throne")
    }

var Player = {
    playername : newplayername,
    score : x,
    correct : tdata4,
    incorrect: tdata5,
}

arrayofplayers.push(Player)
console.log (arrayofplayers)
arrayofplayers.sort((a, b) => b.score - a.score)
console.log (arrayofplayers)

    //    //Create a new row and store it in a variable
    //    var row = $("<tr></tr>")
   
    //    var tdata1 = $("<td>" + newplayername + "</td>");
    //    var tdata2 = $("<td>" + x + "</td>");
    //    var tdata3 = $("<td class='text-center'> 1 </td>");
   
    //    //Append data boxes to row
    //    row.append(tdata1, tdata2, tdata4, tdata5);
   
    //    //Append row to HTML
    //    $("#tablebody").append(row);
})
// .then(function() {
//     for (var i = 0; i<arrayofplayers.length; i++){
//         var row = $("<tr></tr>")
//         var x = i + 1

//         var tdata1 = $("<td>" + x + "</td>")
//         var tdata2 = $("<td>" + arrayofplayers[i].playername + "</td>")
//         var tdata3 = $("<td>" + arrayofplayers[i].score + "</td>")
//         var tdatac = $("<td>" + arrayofplayers[i].correct + "</td>")
//         var tdatai = $("<td>" + arrayofplayers[i].incorrect+ "</td>")

//         row.append(tdata1, tdata2, tdata3, tdatac, tdatai);

//         $("#tablebody").append(row)
//     }
// })

var time = 2
var interval;
// Function to start timer
function timer() {
        clearInterval(interval);
        interval = setInterval(decrement, 1000);
    }
    //  The lessen Function
function decrement() {
    //Decrease time by one
    time--;
    //  When you time = 0
    if (time === 0) {
        console.log ("yay")
        for (var i = 0; i<arrayofplayers.length; i++){
            var row = $("<tr></tr>")
            var x = i + 1
    
            var tdata1 = $("<td>" + x + "</td>")
            var tdata2 = $("<td>" + arrayofplayers[i].playername + "</td>")
            var tdata3 = $("<td>" + arrayofplayers[i].score + "</td>")
            var tdatac = $("<td>" + arrayofplayers[i].correct + "</td>")
            var tdatai = $("<td>" + arrayofplayers[i].incorrect+ "</td>")
    
            row.append(tdata1, tdata2, tdata3, tdatac, tdatai);
    
            $("#tablebody").append(row)
        }
    }
}

timer()




var currentJonSnow = "Alive"
var currentSansaStark = "Alive"
var currentAryaStark = "Alive"
var currentBranStark = "Alive"
var currentCerseiLannister = "Alive"
var currentJamieLannister = "Alive"
var currentTyrionLannister = "Alive"
var currentDanerysTargaryen = "Alive"
var currentYaraGreyjoy = "Alive"
var currentTheonGreyjoy = "Dead"
var currentTheHound = "Alive"
var currentTheMountain = "Alive"
var currentJorahMormont = "Dead"
var currentTormundGiantsbane = "Alive"
var currentBaricDondarrion = "Dead"
var currentSamwellTarly = "Alive"
var currentGilly = "Alive"
var currentLittleSam = "Alive"
var currentVarys = "Alive"
var currentMelisandre = "Dead"
var currentBronn = "Alive"
var currentDavosSeaworth = "Alive"
var currentBrienneofTarth = "Alive"
var currentPodrickPayne = "Alive"
var currentGendry = "Alive"
var currentEuronGreyjoy = "Alive"
var currentTheNightKing = "Dead"
var currentViserionIceDragon = "Dead"
var currentRhaegalYellowDragon = "Alive"
var currentDrogonDanysDragon = "Alive"
var currentIronThrone = "Cercei Lannister"



var characters = ["John-Snow", "Sansa-Stark", "Arya-Stark", "Bran-Stark", "Cersei-Lannister", "Jamie-Lannister", "Tyrion-Lannister", "Danerys-Targaryen", "Yara-Greyjoy", "Theon-Greyjoy", "The-Hound", "The-Mountain", "Jorah-Mormont", "Tormund-Giantsbane", "Baric-Dondarrion", "Samwell-Tarly", "Gilly", "Little-Sam", "Varys", "Melisandre", "Bronn", "Davos-Seaworth", "Brienne-of-Tarth", "Podrick-Payne", "Gendry", "Euron-Greyjoy", "The-Night-King", "Viserion-Ice-Dragon", "Rhaegal-Yellow-Dragon", "Drogon-Danys-Dragon"]

var charactersv2 = ["John Snow", "Sansa Stark", "Arya Stark", "Bran Stark", "Cersei Lannister", "Jamie Lannister", "Tyrion Lannister", "Danerys Targaryen", "Yara Greyjoy", "Theon Greyjoy", "The Hound", "The Mountain", "Jorah Mormont", "Tormund Giantsbane", "Baric Dondarrion", "Samwell Tarly", "Gilly", "Little Sam", "Varys", "Melisandre", "Bronn", "Davos Seaworth", "Brienne of Tarth", "Podrick Payne", "Gendry", "Euron Greyjoy", "The Night King", "Viserion Ice Dragon", "Rhaegal Yellow Dragon", "Drogon Danys Dragon"]


// function dislaycurrent(){
//     var currentstatus = $("<div> John Snow: " + currentJonSnow + ", Sansa Stark: " + currentSansaStark + ", Arya Stark: " + currentAryaStark + ", Bran Stark: " + currentBranStark + ", Cersei Lanister: " + currentCerseiLannister + ", Jamie Lannister: " + currentJamieLannister + ", Tyrion Lannister: " + currentTyrionLannister + ", Danerys Targayen: " + currentDanerysTargaryen + ", Yara Greyjoy: " + currentYaraGreyjoy + ", Theon Greyjoy: " + currentTheonGreyjoy + ", The Hound:" + currentTheHound + ", The Mountain: " + currentTheMountain + ", Jorah Mormont: " + currentJorahMormont + ", Tormund Giantsbane: " + currentTormundGiantsbane + ", Baric Dondarion: ") 
    
// }

function createform() {

    console.log("Amazing")

    $("#deathpool").append('<div class="form-group"> <label for="playername">Your Name:</label> <textarea class="form-control" id="playername-input" rows="1"></textarea> </div>')

    for (var i = 0; i < characters.length; i++) {
        $("#deathpool").append('<div id=' + characters[i] + ' class="form-group x" value=' + characters[i] + '> <label for="deathpoolcharacter">' + charactersv2[i] + '</label> <select class="form-control" id="' + characters[i] + '-input"> <option>Alive</option> <option>Dead</option> <option>Night Walker</option> </select> </div>')
    }

    $("#deathpool").append('<div id=' + characters[i] + ' class="form-group x" value=' + characters[i] + '> <label for="deathpoolcharacter"> Bonus Question: Who will sit on the Iron Thron in the finale</label> <select class="form-control" id="Iron-Throne-input"> <option>John Snow</option> <option>Danerys Targerian</option> <option>Cercei Lannister</option> <option>Jamie Lannister</option> <option>Tyrion Lannister</option><option>Sansa Stark</option><option>Bran Stark</option><option>Varys</option><option>Melisandre</option><option>Other</option></select> </div>')

    
    $("#deathpool").append('<button id="submit-button" type="submit" class="btn btn-primary my-1">Submit</button>')
}

createform()



//Submit Button

$("#submit-button").on("click", (event) => {
    event.preventDefault();
    var playername = $("#playername-input").val().trim();
    var JonSnowstatus = $("#John-Snow-input").val();
    var SansaStarkstatus = $("#Arya-Stark-input").val();
    var BranStarkstatus = $("#Bran-Stark-input").val();
    var AryaStarkstatus = $("#Arya-Stark-input").val();
    var CerseiLannisterstatus = $("#Cersei-Lannister-input").val();
    var JamieLannisterstatus = $("#Jamie-Lannister-input").val();
    var TyrionLannisterstatus = $("#Tyrion-Lannister-input").val();
    var DanerysTargaryenstatus = $("#Danerys-Targaryen-input").val();
    var YaraGreyjoystatus = $("#Yara-Greyjoy-input").val();
    var TheonGreyjoystatus = $("#Theon-Greyjoy-input").val();
    var TheHoundstatus = $("#The-Hound-input").val();
    var TheMountainstatus = $("#The-Mountain-input").val();
    var JorahMormontstatus = $("#Jorah-Mormont-input").val();
    var TormundGiantsbanestatus = $("#Tormund-Giantsbane-input").val();
    var BaricDondarrionstatus = $("#Baric-Dondarrion-input").val();
    var EuronGreyjoystatus = $("#Euron-Greyjoy-input").val();
    var SamwellTarlystatus = $("#Samwell-Tarly-input").val();
    var Gillystatus = $("#Gilly-input").val();
    var LittleSamstatus = $("#Little-Sam-input").val();
    var Varysstatus = $("#Varys-input").val();
    var Melisandrestatus = $("#Melisandre-input").val();
    var Bronnstatus = $("#Bronn-input").val()
    var DavosSeaworthstatus = $("#Davos-Seaworth-input").val();
    var BrienneofTarthstatus = $("#Brienne-of-Tarth-input").val();
    var PodrickPaynestatus = $("#Podrick-Payne-input").val();
    var Gendrystatus = $("#Gendry-input").val();
    var EuronGreyjoystatus = $("#Euron-Greyjoy-input").val();
    var TheNightKingstatus = $("#The-Night-King-input").val();
    var ViserionIceDragonstatus = $("#Viserion-Ice-Dragon-input").val();
    var RhaegalYellowDragonstatus = $("#Rhaegal-Yellow-Dragon-input").val();
    var DrogonDanysDragonstatus = $("#Drogon-Danys-Dragon-input").val();
    var IronThronestatus = $("#Iron-Throne-input").val();


    console.log(playername)
    console.log("John Snow is " + JonSnowstatus)
    console.log(" Sansa Stark  is " + SansaStarkstatus)
    console.log(" Bran Stark  is " + BranStarkstatus)
    console.log(" Arya Stark  is " + AryaStarkstatus)
    console.log(" Cersei Lannister  is " + CerseiLannisterstatus)
    console.log(" Jamie Lannister is " + JamieLannisterstatus)
    console.log(" Tyrion Lannister is " + TyrionLannisterstatus)
    console.log(" Danerys Targaryen is " + DanerysTargaryenstatus)
    console.log(" Yara Greyjoy is " + YaraGreyjoystatus)
    console.log(" Theon Greyjoy  is " + TheonGreyjoystatus)
    console.log(" The Hound is " + TheHoundstatus)
    console.log(" The Mountain is " + TheMountainstatus)
    console.log(" Jorah Mormont  is " + JorahMormontstatus)
    console.log(" Tormund Giantsbane is " + TormundGiantsbanestatus)
    console.log(" Baric Dondarrion is " + BaricDondarrionstatus)
    console.log(" Euron Greyjoy is " + EuronGreyjoystatus)
    console.log(" Samwell Tarley is " + SamwellTarlystatus)
    console.log(" Gilly is " + Gillystatus)
    console.log(" Little Sam is " + LittleSamstatus)
    console.log(" Varys is " + Varysstatus)
    console.log(" Melisandre  is " + Melisandrestatus)
    console.log(" Bronn is " + Bronnstatus)
    console.log(" Davos Seaworth  is " + DavosSeaworthstatus)
    console.log(" Brienneof Tarth  is " + BrienneofTarthstatus)
    console.log(" Podrick Payne is " + PodrickPaynestatus)
    console.log(" Gendry is " + Gendrystatus)
    console.log(" Euron Greyjoy  is " + EuronGreyjoystatus)
    console.log(" The Night King  is " + TheNightKingstatus)
    console.log(" Viserion Ice Dragon  is " + ViserionIceDragonstatus)
    console.log(" Rhaegal Yellow Dragon is " + RhaegalYellowDragonstatus)
    console.log(" Drogon Danys Dragon is " + DrogonDanysDragonstatus)
    console.log( IronThronestatus + " sits on the Iron Throne")

    database.ref().push({
        dbplayername: playername,
        dbJonSnowstatus: JonSnowstatus,
        dbSansaStarkstatus: SansaStarkstatus,
        dbBranStarkstatus: BranStarkstatus,
        dbAryaStarkstatus: AryaStarkstatus,
        dbCerseiLannisterstatus: CerseiLannisterstatus,
        dbJamieLannisterstatus: JamieLannisterstatus,
        dbTyrionLannisterstatus: TyrionLannisterstatus,
        dbDanerysTargaryenstatus: DanerysTargaryenstatus,
        dbYaraGreyjoystatus: YaraGreyjoystatus,
        dbTheonGreyjoystatus: TheonGreyjoystatus,
        dbTheHoundstatus: TheHoundstatus,
        dbTheMountainstatus: TheMountainstatus,
        dbJorahMormontstatus: JorahMormontstatus,
        dbTormundGiantsbanestatus: TormundGiantsbanestatus,
        dbBaricDondarrionstatus: BaricDondarrionstatus,
        dbEuronGreyjoystatus: EuronGreyjoystatus,
        dbSamwellTarlystatus: SamwellTarlystatus,
        dbGillystatus: Gillystatus,
        dbLittleSamstatus: LittleSamstatus,
        dbVarysstatus: Varysstatus,
        dbMelisandrestatus: Melisandrestatus,
        dbBronnstatus: Bronnstatus,
        dbDavosSeaworthstatus: DavosSeaworthstatus,
        dbBrienneofTarthstatus: BrienneofTarthstatus,
        dbPodrickPaynestatus: PodrickPaynestatus,
        dbGendrystatus: Gendrystatus,
        dbEuronGreyjoystatus: EuronGreyjoystatus,
        dbTheNightKingstatus: TheNightKingstatus,
        dbViserionIceDragonstatus: ViserionIceDragonstatus,
        dbRhaegalYellowDragonstatus: RhaegalYellowDragonstatus,
        dbDrogonDanysDragonstatus: DrogonDanysDragonstatus,
        dbIronThronestatus: IronThronestatus
    });

    $("#deathpool").empty()
})



