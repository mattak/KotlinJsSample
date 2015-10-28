(function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    me: Kotlin.definePackage(null, /** @lends _.me */ {
      mattak: Kotlin.definePackage(null, /** @lends _.me.mattak */ {
        kotlinjs: Kotlin.definePackage(null, /** @lends _.me.mattak.kotlinjs */ {
          hellojquery: Kotlin.definePackage(null, /** @lends _.me.mattak.kotlinjs.hellojquery */ {
            main_kand9s$: function (args) {
              $('#content').text('hello world');
            }
          })
        })
      })
    })
  });
  Kotlin.defineModule('app', _);
  _.me.mattak.kotlinjs.hellojquery.main_kand9s$([]);
}(Kotlin));

//@ sourceMappingURL=app.js.map
