"use strict";
function parse(log) {
    var text = log[0].split(/(?=%c)/g);
    var parameters = log.slice(1);
    var styles = parameters.filter(function (p) {
        return typeof p === "string" && p.startsWith("color: ");
    });
    var params = parameters.filter(function (p) {
        return typeof p === "string" && !p.startsWith("color: ");
    });
    var count = {
        styles: 0,
        params: 0
    };
    var output = [];
    text.map(function (t, i) {
        if (t.startsWith("%c")) {
            t = t.replace("%c", "");
            if (t.includes("%s")) {
                var temp_1 = t.split(/(?=%s)/g);
                temp_1.forEach(function (item, index) {
                    if (item.includes("%s")) {
                        temp_1[index] = temp_1[index].replace("%s", params[count.params]);
                        count.params++;
                    }
                });
                t = temp_1.join("");
            }
            output.push({
                content: t,
                color: styles[count.styles].replace("color: ", "")
            });
            count.styles++;
        }
        else {
            if (t.includes("%s")) {
                var temp_2 = t.split(/(?=%s)/g);
                temp_2.forEach(function (item, index) {
                    if (item.includes("%s")) {
                        temp_2[index] = temp_2[index].replace("%s", params[count.params]);
                        count.params++;
                    }
                });
                t = temp_2.join("");
            }
            output.push({ content: t });
        }
    });
    return output;
}
exports.parse = parse;
