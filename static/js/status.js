(function($) {
    $(document).ready(function() {
        var map = L.map('map', {crs: L.CRS.Simple, minZoom: 2, maxZoom: 6});
        var layer = L.tileLayer.zoomify('tiles/{g}/{z}-{x}-{y}.jpg', {
            width: 12000,
            height: 6441,
            attribution: 'Powered by CRH380A-2722.'
        }).addTo(map);
        map.fitBounds(layer.getBounds()).setZoom(3);
        $('#operation-info-toggler').on('click', function(event) {
            event.preventDefault();
            $('#operation-info').modal('show');
        });
    });
})(jQuery);
