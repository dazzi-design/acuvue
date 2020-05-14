// 2020.05.11 By CSSLICK
// https://github.com/csslick/custom_checkbox

  function csslick_check(_option) {
    // checkbox 객체
    var el = _option.el;
    var $check_box = $(el + " input:checkbox");
    $(el + ' label').css('border-color', _option.color);

    // 채크박스 채크시 실행할 함수
    var _callback = function () {
      console.log("do something!");
    };

    var handle_checkbox = function () {
      if ($(this).is(":checked")) {
        var _id = $(this).attr("id");
        $("label[for=" + _id + "]").addClass("checked");
        _callback();
      } else {
        var _id = $(this).attr("id");
        $("label[for=" + _id + "]").removeClass("checked");
      }
    };

    $check_box.each(function (i, el) {
      // for, id 속성 추가
      $(this)
        .prev()
        .attr("for", "check" + i);
      $(this).attr("id", "check" + i);

      if ($(this).is(":checked")) {
        var _id = $(this).attr("id");
        $("label[for=" + _id + "]").addClass("checked");
      }
    });

    // 채크 이벤트 검사
    $check_box.on("change", handle_checkbox);
  }

