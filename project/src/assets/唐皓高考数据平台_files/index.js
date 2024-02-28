/**
 * Created by wangxiaoyang on 2018/11/27.
 */

var search_flag = "";
var last_wen_tag = "1AWEN";
var last_li_tag = "1ALI";
var is_init_wen = 0;

var pici_list = ['1A1LI_table', '1ALI_table', '2ALI_table', '2BLI_table', '1BLI_table','T1LI_table','T2LI_table',
    '1A1WEN_table', '1AWEN_table', '2AWEN_table', '2BWEN_table', '1BWEN_table','T1WEN_table','T2WEN_table'];


var global_search_school = "";
var global_search_major = "";
var global_search_city = "";
var global_is_211 = 0;
var global_is_985 = 0;
var global_is_zizhu = 0;
var global_show_pici_list = pici_list;
var global_search_flag = "";


$(document).ready(function () {
    $(".container").on("click", "#wen_li_switch", function () {

        var li_ke = $("#li_ke");
        var wen_ke = $("#wen_ke");
        if (li_ke.is(':hidden')) {
            li_ke.show();
            wen_ke.hide();
            if (global_search_flag == "") {
                get_rank(last_li_tag + '_table', 1);
                show_tag(last_li_tag);

            }
            else {
                hide_all_table();
                var li_pici_list = ['1ALI_table','1A1LI_table', '2ALI_table', '2BLI_table', '1BLI_table','T1LI_table','T2LI_table'];


                for (var i = 0; i < li_pici_list.length; i++) {

                    if ($.inArray(li_pici_list[i], global_show_pici_list) != -1) {
                        if (global_search_flag == 'school'){
                            get_rank(li_pici_list[i], 1, global_search_school,"","",global_is_985,global_is_211,global_is_zizhu);
                        }
                        else if (global_search_flag == 'major'){
                            get_rank(li_pici_list[i], 1,"",global_search_major,"", global_is_985,global_is_211,global_is_zizhu);
                        }
                        else {
                           get_rank(li_pici_list[i], 1,"","",global_search_city, global_is_985,global_is_211,global_is_zizhu);
                        }
                        tag = li_pici_list[i].replace("_table","");
                        show_tag(tag);
                        break;

                    }

                }
            }

        } else {
            li_ke.hide();
            wen_ke.show();
            if (global_search_flag == "") {
                get_rank(last_wen_tag + '_table', 1);
                show_tag(last_wen_tag);

            }
            else {
                hide_all_table();
                var wen_pici_list = ['1AWEN_table','1A1WEN_table', '2AWEN_table', '2BWEN_table', '1BWEN_table','T1WEN_table','T2WEN_table'];


                for (var i = 0; i < wen_pici_list.length; i++) {

                    if ($.inArray(wen_pici_list[i], global_show_pici_list) != -1) {
                        if (global_search_flag == 'school'){
                            get_rank(wen_pici_list[i], 1, global_search_school,"", "",global_is_985,global_is_211,global_is_zizhu);
                        }
                        else if (global_search_flag == 'major'){
                            get_rank(wen_pici_list[i], 1,"",global_search_major,"",global_is_985,global_is_211,global_is_zizhu);
                        }
                        else {
                            get_rank(wen_pici_list[i], 1,"","",global_search_city,global_is_985,global_is_211,global_is_zizhu);
                        }
                        tag = wen_pici_list[i].replace("_table","");
                        show_tag(tag);
                        break;

                    }

                }
            }



        }
    });

    $(".container").on("click", ".pici_tags", function () {

        var pici = $(this);
        var pici_id = pici.attr("id");

        if (pici_id.indexOf("T") != -1) {
            $("#tiqianpi_notice").modal("show");
            return
        }

        if (pici_id.indexOf("LI") != -1) {
            last_li_tag = pici_id;
        }
        else {
            last_wen_tag = pici_id;
        }

        //for (index in pici_list) {
        //    var pici_module = $("#" + pici_list[index]);
        //    if (pici_list[index] == pici_id + "_table") {
        //
        //
        //
        //
        //        pici_module.show();
        //
        //    }
        //    else {
        //        pici_module.hide();
        //    }
        //}
        hide_all_table();
        var pic_table = pici_id + '_table';
        if (global_search_flag != ""){

            if (global_search_flag == 'school'){
                get_rank(pic_table, 1,global_search_school,"","", global_is_985,global_is_211,global_is_zizhu);
            }
            else if  (global_search_flag == 'major'){
                get_rank(pic_table, 1,"",global_search_major,"", global_is_985,global_is_211,global_is_zizhu);
            }  else {
                get_rank(pic_table, 1,"", "", global_search_city,global_is_985,global_is_211,global_is_zizhu);
            }

        }
        else {
            get_rank(pic_table, 1);
        }
        $("#" + pic_table).show();
    });

    $(".container").on("click", ".search_major", function () {
        var divs = $(this).parents("div.col-md-12");
        var div = divs[0];
        var page = 1;
        var tag = $(div).attr("id");
        var inputs = $(div).find("input[name='major_name']");
        var major_name = $(inputs[0]).val();
        search_flag = "major";
        get_rank(tag, page, "", major_name)
    });

    $(".container").on("click", ".check_user", function () {

        check_user()
    });

    $(".container").on("click", ".search_school", function () {
        var divs = $(this).parents("div.col-md-12");
        var div = divs[0];
        var page = 1;
        var tag = $(div).attr("id");

        var is_211 = 0;
        var is_985 = 0;

        var checked_211 = $(div).find("input[name='is_211']:checked");
        if (checked_211.length != 0) {
            is_211 = 1;
        }

        var checked_985 = $(div).find("input[name='is_985']:checked");
        if (checked_985.length != 0) {
            is_985 = 1;
        }

        var inputs = $(div).find("input[name='school_name']");
        var school_name = $(inputs[0]).val();

        search_flag = "school";
        get_rank(tag, page, school_name, "","", is_985, is_211)
    });

    $(".container").on('click', ".pages", function () {
        var divs = $(this).parents("div.col-md-12");
        var div = divs[0];
        var page = $(this).attr("id");
        var tag = $(div).attr("id");

        //var school_name = "";
        //var major_name = "";
        //var is_211 = 0;
        //var is_985 = 0;
        //switch (search_flag) {
        //    case "":
        //        break;
        //    case "school":
        //        var inputs = $(div).find("input[name='school_name']");
        //        school_name = $(inputs[0]).val();
        //        var checked_211 = $(div).find("input[name='is_211']:checked");
        //        if (checked_211.length != 0) {
        //            is_211 = 1;
        //        }
        //
        //        var checked_985 = $(div).find("input[name='is_985']:checked");
        //        if (checked_985.length != 0) {
        //            is_985 = 1;
        //        }
        //        break;
        //    case "major":
        //        var inputs = $(div).find("input[name='major_name']");
        //        major_name = $(inputs[0]).val();
        //        break;
        //
        //}
        if (global_search_flag != ""){

            if (global_search_flag == 'school'){
                get_rank(tag, page,global_search_school,"", "", global_is_985,global_is_211,global_is_zizhu);
            }
            else if (global_search_flag == 'major'){
                get_rank(tag, page,"",global_search_major, "", global_is_985,global_is_211,global_is_zizhu);
            }
            else {
                get_rank(tag, page,"", "", global_search_city,global_is_985,global_is_211,global_is_zizhu);
            }
        }
        else {
            get_rank(tag, page);
        }

    });

    $(".container").on("change", "#global_school_name", function () {

        global_search_school = $(this).val();
    });
    $(".container").on("change", "#global_is_211", function () {
        if ($(this).is(":checked")) {
            global_is_211 = 1;
        } else {
            global_is_211 = 0;
        }
    });
    $(".container").on("change", "#global_is_985", function () {
        if ($(this).is(":checked")) {
            global_is_985 = 1;
        } else {
            global_is_985 = 0;
        }
    });
    $(".container").on("change", "#global_is_zizhu", function () {
        if ($(this).is(":checked")) {
            global_is_zizhu = 1;
        } else {
            global_is_zizhu = 0;
        }
    });
    $(".container").on("change", "#global_major_name", function () {
        global_search_major = $(this).val();
    });

    $(".container").on("change", "#global_city_name", function () {
        global_search_city = $(this).val();
    });

    $(".container").on("click", "#global_search_school", function () {
        global_search_flag = "school";
        search_pici()
    });

    $(".container").on("click", "#global_search_major", function () {
        global_search_flag = "major";
        search_pici()
    });

    $(".container").on("click", "#global_search_city", function () {
        global_search_flag = "city";
        search_pici()
    });

    init_rank();

});

