ymaps.ready(init);
 
function init(){     
 
    var myMap;
 
    myMap = new ymaps.Map("map", {
        center: [48.592900, 34.557842],
        zoom: 17,
        controls: []
    });
 
    myMap.behaviors.disable('scrollZoom');
 
    myMap.controls.add("zoomControl", {
        position: {top: 15, left: 15}
    });
 
    var html  = '<div class="popup">';
        html +=     '<div class="popup-text text-align-left font-roboto-slab font-size-extra-small" style="color: white; padding: 20px">';
        html +=         '<p>частный юрист</p>';
        html +=         '<p>Михаил Швец</p>';
        html +=         '<p>г. Каменское (Днепродзержинск)</p>';
        html +=         '<p>Левый Берег</p>';
        html +=         '<p>проспект Героев АТО</p>';
        html +=         '<p>ТК “Фантом”</p>';
        html +=         '<p>068 887 04 66</p>';
        html +=         '<p>063 825 48 35</p>';
        html +=     '</div>';
        html += '</div>';
 
    var myPlacemark = new ymaps.Placemark([48.592900, 34.557842],
        {
          balloonContent: html
        },
        { iconLayout: 'default#image',
          iconImageHref: '../src/images/map-marker.jpg',
          iconImageSize: [50, 50],
          iconImageOffset: [0, 0],
          balloonLayout: "default#imageWithContent",
          balloonContentSize: [250, 500],
          balloonImageHref: '../src/images/map-bg.jpg',
          balloonImageOffset: [-144, -147],
          balloonImageSize: [300, 310],
          balloonShadow: true });     
 
    myMap.geoObjects.add(myPlacemark);
 
}