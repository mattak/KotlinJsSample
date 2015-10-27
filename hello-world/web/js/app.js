(function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    me: Kotlin.definePackage(null, /** @lends _.me */ {
      mattak: Kotlin.definePackage(null, /** @lends _.me.mattak */ {
        example: Kotlin.definePackage(null, /** @lends _.me.mattak.example */ {
          kotlinjs: Kotlin.definePackage(null, /** @lends _.me.mattak.example.kotlinjs */ {
            main_kand9s$: function (args) {
              Kotlin.println('hello world');
            }
          })
        })
      })
    })
  });
  Kotlin.defineModule('app', _);
  _.me.mattak.example.kotlinjs.main_kand9s$([]);
}(Kotlin));

//@ sourceMappingURL=app.js.map
