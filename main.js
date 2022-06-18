/**
 * Bài 1:

Đầu vào:
- Ngày, Tháng Năm

Xử lý:
- Tạo biến ngay, thang, nam và gán Ngày, Tháng, Năm vào biến
- Tạo biến kq1

.Nếu chọn Hôm qua :
    - Nếu (12 < tháng < 1) => kq1 = "Không xác định"
    - Nếu ngày=1 => 
        + nếu tháng = 1 => ngày = 31; tháng = 12; năm = năm -1
        + nếu tháng = 3 => ngày = 28; tháng = 2
        + nếu tháng = 5,7,8,10,12 => ngày = 30, tháng = tháng -1
        + nếu tháng = 4,6,9,11 => ngày = 31, tháng = tháng -1
    - Nếu ngày khác 1 =>
        + nếu tháng = 1,3,5,7,8,10 =>
            .nếu 31 < ngay < 1 => kq1 = "Không xác định"
            .nếu 0 < ngay < 32 => ngay = ngày - 1
        + nếu tháng = 4,6,9,11 =>
            .nếu 30 < ngay < 1 => kq1 = "Không xác định"
            .nếu 0 < ngay < 31 => ngay = ngày - 1
        + nếu tháng = 2 =>
            .nếu 28 < ngay < 1 => kq1 = "Không xác định"
            .nếu 0 < ngay < 29 => ngay = ngày - 1
.Nếu chọn Ngày mai :
    - nếu 12 < tháng < 1 => kq1 = "Không xác định"
    - nếu tháng = 1,3,5,7,8,10 =>
        + nếu ngày = 31 => ngay =1, tháng = tháng + 1
        + nếu 1 > ngày > 31 => kq1 = "Không xác định"
        + nếu ngày < 32 và ngày khác 31 => ngày = ngày + 1
    - nếu tháng = 4,6,9,11 =>
        + nếu ngày = 30 => ngay =1, tháng = tháng + 1
        + nếu 1 > ngày > 30 => kq1 = "Không xác định"
        + nếu ngày < 31 và ngày khác 30 => ngày = ngày + 1
    - nếu tháng = 2 =>
        + nếu ngày = 28 => ngay =1, tháng = tháng + 1
        + nếu 1 > ngày > 28 => kq1 = "Không xác định"
        + nếu ngày < 28 và ngày khác 28 => ngày = ngày + 1
    - nếu tháng = 12 =>
        + nếu ngày = 31 => ngay =1, tháng =  1, năm = năm + 1
        + nếu 1 > ngày > 31 => kq1 = "Không xác định"
        + nếu ngày < 32 và ngày khác 31 => ngày = ngày + 1

Đầu ra:
- Kết quả ngày Hôm qua hoặc Ngày mai

 */
document.getElementById('btnHomQua').onclick = function () {
    var ngay = Number(document.getElementById('ngay').value);
    var thang = Number(document.getElementById('thang').value);
    var nam = Number(document.getElementById('nam').value);
    var kq1;
    
    if( thang <= 0 || thang > 12){
        kq1 = "Không xác định";
    }
    else if(ngay == 1){
        if(thang === 1){
            ngay = 31;
            thang =12;
            nam = nam -1;

            kq1 = ngay + "/" + thang + "/" + nam;
        }
        else if(thang == 3){
            ngay = 28;
            thang = 2;

            kq1 = ngay + "/" + thang + "/" + nam;
        }
        else if(thang == 5 ||thang == 7 ||thang == 8 ||thang == 10 ||thang == 12 ){
                
            ngay = 30;
            thang = thang -1;

            kq1 = ngay + "/" + thang + "/" + nam;
        }
        else if(thang == 2 || thang == 4 || thang == 6 || thang == 9 || thang == 11) {
            ngay = 31;
            thang = thang -1;

            kq1 = ngay + "/" + thang + "/" + nam;
        }       
    }
    else {
        if(thang == 1 ||thang == 3 ||thang == 5 ||thang == 7 ||thang == 8 ||thang == 10 ||thang == 12 ){
            if(ngay > 31 || ngay < 1){
                kq1 = "Không xác định";
            }else{
                ngay = ngay -1;
                kq1 = ngay + "/" + thang + "/" + nam;
            }
        }
        else if(thang == 4 || thang == 6 || thang == 9 || thang == 11){
            if(ngay > 30 || ngay < 1){
                kq1 = "Không xác định";
            }else{
                ngay = ngay -1;
                kq1 = ngay + "/" + thang + "/" + nam;
            }
        }
        else if(thang ==2){
            if(ngay > 28 || ngay < 1){
                kq1 = "Không xác định";
            }else{
                ngay = ngay -1;
                kq1 = ngay + "/" + thang + "/" + nam;
            }
        }
    }
    document.getElementById('KQ1').innerHTML = kq1;
}
document.getElementById('btnNgayMai').onclick = function () {
    var ngay = Number(document.getElementById('ngay').value);
    var thang = Number(document.getElementById('thang').value);
    var nam = Number(document.getElementById('nam').value);
    var kq1;
    
    if( thang <= 0 || thang > 12){
        kq1 = "Không xác định";
    }
    else if(thang == 1 ||thang == 3 ||thang == 5 ||thang == 7 ||thang == 8 ||thang == 10){
        if(ngay == 31){
            ngay = 1;
            thang = thang + 1;
            
            kq1 = ngay + "/" + thang + "/" + nam;
        }
        else if(ngay > 31 || ngay < 1){
            kq1 = "Không xác định";
        }else{
            ngay = ngay + 1;
            kq1 = ngay + "/" + thang + "/" + nam;
        }
    }
    else if( thang == 12 ){
        if(ngay == 31){
            ngay = 1;
            thang = 1;
            nam = nam +1;
            
            kq1 = ngay + "/" + thang + "/" + nam;
        }
        else if(ngay > 31 || ngay < 1){
            kq1 = "Không xác định";
        }else{
            ngay = ngay + 1;
            kq1 = ngay + "/" + thang + "/" + nam;
        }
    }
    else if(thang == 4 || thang == 6 || thang == 9 || thang == 11){
        if(ngay == 30){
            ngay = 1;
            thang = thang + 1;
            
            kq1 = ngay + "/" + thang + "/" + nam;
        }
        else if(ngay > 30 || ngay < 1){
            kq1 = "Không xác định";
        }else{
            ngay = ngay + 1;
            kq1 = ngay + "/" + thang + "/" + nam;
        }
    }
    else if(thang == 2){
        if(ngay == 28){
            ngay = 1;
            thang = thang + 1;
            
            kq1 = ngay + "/" + thang + "/" + nam;
        }
        else if(ngay > 28 || ngay < 1){
            kq1 = "Không xác định";
        }else{
            ngay = ngay + 1;
            kq1 = ngay + "/" + thang + "/" + nam;
        }
    }
    document.getElementById('KQ1').innerHTML = kq1;
}

