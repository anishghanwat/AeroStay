mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 10 // starting zoom
});

const marker = new mapboxgl.Marker({ color: "red" })
    .setLngLat(listing.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: popupOffsets })
        .setHTML(`<h3>${listing.location}</h3><p>Exact location will be provided after booking</p>`))
    .addTo(map);

console.log('Mapbox Token:', mapboxgl.accessToken);
console.log('Listing Geometry:', listing.geometry);
console.log('Coordinates:', listing.geometry ? listing.geometry.coordinates : 'No coordinates');
