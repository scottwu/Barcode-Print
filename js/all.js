// 第二個表單隱藏
$(document).ready(function(e){
    $("#inside-table2").hide();
});


fetch('https://backend.jin-ting.com.tw/api/items/barcode_print')
.then(function(response){
    return response.json();
})
.then(function(json){
    // console.log(json);
    var list = json.data[0];
    document.getElementById('brand').innerText = list.brand;
    document.getElementById('product_name').innerText = list.product_name;
    document.getElementById('air_type').innerText = list.air_type;
    document.getElementById('power_phase_volt').innerText =`${list.power_phase} ${list.power_v} ${list.power_hz}`;
    document.getElementById('capacity_cold').innerText = list.capacity_cold;
    document.getElementById('air_volume').innerText = `${list. air_width} ${list.air_height} ${list. air_depth}`;
    document.getElementById('air_kg').innerText = list.air_kg;
    document.getElementById('year').innerText = list.year;
    document.getElementById('company_name').innerText = `${list.company_name} ${list.company_phone}`;
    document.getElementById('company_address').innerText = list.company_address;
});

JsBarcode("#type_barcode", "209942", {
    format: "code128",
    height: 70,
    width: 2,
    displayValue: true
  });

// {
//     data: [
//     {
//     id: 7,
//     name: "JC-28NH",

//     product_group: 
//     {
//     id: 95,
//     name: "28NH",
//     description: "外機-NH型-28NH"
//     },

//     brand: {
//     id: 1,
//     name: "Jin-Ting 金鼎冷氣",
//     company_name: "南亨科技股份有限公司",
//     company_address: "台南市安定區中沙里沙崙26-1號",
//     company_tel: "06-5931111",
//     name_short: "金鼎"
//     },
//     product_spec: {
//     id: 13,
//     name: "28NH",
//     product_name: "分離式冷專室外機",
//     power_phase: "單相",
//     power_volt: "220",
//     capacity_cool: "2.8",
//     capacity_heat: null,
//     product_type: "outdoor"
//     }
//     }
//     ],
//     public: true
//     }