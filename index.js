var v = new Vue({
    el: "#app1",
    data: {
        x: 0,
        y: 0,
        currentWidget: null,
        widgets: [
            { hold: false, title: "Loader", x: "250px", y: "100px", w: "120px", h: "75px" },
            { hold: false, title: "Extractor", x: "300px", y: "130px", w: "120px", h: "75px" },
            { hold: false, title: "Import to DB", x: "150px", y: "500px", w: "120px", h: "75px" },
            { hold: false, title: "Rename file", x: "700px", y: "470px", w: "120px", h: "75px" }
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
                this.currentWidget.x = (e.pageX - this.currentWidget.w >> 1) + "px";
                this.currentWidget.y = (e.pageY - Math.round(this.currentWidget.h >> 1)) + "px";

                this.x = this.currentWidget.x;
                this.y = this.currentWidget.y;
            }
        }
    }
});
