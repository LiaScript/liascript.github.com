console.log('service-worker.js')

// advanced config for injectManifest approach
importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.3.0/workbox-sw.js',
)

// Detailed logging is very useful during development
workbox.setConfig({
  debug: false,
})

// Updating SW lifecycle to update the app after user triggered refresh
workbox.core.skipWaiting()
workbox.core.clientsClaim()

// workbox.googleAnalytics.initialize();

workbox.routing.registerRoute(/\/$/, new workbox.strategies.NetworkFirst())
workbox.routing.registerRoute(/\/*/, new workbox.strategies.NetworkFirst())
workbox.routing.registerRoute(/.+\/*/, new workbox.strategies.NetworkFirst())

workbox.routing.registerRoute(
  /https:\/\/code\.responsivevoice\.org/,
  new workbox.strategies.StaleWhileRevalidate(),
)

workbox.precaching.precacheAndRoute([{"revision":"3140f2c6a79ba11af18ef7cbf7e9f320","url":"Browser.3c750002.js"},{"revision":"523b4cd6fef2eca3ab068463aa400be6","url":"editor/ace.js"},{"revision":"8fc7d5f1e5a602de992b5d9d4be7f972","url":"editor/ext-beautify.js"},{"revision":"c31709fe63cf814731c44e06033a8d30","url":"editor/ext-code_lens.js"},{"revision":"5191f0a2e50009f1a58dbaaf8c7eed03","url":"editor/ext-elastic_tabstops_lite.js"},{"revision":"e175e02b67600a95829f5f48b1a02b13","url":"editor/ext-emmet.js"},{"revision":"bff25dbf657a07d2df49accf1a604843","url":"editor/ext-error_marker.js"},{"revision":"862dd87f2312f94bfeb3114b7041a436","url":"editor/ext-hardwrap.js"},{"revision":"5480f3cf178a6581128598dc68ac1474","url":"editor/ext-keybinding_menu.js"},{"revision":"22c76201925d4bfea4839ce6fb390403","url":"editor/ext-language_tools.js"},{"revision":"5d4dfb04b610b3991e9fcfdb6a4f0f4b","url":"editor/ext-linking.js"},{"revision":"590932fc77e702703ff7def01ca19635","url":"editor/ext-modelist.js"},{"revision":"9a283c97838cbc72e5890069e971d6c6","url":"editor/ext-options.js"},{"revision":"ba428c9b15050d1750d9cd4d616b8e76","url":"editor/ext-prompt.js"},{"revision":"9e2362dfea9ea452b229f98e5955fce8","url":"editor/ext-rtl.js"},{"revision":"d6bb3a4214fefe39a3ebf763eb1b3581","url":"editor/ext-searchbox.js"},{"revision":"fb55d40f6c96127bcd2c017896ab5d7b","url":"editor/ext-settings_menu.js"},{"revision":"d06418ea6ef96f11a0b4f4f8e8457eb1","url":"editor/ext-spellcheck.js"},{"revision":"d9a200d4315c9a1619a12797a1eebb4d","url":"editor/ext-split.js"},{"revision":"4d49c932936b8f14e56ef06a545dac3c","url":"editor/ext-static_highlight.js"},{"revision":"dae83b0db0db201784db10174a2c0fa0","url":"editor/ext-statusbar.js"},{"revision":"b7eaf75b06745cb97de8f21fee997f5b","url":"editor/ext-textarea.js"},{"revision":"54705662a4b78feff8e959f7d3b7198a","url":"editor/ext-themelist.js"},{"revision":"a69009c59ec6f8498daae63971bd7814","url":"editor/ext-whitespace.js"},{"revision":"3e2b54eac50a5f707dd6adfe78893d1b","url":"editor/keybinding-emacs.js"},{"revision":"8d3d61ca57c26ffe219758416a90c332","url":"editor/keybinding-sublime.js"},{"revision":"72ae6f4269029b215f8283d39763bae5","url":"editor/keybinding-vim.js"},{"revision":"d2cb2a1e7d0eedcf406b636fbf6e7d49","url":"editor/keybinding-vscode.js"},{"revision":"9565ba96fc7434d4ebe12064592cf416","url":"editor/mode-abap.js"},{"revision":"eeaad6279985fc1076c1b066e7b313ab","url":"editor/mode-abc.js"},{"revision":"0405a5464c2c732ac96670ba1b7fd8ff","url":"editor/mode-actionscript.js"},{"revision":"fd7581d205a86f49908eda19424983f9","url":"editor/mode-ada.js"},{"revision":"36506050262b63143e227c8f0d2917db","url":"editor/mode-alda.js"},{"revision":"101447858061e58943416475a64afc33","url":"editor/mode-apache_conf.js"},{"revision":"ee742017ec781b6913821d4bd600db28","url":"editor/mode-apex.js"},{"revision":"08a8cce831a81e31f9089196656a1bf2","url":"editor/mode-applescript.js"},{"revision":"fd1a3b43c7540c8c8905d7eea012d741","url":"editor/mode-aql.js"},{"revision":"8373f2944e9da5dda7661fba6a7f0dc5","url":"editor/mode-asciidoc.js"},{"revision":"51e0b04892baa102eff5e470b918769c","url":"editor/mode-asl.js"},{"revision":"1a784aeea47abf27999d46e4489f973f","url":"editor/mode-assembly_x86.js"},{"revision":"902febbf3a9a4045673eec5d0c0e8891","url":"editor/mode-autohotkey.js"},{"revision":"c7d3041669874ef8ad71f336ae87e32a","url":"editor/mode-batchfile.js"},{"revision":"9d54ba6faae5a91539b0454e303cc9ba","url":"editor/mode-c_cpp.js"},{"revision":"d9e505c7cbb934f632a1da3dd274d7fc","url":"editor/mode-c9search.js"},{"revision":"f1652c3e7ea4e0fbf49af070421e8ad6","url":"editor/mode-cirru.js"},{"revision":"58215a333255b67dd31e2880b094251e","url":"editor/mode-clojure.js"},{"revision":"0411d98c44936e186ddf191991425e79","url":"editor/mode-cobol.js"},{"revision":"1972ee3a1d76ed24aa02ea61b6d51a15","url":"editor/mode-coffee.js"},{"revision":"0347a9473846dfd0b2816cde1e41123f","url":"editor/mode-coldfusion.js"},{"revision":"0156a7c3c544b84214bf80e6d1bd1650","url":"editor/mode-crystal.js"},{"revision":"24ae8b605e0957c023f2c545b0b0c423","url":"editor/mode-csharp.js"},{"revision":"776d882beb37d5ab2dd9a425f6e8f2de","url":"editor/mode-csound_document.js"},{"revision":"2dff2dc7de3e5c137803f3fd660891ea","url":"editor/mode-csound_orchestra.js"},{"revision":"42d49ff849c55ac60900222de04d77b7","url":"editor/mode-csound_score.js"},{"revision":"9d71b9820d289193eaff5eaf27fef7f2","url":"editor/mode-csp.js"},{"revision":"836be80db07e71e609173cbdc6432fcb","url":"editor/mode-css.js"},{"revision":"d7b4834b069e89f139c070dc3d183a37","url":"editor/mode-curly.js"},{"revision":"605b33fa1fad35f913cf5ee4ed083a2e","url":"editor/mode-d.js"},{"revision":"0a893f1066c3cd6fd261ab6349dd4674","url":"editor/mode-dart.js"},{"revision":"c3a745d0b3274c787a5b9ac225aeadc0","url":"editor/mode-diff.js"},{"revision":"ed144289d5ad392d11966860c48c67cf","url":"editor/mode-django.js"},{"revision":"55d175a63235ad785ee82417a99db705","url":"editor/mode-dockerfile.js"},{"revision":"cc0519b6f6308f2f9cf062fdb0cd018c","url":"editor/mode-dot.js"},{"revision":"68d33c2d72231e92e31d69ac9b831858","url":"editor/mode-drools.js"},{"revision":"a728972178956c784592f291cf5e6c32","url":"editor/mode-edifact.js"},{"revision":"581af32744c82553383a97bd0dcd1912","url":"editor/mode-eiffel.js"},{"revision":"2ffadf4571ab439dbeb76bfe075b8a50","url":"editor/mode-ejs.js"},{"revision":"bb736bb16827a36442a0f5efefc8d9f9","url":"editor/mode-elixir.js"},{"revision":"af24c9cedc7295cdfe53f1cc4ec44c93","url":"editor/mode-elm.js"},{"revision":"2d678814e872ac51e1a7842090283543","url":"editor/mode-erlang.js"},{"revision":"01da0b465eafcfc2810bd896463ac177","url":"editor/mode-forth.js"},{"revision":"d21aca4e2e8c71fc99f2927318f1c8fc","url":"editor/mode-fortran.js"},{"revision":"1ec5a8936d691fa969b2f740708bdaa0","url":"editor/mode-fsharp.js"},{"revision":"5ba2b3bcc56ce04517a3e96124277eb2","url":"editor/mode-fsl.js"},{"revision":"eb54ef6e809142904345efb5ca3b3e9f","url":"editor/mode-ftl.js"},{"revision":"475a05d86b21251ff0f04001e3faa145","url":"editor/mode-gcode.js"},{"revision":"44017c99d2b42aafad5fbe5761cf5295","url":"editor/mode-gherkin.js"},{"revision":"766f1a752d39d4a4d78023b167d00c69","url":"editor/mode-gitignore.js"},{"revision":"c7dc2c244bcfc6a9da43612a930e3b0e","url":"editor/mode-glsl.js"},{"revision":"e2e8785e01c61f2a872ec761c04d4c51","url":"editor/mode-gobstones.js"},{"revision":"7f3c242d61bed2fb99e7cf150ea50fb3","url":"editor/mode-golang.js"},{"revision":"e37df7bbb738ae30fa0238f78cfc1b0e","url":"editor/mode-graphqlschema.js"},{"revision":"c1cabc180d30830b8b5979b44f0825bc","url":"editor/mode-groovy.js"},{"revision":"a0a68947052fd31eae92df5808306b6e","url":"editor/mode-haml.js"},{"revision":"3321cd3ff35c64d073ce9c0e155733a0","url":"editor/mode-handlebars.js"},{"revision":"ac9180844f3e81f574b9129c7d3de15b","url":"editor/mode-haskell_cabal.js"},{"revision":"6feee712c423da0922209ece9da1e3d0","url":"editor/mode-haskell.js"},{"revision":"6005b9535dde621b9ec698e8d32c498a","url":"editor/mode-haxe.js"},{"revision":"8a27e45ff6269fded458c7b6b6037fe1","url":"editor/mode-hjson.js"},{"revision":"fda55e919a9cf66306ce09a9bfdb4f1e","url":"editor/mode-html_elixir.js"},{"revision":"021e43f933b4c4d800c341c87ffe16cf","url":"editor/mode-html_ruby.js"},{"revision":"1f3528fbac6b4a68500b466508f38f9b","url":"editor/mode-html.js"},{"revision":"c2f15e1dcea856b54c8a3aa929cb033f","url":"editor/mode-ini.js"},{"revision":"5ec110176954ebf4c0d40283370a853d","url":"editor/mode-io.js"},{"revision":"bd12ee72dc7fd96382f0ee3fd0c9660c","url":"editor/mode-jack.js"},{"revision":"9c4b4aece76133f89ec353fe62ab2596","url":"editor/mode-jade.js"},{"revision":"2c125f4e3053a36a0fc7f688a939bc2d","url":"editor/mode-java.js"},{"revision":"cfeb080bbab42b58506c7596b61a1bfe","url":"editor/mode-javascript.js"},{"revision":"cdd79580f6f800830fa104cd927eed0e","url":"editor/mode-json.js"},{"revision":"5ceef9e4deae1719f9969ec6f13efb0f","url":"editor/mode-json5.js"},{"revision":"d96726cf599d8e58cce14a479d4fbb7f","url":"editor/mode-jsoniq.js"},{"revision":"6775eaafbf867548527034964b948945","url":"editor/mode-jsp.js"},{"revision":"3d85c1dddb6f352187fb79292f4d34a2","url":"editor/mode-jssm.js"},{"revision":"39eba2d3af7a1bfb9286075310593906","url":"editor/mode-jsx.js"},{"revision":"a31d257cf729e268a4c44697a8e4a99f","url":"editor/mode-julia.js"},{"revision":"34e90990f365223d4415500fe3d884bd","url":"editor/mode-kotlin.js"},{"revision":"2784efaf1f85d5b5e1af7855eb9d96b0","url":"editor/mode-latex.js"},{"revision":"7463152b14fa041ed769578b4d7cbaa4","url":"editor/mode-latte.js"},{"revision":"41820f53b4543d8f0dcd7712cfa32c39","url":"editor/mode-less.js"},{"revision":"4dacd15cd1cde58fe26a1de800a759b6","url":"editor/mode-liquid.js"},{"revision":"8f1bf08aac055ed6ba204d20447a35d4","url":"editor/mode-lisp.js"},{"revision":"5eee9192b874911f584a0dbb055cb641","url":"editor/mode-livescript.js"},{"revision":"db801ca5d9c52aedb26ef7286a7d1dd7","url":"editor/mode-logiql.js"},{"revision":"37a56e440633b17598e87470c2c75cf6","url":"editor/mode-logtalk.js"},{"revision":"0cd0af5bfe4f4b453db2fc0803b91e06","url":"editor/mode-lsl.js"},{"revision":"8ef49e9f06fc0be6e765c98b9360a6a6","url":"editor/mode-lua.js"},{"revision":"cc90291aaafe54853ccbd06028d4e271","url":"editor/mode-luapage.js"},{"revision":"b1e5ef6ea4bf04c6003f49acf3464202","url":"editor/mode-lucene.js"},{"revision":"e1006d4c518310f6ff4dbcffbc21b248","url":"editor/mode-makefile.js"},{"revision":"38c01105bc728db9a14b963a4c63257d","url":"editor/mode-markdown.js"},{"revision":"5a491555c44355ed837e6cd8accff6ee","url":"editor/mode-mask.js"},{"revision":"56a36d379a0969374b751b74d1fe5436","url":"editor/mode-matlab.js"},{"revision":"db50739ade97d6547297fd042234da43","url":"editor/mode-maze.js"},{"revision":"6fe2398819a44f5b61bb9fd78f39109b","url":"editor/mode-mediawiki.js"},{"revision":"fb932c89faba8f12e8f7f765df1a5637","url":"editor/mode-mel.js"},{"revision":"d46990e88d351b1b3904e0ea6b80cd22","url":"editor/mode-mips.js"},{"revision":"81a0099e387626ce66c015a7e5d6d838","url":"editor/mode-mixal.js"},{"revision":"6fda934fe38a53b6ea7dae4de058f6c7","url":"editor/mode-mushcode.js"},{"revision":"bd5da5efd82f688648b28f49db8b3a3e","url":"editor/mode-mysql.js"},{"revision":"f0f221b78f476413e2ba2f2063181442","url":"editor/mode-nginx.js"},{"revision":"72b8cffc1f484dc9d669966fcc7cd9eb","url":"editor/mode-nim.js"},{"revision":"82e84accfafb7a2dc826efe856777fce","url":"editor/mode-nix.js"},{"revision":"fa6937a6937eeb41ba6d1da6f669cfcf","url":"editor/mode-nsis.js"},{"revision":"f154d8902802f7ce92df0f891b500008","url":"editor/mode-nunjucks.js"},{"revision":"d06a6034641a14614ac572dfbc844d47","url":"editor/mode-objectivec.js"},{"revision":"fc7a312c2a946e839cf2ce677d09a1ef","url":"editor/mode-ocaml.js"},{"revision":"2e40620cbf4af7ca511d41c757bad623","url":"editor/mode-pascal.js"},{"revision":"9b78b9c39e1a262f47694aa84928f661","url":"editor/mode-perl.js"},{"revision":"3ae2be6a5bdb8d06844c3b971755ce47","url":"editor/mode-pgsql.js"},{"revision":"68b94d758fe4476e4e27846a2fa9f9ce","url":"editor/mode-php_laravel_blade.js"},{"revision":"d388412fd5fe53364bd4a8a1030c305b","url":"editor/mode-php.js"},{"revision":"4ca254d512f5b455cdefaeac101ad14c","url":"editor/mode-pig.js"},{"revision":"d86cc6d49f658806bd73214df8d339b3","url":"editor/mode-plain_text.js"},{"revision":"9ac5ae21caea53f57a08ce24930a120d","url":"editor/mode-powershell.js"},{"revision":"d4e2b8a6ee00034624ef1db4a6408ca3","url":"editor/mode-praat.js"},{"revision":"e5729d0ec6871131901aa721e1a70caa","url":"editor/mode-prisma.js"},{"revision":"0e17412a3d3f4ed30e6b6a6ebad94fd8","url":"editor/mode-prolog.js"},{"revision":"cf7b9d5e5b7a6f969008ed447483131f","url":"editor/mode-properties.js"},{"revision":"cc696f5bfff99288d8d35258e0a28a41","url":"editor/mode-protobuf.js"},{"revision":"14c4be19c3e5ecf26fb45e7aaa547fd1","url":"editor/mode-puppet.js"},{"revision":"51c1915036867c4ff7641ffdb2b18566","url":"editor/mode-python.js"},{"revision":"179e7e79324ca47972818b275a6032b6","url":"editor/mode-qml.js"},{"revision":"6d589d6ffc67ae803314f282e82c8cfa","url":"editor/mode-r.js"},{"revision":"2a6f91c81ccb87d2a31e7b95a15edc2e","url":"editor/mode-raku.js"},{"revision":"f6ce2c50d423e0d280c498326e4f5574","url":"editor/mode-razor.js"},{"revision":"27f83fdf6fe84064c899b40e95420f33","url":"editor/mode-rdoc.js"},{"revision":"88e11dc990f70c3592230605a9f99947","url":"editor/mode-red.js"},{"revision":"06ed29bf05e9657569414c48646ef183","url":"editor/mode-redshift.js"},{"revision":"ca7f5a739e96e18afa1cfc9267a6264a","url":"editor/mode-rhtml.js"},{"revision":"42602b6eecd2c2bd67e29eab9972acac","url":"editor/mode-rst.js"},{"revision":"77244aaa97058d3577b0c8502ed55434","url":"editor/mode-ruby.js"},{"revision":"25f87d2c0830f87b36d7ef1a17c9af9e","url":"editor/mode-rust.js"},{"revision":"00a85cb1440789467e1a6384e286d405","url":"editor/mode-sass.js"},{"revision":"98c5e7b8898c2a4726f3288117ffe83c","url":"editor/mode-scad.js"},{"revision":"b52ba92976782f672368db86f2df5827","url":"editor/mode-scala.js"},{"revision":"14f102a63e9d6f0187e8e822099d2f16","url":"editor/mode-scheme.js"},{"revision":"798248eb0c68cf699d3716374689062e","url":"editor/mode-scrypt.js"},{"revision":"3add4652188e0bc4d09415003a97f4d4","url":"editor/mode-scss.js"},{"revision":"b8f3c0734e7d90837e86043194c114ec","url":"editor/mode-sh.js"},{"revision":"37d0c48cd5fdccdb3bf60a94154cd69e","url":"editor/mode-sjs.js"},{"revision":"00214437b2b8ae5a66791f8d84243170","url":"editor/mode-slim.js"},{"revision":"dafffc72e5bf26528514d1ebf8623212","url":"editor/mode-smarty.js"},{"revision":"8abdc168ae3f227598cf03a94ae57f81","url":"editor/mode-smithy.js"},{"revision":"2e9b6598d5f7a1a29fff7988cc6c9db6","url":"editor/mode-snippets.js"},{"revision":"0d3eebab4abd4773e353c3dd55b95881","url":"editor/mode-soy_template.js"},{"revision":"77f41123a22ca9050b969d03361a0a20","url":"editor/mode-space.js"},{"revision":"0f620f3654a624b5800e6e3503b04097","url":"editor/mode-sparql.js"},{"revision":"8a6f792cd4bf5ee86e5d52d5eebbc6af","url":"editor/mode-sql.js"},{"revision":"b6e5deac75effcfeaf129f80588deb85","url":"editor/mode-sqlserver.js"},{"revision":"89ce11d3cf8121e606115544cd87bb77","url":"editor/mode-stylus.js"},{"revision":"d5dd98b941711d797aeafa10a047bc9a","url":"editor/mode-svg.js"},{"revision":"e6cc8525622aaf090d6121dc497aee90","url":"editor/mode-swift.js"},{"revision":"1aab970e9dbbb46f6d6eab497f1ec642","url":"editor/mode-tcl.js"},{"revision":"3a08638d147b0efaffe533681930ec55","url":"editor/mode-terraform.js"},{"revision":"736b65273e5807185c977a36fcbfdaab","url":"editor/mode-tex.js"},{"revision":"c01becee0a5e9e847c9dd4a789761925","url":"editor/mode-text.js"},{"revision":"1a292f5feba46cc88ce7ac79b4da3e59","url":"editor/mode-textile.js"},{"revision":"d25fc7cb10200a29f0e4d645360f3a44","url":"editor/mode-toml.js"},{"revision":"d8add6a447f46631173eb08081eb7d3c","url":"editor/mode-tsx.js"},{"revision":"73378d8e8d20b30b3f77cb48b5aea0cf","url":"editor/mode-turtle.js"},{"revision":"9d0e0859db5514da4d6343ccc5d05f25","url":"editor/mode-twig.js"},{"revision":"ecddb9bb267d3e1a2401abf3bb3cbfa1","url":"editor/mode-typescript.js"},{"revision":"9a4c1cbfa4503a422bceca6a10a597d2","url":"editor/mode-vala.js"},{"revision":"0ca52c5bb03a3fddd9c59ef1964a87d1","url":"editor/mode-vbscript.js"},{"revision":"fa5e8883af049144bc26f5a21818e40e","url":"editor/mode-velocity.js"},{"revision":"fe9d60a1e5293366caed70b23a66abb4","url":"editor/mode-verilog.js"},{"revision":"b543bab0240209ff77cd8912cd325996","url":"editor/mode-vhdl.js"},{"revision":"87464ac742fd68d4d28e74f2c140f0ed","url":"editor/mode-visualforce.js"},{"revision":"fcd8561abec3dd10ad5b48483f9ba5e2","url":"editor/mode-wollok.js"},{"revision":"9785371a49d2674f50bc4884eef35301","url":"editor/mode-xml.js"},{"revision":"ae26980a82cf9409f889eaa4a90a82de","url":"editor/mode-xquery.js"},{"revision":"140fa1b67e390b1f91c5b6e2d0f06d5e","url":"editor/mode-yaml.js"},{"revision":"67b8e3c0fccdbfa638aeafe4b1675d0e","url":"editor/mode-zeek.js"},{"revision":"c86ff36573bab9aa77f3d74211ac40ec","url":"editor/snippets/abap.js"},{"revision":"f7315bd8967a773bb6a60bbf07402e32","url":"editor/snippets/abc.js"},{"revision":"9fa130b33842c86a3e19209c2d637364","url":"editor/snippets/actionscript.js"},{"revision":"1db60511f0097168a32987c3e0388c05","url":"editor/snippets/ada.js"},{"revision":"650d86a4078bf6639701ffcb91238572","url":"editor/snippets/alda.js"},{"revision":"fa31b280de62069e898a96a4b8dd0f36","url":"editor/snippets/apache_conf.js"},{"revision":"c8aa86d6847e0a6a947a153eef10e546","url":"editor/snippets/apex.js"},{"revision":"07e7416631015b5a4e3d8134699f0008","url":"editor/snippets/applescript.js"},{"revision":"5100d398d4560cc2a24423e921adf9fe","url":"editor/snippets/aql.js"},{"revision":"0d7ad78da27f2f89135ef32ca4aa8907","url":"editor/snippets/asciidoc.js"},{"revision":"3199aa409707625dbf2fed0655dc0617","url":"editor/snippets/asl.js"},{"revision":"e4a225be9d40eae30a07d3b3789ce48e","url":"editor/snippets/assembly_x86.js"},{"revision":"5a5b25931c827093f6515df62eb8e5d1","url":"editor/snippets/autohotkey.js"},{"revision":"afd3daa6975f10b14e8bead215d41213","url":"editor/snippets/batchfile.js"},{"revision":"19ab6fa01583a575b8ea2eb766515b82","url":"editor/snippets/c_cpp.js"},{"revision":"576573e49215e9932fdd93e47b05a90c","url":"editor/snippets/c9search.js"},{"revision":"a7dc7222b496d27a2eb497733cf4649d","url":"editor/snippets/cirru.js"},{"revision":"144205f2408d4e98613ecd8fa60f8ac0","url":"editor/snippets/clojure.js"},{"revision":"947e929fb7d2111b394736e5b35da083","url":"editor/snippets/cobol.js"},{"revision":"1f2812094e54a4ade41f3360239390c6","url":"editor/snippets/coffee.js"},{"revision":"8e1518914dd63f5225315ce4ee3958bd","url":"editor/snippets/coldfusion.js"},{"revision":"fa072fc547accefb9bcc379c6b75230a","url":"editor/snippets/crystal.js"},{"revision":"e0a1b63f8c3889afbdcbc623a55c1e7e","url":"editor/snippets/csharp.js"},{"revision":"951120d33e8599d5bc62d4c8ec6769ca","url":"editor/snippets/csound_document.js"},{"revision":"ba022ca3d55f568e62e598df6476dc58","url":"editor/snippets/csound_orchestra.js"},{"revision":"2e839b54598f5ad32d8e149dd19bff3c","url":"editor/snippets/csound_score.js"},{"revision":"2de1bc5481136bbeda694c4fe2a15da5","url":"editor/snippets/csp.js"},{"revision":"6efbe290aa89ddce91b09e358a28c2ad","url":"editor/snippets/css.js"},{"revision":"14ec0a80eba8a60dcf75fad0971bf789","url":"editor/snippets/curly.js"},{"revision":"2b6b12cfabef9a2857b52f1f6e0be478","url":"editor/snippets/d.js"},{"revision":"bb94186839f8ea0f15e785315a4ba074","url":"editor/snippets/dart.js"},{"revision":"f22b3388439a40e0614d4a01d88c3f97","url":"editor/snippets/diff.js"},{"revision":"0b44c297d665731fdf5bb71da4ef3f18","url":"editor/snippets/django.js"},{"revision":"d5902de8f09fa5d0e42ad69137f45a00","url":"editor/snippets/dockerfile.js"},{"revision":"f771826d76e2f0671fd982afe325fa3b","url":"editor/snippets/dot.js"},{"revision":"5ab392eb4d99785a83d64b87396182a4","url":"editor/snippets/drools.js"},{"revision":"8c44d2fff96eefab93d9afa3acd790da","url":"editor/snippets/edifact.js"},{"revision":"bf2b95326a6f2560c446f370de05b4c9","url":"editor/snippets/eiffel.js"},{"revision":"81b4f5ed64b43b36ffb6eb9ed6901900","url":"editor/snippets/ejs.js"},{"revision":"dadd31fe1c900a7efb76d4c7a8e76497","url":"editor/snippets/elixir.js"},{"revision":"dcaea2a1d6f8ac4484067930debf0861","url":"editor/snippets/elm.js"},{"revision":"9bfe7ac74694eec3d001f66159117dd9","url":"editor/snippets/erlang.js"},{"revision":"89150eb3939d04260e38e099b711837d","url":"editor/snippets/forth.js"},{"revision":"c2fa5dd283b1fe3e2bee8e98130be203","url":"editor/snippets/fortran.js"},{"revision":"d50d67e6eed5af86d6e50f912a68d9ad","url":"editor/snippets/fsharp.js"},{"revision":"b8d1aee62bf15074ee7f7d193e13b976","url":"editor/snippets/fsl.js"},{"revision":"27bf8811ab5e36a7141c2d91f2990bd4","url":"editor/snippets/ftl.js"},{"revision":"3c097604f061da66bc24fde14d46f467","url":"editor/snippets/gcode.js"},{"revision":"e08fa30a43b649402084dcd0dd22e6f2","url":"editor/snippets/gherkin.js"},{"revision":"e1b246d55671257668e5d70439807cc3","url":"editor/snippets/gitignore.js"},{"revision":"c15d5891da2a4af88ccebc841e472b1b","url":"editor/snippets/glsl.js"},{"revision":"909ff12e4809cd8f5fac5a77635773fc","url":"editor/snippets/gobstones.js"},{"revision":"e97632882796d0d2d7317de9f74a1222","url":"editor/snippets/golang.js"},{"revision":"54f4b358dac7759611aff5c824bcd25d","url":"editor/snippets/graphqlschema.js"},{"revision":"a3c524bc50c4f2ed9db28cc0c0c9e1ac","url":"editor/snippets/groovy.js"},{"revision":"f1e3d2bf644cc705b404a9401113288e","url":"editor/snippets/haml.js"},{"revision":"f46cc593fa8a584f0bce19fe29d544d4","url":"editor/snippets/handlebars.js"},{"revision":"37f21fd9fd82a9bfbf8dfdcdac693151","url":"editor/snippets/haskell_cabal.js"},{"revision":"e708b1954ec0d44b61876b5f1a86a108","url":"editor/snippets/haskell.js"},{"revision":"ae6acf47c7bf840a0c4280b7d53ce08d","url":"editor/snippets/haxe.js"},{"revision":"2d657f249d0e2ebf16ccd9c57b85e7eb","url":"editor/snippets/hjson.js"},{"revision":"f1acf791bcf2956ec57d1dee86209062","url":"editor/snippets/html_elixir.js"},{"revision":"0f995ca166568d91e5c57a8fe2fa1d34","url":"editor/snippets/html_ruby.js"},{"revision":"4c0017e10afe70fadd6260c00fd749d7","url":"editor/snippets/html.js"},{"revision":"5bda33b2f02530d3335ad88e5ad330ff","url":"editor/snippets/ini.js"},{"revision":"fdc127154b469b1f717d08a6d1f725f4","url":"editor/snippets/io.js"},{"revision":"87e25507f559863959770fcd0968c3c6","url":"editor/snippets/jack.js"},{"revision":"348c2e77c48dd7d725f43b309e98c5eb","url":"editor/snippets/jade.js"},{"revision":"87f414d791ce330883c6030686683107","url":"editor/snippets/java.js"},{"revision":"57cdbde059060f1d5c354bde4a42b97d","url":"editor/snippets/javascript.js"},{"revision":"f89c4472821a242e9895d5eaacdb6c6b","url":"editor/snippets/json.js"},{"revision":"81349bf4810d173ae9bd8790b7dd7e2a","url":"editor/snippets/json5.js"},{"revision":"452b013b70e2d0c9d797fd1e788fb122","url":"editor/snippets/jsoniq.js"},{"revision":"8ba981843132a596bab9dc64f8c10f8a","url":"editor/snippets/jsp.js"},{"revision":"9cf6aa19868c8d871461bf9b5efc8202","url":"editor/snippets/jssm.js"},{"revision":"20c492ff9fd09239d642a85552b7e154","url":"editor/snippets/jsx.js"},{"revision":"5b6e35017c45c25319b5bed1d33c17bb","url":"editor/snippets/julia.js"},{"revision":"5e3411b4c7419c918925ba0402bcdafe","url":"editor/snippets/kotlin.js"},{"revision":"3640d8a613ebab363af7baa5b10a0277","url":"editor/snippets/latex.js"},{"revision":"48cfa7815408a0d6f7f05668cb38c4ba","url":"editor/snippets/latte.js"},{"revision":"2ed761fc69731019548d7377032e72cd","url":"editor/snippets/less.js"},{"revision":"a6ae117b8d7bd263597055512c21b3ec","url":"editor/snippets/liquid.js"},{"revision":"04158d6e2a1b232074315566ec05c92e","url":"editor/snippets/lisp.js"},{"revision":"0b58104ef6917658bfc80395acff0d42","url":"editor/snippets/livescript.js"},{"revision":"243ee5a820100a45670211c37ab56852","url":"editor/snippets/logiql.js"},{"revision":"cec3b5ec221114260a32280ee7154234","url":"editor/snippets/logtalk.js"},{"revision":"36c80099b2ae588fa73c6ab2f36e2854","url":"editor/snippets/lsl.js"},{"revision":"1294bf4a079ea0074de162b580325032","url":"editor/snippets/lua.js"},{"revision":"191fb0590101cbecd6fba2bc68196ed8","url":"editor/snippets/luapage.js"},{"revision":"6f240a1e972f22534da0e65bf7cb9f02","url":"editor/snippets/lucene.js"},{"revision":"a8c431b8580c50b9aa14e6f235f8ffe7","url":"editor/snippets/makefile.js"},{"revision":"3573b3c4a16b208bc4d24a4c352d8792","url":"editor/snippets/markdown.js"},{"revision":"2666b47557d4c8a7aaefb176a99b72e4","url":"editor/snippets/mask.js"},{"revision":"94da8478bdddeb3096165953a9217647","url":"editor/snippets/matlab.js"},{"revision":"724e2c5ac4355e6a104fdad85f9df943","url":"editor/snippets/maze.js"},{"revision":"1e6e9b5e84c5574f21c093015f4e4d87","url":"editor/snippets/mediawiki.js"},{"revision":"9b280935b51a992e6fb5b4566ada1eff","url":"editor/snippets/mel.js"},{"revision":"fa0852a48026ce90e8a3e342d40d615c","url":"editor/snippets/mips.js"},{"revision":"aa705ddee7006136dc373d627dc81548","url":"editor/snippets/mixal.js"},{"revision":"0e493b7068816753af2efb888efdcdc4","url":"editor/snippets/mushcode.js"},{"revision":"46a20fcc46bd47834a3008b337e9b775","url":"editor/snippets/mysql.js"},{"revision":"56e4afb289dc7471bc30e6040627defc","url":"editor/snippets/nginx.js"},{"revision":"b27b9294d835d41e5c0c4a85fc87c19a","url":"editor/snippets/nim.js"},{"revision":"83e57f7b6bb8132c4c792f855bc97ed5","url":"editor/snippets/nix.js"},{"revision":"2b46671536d39a5e6345ffceff3e2a69","url":"editor/snippets/nsis.js"},{"revision":"244a7e3bb7142dfba79a1fb18bf439cc","url":"editor/snippets/nunjucks.js"},{"revision":"c8ba71185f3ea30f58aee40a18dc2b85","url":"editor/snippets/objectivec.js"},{"revision":"ee505bee7e780e7c2c4eaf3eb9991809","url":"editor/snippets/ocaml.js"},{"revision":"f90d0faec18801e0c3e5b0ea3626ead6","url":"editor/snippets/pascal.js"},{"revision":"d0b08a6107e90cb9f8a7ee3e10d364c0","url":"editor/snippets/perl.js"},{"revision":"3b7185e879f76f8eae837322319226f0","url":"editor/snippets/pgsql.js"},{"revision":"1937912816ead8c2ad3372da18cf957d","url":"editor/snippets/php_laravel_blade.js"},{"revision":"119fa938b1d59c8d5b3ad37cf93cdef4","url":"editor/snippets/php.js"},{"revision":"eeb92d5a71154a6e74e5b6d8cf317868","url":"editor/snippets/pig.js"},{"revision":"8a7bd2781388d769c8c6284fd6acbb82","url":"editor/snippets/plain_text.js"},{"revision":"db34c9bc106034088af3463c930bed08","url":"editor/snippets/powershell.js"},{"revision":"2e966a8bde662bb6c5bc8c00172648b5","url":"editor/snippets/praat.js"},{"revision":"745a07efaeac9b5aea10268e71053f2d","url":"editor/snippets/prisma.js"},{"revision":"9ed31a5e4962e6789e95b90b44389d95","url":"editor/snippets/prolog.js"},{"revision":"694c414b150a01372728ccd093c5ad29","url":"editor/snippets/properties.js"},{"revision":"138943baf650b22516c879c81cb7bebd","url":"editor/snippets/protobuf.js"},{"revision":"1ecd9e32a4748749b677580db829bfc7","url":"editor/snippets/puppet.js"},{"revision":"7ed27d2b96f4179044a0b3e9a452768f","url":"editor/snippets/python.js"},{"revision":"b9fb08149997cd5e5e0a3ab89da4adcc","url":"editor/snippets/qml.js"},{"revision":"89b572c3ebb0e67295f59a649ff90856","url":"editor/snippets/r.js"},{"revision":"27b2c05126360a4c4fd84e9d865ddcc6","url":"editor/snippets/raku.js"},{"revision":"f766a3f36c9ed43057ce52c871e1ac80","url":"editor/snippets/razor.js"},{"revision":"22ef0df7c5b42cdcf6fcebe7283c2e1c","url":"editor/snippets/rdoc.js"},{"revision":"7f62c2836afe4049ea1dcc38cb9c1e88","url":"editor/snippets/red.js"},{"revision":"f3db0966cc859a452c2df7af86753f0a","url":"editor/snippets/redshift.js"},{"revision":"d335d5bc0fc0c363a4a5a4e7794796d5","url":"editor/snippets/rhtml.js"},{"revision":"dde6c2baebefc3088de9604dbab893be","url":"editor/snippets/rst.js"},{"revision":"d576053a0acb9119d1703b36607ce59c","url":"editor/snippets/ruby.js"},{"revision":"c3920f9f101e4f34d5478e794bbaaa81","url":"editor/snippets/rust.js"},{"revision":"e89c08d82964f36dfd672787b3fb15b7","url":"editor/snippets/sass.js"},{"revision":"092685484645fc7c1a3a0184d895e771","url":"editor/snippets/scad.js"},{"revision":"3b97b7d315718dfc8b0884367c3c93d5","url":"editor/snippets/scala.js"},{"revision":"7933cf3e5e515e8a3a8802411af602bc","url":"editor/snippets/scheme.js"},{"revision":"e46313be3b750e0a5f63626606be9cf0","url":"editor/snippets/scrypt.js"},{"revision":"fb08893beff9e874884387cefdc6b303","url":"editor/snippets/scss.js"},{"revision":"477cb246c93ea54229734980aaa9359e","url":"editor/snippets/sh.js"},{"revision":"d6be3ec1b851a180b005ad74fe0742f5","url":"editor/snippets/sjs.js"},{"revision":"41a9e1cf5f84a0c643eb28a786be5b30","url":"editor/snippets/slim.js"},{"revision":"46f35fafd7f6035f74caafd257a3cb6b","url":"editor/snippets/smarty.js"},{"revision":"da689907e7b96d242672fe5e3027f587","url":"editor/snippets/smithy.js"},{"revision":"2162ac8d9c6ee3a78ccf2e19409da2ab","url":"editor/snippets/snippets.js"},{"revision":"3908cb71f426649ea0544e9e5926b5dd","url":"editor/snippets/soy_template.js"},{"revision":"d54f664307b83f02a6bc44f997974909","url":"editor/snippets/space.js"},{"revision":"423bd67ce3d91972c508005a351939ea","url":"editor/snippets/sparql.js"},{"revision":"e58f6cc02549feab282d22f44086d6dd","url":"editor/snippets/sql.js"},{"revision":"3a114419a88eeb27b63e1e9ca57ce44a","url":"editor/snippets/sqlserver.js"},{"revision":"e1a3ceafa32068ef8ba8f3ab22f12bb0","url":"editor/snippets/stylus.js"},{"revision":"f85e7cee93262a8a24dfc14a4bf72701","url":"editor/snippets/svg.js"},{"revision":"e13155fe4ee38bc34868934d83ecfdb4","url":"editor/snippets/swift.js"},{"revision":"e4975ff04b0fffe26ef77277e479bb4f","url":"editor/snippets/tcl.js"},{"revision":"867ab3ab337a27f6753b374507e3b7b5","url":"editor/snippets/terraform.js"},{"revision":"b4cc4921094025dc76ee27ac91d67905","url":"editor/snippets/tex.js"},{"revision":"2f25a4f48b95772b59f59484da6f6db9","url":"editor/snippets/text.js"},{"revision":"934b08f8bec207e8c16981fcca423cce","url":"editor/snippets/textile.js"},{"revision":"850c17a05f9bd7ab538092ed48f4b1f6","url":"editor/snippets/toml.js"},{"revision":"69d959df7fabff21d3e3252434de0f1e","url":"editor/snippets/tsx.js"},{"revision":"0a3cddd4ea0917731408ede0e482be45","url":"editor/snippets/turtle.js"},{"revision":"8effd9d0880833c7fbf3f760571197d7","url":"editor/snippets/twig.js"},{"revision":"951c759b1a624e806917aae213738333","url":"editor/snippets/typescript.js"},{"revision":"8d0db09f1d9ced0ba2ee9fc02661f2b2","url":"editor/snippets/vala.js"},{"revision":"ae175403f79f4b274d69b656a1ea7a61","url":"editor/snippets/vbscript.js"},{"revision":"af755bcfaed69ae33fe0c60b362f8628","url":"editor/snippets/velocity.js"},{"revision":"1e5246f8e6a03dd4197ea028ffcebe09","url":"editor/snippets/verilog.js"},{"revision":"476406bb0967503cedfbe1b2f22d52c1","url":"editor/snippets/vhdl.js"},{"revision":"c2364268f0f5bc4d55de2323b9ef5ebc","url":"editor/snippets/visualforce.js"},{"revision":"a4d7f630b4d2b2c58e2840c9463891f2","url":"editor/snippets/wollok.js"},{"revision":"322c5932f01478eb1377f05b85192be5","url":"editor/snippets/xml.js"},{"revision":"1ba36252686cbf95b2eadde24a061acf","url":"editor/snippets/xquery.js"},{"revision":"02e68efdd67430a5cb86178c824e6fed","url":"editor/snippets/yaml.js"},{"revision":"6b31d5539848f6c0778140f8ee0153d7","url":"editor/snippets/zeek.js"},{"revision":"c32988e0fb885265aa42fff30776c99f","url":"editor/theme-ambiance.js"},{"revision":"6f50cafbd29860d32e212f85e0c131d4","url":"editor/theme-chaos.js"},{"revision":"5b857dd650d6e0d3afedecc1c92b0aed","url":"editor/theme-chrome.js"},{"revision":"6df730b891c47688ac85040452ee6fc9","url":"editor/theme-clouds_midnight.js"},{"revision":"c85106ebda84f8061e2d9247128c7abe","url":"editor/theme-clouds.js"},{"revision":"2d9ca330a93cadd1e8bdf94be8bf679e","url":"editor/theme-cobalt.js"},{"revision":"e80b1a9ec5bb20f0bdef9ce691dfee25","url":"editor/theme-crimson_editor.js"},{"revision":"384fc739aae359741bbb329d4cc1611a","url":"editor/theme-dawn.js"},{"revision":"124b895ca5060272e87fb739d8b9cbff","url":"editor/theme-dracula.js"},{"revision":"e07fea842fea0e26f04525529b3a53ed","url":"editor/theme-dreamweaver.js"},{"revision":"df3c16c52d4e1ffde9b53f080dcb83b3","url":"editor/theme-eclipse.js"},{"revision":"85b5f2514d9cbe7c8e4011e8a87404de","url":"editor/theme-github.js"},{"revision":"0a70e096a7fba18cedb5f389c1920548","url":"editor/theme-gob.js"},{"revision":"bdab833832ef0c0bd0152c3535302580","url":"editor/theme-gruvbox.js"},{"revision":"54626d6db5416e9f3b5b5641253739dc","url":"editor/theme-idle_fingers.js"},{"revision":"7683aeddef1f1ed8fad43a9a09248c03","url":"editor/theme-iplastic.js"},{"revision":"8437bf245f51c6b9052e7c5940714f94","url":"editor/theme-katzenmilch.js"},{"revision":"19cb3488819c55d98d62f6e73049688e","url":"editor/theme-kr_theme.js"},{"revision":"d58105f1efb8c76458c93b1f46ab4d5c","url":"editor/theme-kuroir.js"},{"revision":"ee25115463664701fbbe02d7fe3a74e5","url":"editor/theme-merbivore_soft.js"},{"revision":"810ce8020392b09e2aba7232098c790f","url":"editor/theme-merbivore.js"},{"revision":"ae249e3d59fba2e662ddc3540c7fef2c","url":"editor/theme-mono_industrial.js"},{"revision":"b7e37fc8ce40aa800b4d54ce7de9bfc4","url":"editor/theme-monokai.js"},{"revision":"71d3bff6023d976ff892c47f82c64ddb","url":"editor/theme-nord_dark.js"},{"revision":"fd79095e361d01f06b1cbc28c9a2fb1c","url":"editor/theme-one_dark.js"},{"revision":"8d668ffb575437fa9a88cd56ee493532","url":"editor/theme-pastel_on_dark.js"},{"revision":"b12f879c786726359eed0e9b2197eb43","url":"editor/theme-solarized_dark.js"},{"revision":"a3b734252a40952dd9e9713866ce6f90","url":"editor/theme-solarized_light.js"},{"revision":"7199603e50b63109f8645ec2886b9d8d","url":"editor/theme-sqlserver.js"},{"revision":"f98521869882b430494316f068248752","url":"editor/theme-terminal.js"},{"revision":"ea1e08613cb051c2e4f0900e7e5ba1bc","url":"editor/theme-textmate.js"},{"revision":"af226c0fbfe2cb0913b2be08fb617525","url":"editor/theme-tomorrow_night_blue.js"},{"revision":"bf5c984d5750b303636cd4876613f8d2","url":"editor/theme-tomorrow_night_bright.js"},{"revision":"90f13c19f5a965ac7545e5418f0214fc","url":"editor/theme-tomorrow_night_eighties.js"},{"revision":"2eb50b8fd29746d177fae1ba827eaa18","url":"editor/theme-tomorrow_night.js"},{"revision":"7dd1237f9576705b4f7161a6949542b7","url":"editor/theme-tomorrow.js"},{"revision":"1eb83ef2b85af32031c907ff7d233850","url":"editor/theme-twilight.js"},{"revision":"c6bb487b0ff135a70e6aa4eece0d6565","url":"editor/theme-vibrant_ink.js"},{"revision":"d0b586e9668fcf3a35441796aba9fb6b","url":"editor/theme-xcode.js"},{"revision":"553219ba9a58d812e321c0034881f7f1","url":"editor/worker-base.js"},{"revision":"89ce3aa293046b0f064bc3b54fbb55c7","url":"editor/worker-coffee.js"},{"revision":"cfe6412e2c68a8fa51129eac0c21c079","url":"editor/worker-css.js"},{"revision":"03250ed25fc1b305e9980cf7cf0dfb09","url":"editor/worker-html.js"},{"revision":"d0189b7cfe01a592e3b96e204017a016","url":"editor/worker-javascript.js"},{"revision":"4dbf2b40140398816efb310205ce9887","url":"editor/worker-json.js"},{"revision":"e6df5dc91e783d90b8129a9b1554329c","url":"editor/worker-lua.js"},{"revision":"ea16e86fa3673f019acbefd75439c609","url":"editor/worker-php.js"},{"revision":"1028c8cbfbf27b3242f66ea35531eaa4","url":"editor/worker-xml.js"},{"revision":"3101a764d3c0914cf40d54e71e9a7d37","url":"editor/worker-xquery.js"},{"revision":"a2fc3e96768cb62c303a53e531900f3d","url":"icon.60e0793f.svg"},{"revision":"929580338d2e897b6ace2eacb5f2e28a","url":"icon.ico"},{"revision":"1c40809b208132c535dabf5a4d76d81f","url":"index.1055cddb.js"},{"revision":"a39fa8b4212eb4dab58c9cc280e1731c","url":"index.14817ef5.js"},{"revision":"37f5e46f1ec4a28aa0a20a5fd9eef44a","url":"index.18758dea.js"},{"revision":"f4a8119b8a7323638429d4d9e063a1dd","url":"index.2b3e8b9a.js"},{"revision":"b800a280ac8d5fe95489ca3d33fdbf7f","url":"index.52ba186b.js"},{"revision":"8b24d39e42e8987e07a5f14bdeb1311f","url":"index.5a3f1f3a.js"},{"revision":"8add44682306e83d013737d0ac51e180","url":"index.633eeac2.js"},{"revision":"6b8567b29d6696e5c6dfd832f0f4ff4c","url":"index.ef9ef7bd.js"},{"revision":"198eaa4fc9d82b9770a11241263b15a0","url":"index.f3468176.js"},{"revision":"49abc2ea6cc70782cc9fca6d0ef73468","url":"index.html"},{"revision":"0d487e91c2994821669c9a500c054b3d","url":"logo_512.db4c5fbd.png"},{"revision":"37ca3039aada3760fe0cffdd638e14b8","url":"logo.abbc2cae.png"},{"revision":"82a0cc7824bbd5dfa1d2252a7467304a","url":"manifest.webmanifest"},{"revision":"55cb77845dc6817b98aad933c629109b","url":"source-code-pro-v13-latin-600.15f00b22.svg"},{"revision":"c04ecf579206d800d0f90e11fa510af0","url":"source-code-pro-v13-latin-regular.91afd03e.svg"},{"revision":"0395a2f920afdbd3809771a719326c3c","url":"source-sans-pro-v14-latin-600.234ae412.svg"},{"revision":"8ac4b6c1ecf5bb10cf24da73fc3dc5a5","url":"source-sans-pro-v14-latin-700.df9681de.svg"},{"revision":"d8ed67444c745412eb4398e3a2a80fa6","url":"source-sans-pro-v14-latin-regular.32b4dc53.svg"},{"revision":"5b4bdd8cb246a1ad7c7a310109323ca0","url":"source-serif-pro-v10-latin-600.a8e70b44.svg"},{"revision":"0ea9f1a1fbe1df432ef62bf8c0c6d1bf","url":"source-serif-pro-v10-latin-700.90cffcb9.svg"},{"revision":"40d6fdac5c3acaef948a64cc8b2ec049","url":"up_/up_/assets/logo_192.png"}])
