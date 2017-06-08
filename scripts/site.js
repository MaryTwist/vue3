"use strict";

let _lastId = 0;

function getId() {
    return ++_lastId;
}

function Widget(_title, _text, _x, _y, _w, _h) {
    let self = this;

    this.title = _title;
    this.text = _text;
    this.x = _x;
    this.y = _y;
    this.w = _w;
    this.h = _h;
    this.hold = false;
    this.getLeft = function() { return self.x + "px" };
    this.getTop = function() { return self.y + "px" };
    this.getW = function() { return self.w + "px" };
    this.getH = function() { return self.h + "px" };
    this.id = getId();
}

let v = new Vue({
    el: "#app1",
    data: {

        editingWidget: {
            title: "",
            text: ""
        },

        editor: {
            mousePrevX: 0,
            mousePrevY: 0,
            mouseX: 0,
            mouseY: 0
        },
        currentWidget: null,
        widgets: [
            new Widget("Loader", "Get file from remote source.", 200, 120, 125, 120),
            new Widget("Extractor", "Extract data from given file.", 255, 255, 125, 120),
            new Widget("Import", "Write data to DB.", 255, 385, 125, 120),
            new Widget("Success", "Handle case when data was imported sucessfully.", 105, 520, 125, 120),
            new Widget("Fail", "Handle case when data was not imported due some errors.", 405, 520, 125, 120)
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

            this.editor.mousePrevX = this.editor.mouseX;
            this.editor.mousePrevY = this.editor.mouseY;
            
            this.editor.mouseX = e.pageX;
            this.editor.mouseY = e.pageY;

            if(this.currentWidget != null) {
                this.currentWidget.x += (this.editor.mouseX - this.editor.mousePrevX);
                this.currentWidget.y += (this.editor.mouseY - this.editor.mousePrevY);
            }
        },

        onBtnCreate: function() {
                this.widgets.push(new Widget(
                    this.editingWidget.title,
                    this.editingWidget.text,
                    16, 16, 125, 120
            ));

            this.editingWidget.title = this.editingWidget.text = "";
        },

        btnDeleteClick: function(o) {
            alert(o.id);
        }
    }
});
