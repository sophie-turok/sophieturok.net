var previews = document.createElement('div');
previews.id = 'workpreviews';
previews.innerHTML = document.getElementById('workpics').innerHTML;
document.getElementById('workcarousel').appendChild(previews);

var siemaPics = new Siema({
  loop:true,
  selector: "#workpics"
});

var previewLen = previews.children.length;
if (previewLen > 3) {
	previewLen = 3;
} 

var siemaPreviews = new Siema({
  loop:true,
  startIndex: -1,
  perPage: previewLen,
  selector: '#workpreviews'
})

document.querySelector('.prev').addEventListener('click', () => {
  siemaPics.prev();
  siemaPreviews.prev();
});
document.querySelector('.next').addEventListener('click', () => {
  siemaPics.next();
  siemaPreviews.next();
});