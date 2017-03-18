<script>
// for adding verses to PrayerGroups
// https://www.prayergroups.com/crisis-prayers/

// GetBible api docs
// https://getbible.net/api

// verse data
var verseData = [
{
	"groupTitle": "Addiction",
	"verses":[{"verseText":"2 Timothy 1:7","verseAPI":"2 Timothy 1:7"
	},{"verseText":"Psalm 34:4","verseAPI":"Psa 34:4"
	},{"verseText":"Psalm 56:3","verseAPI":"Psa 56:3"}]
},
{
	"groupTitle": "Afraid",
	"verses":[{"verseText":"2 Timothy 1:7","verseAPI":"2 Timothy 1:7"
	},{"verseText":"Psalm 34:4","verseAPI":"Psa 34:4"
	},{"verseText":"Psalm 56:3","verseAPI":"Psa 56:3"}]
},	
{
	"groupTitle": "Fear",
	"verses":[{"verseText":"2 Timothy 1:7","verseAPI":"2 Timothy 1:7"
	},{"verseText":"Psalm 34:4","verseAPI":"Psa 34:4"
	},{"verseText":"Psalm 56:3","verseAPI":"Psa 56:3"}]
}
];
  
// check for URL variable
function getUrlVar(q) {
  return (window.location.search.match(new RegExp('[?&]' + q + '=([^&]+)')) || [, null])[1];
}
  
// check for test variable (only show this content if variable exists)
if(getUrlVar("test")){
  $('.sqs-block-content').append('<p class="verse" data-verse="Psa 51:1;51:10">test</p>');
  $('.sqs-block-content').remove();
}

// add modal markup for puting verses in
$('body').append('<div id="myModal" class="modal"> <div class="modal-content"> <span id="verseModalClose">&times;</span> <p id="verse-well"></p></div></div>');

// onClick of button >> show the verse
$('p.verse').click(function(){
  var verseRef = $(this).attr('data-verse');
  var fetchURL = "//getbible.net/json?scripture="+verseRef;
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
      $('#verse-well').empty().append('Error: Didn\'t recieve bible verse.');
    });
});

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
    }
    html += "<hr>"; 
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
