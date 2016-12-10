$(document).ready(function() {
    var firstName = $('#nameF');
    var lastName = $('#nameL');
    var button= $('#button');
    var letter = $('#letter');
    button.click(function() {
        alert("Great, "+ firstName.val() + ". Your letter has been sent!");
    });
});//Doesn't really save information because Santa doesn't exist. But the user doesn't have to know that.