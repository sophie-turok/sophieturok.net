var previews = document.createElement('div');
var pics = document.getElementById('workpics');
previews.id = 'workpreviews';
previews.innerHTML = pics.innerHTML;
document.getElementById('workcarousel').appendChild(previews);

var siemaPics = new Siema({
  loop:true,
  selector: "#workpics",
  draggable: false
});

var previewLen = Math.min(3,previews.children.length);

var siemaPreviews = new Siema({
  loop:true,
  startIndex: -1,
  perPage: previewLen,
  selector: '#workpreviews',
  draggable: false
})

$('.prev').click(function(event) {
  siemaPics.prev();
  siemaPreviews.prev();
  adjustHeight();
});
$('.next').click(function(event) {
  siemaPics.next();
  siemaPreviews.next();
  adjustHeight();
});

function adjustHeight() {
  var workPicCurrentHeight = $('#workpics')[0].children[0].children[siemaPics.currentSlide+1].getBoundingClientRect().height;
  console.log(workPicCurrentHeight);
  $('#workpics').css('height',workPicCurrentHeight);
}

adjustHeight();

$( document ).ready(function() {
  var height = $('#workpics')[0].getBoundingClientRect().height;
  $('#workpics').children(0).children().css('height',height+'px');
  $('#workpics').children(0).children().children().css('display','flex');
  $('#workpics').children(0).children().children().css('height',height);
  $('#workpics').children(0).children().children().css('justify-content','center');
  $('#workpics').children(0).children().children().css('flex-direction','column');
});

for (var i = 0; i < previews.children[0].children.length; i++) {
  var idNum = i - 4;
  previews.children[0].children[i].id = 'workpreview'+idNum;
  $('#workpreview'+idNum).click(function(event) {
    var previewCurrent = siemaPreviews.currentSlide;
    var id = event.currentTarget.id.substring(11,event.currentTarget.id.length);
    if (id == previewCurrent + 1) {
      siemaPreviews.next();
      siemaPics.next();
      adjustHeight();
    } else if (id == previewCurrent - 1) {
      siemaPreviews.prev();
      siemaPics.prev();
      adjustHeight();
    }
  })
}