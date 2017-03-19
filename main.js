<script>
// for adding verses to PrayerGroups
// https://www.prayergroups.com/crisis-prayers/

// GetBible api docs
// https://getbible.net/api

// verse data
var verseGithubURL = "";
if(getUrlVar("testdata")){
  verseGithubURL = "https://crossorigin.me/https://raw.githubusercontent.com/chancesmith/prayergroups-daily-living-verses/master/test-daily-verses.json";
}
else{
  verseGithubURL = "https://crossorigin.me/https://raw.githubusercontent.com/chancesmith/prayergroups-daily-living-verses/master/daily-verses.json";
}
// ajax data
var jQueryPromise = $.ajax(verseGithubURL);
var realPromise = Promise.resolve(jQueryPromise);

// promise to retreive data
realPromise
.then(function (res){
  var verseData = jQuery.parseJSON( res );
  // shows the verses requested
  showContent(verseData);
}, function(err) {
  // error
  console.log("do dice on Github data :(");
}).then(function (){
  makeVersesClickable();
});

// check for URL variable
function getUrlVar(q) {
  return (window.location.search.match(new RegExp('[?&]' + q + '=([^&]+)')) || [, null])[1];
}

// check for test variable (only show this content if variable exists)
function showContent(verseData){
  if(getUrlVar("test")){
    // $('.sqs-block-content').append('<p class="verse" data-verse="Psa 51:1;51:10">test</p>');
    $(".sqs-block").remove(); // all content blocks
    var html = "";
    var count = 0;
    verseData.forEach(function(category) {
      count++;
      if(count % 2 == 0){
        html += '<div class="sqs-block html-block sqs-block-html">';
      }
      else{
        html += '<div class="sqs-block html-block sqs-block-html sqs-col-6 span-6 float float-right">';
      }
      html += '<div class="sqs-block-content">';
      html += '<h2><strong>';
      html += category.groupTitle;
      html += '</strong></h2>';
      var verses = category.verses;
      verses.forEach(function(verse) {
        html += '<p class="verse" data-verse="';
        // add data-verse
        html += verse.api;
        html += '"><span>';
        // add text
        html += verse.text;
        html += '</span></p>';
      });
      html += '</div>'; // end sqs-block-content
      html += '</div>'; // end sqs-block
    });
    $('body#collection-58c7295bf7e0aba55a4e6688 .Main-content .col.sqs-col-12.span-12:first-of-type').append(html);
  }
}

// add modal markup for puting verses in
$('body').append('<div id="myModal" class="modal"> <div class="modal-content"> <span id="verseModalClose">&times;</span> <p id="verse-well"></p></div></div>');

// onClick of button >> show the verse
function makeVersesClickable(){
  $('p.verse').click(function(){
    var verseRef = $(this).attr('data-verse');
    console.log("verseRef: "+verseRef);
    var fetchURL = "https://crossorigin.me/https://getbible.net/json?scripture="+verseRef;
    // When the user clicks on verse, open the modal
    openModal();
    // ajax data
    var jQueryPromise = $.ajax(fetchURL);
    $('#verse-well').empty().append('Loading...');
    var realPromise = Promise.resolve(jQueryPromise);

    // promise to retreive data
    realPromise
    .then(function (res){
      var data = fixBibleVerseFetch(res);
      var dataJSON = jQuery.parseJSON( data );
      // shows the verses requested
      showVerse(dataJSON);
    }, function(err) {
      // error
      $('#verse-well').empty().append('Error: Didn\'t recieve bible verse. Try again?');
    });
  });
}

function fixBibleVerseFetch(data){
  // removes first & last characters of data "(" & ";"
  var result = data.substring(1, data.length-1);
  // removes last character again ")"
  result = result.substring(0, result.length - 1);
  return result;
}

function showVerse(versesJSON){
  var books = versesJSON.book;
  var html = '';
  // loop through verses
  for (var verses in books) {
    if (books.hasOwnProperty(verses)) {
      html += '<h3>'+getVerseHeading(books[verses])+'</h3>';
      html += getVerses(books[verses]);
      html += "<hr>";
    }
  }

  // add header to page
  $('#verse-well').empty().append(html);
}

function getVerseHeading(versesJSON){
  var v = versesJSON;
  // verse's book name
  var heading = v.book_name;
  heading += ' ';
  // verse's chapter
  heading += v.chapter_nr;
  return heading;
}

function getVerses(versesJSON){
  var v = versesJSON;
  var verse = '';
  var versesObj = v.chapter;
  // loop through verses of current chapter
  for (var ver in versesObj) {
    verse += '<p>';
    if (versesObj.hasOwnProperty(ver)) {
      // verse's v#
      verse += '<strong>v' + versesObj[ver].verse_nr;
      verse += '</strong> ';
      // verse's content
      verse += versesObj[ver].verse
    }
    verse += '</p>';
  }

  return verse;
}

//////
// Modal logic
//////

// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementById("verseModalClose");

// opens modal
function openModal() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
</script>
