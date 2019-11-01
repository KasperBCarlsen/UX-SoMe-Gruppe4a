mapboxgl.accessToken = 'pk.eyJ1Ijoia2FzcGVyYyIsImEiOiJjazIwNTF6eXEwNWgyM2Jxc216Y3Uzd2puIn0.XQTeWNTW9CMr6SJ6thClmw';
 
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/kasperc/ck2a8z6jv3gyt1cxhlwvti01d/draft',
center: [10.3333283, 55.670249],
zoom: 6,
bearing: 27,
pitch: 45
});
 
var chapters = {
'cph-fisketorv': {
bearing: 27,
center: [12.561475, 55.662732],
zoom: 13,
pitch: 20
},
'aarhus-bruunsgalleri': {
duration: 6000,
center: [10.203426, 56.149231],
bearing: 150,
zoom: 15,
pitch: 0
},
'odense-rosengaardscentret': {
bearing: 90,
center: [10.428085, 55.382488],
zoom: 13,
speed: 0.6,
pitch: 40
},
};
 
 
// On every scroll event, check which element is on screen
window.onscroll = function() {
var chapterNames = Object.keys(chapters);
for (var i = 0; i < chapterNames.length; i++) {
var chapterName = chapterNames[i];
if (isElementOnScreen(chapterName)) {
setActiveChapter(chapterName);
break;
}
}
};
 
var activeChapterName = 'aarhus-bruunsgaleri';
function setActiveChapter(chapterName) {
if (chapterName === activeChapterName) return;
 
map.flyTo(chapters[chapterName]);
 
document.getElementById(chapterName).setAttribute('class', 'active');
document.getElementById(activeChapterName).setAttribute('class', '');
 
activeChapterName = chapterName;
}
 
function isElementOnScreen(id) {
var element = document.getElementById(id);
var bounds = element.getBoundingClientRect();
return bounds.top < window.innerHeight && bounds.bottom > 0;
}

var marker = new mapboxgl.Marker()
.setLngLat([12.561475, 55.662732])
.addTo(map);

var marker = new mapboxgl.Marker()
.setLngLat([10.203426, 56.149231])
.addTo(map);

var marker = new mapboxgl.Marker()
.setLngLat([10.428085, 55.382488])
.addTo(map);

