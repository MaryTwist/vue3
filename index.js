function Widget(_title, _x, _y, _w, _h) {
    var self = this;

    this.title = _title;
    this.x = _x;
    this.y = _y;
    this.w = _w;
    this.h = _h;
    this.hold = false;
    this.getLeft = function() { return self.x + "px" };
    this.getTop = function() { return self.y + "px" };
    this.getW = function() { return self.w + "px" };
    this.getH = function() { return self.h + "px" };
}

var v = new Vue({
    el: "#app1",
    data: {
        x: 0,
        y: 0,
        currentWidget: null,
        widgets: [
            new Widget("Loader", 200, 120, 125, 120),
            new Widget("Extractor", 255, 255, 125, 120),
            new Widget("Import", 255, 385, 125, 120),
            new Widget("Success", 105, 520, 125, 120),
            new Widget("Fail", 405, 520, 125, 120)
        ]
    },

    methods: {
        onClick: function(o) {
           o.hold = !o.hold;

           this.currentWidget = o.hold
            ? o
            : null;
        },

        onMouseMove: function(e) {
            this.x = e.pageX;
            this.y = e.pageY;

            if(this.currentWidget != null) {
                this.currentWidget.x = (e.pageX - (this.currentWidget.w >> 1));
                this.currentWidget.y = (e.pageY - (this.currentWidget.h >> 1));

                this.x = this.currentWidget.x;
                this.y = this.currentWidget.y;
            }
        }
    }
});
