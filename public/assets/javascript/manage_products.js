$(document).ready(function() {
  // Edit Button
  $('.edit_product').click(function() {
    let productID = $(this).parent().siblings()[0].textContent
    $.ajax({
      success: function() {
        console.log('Success');

        window.location.href = `/manage/edit/products?id=${productID}`;
      }
    })
  })
  // Delete Button
  $('.delete_product').click(function() {
    let productID = $(this).parent().siblings()[0].textContent
    $.ajax({
      success: function() {
        console.log(this);

        window.location.href = `/manage/products/delete?id=${productID}`;
      }
    })
  })
});