$(function () {
   $('.toggles button').click(function () {
      let get_id = this.id;
      let get_current = $('.courses__cards .' + get_id);

      $('.courses__card').not(get_current).hide(500);
      get_current.show(400);
   });

   $('#show-all').click(function () {
      $('.courses__card').show(400);
   });
});
