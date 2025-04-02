mapboxgl.accessToken = mapToken;

console.log('Map Initialization:', {
    mapToken,
    listing,
    coordinates: listing.geometry ? listing.geometry.coordinates : 'No coordinates'
});

if (!listing.geometry || !listing.geometry.coordinates) {
    console.error('Error: Listing geometry or coordinates are missing');
} else {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: listing.geometry.coordinates,
        zoom: 10
    });

    const marker = new mapboxgl.Marker({ color: "red" })
        .setLngLat(listing.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 25 })
            .setHTML(`<h3>${listing.location}</h3><p>Exact location will be provided after booking</p>`))
        .addTo(map);

    console.log('Map and marker initialized successfully');
}

console.log('Mapbox Token:', mapboxgl.accessToken);
console.log('Listing Geometry:', listing.geometry);
console.log('Coordinates:', listing.geometry ? listing.geometry.coordinates : 'No coordinates');
