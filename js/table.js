var $barcodeModal = $("#barcode-modal");
var $barcodePrintTable = $("#barcodePrint-table");
var $checkForm = $("#check-form");

$(function () {
  $barcodePrintTable.bootstrapTable("hideColumn", [
    "company_name",
    "company_tel",
    "company_address",
    "capacity_heat",
    "air_kg",
  ]);
});

function ajaxRequest(params) {
  var url =
    "https://backend.jin-ting.com.tw/api/items/product?fields=*.*&filter[product_spec.product_name][neq]=";

  $.get(url).then(function (res) {
    var listable = res.data;
    list = listable.map((product) => {
      return {
        brand: product.brand.name,
        product_name: product.product_spec.product_name,
        air_type: product.name,
        power_phase: product.product_spec.power_phase,
        power_volt: product.product_spec.power_volt,
        capacity_cool: product.product_spec.capacity_cool,
        capacity_heat: product.product_spec.capacity_heat,
        air_width: product.product_spec.air_width,
        air_height: product.product_spec.air_height,
        air_depth: product.product_spec.air_depth,
        air_kg: product.product_spec.air_kg,
        company_name: product.brand.company_name,
        company_tel: product.brand.company_tel,
        company_address: product.brand.company_address,
        sticker_no: product.product_spec.sticker_no,
        case_no: product.product_spec.case_no
      };
    });
    params.success(list);
  });
}


$barcodePrintTable.on("click-row.bs.table", function (e, row) {
  $barcodeModal.modal("show");
  document.getElementById("brand").innerText = row.brand;
  document.getElementById("air_type").innerText = row.air_type;
  document.getElementById("power_volt").innerText = row.power_volt;
  document.getElementById("capacity_cool").innerText = row.capacity_cool;
  document.getElementById("case_no").value = row.case_no;

  $("#btn-modal-confirm").on("click", function (e) {
    var barcode_no = $("#barcode_no").val();
    var year = $("#year").val();
    var case_no = $("#case_no").val();
    var print_page = `Print_Page.html?brand=${row.brand}&product_name=${row.product_name}&air_type=${row.air_type}&power_phase=${row.power_phase}&power_volt=${row.power_volt}&capacity_cool=${row.capacity_cool}&capacity_heat=${row.capacity_heat}&air_width=${row.air_width}&air_height=${row.air_height}&air_depth=${row.air_depth}&air_kg=${row.air_kg}&company_name=${row.company_name}&company_tel=${row.company_tel}&company_address=${row.company_address}&sticker_no=${row.sticker_no}&case_no=${case_no}&year=${year}&barcode_no=${barcode_no}`;
    window.open(print_page, "_blank");  
  });

});
