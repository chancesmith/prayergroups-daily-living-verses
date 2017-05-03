<script>
// for adding verses to PrayerGroups
// https://www.prayergroups.com/crisis-prayers/

// GetBible api docs
// https://getbible.net/api

// verse data
var verseData = [
{
"groupTitle": "Addiction",
"verses": [
{
"text": "John 8:34-36",
"api": "John 8:34-36"
},
{
"text": "James 1:13-15",
"api": "James 1:13-15"
},
{
"text": "Proverbs 14:12",
"api": "Proverbs 14:12"
}
]
},
{
"groupTitle": "Afraid",
"verses": [
{
"text": "2 Timothy 1:7",
"api": "2 Timothy 1:7"
},
{
"text": "Psalm 34:4",
"api": "Psa 34:4"
},
{
"text": "Psalm 56:3",
"api": "Psa 56:3"
}
]
},
{
"groupTitle": "Anxiety",
"verses": [
{
"text": "Matthew 6:25, 31, 33",
"api": "Matthew 6:25;6:31;6:33"
},
{
"text": "Philemon 4:6-7",
"api": "Philemon 4:6-7"
},
{
"text": "Psalm 46:1",
"api": "Psa 46:1"
}
]
},
{
"groupTitle": "Distant From God",
"verses": [
{
"text": "1 John 1:8-9",
"api": "1 John 1:8-9"
},
{
"text": "Psalm 51:1 & 10",
"api": "Psa 51:1 & 10"
}
]
},
{
"groupTitle": "Bitter",
"verses": [
{
"text": "Colossians 3:19",
"api": "Colossians 3:19"
},
{
"text": "Hebrews 12:14-15",
"api": "Hebrews 12:14-15"
}
]
},
{
"groupTitle": "Critical of Others",
"verses": [
{
"text": "Matthew 6:14-15",
"api": "Matthew 6:14-15"
},
{
"text": "Romans 14:10, 13",
"api": "Romans 14:10, 13"
}
]
},
{
"groupTitle": "Curious About God",
"verses": [
{
"text": "John 1:1-4",
"api": "John 1:1-4"
},
{
"text": "John 14:6",
"api": "John 14:6"
},
{
"text": "James 1:5",
"api": "James 1:5"
}
]
},
{
"groupTitle": "Death",
"verses": [
{
"text": "John 11:25",
"api": "John 11:25"
},
{
"text": "1 Corinthians 15:55-58",
"api": "1 Corinthians 15:55-58"
},
{
"text": "1 Thessalonians 4:13-18",
"api": "1 Thessalonians 4:13-18"
},
{
"text": "Revelation 21:4",
"api": "Revelation 21:4"
}
]
},
{
"groupTitle": "Depressed",
"verses": [
{
"text": "Psalm 3:3-5",
"api": "Psa 3:3-5"
},
{
"text": "Psalm 30:5",
"api": "Psa 30:5"
},
{
"text": "Psalm 34:4",
"api": "Psa 34:4"
},
{
"text": "Psalm 40:1-2",
"api": "Psa 40:1-2"
},
{
"text": "Psalm 42:11",
"api": "Psa 42:11"
},
{
"text": "Psalm 43:5",
"api": "Psa 43:5"
},
{
"text": "Psalm 147:3",
"api": "Psa 147:3"
}
]
},
{
"groupTitle": "Desperate",
"verses": [
{
"text": "Romans 8:38-39",
"api": "Romans 8:38-39"
},
{
"text": "Psalm 61:1-3",
"api": "Psa 61:1-3"
},
{
"text": "Psalm 121:1-2",
"api": "Psa 121:1-2"
},
{
"text": "Hebrews 10:23",
"api": "Hebrews 10:23"
}
]
},
{
"groupTitle": "Discouraged",
"verses": [
{
"text": "2 Corinthians 4:8, 16",
"api": "2 Corinthians 4:8, 16"
},
{
"text": "Philemon 1:6-7",
"api": "Philemon 1:6-7"
},
{
"text": "Psalm 23:1, 4",
"api": "Psa 23:1, 4"
}
]
},
{
"groupTitle": "Doubting God",
"verses": [
{
"text": "John 1:1-4",
"api": "John 1:1-4"
},
{
"text": "John 14:6",
"api": "John 14:6"
},
{
"text": "Colossians 1:15-17",
"api": "Colossians 1:15-17"
},
{
"text": "Matthew 21:21",
"api": "Matthew 21:21"
},
{
"text": "James 1:6",
"api": "James 1:6"
}
]
},
{
"groupTitle": "Guidance",
"verses": [
{
"text": "James 1:5",
"api": "James 1:55"
},
{
"text": "Psalm 32:8",
"api": "Psa 32:8"
},
{
"text": "Psalm 37:5",
"api": "Psa 37:5"
},
{
"text": "Proverbs 3:5-6",
"api": "Proverbs 3:5-6"
}
]
},
{
"groupTitle": "Gambling",
"verses": [
{
"text": "Matthew 6:29-30",
"api": "Matthew 6:29-30"
},
{
"text": "1 Timothy 6:10",
"api": "1 Timothy 6:10"
},
{
"text": "Hebrews 13:5",
"api": "Hebrews 13:5"
}
]
},
{
"groupTitle": "Friends Fail",
"verses": [
{
"text": "Luke 17:3-4",
"api": "Luke 17:3-4"
},
{
"text": "2 Timothy 4:16-18",
"api": "2 Timothy 4:16-18"
}
]
},
{
"groupTitle": "Forgiveness",
"verses": [
{
"text": "John 3:16",
"api": "John 3:16"
},
{
"text": "1 John 1:9",
"api": "1 John 1:9"
}
]
},
{
"groupTitle": "Sexual Sin",
"verses": [
{
"text": "Matthew 5:27-28",
"api": "Matthew 5:27-28"
},
{
"text": "Romans 1:26-27",
"api": "Romans 1:26-27"
},
{
"text": "1 Corinthians 6:18-20",
"api": "1 Corinthians 6:18-20"
},
{
"text": "2 Timothy 2:22",
"api": "2 Timothy 2:22"
}
]
},
{
"groupTitle": "Suicide",
"verses": [
{
"text": "Psalm 143:7-11",
"api": "Psa 143:7-11"
}
]
},
{
"groupTitle": "Worried",
"verses": [
{
"text": "Matthew 6:19-34",
"api": "Matthew 6:19-34"
},
{
"text": "1 Peter 5:6-7",
"api": "1 Peter 5:6-7"
}
]
},
{
"groupTitle": "Stress",
"verses": [
{
"text": "Psalm 27:5",
"api": "Psa 27:5"
},
{
"text": "Psalm 30:5",
"api": "Psa 30:53"
},
{
"text": "Psalm 37:7-8",
"api": "Psa 37:7-8"
},
{
"text": "Matthew 11:28",
"api": "Matthew 11:28"
},
{
"text": "Philemon 1:11-13",
"api": "Philemon 1:11-13"
},
{
"text": "Psalm 30:5",
"api": "Psa 30:53"
},
{
"text": "Psalm 9:9",
"api": "Psa 9:9"
},
{
"text": "Psalm 34:4",
"api": "Psa 34:4"
}
]
},
{
"groupTitle": "Peace",
"verses": [
{
"text": "John 14:1-4, 27",
"api": "John 14:1-4, 27"
},
{
"text": "John 16:33",
"api": "John 16:33"
},
{
"text": "Romans 5: 1-5",
"api": "Romans 5: 1-5"
},
{
"text": "Philemon 1:6-7",
"api": "Philemon 1:6-7"
}
]
},
{
"groupTitle": "Anger",
"verses": [
{
"text": "Romans 12:17-18, 21",
"api": "Romans 12:17-18, 21"
},
{
"text": "Ephesians 4:26",
"api": "Ephesians 4:26"
},
{
"text": "Proverbs 15:1",
"api": "Proverbs 15:1"
},
{
"text": "Proverbs 19:11",
"api": "Proverbs 19:11"
}
]
},
{
"groupTitle": "Laziness",
"verses": [
{
"text": "2 Thessalonians 3:10-13",
"api": "2 Thessalonians 3:10-13"
},
{
"text": "Proverbs 6:6-11",
"api": "Proverbs 6:6-11"
},
{
"text": "Proverbs 13:4",
"api": "Proverbs 13:4"
}
]
},
{
"groupTitle": "Fear",
"verses": [
{
"text": "2 Timothy 1:7",
"api": "2 Timothy 1:7"
},
{
"text": "Psalm 31:24",
"api": "Psa 31:24"
},
{
"text": "Psalm 91:10",
"api": "Psa 91:10"
},
{
"text": "Psalm 121: 1-2",
"api": "Psa 121: 1-2"
}
]
},
{
"groupTitle": "Greed",
"verses": [
{
"text": "Matthew 6:19-21",
"api": "Matthew 6:19-21"
},
{
"text": "Luke 12:15, 34",
"api": "Luke 12:15, 34"
},
{
"text": "1 Timothy 6:10",
"api": "1 Timothy 6:10"
},
{
"text": "Proverbs 11:24-25",
"api": "Proverbs 11:24-25"
},
{
"text": "Proverbs 15:27",
"api": "Proverbs 15:27"
},
{
"text": "Proverbs 23:4-5",
"api": "Proverbs 23:4-5"
}
]
},
{
"groupTitle": "Lust",
"verses": [
{
"text": "1 John 2:15-17",
"api": "1 John 2:15-17"
}
]
},
{
"groupTitle": "Lying/Deceit",
"verses": [
{
"text": "Ephesians 4:25",
"api": "Ephesians 4:25"
},
{
"text": "Proverbs 12:19",
"api": "Proverbs 12:19"
},
{
"text": "Proverbs 14:5",
"api": "Proverbs 14:5"
}
]
},
{
"groupTitle": "Revenge",
"verses": [
{
"text": "Matthew 5:44",
"api": "Matthew 5:44"
},
{
"text": "1 Thessalonians 5:15",
"api": "1 Thessalonians 5:15"
}
]
},
{
"groupTitle": "Stealing",
"verses": [
{
"text": "Ephesians 4:28",
"api": "Ephesians 4:28"
},
{
"text": "1 Peter 4:15",
"api": "1 Peter 4:15"
},
{
"text": "Proverbs 29:24",
"api": "Proverbs 29:24"
}
]
},
{
"groupTitle": "Abuse",
"verses": [
{
"text": "Mark 9:42",
"api": "Mark 9:42"
},
{
"text": "1 Corinthians 7:2-3",
"api": "1 Corinthians 7:2-3"
}
]
},
{
"groupTitle": "Failing in Life",
"verses": [
{
"text": "Romans 8:31, 35, 38-39",
"api": "Romans 8:31, 35, 38-39"
}
]
},
{
"groupTitle": "Disaster",
"verses": [
{
"text": "Psalm 55:16-17, 22",
"api": "Psa 55:16-17, 22"
},
{
"text": "Psalm 91:1-2",
"api": "Psa 91:1-2"
},
{
"text": "Psalm 118:5-6",
"api": "Psa 118:5-6"
}
]
},
{
"groupTitle": "Future",
"verses": [
{
"text": "Matthew 6:25, 33-34",
"api": "Matthew 6:25, 33-34"
},
{
"text": "James 4:13-15",
"api": "James 4:13-15"
}
]
},
{
"groupTitle": "Guilt",
"verses": [
{
"text": "1 John 1:9",
"api": "1 John 1:9"
},
{
"text": "Psalm 51:1",
"api": "Psa 51:1"
},
{
"text": "Proverbs 28:13",
"api": "Proverbs 28:13"
},
{
"text": "Hebrews 10:17",
"api": "Hebrews 10:17"
},
{
"text": "Proverbs 28:13",
"api": "Proverbs 28:13"
}
]
},
{
"groupTitle": "Leaving Home",
"verses": [
{
"text": "Psalm 139:1-3",
"api": "Psa 139:1-3"
},
{
"text": "Proverbs 3:5-6",
"api": "Proverbs 3:5-6"
},
{
"text": "Proverbs 7:1-3",
"api": "Proverbs 7:1-3"
}
]
},
{
"groupTitle": "Peace",
"verses": [
{
"text": "John 14:1-4, 27",
"api": "John 14:1-4, 27"
},
{
"text": "John 16:33",
"api": "John 16:33"
},
{
"text": "Romans 5:1-5",
"api": "Romans 5:1-5"
},
{
"text": "Philemon 1:6-7",
"api": "Philemon 1:6-7"
}
]
},
{
"groupTitle": "Gossip",
"verses": [
{
"text": "Matthew 12:36",
"api": "Matthew 12:36"
},
{
"text": "Ephesians 4:29",
"api": "Ephesians 4:29"
},
{
"text": "James 3:1-2",
"api": "James 3:1-2"
},
{
"text": "1 Peter 4:15",
"api": "1 Peter 4:15"
},
{
"text": "Psalm 19:14",
"api": "Psa 19:14"
},
{
"text": "Psalm 101:5",
"api": "Psa 101:5"
},
{
"text": "Psalm 141:3",
"api": "Psa 141:3"
},
{
"text": "Proverbs 20:19",
"api": "Proverbs 20:19"
}
]
},
{
"groupTitle": "Insecurity",
"verses": [
{
"text": "John 10:27-28",
"api": "John 10:27-28"
}
]
},
{
"groupTitle": "Peer Pressure",
"verses": [
{
"text": "1 Corinthians 15:33",
"api": "1 Corinthians 15:33"
},
{
"text": "Psalm 1:1-2",
"api": "Psa 1:1-2"
},
{
"text": "Proverbs 1:10-15",
"api": "Proverbs 1:10-15"
}
]
},
{
"groupTitle": "Revenge",
"verses": [
{
"text": "Matthew 5:44",
"api": "Matthew 5:44"
},
{
"text": "1 Thessalonians 5:15",
"api": "1 Thessalonians 5:15"
}
]
},
{
"groupTitle": "Relationships",
"verses": [
{
"text": "1 Corinthians 15:33",
"api": "1 Corinthians 15:33"
},
{
"text": "Proverbs 13:20",
"api": "Proverbs 13:20"
},
{
"text": "Proverbs 17:17",
"api": "Proverbs 17:17"
},
{
"text": "Proverbs 18:24",
"api": "Proverbs 18:24"
}
]
},
{
"groupTitle": "Sickness/Pain",
"verses": [
{
"text": "2 Corinthians 12:9-10",
"api": "2 Corinthians 12:9-10"
},
{
"text": "James 5:14-15",
"api": "James 5:14-15"
}
]
},
{
"groupTitle": "Sorrow (Grief)",
"verses": [
{
"text": "2 Corinthians 1:3-4",
"api": "2 Corinthians 1:3-4"
},
{
"text": "Psalm 23",
"api": "Psa 23"
},
{
"text": "Psalm 34:18",
"api": "Psa 34:18"
},
{
"text": "Psalm 147:3",
"api": "Psa 147:3"
}
]
},
{
"groupTitle": "Temptation",
"verses": [
{
"text": "1 Corinthians 10:12-13",
"api": "1 Corinthians 10:12-13"
},
{
"text": "1 Timothy 6:11",
"api": "1 Timothy 6:11"
},
{
"text": "James 4:7",
"api": "James 4:7"
}
]
},
{
"groupTitle": "Trouble",
"verses": [
{
"text": "Psalm 20:1-2",
"api": "Psa 20:1-2"
},
{
"text": "Psalm 23",
"api": "Psa 23"
},
{
"text": "Psalm 71:1-2",
"api": "Psa 71:1-2"
}
]
},
{
"groupTitle": "Adultery",
"verses": [
{
"text": "Matthew 5:27-28, 31-32",
"api": "Matthew 5:27-28, 31-32"
},
{
"text": "1 Corinthians 6:18",
"api": "1 Corinthians 6:18"
}
]
},
{
"groupTitle": "Adversity",
"verses": [
{
"text": "Philemon 1:6-7",
"api": "Philemon 1:6-7"
},
{
"text": "1 Peter 1:6-7",
"api": "1 Peter 1:6-7"
}
]
},
{
"groupTitle": "Abortion",
"verses": [
{
"text": "Psalm 139:13-16",
"api": "Psa 139:13-16"
}
]
},
{
"groupTitle": "Weary",
"verses": [
{
"text": "Matthew 11:28-30",
"api": "Matthew 11:28-30"
},
{
"text": "Galatians 6:9",
"api": "Galatians 6:9"
}
]
}
];

$(document).ready(function(){
 
var isVersePage = false;
var isVersesVisible = false;
  
// start it up
var checkPageExist = setInterval(function() {
    isVersePage = $('body#collection-58c7295bf7e0aba55a4e6688').length;
}, 500); // check every 100ms

  
var checkVersesExist = setInterval(function() {
  isVersesVisible = $('body#collection-58c7295bf7e0aba55a4e6688.verses').length; 
  if (isVersePage && !isVersesVisible) {
    $('body#collection-58c7295bf7e0aba55a4e6688').addClass('verses');
    // verseData = jQuery.parseJSON( verseData );
    // shows the verses requested
    showContent(verseData);
    makeVersesClickable();
    
   } else {  }
}, 500); // check every 100ms
  


// check for test variable (only show this content if variable exists)
function showContent(verseData){
  // crisis prayer page
  if($("body#collection-58c7295bf7e0aba55a4e6688").length > 0){
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
    //console.log("verseRef: "+verseRef);
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
  console.log('script is run');


  showContent(verseData);
  makeVersesClickable();
  console.log('page is ready');
})
</script>
