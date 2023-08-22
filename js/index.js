// Ex1

document.getElementById('tuyenSinh').addEventListener('submit', function (note) {
    note.preventDefault();
    tuyenSinh();
})
function tuyenSinh() {
    const diemChuan = +document.getElementById('diemChuan').value;
    const khuVuc = document.getElementById('khuVuc').value;
    const doiTuong = document.getElementById('doiTuong').value;
    const diem1 = +document.getElementById('diem1').value;
    const diem2 = +document.getElementById('diem2').value;
    const diem3 = +document.getElementById('diem3').value;
    let result;

    function diemKV(khuVuc) {
        if (khuVuc == 'kv0') {
            return 0;
        }
        else if (khuVuc == 'kvA') {
            return 2;
        }
        else if (khuVuc == 'kvB') {
            return 1;
        }
        else {
            return 0.5;
        }
    }
    function diemDT(doiTuong) {
        if (doiTuong == 'doiTuong0') {
            return 0;
        }
        else if (doiTuong == 'doiTuong1') {
            return 2.5;
        }
        else if (doiTuong == 'doiTuong2') {
            return 1.5;
        }
        else {
            return 1;
        }
    }
    function tongDiem(diem1, diem2, diem3, diemKVNote, diemDTVNote) {
        if (diem1 === 0 || diem2 === 0 || diem3 === 0) {
            return 0;
        }
        else {
            return diem1 + diem2 + diem3 + diemKVNote + diemDTVNote;
        }
    }
    const diemKVNote = +diemKV(khuVuc);
    const diemDTVNote = +diemDT(doiTuong);
    const tongDiemNote = +tongDiem(diem1, diem2, diem3, diemKVNote, diemDTVNote);
    function ketQua(tongDiemNote, diemChuan) {
        if (tongDiemNote >= diemChuan && tongDiemNote > 0) {
            return 'đậu' + '. Tổng điểm: ' + tongDiemNote;
        }
        else {
            if (tongDiemNote == 0) {
                return 'rớt' + '. Do có điểm nhỏ hơn hoặc bằng 0';
            }
            else {
                return 'rớt' + '. Tổng điểm: ' + tongDiemNote;
            }
        }
    }
    const ketQuaNote = ketQua(tongDiemNote, diemChuan)

    document.getElementById('result').innerText = `Bạn đã ${ketQuaNote}`;
}

// EX2

document.getElementById('Electricity').addEventListener('submit', function (note) {
    note.preventDefault();
    Electricity();
})
function Electricity() {
    const hoTen = document.getElementById('name').value;
    const soKW = +document.getElementById('kilowatts').value;
    let result2;

    function buytienDien(soKW) {
        if (soKW <= 50) {
            return soKW * 500;
        } else if (soKW <= 100) {
            return 50 * 500 + (soKW - 50) * 650;
        } else if (soKW <= 200) {
            return 50 * 500 + 50 * 650 + (soKW - 100) * 850;
        } else if (soKW <= 350) {
            return 50 * 500 + 50 * 650 + 100 * 850 + (soKW - 200) * 1100;
        } else {
            return 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKW - 350) * 1300;
        }

    }
    const tienDien = new Intl.NumberFormat('vn-VN').format(buytienDien(soKW));


    document.getElementById('result2').innerText = ` Họ tên: ${hoTen} . Tiền điện: ${tienDien} VNĐ`;
}

// Ex3
document.getElementById('Income').addEventListener('submit', function (note) {
    note.preventDefault();
    Income();
})
function Income() {
    const hoTen2 = document.getElementById('name2').value;
    const salary = +document.getElementById('salary').value;
    const numPer = +document.getElementById('Student').value;
    let result3;

    function buySalary(salary, numPer) {
        return salary - 4000000 - numPer * 1600000;
    }
    const salaryBuy = buySalary(salary, numPer);
    function buyMoney(salaryBuy) {
        if (salary <= 60000000) {
            return salaryBuy * 0.05;
        }
        else if (salary <= 120000000) {
            return 60000000 * 0.05 + (salaryBuy - 60000000) * 0.1;
        }
        else if (salary <= 210000000) {
            return 60000000 * 0.05 + 60000000 * 0.1 + (salaryBuy - 120000000) * 0.15;
        }
        else if (salary <= 384000000) {
            return 60000000 * 0.05 + 60000000 * 0.1 + 90000000 * 0.15 + (salaryBuy - 210000000) * 0.2;
        }
        else if (salary <= 624000000) {
            return 60000000 * 0.05 + 60000000 * 0.1 + 90000000 * 0.15 + 174000000 * 0.2 + (salaryBuy - 384000000) * 0.25;
        }
        else if (salary <= 960000000) {
            return 60000000 * 0.05 + 60000000 * 0.1 + 90000000015 + 174000000 * 0.2 + 240000000 * 0.25 + (salaryBuy - 624000000) * 0.3;
        }
        else {
            return 60000000 * 0.05 + 60000000 * 0.1 + 90000000015 + 174000000 * 0.2 + 240000000 * 0.25 + 3360000000.3 + (salaryBuy - 960000000) * 0.35;
        }
    }
    const taxMoney = new Intl.NumberFormat('vn-VN').format(buyMoney(salaryBuy));

    document.getElementById('result3').innerText = `Họ tên: ${hoTen2} . Tiền thuế thu nhập cá nhân: ${taxMoney} VNĐ`;
}

// EX4

document.getElementById('cableMoney').addEventListener('submit', function (note) {
    note.preventDefault();
    cableMoney();
})
function changeKH() {
    var khachHang = document.getElementById("loaiKH").value;
    if (khachHang == "doanhNghiep") {
        document.getElementById('connect').style.display = "inline-block";
    }
    else {
        document.getElementById('connect').style.display = "none";
    }
}

function cableMoney() {

    var loaiKH = document.getElementById("loaiKH").value;
    const maKH = document.getElementById("maKH").value;
    const kenhCC = +document.getElementById("kenhCC").value;
    const soKN = +document.getElementById("soKN").value;
    let result4;

    function getLoaiKH(loaiKH) {
        if (loaiKH == 'nhaDan') {
            return 1;
        }
        else {
            return 2;
        }
    }
    const loaiKHValue = getLoaiKH(loaiKH);


    function getKenhCC(kenhCC) {
        if (loaiKHValue == 1) {
            return 7.5 * kenhCC;
        }
        else {
            return 50 * kenhCC;
        }
    }
    const kenhCCValue = getKenhCC(kenhCC);

    function getServiceCharge() {
        if (loaiKHValue == 1) {
            return 20.5;
        }
        else {
            if (soKN <= 10) {
                return 75;
            }
            else {
                return 75 + (soKN - 10) * 5;
            }
        }
    }
    const serviceCharge = getServiceCharge();

    function getFeeBill() {
        if (loaiKHValue == 1) {
            return 4.5;
        }
        else {
            return 15;
        }
    }
    const feeBill = getFeeBill();

    function getMoney(loaiKHValue, kenhCCValue, serviceCharge, feeBill) {
        return feeBill + serviceCharge + kenhCCValue;
    }
    const money = getMoney(loaiKHValue, kenhCCValue, serviceCharge, feeBill).toLocaleString('en-US', { style: 'currency', currency: 'USD' });;

    document.getElementById('result4').innerText = ` Mã khách hàng ${maKH}; Tiền cáp: ${money}`;
}