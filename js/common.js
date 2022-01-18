$(function () {
    // 生成标签
    setLabel();
});

// 生成标签
function setLabel() {
    var tagArr = $(".author-tag").attr("tag").split(",");
    var html = '';
    var color = ["#eb2f96", "#52c41a", "#2f54eb", "#13c2c2", "#eb2f96", "#52c41a", "#2f54eb", "#13c2c2", "#eb2f96", "#52c41a", "#2f54eb", "#13c2c2"];
    var background = ["#fff0f6", "#f6ffed", "#f0f5ff", "#e6fffb", "#fff0f6", "#f6ffed", "#f0f5ff", "#e6fffb", "#fff0f6", "#f6ffed", "#f0f5ff", "#e6fffb"];
    var border = ["#ffadd2", "#b7eb8f", "#adc6ff", "#87e8de", "#ffadd2", "#b7eb8f", "#adc6ff", "#87e8de", "#ffadd2", "#b7eb8f", "#adc6ff", "#87e8de"];
    $.each(tagArr, function (index, item) {
        html += '<span style="color: ' + color[index] + '; background: ' + background[index] + '; border:1px ' + border[index] + ' solid;" title="' + item + '">' + item + '</span>';
    });
    $(".author-tag").html(html);
}
