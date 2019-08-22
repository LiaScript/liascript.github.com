// advanced config for injectManifest approach
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js')

// Detailed logging is very useful during development
//workbox.setConfig({debug: true})

// Updating SW lifecycle to update the app after user triggered refresh
workbox.core.skipWaiting()
workbox.core.clientsClaim()


workbox.routing.registerRoute( /\/$/, new workbox.strategies.NetworkFirst() )
workbox.routing.registerRoute( /\/*/, new workbox.strategies.NetworkFirst() )
workbox.routing.registerRoute( /.+\/*/, new workbox.strategies.NetworkFirst() )

workbox.routing.registerRoute(
  /https:\/\/code\.responsivevoice\.org/,
  new workbox.strategies.StaleWhileRevalidate()
)

workbox.precaching.precacheAndRoute([
  {
    "url": "ace.7d0a90ef.js",
    "revision": "08acc16fd0d8800bc4d297b1a02c65c6"
  },
  {
    "url": "ace/ace.js",
    "revision": "a35a4f70db614cb0ba4f85feb36f940a"
  },
  {
    "url": "ace/ext-beautify.js",
    "revision": "31c3e5d055ddc7d858d450cc170310d5"
  },
  {
    "url": "ace/ext-elastic_tabstops_lite.js",
    "revision": "5191f0a2e50009f1a58dbaaf8c7eed03"
  },
  {
    "url": "ace/ext-emmet.js",
    "revision": "6ca66c8ccfae224bd6292394ddabdee4"
  },
  {
    "url": "ace/ext-error_marker.js",
    "revision": "bff25dbf657a07d2df49accf1a604843"
  },
  {
    "url": "ace/ext-keybinding_menu.js",
    "revision": "3c82fdb7b677dd1d2ea3bf34851f4ee0"
  },
  {
    "url": "ace/ext-language_tools.js",
    "revision": "a62bad724672c4c4993ce2ec5d23b3a5"
  },
  {
    "url": "ace/ext-linking.js",
    "revision": "5d4dfb04b610b3991e9fcfdb6a4f0f4b"
  },
  {
    "url": "ace/ext-modelist.js",
    "revision": "ea9501ddd32bce075ef9a207a8c837d6"
  },
  {
    "url": "ace/ext-options.js",
    "revision": "d8a1bcfceb060f17198c76d2e8de1762"
  },
  {
    "url": "ace/ext-prompt.js",
    "revision": "8f8f1710cc580746d953a801a4ac7924"
  },
  {
    "url": "ace/ext-rtl.js",
    "revision": "9e2362dfea9ea452b229f98e5955fce8"
  },
  {
    "url": "ace/ext-searchbox.js",
    "revision": "c3ad58df7587107f71fc1d511624250d"
  },
  {
    "url": "ace/ext-settings_menu.js",
    "revision": "201944a9ed3946419b707ccd3fc5ca58"
  },
  {
    "url": "ace/ext-spellcheck.js",
    "revision": "31741ab4452f0085664d81c96343c1eb"
  },
  {
    "url": "ace/ext-split.js",
    "revision": "d9a200d4315c9a1619a12797a1eebb4d"
  },
  {
    "url": "ace/ext-static_highlight.js",
    "revision": "4d49c932936b8f14e56ef06a545dac3c"
  },
  {
    "url": "ace/ext-statusbar.js",
    "revision": "dae83b0db0db201784db10174a2c0fa0"
  },
  {
    "url": "ace/ext-textarea.js",
    "revision": "c3269ef39fda22c8f920cb2649180e66"
  },
  {
    "url": "ace/ext-themelist.js",
    "revision": "21c5130bb4b0742c35527a14ce6bf2af"
  },
  {
    "url": "ace/ext-whitespace.js",
    "revision": "a69009c59ec6f8498daae63971bd7814"
  },
  {
    "url": "ace/keybinding-emacs.js",
    "revision": "6c29ef83bd641a2a1a21cec5dbec50b2"
  },
  {
    "url": "ace/keybinding-sublime.js",
    "revision": "a36c3ac4eae9d24071c3497ddcbe8f38"
  },
  {
    "url": "ace/keybinding-vim.js",
    "revision": "d13d79d63166502ad7d4e0097cc144ca"
  },
  {
    "url": "ace/mode-abap.js",
    "revision": "9565ba96fc7434d4ebe12064592cf416"
  },
  {
    "url": "ace/mode-abc.js",
    "revision": "2ecc4e22a26b04f38ee56527cb46f448"
  },
  {
    "url": "ace/mode-actionscript.js",
    "revision": "df65c8d86b6d80ad317baf0eaf051021"
  },
  {
    "url": "ace/mode-ada.js",
    "revision": "fd7581d205a86f49908eda19424983f9"
  },
  {
    "url": "ace/mode-apache_conf.js",
    "revision": "101447858061e58943416475a64afc33"
  },
  {
    "url": "ace/mode-apex.js",
    "revision": "ee742017ec781b6913821d4bd600db28"
  },
  {
    "url": "ace/mode-applescript.js",
    "revision": "08a8cce831a81e31f9089196656a1bf2"
  },
  {
    "url": "ace/mode-aql.js",
    "revision": "fd1a3b43c7540c8c8905d7eea012d741"
  },
  {
    "url": "ace/mode-asciidoc.js",
    "revision": "8373f2944e9da5dda7661fba6a7f0dc5"
  },
  {
    "url": "ace/mode-asl.js",
    "revision": "bd6d1808dcb54fc5a3571806b3596943"
  },
  {
    "url": "ace/mode-assembly_x86.js",
    "revision": "1a784aeea47abf27999d46e4489f973f"
  },
  {
    "url": "ace/mode-autohotkey.js",
    "revision": "5dfbeb459ece241703ed4f35e7eb48b4"
  },
  {
    "url": "ace/mode-batchfile.js",
    "revision": "c7d3041669874ef8ad71f336ae87e32a"
  },
  {
    "url": "ace/mode-bro.js",
    "revision": "3936ef40547d9c8994a1aa6cedef8777"
  },
  {
    "url": "ace/mode-c_cpp.js",
    "revision": "04112e82e90aa011eb21161acbc1128a"
  },
  {
    "url": "ace/mode-c9search.js",
    "revision": "d9e505c7cbb934f632a1da3dd274d7fc"
  },
  {
    "url": "ace/mode-cirru.js",
    "revision": "f1652c3e7ea4e0fbf49af070421e8ad6"
  },
  {
    "url": "ace/mode-clojure.js",
    "revision": "4717081a951cc768d8f215fc660f57d8"
  },
  {
    "url": "ace/mode-cobol.js",
    "revision": "0411d98c44936e186ddf191991425e79"
  },
  {
    "url": "ace/mode-coffee.js",
    "revision": "18eda77a98656fccead1ba601a10d759"
  },
  {
    "url": "ace/mode-coldfusion.js",
    "revision": "e00fa5a79d9bdee1b450bb810911b6a1"
  },
  {
    "url": "ace/mode-crystal.js",
    "revision": "0156a7c3c544b84214bf80e6d1bd1650"
  },
  {
    "url": "ace/mode-csharp.js",
    "revision": "24ae8b605e0957c023f2c545b0b0c423"
  },
  {
    "url": "ace/mode-csound_document.js",
    "revision": "5ab7d4d43c0da113fb8320457dcc8799"
  },
  {
    "url": "ace/mode-csound_orchestra.js",
    "revision": "11b3ea7fb3f24fea6f3fa0e4e97ce761"
  },
  {
    "url": "ace/mode-csound_score.js",
    "revision": "ce13f83001a2712098ab614c803f819b"
  },
  {
    "url": "ace/mode-csp.js",
    "revision": "9d71b9820d289193eaff5eaf27fef7f2"
  },
  {
    "url": "ace/mode-css.js",
    "revision": "1c4c34a0ae39f8d9e1331890f55903de"
  },
  {
    "url": "ace/mode-curly.js",
    "revision": "a6837ca30e3359d8d04882039e16df3b"
  },
  {
    "url": "ace/mode-d.js",
    "revision": "604774e5942ccd0179c0ac33519864a0"
  },
  {
    "url": "ace/mode-dart.js",
    "revision": "1ad9d6a547144394e5dea403f1faf1e7"
  },
  {
    "url": "ace/mode-diff.js",
    "revision": "0594fce606ed57c36a8b4b2a64224bf4"
  },
  {
    "url": "ace/mode-django.js",
    "revision": "354538be61c821ad824a70b85622c02b"
  },
  {
    "url": "ace/mode-dockerfile.js",
    "revision": "2046c14a2f2117b31a18e043fc927e74"
  },
  {
    "url": "ace/mode-dot.js",
    "revision": "cc0519b6f6308f2f9cf062fdb0cd018c"
  },
  {
    "url": "ace/mode-drools.js",
    "revision": "2d2a2497268b2432fcc0e440ef25dc95"
  },
  {
    "url": "ace/mode-edifact.js",
    "revision": "3aa11e451e6302d775b29d4c9c03d61a"
  },
  {
    "url": "ace/mode-eiffel.js",
    "revision": "581af32744c82553383a97bd0dcd1912"
  },
  {
    "url": "ace/mode-ejs.js",
    "revision": "ffc271df7ae058a8c85d3fab3a758983"
  },
  {
    "url": "ace/mode-elixir.js",
    "revision": "bb736bb16827a36442a0f5efefc8d9f9"
  },
  {
    "url": "ace/mode-elm.js",
    "revision": "af24c9cedc7295cdfe53f1cc4ec44c93"
  },
  {
    "url": "ace/mode-erlang.js",
    "revision": "288efd5464f52733d9f76dd1f1dad9a7"
  },
  {
    "url": "ace/mode-forth.js",
    "revision": "01da0b465eafcfc2810bd896463ac177"
  },
  {
    "url": "ace/mode-fortran.js",
    "revision": "d21aca4e2e8c71fc99f2927318f1c8fc"
  },
  {
    "url": "ace/mode-fsharp.js",
    "revision": "1ec5a8936d691fa969b2f740708bdaa0"
  },
  {
    "url": "ace/mode-fsl.js",
    "revision": "11dec648affbe0a61edc3ffc4d63a73d"
  },
  {
    "url": "ace/mode-ftl.js",
    "revision": "eb54ef6e809142904345efb5ca3b3e9f"
  },
  {
    "url": "ace/mode-gcode.js",
    "revision": "475a05d86b21251ff0f04001e3faa145"
  },
  {
    "url": "ace/mode-gherkin.js",
    "revision": "c697a786bd8f69f629c53d4df9323483"
  },
  {
    "url": "ace/mode-gitignore.js",
    "revision": "766f1a752d39d4a4d78023b167d00c69"
  },
  {
    "url": "ace/mode-glsl.js",
    "revision": "92970fdf3499d1ce9c1dc13bd5064b84"
  },
  {
    "url": "ace/mode-gobstones.js",
    "revision": "17fc7f67ebcabcb62dbaeec950985630"
  },
  {
    "url": "ace/mode-golang.js",
    "revision": "7f3c242d61bed2fb99e7cf150ea50fb3"
  },
  {
    "url": "ace/mode-graphqlschema.js",
    "revision": "565764ba14b66555844672ebaf7f3eab"
  },
  {
    "url": "ace/mode-groovy.js",
    "revision": "34358adee72331a327b1d2cc1dee0e02"
  },
  {
    "url": "ace/mode-haml.js",
    "revision": "989723e418e4ebacd2ee51f8f2ed0976"
  },
  {
    "url": "ace/mode-handlebars.js",
    "revision": "33d52a9795241693b49ab4613df88926"
  },
  {
    "url": "ace/mode-haskell_cabal.js",
    "revision": "ac9180844f3e81f574b9129c7d3de15b"
  },
  {
    "url": "ace/mode-haskell.js",
    "revision": "dd9d8524ecc5b304232640a03fa5b443"
  },
  {
    "url": "ace/mode-haxe.js",
    "revision": "6005b9535dde621b9ec698e8d32c498a"
  },
  {
    "url": "ace/mode-hjson.js",
    "revision": "8a27e45ff6269fded458c7b6b6037fe1"
  },
  {
    "url": "ace/mode-html_elixir.js",
    "revision": "d441c3c9af634016927626b8d91fb4a9"
  },
  {
    "url": "ace/mode-html_ruby.js",
    "revision": "a5bee66824af1f2a7cfacb874c149ad8"
  },
  {
    "url": "ace/mode-html.js",
    "revision": "7eafa07ac408252e3d8ae370ef9fae9a"
  },
  {
    "url": "ace/mode-ini.js",
    "revision": "c2f15e1dcea856b54c8a3aa929cb033f"
  },
  {
    "url": "ace/mode-io.js",
    "revision": "b732951e649d8efa8174e961f9799b7b"
  },
  {
    "url": "ace/mode-jack.js",
    "revision": "bd12ee72dc7fd96382f0ee3fd0c9660c"
  },
  {
    "url": "ace/mode-jade.js",
    "revision": "2724e8e92037952260610871e3a86e47"
  },
  {
    "url": "ace/mode-java.js",
    "revision": "1623e30dcf0af56ef56363082b62120f"
  },
  {
    "url": "ace/mode-javascript.js",
    "revision": "1fe72ca52192b08969f31c6bea9c1d21"
  },
  {
    "url": "ace/mode-json.js",
    "revision": "e9d3cf13cd3d35ea6735bb4cefcfeffd"
  },
  {
    "url": "ace/mode-jsoniq.js",
    "revision": "f2acd1aab459563bc17a2d4c6839455e"
  },
  {
    "url": "ace/mode-jsp.js",
    "revision": "1dee09c81c54c9b635870dded2e6e81c"
  },
  {
    "url": "ace/mode-jssm.js",
    "revision": "3d85c1dddb6f352187fb79292f4d34a2"
  },
  {
    "url": "ace/mode-jsx.js",
    "revision": "39eba2d3af7a1bfb9286075310593906"
  },
  {
    "url": "ace/mode-julia.js",
    "revision": "a31d257cf729e268a4c44697a8e4a99f"
  },
  {
    "url": "ace/mode-kotlin.js",
    "revision": "2d82132251a4e067c821c5478a8c7e03"
  },
  {
    "url": "ace/mode-latex.js",
    "revision": "2784efaf1f85d5b5e1af7855eb9d96b0"
  },
  {
    "url": "ace/mode-less.js",
    "revision": "41820f53b4543d8f0dcd7712cfa32c39"
  },
  {
    "url": "ace/mode-liquid.js",
    "revision": "edccf4b4ff3832a608ea552b666162d4"
  },
  {
    "url": "ace/mode-lisp.js",
    "revision": "8f1bf08aac055ed6ba204d20447a35d4"
  },
  {
    "url": "ace/mode-livescript.js",
    "revision": "5eee9192b874911f584a0dbb055cb641"
  },
  {
    "url": "ace/mode-logiql.js",
    "revision": "db801ca5d9c52aedb26ef7286a7d1dd7"
  },
  {
    "url": "ace/mode-logtalk.js",
    "revision": "37a56e440633b17598e87470c2c75cf6"
  },
  {
    "url": "ace/mode-lsl.js",
    "revision": "59ee52f1f4039ec528f2204c77117956"
  },
  {
    "url": "ace/mode-lua.js",
    "revision": "935c173a30b86e1ae2ba1a3a28634ee8"
  },
  {
    "url": "ace/mode-luapage.js",
    "revision": "0a395d1bb51ea45ef220b0aed622e3f9"
  },
  {
    "url": "ace/mode-lucene.js",
    "revision": "b1e5ef6ea4bf04c6003f49acf3464202"
  },
  {
    "url": "ace/mode-makefile.js",
    "revision": "5dccb744979119014461ed809c0d1373"
  },
  {
    "url": "ace/mode-markdown.js",
    "revision": "49bfc7cbac02caa8abbcb8278eb59e84"
  },
  {
    "url": "ace/mode-mask.js",
    "revision": "8b7d41d15ec4f26664b9f27d3b16aee7"
  },
  {
    "url": "ace/mode-matlab.js",
    "revision": "56a36d379a0969374b751b74d1fe5436"
  },
  {
    "url": "ace/mode-maze.js",
    "revision": "e7bba21ab6f1e1df85b6b22c660ee9a1"
  },
  {
    "url": "ace/mode-mel.js",
    "revision": "fb932c89faba8f12e8f7f765df1a5637"
  },
  {
    "url": "ace/mode-mixal.js",
    "revision": "81a0099e387626ce66c015a7e5d6d838"
  },
  {
    "url": "ace/mode-mushcode.js",
    "revision": "6fda934fe38a53b6ea7dae4de058f6c7"
  },
  {
    "url": "ace/mode-mysql.js",
    "revision": "bd5da5efd82f688648b28f49db8b3a3e"
  },
  {
    "url": "ace/mode-nginx.js",
    "revision": "2187e99edf5ce3ad9bf91bafc4310184"
  },
  {
    "url": "ace/mode-nim.js",
    "revision": "4cd488b06f03301d021216d2b1ab68b7"
  },
  {
    "url": "ace/mode-nix.js",
    "revision": "123d8d68c5fbe5eea23206fc2d50095d"
  },
  {
    "url": "ace/mode-nsis.js",
    "revision": "854e874acc59377f7c8f9b522f72a821"
  },
  {
    "url": "ace/mode-objectivec.js",
    "revision": "214cd7cfd7b60cb226db59598aaf7191"
  },
  {
    "url": "ace/mode-ocaml.js",
    "revision": "fc7a312c2a946e839cf2ce677d09a1ef"
  },
  {
    "url": "ace/mode-pascal.js",
    "revision": "2e40620cbf4af7ca511d41c757bad623"
  },
  {
    "url": "ace/mode-perl.js",
    "revision": "58cc2dd3b9e14af01d1337ff7a444235"
  },
  {
    "url": "ace/mode-perl6.js",
    "revision": "2119e845826f29976f25500f5b385be5"
  },
  {
    "url": "ace/mode-pgsql.js",
    "revision": "3d3127c18a719c03eeb00e5fdfd10018"
  },
  {
    "url": "ace/mode-php_laravel_blade.js",
    "revision": "e55da9859774868bd7dad7b25de0065e"
  },
  {
    "url": "ace/mode-php.js",
    "revision": "992b431f80e4c75637112695699a7921"
  },
  {
    "url": "ace/mode-pig.js",
    "revision": "4ca254d512f5b455cdefaeac101ad14c"
  },
  {
    "url": "ace/mode-plain_text.js",
    "revision": "d86cc6d49f658806bd73214df8d339b3"
  },
  {
    "url": "ace/mode-powershell.js",
    "revision": "9ac5ae21caea53f57a08ce24930a120d"
  },
  {
    "url": "ace/mode-praat.js",
    "revision": "d4e2b8a6ee00034624ef1db4a6408ca3"
  },
  {
    "url": "ace/mode-prolog.js",
    "revision": "0e17412a3d3f4ed30e6b6a6ebad94fd8"
  },
  {
    "url": "ace/mode-properties.js",
    "revision": "cf7b9d5e5b7a6f969008ed447483131f"
  },
  {
    "url": "ace/mode-protobuf.js",
    "revision": "9bf316c35ee8722faea069f6a5218fb4"
  },
  {
    "url": "ace/mode-puppet.js",
    "revision": "041f82f0083c957f676eb78fac911e43"
  },
  {
    "url": "ace/mode-python.js",
    "revision": "8a7f9b19341e79a7814507e99ba4b6b5"
  },
  {
    "url": "ace/mode-r.js",
    "revision": "642da4051d8bc9a7020b5013a44986e2"
  },
  {
    "url": "ace/mode-razor.js",
    "revision": "0e21efd1b19c07722841fea4e31e5540"
  },
  {
    "url": "ace/mode-rdoc.js",
    "revision": "27f83fdf6fe84064c899b40e95420f33"
  },
  {
    "url": "ace/mode-red.js",
    "revision": "88e11dc990f70c3592230605a9f99947"
  },
  {
    "url": "ace/mode-redshift.js",
    "revision": "06ed29bf05e9657569414c48646ef183"
  },
  {
    "url": "ace/mode-rhtml.js",
    "revision": "f3b1153e8bb1e37f5a59e61bb7020b9b"
  },
  {
    "url": "ace/mode-rst.js",
    "revision": "bc342d53266b230cee1e9727a5a6ce4b"
  },
  {
    "url": "ace/mode-ruby.js",
    "revision": "bd13a9159a9f21be1317a3437ee16516"
  },
  {
    "url": "ace/mode-rust.js",
    "revision": "575de34923c2ff17f16538c6bf9c74b5"
  },
  {
    "url": "ace/mode-sass.js",
    "revision": "00a85cb1440789467e1a6384e286d405"
  },
  {
    "url": "ace/mode-scad.js",
    "revision": "98c5e7b8898c2a4726f3288117ffe83c"
  },
  {
    "url": "ace/mode-scala.js",
    "revision": "3990fba0115ed2d88a193c3eeeb74937"
  },
  {
    "url": "ace/mode-scheme.js",
    "revision": "14f102a63e9d6f0187e8e822099d2f16"
  },
  {
    "url": "ace/mode-scss.js",
    "revision": "3add4652188e0bc4d09415003a97f4d4"
  },
  {
    "url": "ace/mode-sh.js",
    "revision": "3f72f806f91515a21753dcc1cd5bbf83"
  },
  {
    "url": "ace/mode-sjs.js",
    "revision": "b12c6768e7db9acc054b81a6d51abea9"
  },
  {
    "url": "ace/mode-slim.js",
    "revision": "f5043e9baf4ebe893ab10c3fb36cfd10"
  },
  {
    "url": "ace/mode-smarty.js",
    "revision": "08779e977707ce987c24ba6f85fbde1d"
  },
  {
    "url": "ace/mode-snippets.js",
    "revision": "f4b47be38beb7ef508e79dc1f20e4554"
  },
  {
    "url": "ace/mode-soy_template.js",
    "revision": "d3339c45305d25b082912b4dbb1adac6"
  },
  {
    "url": "ace/mode-space.js",
    "revision": "77f41123a22ca9050b969d03361a0a20"
  },
  {
    "url": "ace/mode-sparql.js",
    "revision": "0f620f3654a624b5800e6e3503b04097"
  },
  {
    "url": "ace/mode-sql.js",
    "revision": "62ebd0023cabb67bfd72944e7fc71b7d"
  },
  {
    "url": "ace/mode-sqlserver.js",
    "revision": "acc5223d9f32d04ba49354c6331ab9d2"
  },
  {
    "url": "ace/mode-stylus.js",
    "revision": "89ce11d3cf8121e606115544cd87bb77"
  },
  {
    "url": "ace/mode-svg.js",
    "revision": "d8ba0fba6affa0ab15860560ff980a0a"
  },
  {
    "url": "ace/mode-swift.js",
    "revision": "4c2bff03c88f74a2fc430599f11d7d4c"
  },
  {
    "url": "ace/mode-tcl.js",
    "revision": "be02bd4fb6e322e6f9b2fc6a844b5c41"
  },
  {
    "url": "ace/mode-terraform.js",
    "revision": "12d3dab21c803b9dd13ba51a5152849e"
  },
  {
    "url": "ace/mode-tex.js",
    "revision": "de325844211c3442a3c041aa27d95f3e"
  },
  {
    "url": "ace/mode-text.js",
    "revision": "c01becee0a5e9e847c9dd4a789761925"
  },
  {
    "url": "ace/mode-textile.js",
    "revision": "703803c9fcdc02480f30f92d26e26ff3"
  },
  {
    "url": "ace/mode-toml.js",
    "revision": "d25fc7cb10200a29f0e4d645360f3a44"
  },
  {
    "url": "ace/mode-tsx.js",
    "revision": "49c7606dc7f365ade2bd2e5f7528a59f"
  },
  {
    "url": "ace/mode-turtle.js",
    "revision": "73378d8e8d20b30b3f77cb48b5aea0cf"
  },
  {
    "url": "ace/mode-twig.js",
    "revision": "98a495f0295ccd5ca32c7c0809353800"
  },
  {
    "url": "ace/mode-typescript.js",
    "revision": "c183dd2fe1cb2eb35f7ee464d49b245c"
  },
  {
    "url": "ace/mode-vala.js",
    "revision": "b47b46a41a07abdaddb084f3d915c0cb"
  },
  {
    "url": "ace/mode-vbscript.js",
    "revision": "fa6e5689c0aa30ec42cbc8317e07e98a"
  },
  {
    "url": "ace/mode-velocity.js",
    "revision": "119743777401e390559af27d50058c00"
  },
  {
    "url": "ace/mode-verilog.js",
    "revision": "fe9d60a1e5293366caed70b23a66abb4"
  },
  {
    "url": "ace/mode-vhdl.js",
    "revision": "813d2c2b69d315ecfd57d19cb47ada89"
  },
  {
    "url": "ace/mode-visualforce.js",
    "revision": "17af9478fec68703338004d5d3763199"
  },
  {
    "url": "ace/mode-wollok.js",
    "revision": "bdfef48185fd4c4cbb5422cba75a4a71"
  },
  {
    "url": "ace/mode-xml.js",
    "revision": "9785371a49d2674f50bc4884eef35301"
  },
  {
    "url": "ace/mode-xquery.js",
    "revision": "94ff6406831f31e178e6d61551cc3428"
  },
  {
    "url": "ace/mode-yaml.js",
    "revision": "140fa1b67e390b1f91c5b6e2d0f06d5e"
  },
  {
    "url": "ace/mode-zeek.js",
    "revision": "67b8e3c0fccdbfa638aeafe4b1675d0e"
  },
  {
    "url": "ace/snippets/abap.js",
    "revision": "561a05573ca9fbe7097120fa871d1d2a"
  },
  {
    "url": "ace/snippets/abc.js",
    "revision": "f7315bd8967a773bb6a60bbf07402e32"
  },
  {
    "url": "ace/snippets/actionscript.js",
    "revision": "9fa130b33842c86a3e19209c2d637364"
  },
  {
    "url": "ace/snippets/ada.js",
    "revision": "2e936e935ab588b1b918edc552af4809"
  },
  {
    "url": "ace/snippets/apache_conf.js",
    "revision": "6218cb0ff25646970869745d96e908c9"
  },
  {
    "url": "ace/snippets/apex.js",
    "revision": "e7188565a8712ec125d3470d596a0b31"
  },
  {
    "url": "ace/snippets/applescript.js",
    "revision": "bfd62a5a4e68cfb11bd1c190665f18c9"
  },
  {
    "url": "ace/snippets/aql.js",
    "revision": "f248cf799f9efa7691920c0ffefee50f"
  },
  {
    "url": "ace/snippets/asciidoc.js",
    "revision": "941c692e0fa3651bb0a0775207bdb93b"
  },
  {
    "url": "ace/snippets/asl.js",
    "revision": "6da0248375c67506bbfde15027e6a530"
  },
  {
    "url": "ace/snippets/assembly_x86.js",
    "revision": "4c4b9647c7bc949bbb9bfe19504778a4"
  },
  {
    "url": "ace/snippets/autohotkey.js",
    "revision": "37a328d5455508762d880e9a73f06c9b"
  },
  {
    "url": "ace/snippets/batchfile.js",
    "revision": "b18334e6058ce258b9f311c1767ed8c1"
  },
  {
    "url": "ace/snippets/bro.js",
    "revision": "3abf94ede2c9bbf7212b5be48695f84c"
  },
  {
    "url": "ace/snippets/c_cpp.js",
    "revision": "19ab6fa01583a575b8ea2eb766515b82"
  },
  {
    "url": "ace/snippets/c9search.js",
    "revision": "5c3138ae76a6ad959353b1164c466fcd"
  },
  {
    "url": "ace/snippets/cirru.js",
    "revision": "43ce5a850a0db7a3e68ed3f77349e929"
  },
  {
    "url": "ace/snippets/clojure.js",
    "revision": "144205f2408d4e98613ecd8fa60f8ac0"
  },
  {
    "url": "ace/snippets/cobol.js",
    "revision": "1d5267b4d3d7b18a72e70c373e703968"
  },
  {
    "url": "ace/snippets/coffee.js",
    "revision": "1f2812094e54a4ade41f3360239390c6"
  },
  {
    "url": "ace/snippets/coldfusion.js",
    "revision": "2b82d83e7ef4addd2462523fb39cb378"
  },
  {
    "url": "ace/snippets/crystal.js",
    "revision": "f5ec16c03ddfcd1fed91ad58f38437b6"
  },
  {
    "url": "ace/snippets/csharp.js",
    "revision": "8a45ac3f67875d422888a30af40dbcc4"
  },
  {
    "url": "ace/snippets/csound_document.js",
    "revision": "951120d33e8599d5bc62d4c8ec6769ca"
  },
  {
    "url": "ace/snippets/csound_orchestra.js",
    "revision": "ba022ca3d55f568e62e598df6476dc58"
  },
  {
    "url": "ace/snippets/csound_score.js",
    "revision": "b2125f183e0614c7e3b138daa4893f38"
  },
  {
    "url": "ace/snippets/csp.js",
    "revision": "b1eb590a8a6a4bb75147c38b4ba17841"
  },
  {
    "url": "ace/snippets/css.js",
    "revision": "6efbe290aa89ddce91b09e358a28c2ad"
  },
  {
    "url": "ace/snippets/curly.js",
    "revision": "9d55200e74006eb91575d3de09c1bb93"
  },
  {
    "url": "ace/snippets/d.js",
    "revision": "7ee4964da9a16e5456acedcdf965e578"
  },
  {
    "url": "ace/snippets/dart.js",
    "revision": "bb94186839f8ea0f15e785315a4ba074"
  },
  {
    "url": "ace/snippets/diff.js",
    "revision": "f22b3388439a40e0614d4a01d88c3f97"
  },
  {
    "url": "ace/snippets/django.js",
    "revision": "0b44c297d665731fdf5bb71da4ef3f18"
  },
  {
    "url": "ace/snippets/dockerfile.js",
    "revision": "7ad69043e171815799c5c0074f8bbe3d"
  },
  {
    "url": "ace/snippets/dot.js",
    "revision": "6853143172d7d90b3f8042f4200d44c5"
  },
  {
    "url": "ace/snippets/drools.js",
    "revision": "5ab392eb4d99785a83d64b87396182a4"
  },
  {
    "url": "ace/snippets/edifact.js",
    "revision": "8c44d2fff96eefab93d9afa3acd790da"
  },
  {
    "url": "ace/snippets/eiffel.js",
    "revision": "23451c270009bf924eb8f548e8d24b27"
  },
  {
    "url": "ace/snippets/ejs.js",
    "revision": "69d3936cd04d5c6608388c32ae099bb7"
  },
  {
    "url": "ace/snippets/elixir.js",
    "revision": "0f86ceb6332439eed907ef326ad632eb"
  },
  {
    "url": "ace/snippets/elm.js",
    "revision": "72ff51e8f2075074522c3a1d2461d228"
  },
  {
    "url": "ace/snippets/erlang.js",
    "revision": "9bfe7ac74694eec3d001f66159117dd9"
  },
  {
    "url": "ace/snippets/forth.js",
    "revision": "1bba82c164433f5b5c74412e6532824d"
  },
  {
    "url": "ace/snippets/fortran.js",
    "revision": "2146d726158ce644dcd2d3664108194b"
  },
  {
    "url": "ace/snippets/fsharp.js",
    "revision": "93296563af43e344565fc312055bfce5"
  },
  {
    "url": "ace/snippets/fsl.js",
    "revision": "b8d1aee62bf15074ee7f7d193e13b976"
  },
  {
    "url": "ace/snippets/ftl.js",
    "revision": "f76f4d27f84683c2835fd681ea57afd8"
  },
  {
    "url": "ace/snippets/gcode.js",
    "revision": "cc5af6bda0943da127a691c43b4dc381"
  },
  {
    "url": "ace/snippets/gherkin.js",
    "revision": "86e753f305dce727900010e5a94b6a53"
  },
  {
    "url": "ace/snippets/gitignore.js",
    "revision": "f3f78435ceea4bb37cd106b2be3d7c8a"
  },
  {
    "url": "ace/snippets/glsl.js",
    "revision": "1bc47fb99e725982683a60f1df84d7da"
  },
  {
    "url": "ace/snippets/gobstones.js",
    "revision": "410222bb1751dc811c255d0b9e768dd9"
  },
  {
    "url": "ace/snippets/golang.js",
    "revision": "17d9a6aaa6a1441629c42dd87e3fed25"
  },
  {
    "url": "ace/snippets/graphqlschema.js",
    "revision": "54f4b358dac7759611aff5c824bcd25d"
  },
  {
    "url": "ace/snippets/groovy.js",
    "revision": "7279622aded92e05e418f8fbe9a423e6"
  },
  {
    "url": "ace/snippets/haml.js",
    "revision": "f1e3d2bf644cc705b404a9401113288e"
  },
  {
    "url": "ace/snippets/handlebars.js",
    "revision": "61cd40dfa61c496d664b6fb3de317b20"
  },
  {
    "url": "ace/snippets/haskell_cabal.js",
    "revision": "e3c34f8ab1aa276e90c61e3d0659f503"
  },
  {
    "url": "ace/snippets/haskell.js",
    "revision": "e708b1954ec0d44b61876b5f1a86a108"
  },
  {
    "url": "ace/snippets/haxe.js",
    "revision": "50d9aece41188cf434bbd6e7b5d26a1b"
  },
  {
    "url": "ace/snippets/hjson.js",
    "revision": "101770ade693307c97f81f3c35ae64e2"
  },
  {
    "url": "ace/snippets/html_elixir.js",
    "revision": "9d44ddb386f207f52f58063733a5f433"
  },
  {
    "url": "ace/snippets/html_ruby.js",
    "revision": "2d89bc0128bfdcaea26f6553355a02b8"
  },
  {
    "url": "ace/snippets/html.js",
    "revision": "ebff87672050299754f4abc4151cd656"
  },
  {
    "url": "ace/snippets/ini.js",
    "revision": "91ba8671c3ab8c07572c2bc7767b5b0e"
  },
  {
    "url": "ace/snippets/io.js",
    "revision": "fdc127154b469b1f717d08a6d1f725f4"
  },
  {
    "url": "ace/snippets/jack.js",
    "revision": "a834ea323b67d923916fd2f7c1ea88ed"
  },
  {
    "url": "ace/snippets/jade.js",
    "revision": "6cc2c20b6d3a4bef81e0890717d7f6af"
  },
  {
    "url": "ace/snippets/java.js",
    "revision": "87f414d791ce330883c6030686683107"
  },
  {
    "url": "ace/snippets/javascript.js",
    "revision": "57cdbde059060f1d5c354bde4a42b97d"
  },
  {
    "url": "ace/snippets/json.js",
    "revision": "acbb3a2af8533d78003ddfeec2eda332"
  },
  {
    "url": "ace/snippets/jsoniq.js",
    "revision": "452b013b70e2d0c9d797fd1e788fb122"
  },
  {
    "url": "ace/snippets/jsp.js",
    "revision": "8ba981843132a596bab9dc64f8c10f8a"
  },
  {
    "url": "ace/snippets/jssm.js",
    "revision": "9e9d7883ee272b12c00d99ab098d1e6d"
  },
  {
    "url": "ace/snippets/jsx.js",
    "revision": "d269d681fd0e263789010cf8cb60afae"
  },
  {
    "url": "ace/snippets/julia.js",
    "revision": "71dfff2765631cd59ba9808100fc3dfd"
  },
  {
    "url": "ace/snippets/kotlin.js",
    "revision": "154ee25a97f45a58e96d9a5c63301fd8"
  },
  {
    "url": "ace/snippets/latex.js",
    "revision": "6e1afc768c9a2fdd32fb74ad9c18ab81"
  },
  {
    "url": "ace/snippets/less.js",
    "revision": "ee3a732e63b177b6902b5df46c585543"
  },
  {
    "url": "ace/snippets/liquid.js",
    "revision": "a6ae117b8d7bd263597055512c21b3ec"
  },
  {
    "url": "ace/snippets/lisp.js",
    "revision": "808fceaad1af0b8e6f6c955958196c2b"
  },
  {
    "url": "ace/snippets/livescript.js",
    "revision": "61eddf85ea14d005652e810fe322fc2b"
  },
  {
    "url": "ace/snippets/logiql.js",
    "revision": "f3e99328dde44574dec23ef9b24dd3b0"
  },
  {
    "url": "ace/snippets/logtalk.js",
    "revision": "f796d79fe590c11f01740a0198785ed7"
  },
  {
    "url": "ace/snippets/lsl.js",
    "revision": "36c80099b2ae588fa73c6ab2f36e2854"
  },
  {
    "url": "ace/snippets/lua.js",
    "revision": "1294bf4a079ea0074de162b580325032"
  },
  {
    "url": "ace/snippets/luapage.js",
    "revision": "6acd946e539aadb4c8aee5b861871f2a"
  },
  {
    "url": "ace/snippets/lucene.js",
    "revision": "6b89b61c3afc1b99fa2331f513ae1d4a"
  },
  {
    "url": "ace/snippets/makefile.js",
    "revision": "a8c431b8580c50b9aa14e6f235f8ffe7"
  },
  {
    "url": "ace/snippets/markdown.js",
    "revision": "3573b3c4a16b208bc4d24a4c352d8792"
  },
  {
    "url": "ace/snippets/mask.js",
    "revision": "0abbeb6475be7acff8ca72b811edec2a"
  },
  {
    "url": "ace/snippets/matlab.js",
    "revision": "07c61c1bdc9eabe0379fd97ba8e825f1"
  },
  {
    "url": "ace/snippets/maze.js",
    "revision": "724e2c5ac4355e6a104fdad85f9df943"
  },
  {
    "url": "ace/snippets/mel.js",
    "revision": "76817657411ed7f7fdea9ec5befecaf3"
  },
  {
    "url": "ace/snippets/mixal.js",
    "revision": "df4773f24c36a65d97e78c6addfbe601"
  },
  {
    "url": "ace/snippets/mushcode.js",
    "revision": "2f47db7509d1ec71560a487d10d3b1c7"
  },
  {
    "url": "ace/snippets/mysql.js",
    "revision": "5922c171eddfc289b116106741bd5b5d"
  },
  {
    "url": "ace/snippets/nginx.js",
    "revision": "0b251e0cad417ad6b3ca3f5842b845a9"
  },
  {
    "url": "ace/snippets/nim.js",
    "revision": "b84f6a6f9338ffa6232a56e5f009ebe2"
  },
  {
    "url": "ace/snippets/nix.js",
    "revision": "34bb29462080d18092de2d4994b94949"
  },
  {
    "url": "ace/snippets/nsis.js",
    "revision": "f1fd4fe5cda72fbadb4f3fcc39741d93"
  },
  {
    "url": "ace/snippets/objectivec.js",
    "revision": "63e7eafe91c431403756b02ca101198c"
  },
  {
    "url": "ace/snippets/ocaml.js",
    "revision": "cdbcdfa7ae6c9db98f132a734a27f3c5"
  },
  {
    "url": "ace/snippets/pascal.js",
    "revision": "33b81aa34a88da973038b0c821cb4362"
  },
  {
    "url": "ace/snippets/perl.js",
    "revision": "d0b08a6107e90cb9f8a7ee3e10d364c0"
  },
  {
    "url": "ace/snippets/perl6.js",
    "revision": "eef875552dbb77ec77f6a7b561510258"
  },
  {
    "url": "ace/snippets/pgsql.js",
    "revision": "ab7c4ba4b122e52145d10410b5577d8c"
  },
  {
    "url": "ace/snippets/php_laravel_blade.js",
    "revision": "ab2946b04adbbd1056277535068bcdbf"
  },
  {
    "url": "ace/snippets/php.js",
    "revision": "119fa938b1d59c8d5b3ad37cf93cdef4"
  },
  {
    "url": "ace/snippets/pig.js",
    "revision": "2c41b43e57bb5bc755e7352174669c12"
  },
  {
    "url": "ace/snippets/plain_text.js",
    "revision": "3b49e3de2b9babd3e6b982752c1b0969"
  },
  {
    "url": "ace/snippets/powershell.js",
    "revision": "12f0c8480e41ddb2176fa2999f0b7f06"
  },
  {
    "url": "ace/snippets/praat.js",
    "revision": "8988188c0d1cf5c5fa29da4a4f876eb9"
  },
  {
    "url": "ace/snippets/prolog.js",
    "revision": "b77c7c481c114fbdd5f6deabb2ad4f41"
  },
  {
    "url": "ace/snippets/properties.js",
    "revision": "196000116bdab7aefcf38ad3eaca1bca"
  },
  {
    "url": "ace/snippets/protobuf.js",
    "revision": "6eaa70a35237caf7ac6f0724486d76d6"
  },
  {
    "url": "ace/snippets/puppet.js",
    "revision": "418b2ca80fc63c2a80c588cf21ab4913"
  },
  {
    "url": "ace/snippets/python.js",
    "revision": "7ed27d2b96f4179044a0b3e9a452768f"
  },
  {
    "url": "ace/snippets/r.js",
    "revision": "89b572c3ebb0e67295f59a649ff90856"
  },
  {
    "url": "ace/snippets/razor.js",
    "revision": "f766a3f36c9ed43057ce52c871e1ac80"
  },
  {
    "url": "ace/snippets/rdoc.js",
    "revision": "f0ac694325d7d62f78622832282d0311"
  },
  {
    "url": "ace/snippets/red.js",
    "revision": "a49c5fdc89f9f9acfe43412406a3a30f"
  },
  {
    "url": "ace/snippets/redshift.js",
    "revision": "785e9b248cf05e021180dfa8404660ed"
  },
  {
    "url": "ace/snippets/rhtml.js",
    "revision": "e2051f2176aa253f18931d72a4c25c87"
  },
  {
    "url": "ace/snippets/rst.js",
    "revision": "dde6c2baebefc3088de9604dbab893be"
  },
  {
    "url": "ace/snippets/ruby.js",
    "revision": "d576053a0acb9119d1703b36607ce59c"
  },
  {
    "url": "ace/snippets/rust.js",
    "revision": "9a4068fcf5353ccc5a278b7dc70d0736"
  },
  {
    "url": "ace/snippets/sass.js",
    "revision": "fca1a3009e1103e5282f04e4a1cab9c9"
  },
  {
    "url": "ace/snippets/scad.js",
    "revision": "30987e40cc750e03ec10ea961a7b8248"
  },
  {
    "url": "ace/snippets/scala.js",
    "revision": "fedccba8f268038fcd23b1abbdb36916"
  },
  {
    "url": "ace/snippets/scheme.js",
    "revision": "a471832e0bc7dffb2e8748678d4e724c"
  },
  {
    "url": "ace/snippets/scss.js",
    "revision": "13e42a7018730c9c925c22eb8aa3bee0"
  },
  {
    "url": "ace/snippets/sh.js",
    "revision": "477cb246c93ea54229734980aaa9359e"
  },
  {
    "url": "ace/snippets/sjs.js",
    "revision": "2149260c3e590f89e294e920dda637d8"
  },
  {
    "url": "ace/snippets/slim.js",
    "revision": "e9edf657d6adbd81d0de618d4b024fbc"
  },
  {
    "url": "ace/snippets/smarty.js",
    "revision": "e3cf00aded5e1c7c1853fec506bb551a"
  },
  {
    "url": "ace/snippets/snippets.js",
    "revision": "2162ac8d9c6ee3a78ccf2e19409da2ab"
  },
  {
    "url": "ace/snippets/soy_template.js",
    "revision": "b332e5d0a9995992c4d791319ac9c7e2"
  },
  {
    "url": "ace/snippets/space.js",
    "revision": "8ab4ae68b919154bbbcb975ae441975e"
  },
  {
    "url": "ace/snippets/sparql.js",
    "revision": "b1ac26b021bfe1872cd5bbdf429a1b1f"
  },
  {
    "url": "ace/snippets/sql.js",
    "revision": "e58f6cc02549feab282d22f44086d6dd"
  },
  {
    "url": "ace/snippets/sqlserver.js",
    "revision": "3a114419a88eeb27b63e1e9ca57ce44a"
  },
  {
    "url": "ace/snippets/stylus.js",
    "revision": "3ee67ff29112def84465dff1202d86b2"
  },
  {
    "url": "ace/snippets/svg.js",
    "revision": "827316a10d4a8eadaaea4d9a8c8b82bb"
  },
  {
    "url": "ace/snippets/swift.js",
    "revision": "7f0797e336cb26bea30f9fa2db556813"
  },
  {
    "url": "ace/snippets/tcl.js",
    "revision": "e4975ff04b0fffe26ef77277e479bb4f"
  },
  {
    "url": "ace/snippets/terraform.js",
    "revision": "9e63239062922ead05177fc8437783a7"
  },
  {
    "url": "ace/snippets/tex.js",
    "revision": "b4cc4921094025dc76ee27ac91d67905"
  },
  {
    "url": "ace/snippets/text.js",
    "revision": "019489990d7def277af335906a90b043"
  },
  {
    "url": "ace/snippets/textile.js",
    "revision": "934b08f8bec207e8c16981fcca423cce"
  },
  {
    "url": "ace/snippets/toml.js",
    "revision": "b621cc88f15a1d8e655cb1c26b10b5fe"
  },
  {
    "url": "ace/snippets/tsx.js",
    "revision": "e879bc48fa22a9c5af486fb80a673558"
  },
  {
    "url": "ace/snippets/turtle.js",
    "revision": "46ce513fab65e901469175763136170d"
  },
  {
    "url": "ace/snippets/twig.js",
    "revision": "a1e1f9aaaef686ecd5583467f2c8529b"
  },
  {
    "url": "ace/snippets/typescript.js",
    "revision": "002bc42b87b83081f921d53d05c261e1"
  },
  {
    "url": "ace/snippets/vala.js",
    "revision": "8d0db09f1d9ced0ba2ee9fc02661f2b2"
  },
  {
    "url": "ace/snippets/vbscript.js",
    "revision": "861e1ad40d62fffdcc0f871e8c331650"
  },
  {
    "url": "ace/snippets/velocity.js",
    "revision": "af755bcfaed69ae33fe0c60b362f8628"
  },
  {
    "url": "ace/snippets/verilog.js",
    "revision": "5427c4df1a992b351c4061fe285131c9"
  },
  {
    "url": "ace/snippets/vhdl.js",
    "revision": "96dcf49bf8cdc6585ef552b5b82256ce"
  },
  {
    "url": "ace/snippets/visualforce.js",
    "revision": "b3fc1c0d54e3741a2e73963fea18beaa"
  },
  {
    "url": "ace/snippets/wollok.js",
    "revision": "a4d7f630b4d2b2c58e2840c9463891f2"
  },
  {
    "url": "ace/snippets/xml.js",
    "revision": "60cdb0cdb9622a6ae50c8f5800f56ba0"
  },
  {
    "url": "ace/snippets/xquery.js",
    "revision": "1ba36252686cbf95b2eadde24a061acf"
  },
  {
    "url": "ace/snippets/yaml.js",
    "revision": "ed07857c49af916da2c55f26fa9c666d"
  },
  {
    "url": "ace/snippets/zeek.js",
    "revision": "af18248faf25c7e96f19ca2d910af594"
  },
  {
    "url": "ace/theme-ambiance.js",
    "revision": "042d4668efd06f2bcf3f2ad07cbcda83"
  },
  {
    "url": "ace/theme-chaos.js",
    "revision": "2b7d5ec2d97564336164096887260e16"
  },
  {
    "url": "ace/theme-chrome.js",
    "revision": "52a070e8c00b6a9ef1137c1d7f9ecd97"
  },
  {
    "url": "ace/theme-clouds_midnight.js",
    "revision": "f1ce0ca51fcbd3ec9e47c0bc74aced39"
  },
  {
    "url": "ace/theme-clouds.js",
    "revision": "75d68f98f81d9fd92bb6a951dad8d465"
  },
  {
    "url": "ace/theme-cobalt.js",
    "revision": "1fc885e6faf8a36dd6d29e39761cbd5a"
  },
  {
    "url": "ace/theme-crimson_editor.js",
    "revision": "911ec6920c96ceaddefb6ea3da046f07"
  },
  {
    "url": "ace/theme-dawn.js",
    "revision": "718f06865ae6c52ea86d58d109922f01"
  },
  {
    "url": "ace/theme-dracula.js",
    "revision": "d4cd83251fa105c125191910aaed0300"
  },
  {
    "url": "ace/theme-dreamweaver.js",
    "revision": "93d6770bb7789edf32665e3ceeb20b8c"
  },
  {
    "url": "ace/theme-eclipse.js",
    "revision": "2a546004f61ae167c4e9c5fc3fafb522"
  },
  {
    "url": "ace/theme-github.js",
    "revision": "90a4d228cfeea5e5f8dd96f0a0ff138e"
  },
  {
    "url": "ace/theme-gob.js",
    "revision": "98adfb0e6de1309dc4fccc43167bd6f2"
  },
  {
    "url": "ace/theme-gruvbox.js",
    "revision": "1c276e336996ea07f3abd1df48d8ee37"
  },
  {
    "url": "ace/theme-idle_fingers.js",
    "revision": "ed6aff91cae6bff7b47ebeea5e5a8a5e"
  },
  {
    "url": "ace/theme-iplastic.js",
    "revision": "c7a831b1e1fd7f1280db48af9ddb0a9a"
  },
  {
    "url": "ace/theme-katzenmilch.js",
    "revision": "28059cb711e52225d04c45707a214eca"
  },
  {
    "url": "ace/theme-kr_theme.js",
    "revision": "35b142b2ed7e122864e44a2d1d5fb28d"
  },
  {
    "url": "ace/theme-kuroir.js",
    "revision": "5e7d6ad224fc6f9c54fabab5cfb64127"
  },
  {
    "url": "ace/theme-merbivore_soft.js",
    "revision": "8687930b3057f3b023b29dacbcfb3bf7"
  },
  {
    "url": "ace/theme-merbivore.js",
    "revision": "3f1b3f641fe44a3ba5736eb1e85b381f"
  },
  {
    "url": "ace/theme-mono_industrial.js",
    "revision": "09ee03e5f7221f938037fce51ab901bf"
  },
  {
    "url": "ace/theme-monokai.js",
    "revision": "41b1975e9f7aa8bb8526273ff15487b0"
  },
  {
    "url": "ace/theme-pastel_on_dark.js",
    "revision": "911978350ce81283f241ea507dfadee6"
  },
  {
    "url": "ace/theme-solarized_dark.js",
    "revision": "06f0522377bc0d70432b087bd37ffdf6"
  },
  {
    "url": "ace/theme-solarized_light.js",
    "revision": "e5f391ed15940217eea430074be6f6e5"
  },
  {
    "url": "ace/theme-sqlserver.js",
    "revision": "b6da2f6443d9ee1d11f1e7ca993ae6e8"
  },
  {
    "url": "ace/theme-terminal.js",
    "revision": "f0c14f739bc70195ff1f59b545f457e5"
  },
  {
    "url": "ace/theme-textmate.js",
    "revision": "4e69856949c082d482040ec5dd01d3e4"
  },
  {
    "url": "ace/theme-tomorrow_night_blue.js",
    "revision": "a8c476da88a902d575cd0d30ce003e14"
  },
  {
    "url": "ace/theme-tomorrow_night_bright.js",
    "revision": "be04b6cdb50218c5395f7d4a93825f8d"
  },
  {
    "url": "ace/theme-tomorrow_night_eighties.js",
    "revision": "cb3cb76805e3875ba55e80887fd2a52d"
  },
  {
    "url": "ace/theme-tomorrow_night.js",
    "revision": "394e41e3d90f9d8b65f868f782b51d07"
  },
  {
    "url": "ace/theme-tomorrow.js",
    "revision": "3332a98e54c631b155b3bdfd48944088"
  },
  {
    "url": "ace/theme-twilight.js",
    "revision": "29a7d32ee5acd0711cbcfff66777fb82"
  },
  {
    "url": "ace/theme-vibrant_ink.js",
    "revision": "992d12460a13aad4f32e5cbd7f8c8452"
  },
  {
    "url": "ace/theme-xcode.js",
    "revision": "e31e757281e4732028802c79d13eb606"
  },
  {
    "url": "ace/worker-coffee.js",
    "revision": "b44eded475db260ef45e33267e92bd09"
  },
  {
    "url": "ace/worker-css.js",
    "revision": "e8d5929fe1090d491a7c5ca5cb5c2769"
  },
  {
    "url": "ace/worker-html.js",
    "revision": "01039d705a2dcac680942254b48b26e1"
  },
  {
    "url": "ace/worker-javascript.js",
    "revision": "466ceb13bb7497f79b8bc765eb64f1ca"
  },
  {
    "url": "ace/worker-json.js",
    "revision": "2b1b59d665838b9a2ee1645cf1ed925d"
  },
  {
    "url": "ace/worker-lua.js",
    "revision": "1acd124c9b1d25f2e1ab313fd9454538"
  },
  {
    "url": "ace/worker-php.js",
    "revision": "2f84fca218793dbcdabb176f6e2477ae"
  },
  {
    "url": "ace/worker-xml.js",
    "revision": "c0a4ae945b69f0eda8979e15a8214c37"
  },
  {
    "url": "ace/worker-xquery.js",
    "revision": "0a3a345098d1b20a7b3db363dd8dc191"
  },
  {
    "url": "index.html",
    "revision": "98e0a5d88722cfaa203eaea44dc63ea6"
  },
  {
    "url": "katex.3a6221a8.js",
    "revision": "f67fc50e3bf6be0964198d6ad7cba2ae"
  },
  {
    "url": "logo_192.6ebe038d.png",
    "revision": "992230716b9b0294d854f6275b51b44a"
  },
  {
    "url": "logo_512.1ce9d7aa.png",
    "revision": "85f885dd9759a72b125b7c8112298a74"
  },
  {
    "url": "logo.e2d62a59.png",
    "revision": "2fdc8d1a0b5d06efad5f111be66fd367"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "7c90ce37b97e73a031c4aa87eb4b0b63"
  },
  {
    "url": "roboto-mono-v5-cyrillic-ext-regular.096de2e9.svg",
    "revision": "96a9bbe5d32f7fe96e844bcbf7b4e05d"
  },
  {
    "url": "roboto-mono-v5-cyrillic-regular.096de2e9.svg",
    "revision": "96a9bbe5d32f7fe96e844bcbf7b4e05d"
  },
  {
    "url": "roboto-mono-v5-greek-ext-regular.096de2e9.svg",
    "revision": "96a9bbe5d32f7fe96e844bcbf7b4e05d"
  },
  {
    "url": "roboto-mono-v5-greek-regular.096de2e9.svg",
    "revision": "96a9bbe5d32f7fe96e844bcbf7b4e05d"
  },
  {
    "url": "roboto-mono-v5-latin-ext-regular.096de2e9.svg",
    "revision": "96a9bbe5d32f7fe96e844bcbf7b4e05d"
  },
  {
    "url": "roboto-mono-v5-latin-regular.096de2e9.svg",
    "revision": "96a9bbe5d32f7fe96e844bcbf7b4e05d"
  },
  {
    "url": "roboto-mono-v5-vietnamese-regular.096de2e9.svg",
    "revision": "96a9bbe5d32f7fe96e844bcbf7b4e05d"
  },
  {
    "url": "roboto-v18-cyrillic-ext-regular.ab9033c4.svg",
    "revision": "8681f434273fd6a267b1a16a035c5f79"
  },
  {
    "url": "roboto-v18-cyrillic-regular.ab9033c4.svg",
    "revision": "8681f434273fd6a267b1a16a035c5f79"
  },
  {
    "url": "roboto-v18-greek-ext-regular.ab9033c4.svg",
    "revision": "8681f434273fd6a267b1a16a035c5f79"
  },
  {
    "url": "roboto-v18-greek-regular.ab9033c4.svg",
    "revision": "8681f434273fd6a267b1a16a035c5f79"
  },
  {
    "url": "roboto-v18-latin-ext-regular.ab9033c4.svg",
    "revision": "8681f434273fd6a267b1a16a035c5f79"
  },
  {
    "url": "roboto-v18-latin-regular.ab9033c4.svg",
    "revision": "8681f434273fd6a267b1a16a035c5f79"
  },
  {
    "url": "roboto-v18-vietnamese-regular.ab9033c4.svg",
    "revision": "8681f434273fd6a267b1a16a035c5f79"
  },
  {
    "url": "src.4dba5898.js",
    "revision": "fa6f25513d410d48609538af8948b5dd"
  }
]);
