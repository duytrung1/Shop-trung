var listProduct = [];
$(function () {
  //   loadComponent();

  //   Thực hiện Delay quá trình load dữ liệu DS sản phẩm để đợi các thành phần trang web load hoàn chỉnh
  setTimeout(() => {
    featchListProduct();
  }, 200);
});

// Load các thành phần của trang Home Page
// function loadComponent(params) {
//   $(".MenuSection").load("./Menu.html");
//   $(".BannerSection").load("./Banner.html");
//   $(".ProductsSection").load("./Products.html");
//   $(".FooterSection").load("./Footer.html");
// }

// Hàm lấy dữ liệu, Generate các sản phẩm
function featchListProduct(params) {
  // Reset lại listProduct về Null
  listProduct = [];
  //Lấy dữ liệu từ LocalStorage để sử dụng
  // Kiểm tra xem có dữ liệu dưới LocalStorage không
  // if (localStorage && localStorage.getItem("listProduct")) {
  //   var listProductLocalStorage = JSON.parse(localStorage.getItem("listProduct"));
  // Lưu dữ liệu từ localStorage vào listProduct trong JS để sử dụng
  //   listProduct = listProductLocalStorage;
  // }
  // Thực hiện Call API
  $.ajax({
    type: "GET",
    url: "http://localhost:3000/products",
    // data: "data",
    dataType: "json",
    success: function (response, status) {
      // console.log("response:", response);
      // console.log("status:", status);

      // Kiểm tra nếu status= success
      if (status === "success") {
        listProduct = response;
        for (let index = 0; index < listProduct.length; index++) {
          $(".ProductList").append(`<div class="col-lg-3">
                                                <div class="single_product">
                                                    <div class="product_thumb">
                                                        <a
                                                            href="single-product.html"><img
                                                                src="${listProduct[index].imageName}"
                                                                alt></a>
                                                        <div class="img_icone">
                                                            <img
                                                                src="assets\img\cart\span-new.png"
                                                                alt>
                                                        </div>
                                                        <div
                                                            class="product_action">
                                                            <a href="#"> <i
                                                                    class="fa fa-shopping-cart"></i>
                                                                Add to cart</a>
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="product_content">
                                                        <span
                                                            class="product_price">$50.00</span>
                                                        <h3
                                                            class="product_title"><a
                                                                href="single-product.html">Curabitur
                                                                sodales</a></h3>
                                                    </div>
                                                    <div class="product_info">
                                                        <ul>
                                                            <li><a href="#"
                                                                    title=" Add to Wishlist ">Add
                                                                    to
                                                                    Wishlist</a></li>
                                                            <li><a href="#"
                                                                    data-toggle="modal"
                                                                    data-target="#modal_box"
                                                                    title="Quick view">View
                                                                    Detail</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>


          `);
        }
      } else {
        console.log("Error when loading data!!");
        return;
      }
    },
  });
  //
  // for (let index = 0; index < listProduct.length; index++) {
  //   $(".ProductList").append(`
  //   <!-- SP 1 -->
  //   <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="text-align: left; width: 300px; height: 500px">
  //     <!-- Ảnh -->
  //     <div class="row">
  //       <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
  //         <img src="../Asset/Product/${listProduct[index].imageName}" alt="" style="width: 190px; height: 190px" />
  //       </div>
  //     </div>
  //     <!-- Tên sản phẩm -->
  //     <div class="row">
  //       <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
  //         <h3 style="font-weight: bold">${listProduct[index].name}</h3>
  //       </div>
  //     </div>
  //     <!-- Hãng sản xuất -->
  //     <div class="row">
  //       <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
  //         <h4>Hãng sản xuất: ${listProduct[index].manufacturerId}</h4>
  //       </div>
  //     </div>
  //     <!-- Đánh giá -->
  //     <div class="row">
  //       <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
  //         <ul class="rating" style="list-style: none; display: flex; font-size: 20px; padding-inline-start: 0px">

  //           ${showStarRating(listProduct[index].ratingStar)}
  //         </ul>
  //       </div>
  //     </div>
  //     <!-- Thêm vào giỏ hàng -->
  //     <div class="row">
  //       <div class="col-sm-4 col-md-4 col-lg-4">
  //         <h4>${listProduct[index].price}</h4>
  //       </div>

  //       <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
  //         <button type="button" class="btn btn-default" style="border: 0px">
  //           <i class="fa fa-shopping-cart" style="color: red; font-size: 35px"></i>
  //         </button>
  //       </div>
  //     </div>
  //     <br />
  //     <br />
  //     <br />
  //   </div>
  //   <!-- Finish SP 1 -->
  //   `);
  // }
}

// Hàm hiển thị số sao đánh giá
function showStarRating(ratingStar) {
  // Khai báo mảng
  let starRating = "";
  // Hiển thị đánh giá có Sao
  for (let index = 1; index <= ratingStar; index++) {
    starRating += `
      <li>
         <i class="fa fa-star selected" style="color: orange"></i>
      </li>`;
  }
  // Hiển thị các Sao không được đánh gía
  for (let index = 1; index <= 5 - ratingStar; index++) {
    starRating += `
    <li>
       <i class="fa fa-star"></i>
    </li>`;
  }
  //
  return starRating;
}