/**
 * Bài 2:
 * 
 */
document.getElementById('kq_Bai2').onclick = function () {
    var thang  = Number(document.getElementById('thangBai2').value);
    var nam  = Number(document.getElementById('namBai2').value);
    var kq2;

    if( thang <= 0 || thang > 12){
        kq2 = "Không xác định";
    }
    else if((nam % 4 == 0 && nam % 100 !=0) || nam % 400 == 0){
        if(thang == 2){
            kq2 = "Tháng " + thang + " Năm " + nam + " có " + 29 + " ngày";
        }
        else if(thang == 1 ||thang == 3 ||thang == 5 ||thang == 7 ||thang == 8 ||thang == 10 || thang == 12){
            kq2 = kq2 = "Tháng " + thang + " Năm " + nam + " có " + 31 + " ngày";
        }else{
            kq2 = "Tháng " + thang + " Năm " + nam + " có " + 30 + " ngày";
        }
    }
    else{
        if(thang == 2){
            kq2 = "Tháng " + thang + " Năm " + nam + " có " + 28 + " ngày";
        }
        else if(thang == 1 ||thang == 3 ||thang == 5 ||thang == 7 ||thang == 8 ||thang == 10 || thang == 12){
            kq2 = kq2 = "Tháng " + thang + " Năm " + nam + " có " + 31 + " ngày";
        }else{
            kq2 = "Tháng " + thang + " Năm " + nam + " có " + 30 + " ngày";
        }
    }

    document.getElementById('KQ2').innerHTML = kq2;
}

/**
 * Bài 3:
 */