function init_rank() {
    $("#1ALI_table").attr("is_init", 1);
    get_rank("1ALI_table", 1)
}

function get_rank(tag, page, school_name, major_name, city_name, is_985, is_211, is_zizhu) {

    pici_tag = tag.replace("_table", "");

    school_name = typeof school_name !== 'undefined' ? school_name : "";
    major_name = typeof major_name !== 'undefined' ? major_name : "";
    city_name = typeof city_name !== 'undefined' ? city_name : "";
    is_985 = typeof is_985 !== 'undefined' ? is_985 : 0;
    is_211 = typeof is_211 !== 'undefined' ? is_211 : 0;
    is_zizhu = typeof is_zizhu !== 'undefined' ? is_zizhu : 0;

    $.ajax({
        url: '/get_rank',
        data: {
            "page": page,
            "tag": pici_tag,
            "school_name": school_name,
            "major_name": major_name,
            "is_211": is_211,
            "is_985": is_985,
            "is_zizhu": is_zizhu,
            "city_name":city_name

        },
        type: "POST",
        dataType: 'json',
        success: function (dates) {

            if (dates.state != 0) {
                alert(dates.msg);
                if (dates.state == -100) {
                    //card expire

                    self.location = dates.href;
                }
            }
            else {
                create_table("#" + tag, dates.data.data, dates.data.len);
                create_page("#" + tag, dates.data.pages);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            switch (jqXHR.status) {
                case 403:
                    alert(jqXHR.responseText);
                    break;
                case 200:
                    location.href = '/login';
                    break;
                default :
                    break;
            }

        }
    });

}

function create_table(tag, data, len) {
    var trs = $(tag).find("tr");
    var num = parseInt(trs.length);

    for (var i = 2; i < num; i++) {
        trs[i].remove();
    }

    var tables = $(tag).find("tbody");
    var table = tables[0];


    for (i = 0; i < len; i++) {
        var iter = data[i];
        var tr = $("<tr></tr>");
        tr.appendTo($(table));

        td = $("<td class=\"text-center\">" + iter.school_code + "</td>");
        td.appendTo(tr);

        if (iter.major_name == "") {
            var td = $("<td class=\"school_name\"><a target=\"_blank\" href=\"/singe_school/" + iter.school_id + "/" + iter.pici + "\">" + iter.school_name + "</a></td>");
        }
        else {
            td = $("<td class=\"school_name\"><a target=\"_blank\" href=\"/singe_school/" + iter.school_id + "/" + iter.pici + "?major_name=" + iter.major_name
                + "\">" + iter.school_name + "</a></td>");
        }
        // if (iter.is_zizhu != 0) {
        //     $("<a href=\"#\" class=\"btn btn-success btn-xs school_type\">自</a>").appendTo(td);
        // }

        if (iter.is_211 != 0) {
            $("<a href=\"#\" class=\"btn btn-danger btn-xs school_type\">211</a>").appendTo(td);
        }

        if (iter.is_985 != 0) {
            $("<a href=\"#\" class=\"btn btn-info btn-xs school_type\">985</a>").appendTo(td);
        }
        td.appendTo(tr);

        td = $("<td class=\"text-center\">" + iter.city_name + "</td>");
        td.appendTo(tr);

        td = $("<td class=\"text-center\">" + iter.num2019 + "</td>");
        td.appendTo(tr);

        td = $("<td class=\"text-center\">" + iter.num2018 + "</td>");
        td.appendTo(tr);

        td = $("<td class=\"text-center\">" + iter.score2018 + "</td>");
        td.appendTo(tr);

        td = $("<td style=\"color:blue\" class=\"text-center\">" + iter.rank2018 + "</td>");
        td.appendTo(tr);

        td = $("<td class=\"text-center\">" + iter.score2017 + "</td>");
        td.appendTo(tr);

        td = $("<td style=\"color:blue\" class=\"text-center\">" + iter.rank2017 + "</td>");
        td.appendTo(tr);

        td = $("<td class=\"text-center\">" + iter.score2016 + "</td>");
        td.appendTo(tr);

        td = $("<td style=\"color:blue\" class=\"text-center\">" + iter.rank2016 + "</td>");
        td.appendTo(tr);
    }

}

function create_page(tag, data) {
    var uls = $(tag).find("ul");
    if (uls.length == 0) {
        return;
    }

    var ul = uls[0];
    $(ul).empty();

    if (data.has_previous) {
        var li = $("<li> <a href=\"javascript: void(0);\" id=\"" + data.previous_page_number + "\"class=\"page pages\">上一页</a></li>");
        li.appendTo(ul)
    }
    if (data.num > 0) {
        for (var i = 1; i <= data.num_pages; i++) {

            if (i == data.number) {
                li = $("<li class=\"active\"><a href=\"javascript: void(0);\" id=\"" + i + "\"class=\"page pages\"  \">" + i + "</a></li>");
            }
            else {
                li = $("<li><a href=\"javascript: void(0);\" id=\"" + i + "\"class=\"page pages\"  \">" + i + "</a></li>");
            }
            li.appendTo(ul)
        }
    }

    if (data.has_next) {
        li = $("<li> <a href=\"javascript: void(0);\" id=\"" + data.next_page_number + "\"class=\"page pages\">下一页</a></li>");
        li.appendTo(ul);
    }

    var last_page = data.num_pages;
    li = $("<li><a href=\"javascript: void(0);\" id=\"" + last_page + "\"class=\"page pages\">尾页</a></li>");
    li.appendTo(ul);

}

function check_user() {
    $.ajax({
        url: '/check_user',
        data: {},
        type: "GET",
        dataType: 'json',
        success: function (dates) {

            if (dates.state != 0) {
                alert(dates.msg);
                if (dates.state == -100) {
                    //card expire

                    self.location = dates.href;
                }
            }
            else {
                if (dates.data.is_buy) {
                    openNewWindow(dates.data.url);
                }
                else {
                    $("#only_vip").modal("show");
                }
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            switch (jqXHR.status) {
                case 403:
                    alert(jqXHR.responseText);
                    break;
                case 200:
                    location.href = '/login';
                    break;
                default :
                    break;
            }

        }
    });
}

function openNewWindow(url) {
    //var a = $('a')[0];
    var a = $("<a href=\'" + url + "\' target='_blank'>baidu</a>").get(0);
    var e = document.createEvent('MouseEvents');
    e.initEvent('click', true, true);
    a.dispatchEvent(e);
}

function show_tag(tag) {
    for (index in pici_list) {
        var pici_module = $("#" + pici_list[index]);
        if (pici_list[index] == tag + "_table") {
            pici_module.show();
        }
        else {
            pici_module.hide();
        }
    }
}

function search_pici() {



    $.ajax({
        url: '/search/pici/',
        data: {
            "city_name": global_search_city,
            "school_name": global_search_school,
            "major_name": global_search_major,
            "is_211": global_is_211,
            "is_985": global_is_985,
            "is_zizhu": global_is_zizhu,
            "search_flag": global_search_flag
        },
        type: "POST",
        dataType: 'json',
        success: function (dates) {

            if (dates.state != 0) {
                alert(dates.msg);
                if (dates.state == -100) {
                    //card expire

                    self.location = dates.href;
                }
            }
            else {

                hide_all_table();

                var li_ke = $("#li_ke");
                var wen_ke = $("#wen_ke");
                //if (dates.data.show_tag == 'li') {
                //    li_ke.show();
                //    wen_ke.hide();
                //    $("#wen_li_switch").prop("checked", false)
                //}
                //else if (dates.data.show_tag == 'wen') {
                //    li_ke.hide();
                //    wen_ke.show();
                //    $("#wen_li_switch").prop("checked", true)
                //}
                //else {
                //    li_ke.show();
                //    wen_ke.hide();
                //    $("#wen_li_switch").prop("checked", false)
                //}



                var is_wenke = $("#wen_li_switch").is(':checked');
                if(is_wenke){
                    li_ke.hide();
                    wen_ke.show();
                }
                else {
                    li_ke.show();
                    wen_ke.hide();
                }

                var like_first_pici = "";
                var wenke_first_pici = "";


                var show_list = dates.data.show_list;
                var pici_list = ['1ALI','1A1LI', '2ALI', '2BLI', '1BLI','T1LI','T2LI',
                    '1AWEN', '1A1WEN', '2AWEN', '2BWEN', '1BWEN','T1WEN','T2WEN'];


                for (var i = 0; i < pici_list.length; i++) {

                    if ($.inArray(pici_list[i], show_list) != -1) {
                        $("#" + pici_list[i] + "_label").show();

                        if (like_first_pici == "") {
                            if (pici_list[i].indexOf('LI')!=-1){
                                like_first_pici = pici_list[i]
                            }
                        }
                        if (wenke_first_pici == "") {
                            if (pici_list[i].indexOf('WEN')!=-1){
                                wenke_first_pici = pici_list[i]
                            }
                        }
                    }
                    else {
                        $("#" + pici_list[i] + "_label").hide();
                    }

                }
                global_show_pici_list = show_list;
                for (var k in global_show_pici_list) {
                    global_show_pici_list[k] = global_show_pici_list[k] + '_table';
                }

                var first_pici = "";
                if(is_wenke){
                    first_pici = wenke_first_pici;
                }
                else{
                    first_pici = like_first_pici;
                }

                if (show_list.length != 0) {
                    if (global_search_flag == 'school') {
                        get_rank(first_pici + '_table', 1, global_search_school, "","", global_is_985, global_is_211, global_is_zizhu);
                    }
                    else if (global_search_flag == 'major') {
                        get_rank(first_pici + '_table', 1, "", global_search_major,"", global_is_985, global_is_211, global_is_zizhu);
                    }
                    else {
                        get_rank(first_pici + '_table', 1,"", "", global_search_city,global_is_985,global_is_211,global_is_zizhu);
                    }
                    $("#" + first_pici + "_table").show();
                }
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            switch (jqXHR.status) {
                case 403:
                    alert(jqXHR.responseText);
                    break;
                case 200:
                    location.href = '/login';
                    break;
                default :
                    break;
            }

        }
    });
}

function hide_all_table() {

    var table_list = ['1A1LI_table', '1ALI_table', '2ALI_table', '2BLI_table', '1BLI_table','T1LI_table','T2LI_table',
        '1A1WEN_table', '1AWEN_table', '2AWEN_table', '2BWEN_table', '1BWEN_table','T1WEN_table','T2WEN_table'];
    for (index in table_list) {
        $("#" + table_list[index]).hide();
    }

}