document.getElementById('kq_Bai3').onclick = function () {
    var so = Number(document.getElementById('soNguyen').value);
    var doc_dvi="";
    var doc_chuc="";
    var doc_tram="";
    var kq3;

    var dvi = so % 10;
    var chuc = (so - dvi)/10 % 10;
    var tram = Math.floor(so/100);

   if(tram > 9 || tram == 0){
    kq3 = "Nhập sai số";
   }
   else{
    if(chuc != 0){
        switch(dvi){
            case 1:{
                doc_dvi = "mốt";
                break;
            }
            case 2:{
                doc_dvi = "hai";
                break;
            }
            case 3:{
                doc_dvi = "ba";
                break;
            }
            case 4:{
                doc_dvi = "bốn";
                break;
            }
            case 5:{
                doc_dvi = "năm";
                break;
            }
            case 6:{
                doc_dvi = "sáu";
                break;
            }
            case 7:{
                doc_dvi = "bảy";
                break;
            }
            case 8:{
                doc_dvi = "tám";
                break;
            }
            case 9:{
                doc_dvi = "chín";
                break;
            }
        }
        switch(chuc){
            case 1:{
                doc_chuc = "mười";
                break;
            }
            case 2:{
                doc_chuc = "hai mươi";
                break;
            }
            case 3:{
                doc_chuc = "ba mươi";
                break;
            }
            case 4:{
                doc_chuc = "bốn mươi";
                break;
            }
            case 5:{
                doc_chuc = "năm mươi";
                break;
            }
            case 6:{
                doc_chuc = "sáu mươi";
                break;
            }
            case 7:{
                doc_chuc = "bảy mươi";
                break;
            }
            case 8:{
                doc_chuc = "tám mươi";
                break;
            }
            case 9:{
                doc_chuc = "chín mươi";
                break;
            }
        }
        switch(tram){
            case 1:{
                doc_tram = "một trăm";
                break;
            }
            case 2:{
                doc_tram = "hai trăm";
                break;
            }
            case 3:{
                doc_tram = "ba trăm";
                break;
            }
            case 4:{
                doc_tram = "bốn trăm";
                break;
            }
            case 5:{
                doc_tram = "năm trăm";
                break;
            }
            case 6:{
                doc_tram = "sáu trăm";
                break;
            }
            case 7:{
                doc_tram = "bảy trăm";
                break;
            }
            case 8:{
                doc_tram = "tám trăm";
                break;
            }
            case 9:{
                doc_tram = "chín trăm";
                break;
            }
        }
        kq3 = doc_tram + " " + doc_chuc + " " + doc_dvi;
    }
    else{
        switch(dvi){
            case 1:{
                doc_dvi = "mốt";
                break;
            }
            case 2:{
                doc_dvi = "hai";
                break;
            }
            case 3:{
                doc_dvi = "ba";
                break;
            }
            case 4:{
                doc_dvi = "bốn";
                break;
            }
            case 5:{
                doc_dvi = "năm";
                break;
            }
            case 6:{
                doc_dvi = "sáu";
                break;
            }
            case 7:{
                doc_dvi = "bảy";
                break;
            }
            case 8:{
                doc_dvi = "tám";
                break;
            }
            case 9:{
                doc_dvi = "chín";
                break;
            }
        }
        switch(tram){
            case 1:{
                doc_tram = "một trăm";
                break;
            }
            case 2:{
                doc_tram = "hai trăm";
                break;
            }
            case 3:{
                doc_tram = "ba trăm";
                break;
            }
            case 4:{
                doc_tram = "bốn trăm";
                break;
            }
            case 5:{
                doc_tram = "năm trăm";
                break;
            }
            case 6:{
                doc_tram = "sáu trăm";
                break;
            }
            case 7:{
                doc_tram = "bảy trăm";
                break;
            }
            case 8:{
                doc_tram = "tám trăm";
                break;
            }
            case 9:{
                doc_tram = "chín trăm";
                break;
            }
        }
        if(dvi != 0){
            doc_chuc = "lẻ";
        }
       
        kq3 = doc_tram + " " + doc_chuc + " " + doc_dvi;
    }
   }

   document.getElementById('KQ3').innerHTML = kq3;
}

/**
 * Bài 4:
 */
function doDai(x1, x2, y1, y2){
    var d =  Math.sqrt(Math.pow((x1 - x2),2) + Math.pow((y1 - y2),2))
    return d;
}

document.getElementById('kq_Bai4').onclick = function () {
    var tenSV1 = document.getElementById('tenSV1').value;
    var tenSV2 = document.getElementById('tenSV2').value;
    var tenSV3 = document.getElementById('tenSV3').value;

    var x_SV1 = Number(document.getElementById('x_SV1').value);
    var x_SV2 = Number(document.getElementById('x_SV2').value);
    var x_SV3 = Number(document.getElementById('x_SV3').value); 
    var x_truong = Number(document.getElementById('x_truong').value);

    var y_SV1 = Number(document.getElementById('y_SV1').value); 
    var y_SV2 = Number(document.getElementById('y_SV2').value); 
    var y_SV3 = Number(document.getElementById('y_SV3').value); 
    var y_truong = Number(document.getElementById('y_truong').value); 

    var kq4 = "Sinh viên xa trường nhất: ";

    var d_SV1 = doDai(x_SV1, x_truong, y_SV1, y_truong);
    var d_SV2 = doDai(x_SV2, x_truong, y_SV2, y_truong);
    var d_SV3 = doDai(x_SV3, x_truong, y_SV3, y_truong);

    if(d_SV1 > d_SV2){
        if(d_SV2 > d_SV3)
            kq4 = kq4 + tenSV1;
        else if(d_SV3 > d_SV1)
            kq4 = kq4 + tenSV3;
        else
        kq4 = kq4 + tenSV1;
    }
    else if(d_SV1 < d_SV2){
        if(d_SV1 > d_SV3)
            kq4 = kq4 + tenSV2;
        else if(d_SV3 > d_SV2)
            kq4 = kq4 + tenSV3;
        else
            kq4 = kq4 + tenSV2;
    }
   
    document.getElementById('KQ4').innerHTML = kq4;
}
