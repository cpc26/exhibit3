/**
 * @author David Huynh
 * @author <a href="mailto:ryanlee@zepheira.com">Ryan Lee</a>
 * @fileOverview Exhibit definition and bootstrapping.
 */

/**
 * @namespace The base namespace for Exhibit.
 */
var Exhibit = {
    /**
     * The version number for Exhibit.
     * @constant
     */
    version: "3.0.0",

    /**
     * The XML namespace for Exhibit.
     * @constant
     */
    namespace: "http://simile.mit.edu/2006/11/exhibit#",

    /**
     * Whether Exhibit has been loaded yet.
     */
    loaded: false,

    /**
     * Scripts Exhibit will load.
     */
    scripts: [
        "lib/jquery.js",
        "lib/json2.js",
        "lib/amplify.store.js",
        "lib/history.adapter.jquery.js",
        "lib/history.js",
        "lib/history.html4.js",
        "lib/base64.js",
        "scripts/registry.js",
        "scripts/util/util.js",
        "scripts/util/debug.js",
        "scripts/util/html.js",
        "scripts/util/set.js",
        "scripts/util/date-time.js",
        "scripts/util/units.js",
        "scripts/util/persistence.js",
        "scripts/util/history.js",
        "scripts/util/bookmark.js",
        "scripts/util/localization.js",
        "scripts/data/database.js",
        "scripts/data/database/local.js",
        "scripts/data/database/type.js",
        "scripts/data/database/property.js",
        "scripts/data/database/range-index.js",
        "scripts/data/collection.js",
        "scripts/data/expression.js",
        "scripts/data/expression/collection.js",
        "scripts/data/expression/path.js",
        "scripts/data/expression/constant.js",
        "scripts/data/expression/operator.js",
        "scripts/data/expression/function-call.js",
        "scripts/data/expression/control-call.js",
        "scripts/data/expression/functions.js",
        "scripts/data/expression/controls.js",
        "scripts/data/expression-parser.js",
        "scripts/data/exporter.js",
        "scripts/data/exporters/bibtex.js",
        "scripts/data/exporters/tsv.js",
        "scripts/data/exporters/rdf-xml.js",
        "scripts/data/exporters/semantic-wikitext.js",
        "scripts/data/importer.js",
        "scripts/data/importers/json.js",
        "scripts/ui/ui.js",
        "scripts/ui/ui-context.js"
    ]
};

/**
 * LABjs :: Loading And Blocking JavaScript v1.2.0
 * See lib/LAB.min.js
 */
(function(p){var q="string",w="head",L="body",M="script",u="readyState",j="preloaddone",x="loadtrigger",N="srcuri",E="preload",Z="complete",y="done",z="which",O="preserve",F="onreadystatechange",ba="onload",P="hasOwnProperty",bb="script/cache",Q="[object ",bw=Q+"Function]",bx=Q+"Array]",e=null,h=true,i=false,k=p.document,bc=p.location,bd=p.ActiveXObject,A=p.setTimeout,be=p.clearTimeout,R=function(a){return k.getElementsByTagName(a)},S=Object.prototype.toString,G=function(){},r={},T={},bf=/^[^?#]*\//.exec(bc.href)[0],bg=/^\w+\:\/\/\/?[^\/]+/.exec(bf)[0],by=R(M),bh=p.opera&&S.call(p.opera)==Q+"Opera]",bi=("MozAppearance"in k.documentElement.style),bj=(k.createElement(M).async===true),v={cache:!(bi||bh),order:bi||bh||bj,xhr:h,dupe:h,base:"",which:w};v[O]=i;v[E]=h;r[w]=k.head||R(w);r[L]=R(L);function B(a){return S.call(a)===bw}function U(a,b){var c=/^\w+\:\/\//,d;if(typeof a!=q)a="";if(typeof b!=q)b="";d=((/^\/\//.test(a))?bc.protocol:"")+a;d=(c.test(d)?"":b)+d;return((c.test(d)?"":(d.charAt(0)==="/"?bg:bf))+d)}function bz(a){return(U(a).indexOf(bg)===0)}function bA(a){var b,c=-1;while(b=by[++c]){if(typeof b.src==q&&a===U(b.src)&&b.type!==bb)return h}return i}function H(t,l){t=!(!t);if(l==e)l=v;var bk=i,C=t&&l[E],bl=C&&l.cache,I=C&&l.order,bm=C&&l.xhr,bB=l[O],bC=l.which,bD=l.base,bn=G,J=i,D,s=h,m={},K=[],V=e;C=bl||bm||I;function bo(a,b){if((a[u]&&a[u]!==Z&&a[u]!=="loaded")||b[y]){return i}a[ba]=a[F]=e;return h}function W(a,b,c){c=!(!c);if(!c&&!(bo(a,b)))return;b[y]=h;for(var d in m){if(m[P](d)&&!(m[d][y]))return}bk=h;bn()}function bp(a){if(B(a[x])){a[x]();a[x]=e}}function bE(a,b){if(!bo(a,b))return;b[j]=h;A(function(){r[b[z]].removeChild(a);bp(b)},0)}function bF(a,b){if(a[u]===4){a[F]=G;b[j]=h;A(function(){bp(b)},0)}}function X(b,c,d,g,f,n){var o=b[z];A(function(){if("item"in r[o]){if(!r[o][0]){A(arguments.callee,25);return}r[o]=r[o][0]}var a=k.createElement(M);if(typeof d==q)a.type=d;if(typeof g==q)a.charset=g;if(B(f)){a[ba]=a[F]=function(){f(a,b)};a.src=c;if(bj){a.async=i}}r[o].insertBefore(a,(o===w?r[o].firstChild:e));if(typeof n==q){a.text=n;W(a,b,h)}},0)}function bq(a,b,c,d){T[a[N]]=h;X(a,b,c,d,W)}function br(a,b,c,d){var g=arguments;if(s&&a[j]==e){a[j]=i;X(a,b,bb,d,bE)}else if(!s&&a[j]!=e&&!a[j]){a[x]=function(){br.apply(e,g)}}else if(!s){bq.apply(e,g)}}function bs(a,b,c,d){var g=arguments,f;if(s&&a[j]==e){a[j]=i;f=a.xhr=(bd?new bd("Microsoft.XMLHTTP"):new p.XMLHttpRequest());f[F]=function(){bF(f,a)};f.open("GET",b);f.send("")}else if(!s&&a[j]!=e&&!a[j]){a[x]=function(){bs.apply(e,g)}}else if(!s){T[a[N]]=h;X(a,b,c,d,e,a.xhr.responseText);a.xhr=e}}function bt(a){if(typeof a=="undefined"||!a)return;if(a.allowDup==e)a.allowDup=l.dupe;var b=a.src,c=a.type,d=a.charset,g=a.allowDup,f=U(b,bD),n,o=bz(f);if(typeof d!=q)d=e;g=!(!g);if(!g&&((T[f]!=e)||(s&&m[f])||bA(f))){if(m[f]!=e&&m[f][j]&&!m[f][y]&&o){W(e,m[f],h)}return}if(m[f]==e)m[f]={};n=m[f];if(n[z]==e)n[z]=bC;n[y]=i;n[N]=f;J=h;if(!I&&bm&&o)bs(n,f,c,d);else if(!I&&bl)br(n,f,c,d);else bq(n,f,c,d)}function Y(a){if(t&&!I)K.push(a);if(!t||C)a()}function bu(a){var b=[],c;for(c=-1;++c<a.length;){if(S.call(a[c])===bx)b=b.concat(bu(a[c]));else b[b.length]=a[c]}return b}D={script:function(){be(V);var a=bu(arguments),b=D,c;if(bB){for(c=-1;++c<a.length;){if(B(a[c]))a[c]=a[c]();if(c===0){Y(function(){bt((typeof a[0]==q)?{src:a[0]}:a[0])})}else b=b.script(a[c]);b=b.wait()}}else{for(c=-1;++c<a.length;){if(B(a[c]))a[c]=a[c]()}Y(function(){for(c=-1;++c<a.length;){bt((typeof a[c]==q)?{src:a[c]}:a[c])}})}V=A(function(){s=i},5);return b},wait:function(a){be(V);s=i;if(!B(a))a=G;var b=H(t||J,l),c=b.trigger,d=function(){try{a()}catch(err){}c()};delete b.trigger;var g=function(){if(J&&!bk)bn=d;else d()};if(t&&!J)K.push(g);else Y(g);return b}};if(t){D.trigger=function(){var a,b=-1;while(a=K[++b])a();K=[]}}else D.trigger=G;return D}function bv(a){var b,c={},d={"UseCachePreload":"cache","UseLocalXHR":"xhr","UsePreloading":E,"AlwaysPreserveOrder":O,"AllowDuplicates":"dupe"},g={"AppendTo":z,"BasePath":"base"};for(b in d)g[b]=d[b];c.order=!(!v.order);for(b in g){if(g[P](b)&&v[g[b]]!=e)c[g[b]]=(a[b]!=e)?a[b]:v[g[b]]}for(b in d){if(d[P](b))c[d[b]]=!(!c[d[b]])}if(!c[E])c.cache=c.order=c.xhr=i;c.which=(c.which===w||c.which===L)?c.which:w;return c}p.$LAB={setGlobalDefaults:function(a){v=bv(a)},setOptions:function(a){return H(i,bv(a))},script:function(){return H().script.apply(e,arguments)},wait:function(){return H().wait.apply(e,arguments)}};(function(a,b,c){if(k[u]==e&&k[a]){k[u]="loading";k[a](b,c=function(){k.removeEventListener(b,c,i);k[u]=Z},i)}})("addEventListener","DOMContentLoaded")})(window);

/**
 * @static
 * @param {String} url
 * @param {Object} to
 * @param {Object} types
 * @returns {Object}
 */
Exhibit.parseURLParameters = function(url, to, types) {
    var q, param, parsed, params, decode, i, eq, name, old, replacement, type, data;
    to = to || {};
    types = types || {};

    if (typeof url === "undefined") {
        url = document.location.href;
    }

    q = url.indexOf("?");
    if (q < 0) {
        return to;
    }

    url = (url+"#").slice(q+1, url.indexOf("#")); // remove URL fragment
    params = url.split("&");
    parsed = {};
    decode = window.decodeURIComponent || unescape;
    for (i = 0; i < params.length; i++) {
        eq = param.indexOf("=");
        name = decode(param.slice(0, eq));
        old = parsed[name];
        replacement = decode(param.slice(eq+1));

        if (typeof old === "undefined") {
            old = [];
        } else if (!(old instanceof Array)) {
            old = [old];
        }
        parsed[name] = old.concat(replacement);
    }

    for (i in parsed) {
        if (parsed.hasOwnProperty(i)) {
            type = types[i] || String;
            data = parsed[i];
            if (!(data instanceof Array)) {
                data = [data];
            }
            if (type === Boolean && data[0] === "false") {
                to[i] = false;
            } else {
                to[i] = type.apply(this, data);
            }
        }
    }

    return to;
};

/**
 * Load all scripts associated with Exhibit.
 * 
 * @static
 * @param {Function} post [optional] A function to run after all scripts are
 *                                   loaded of the form function(lab), taking
 *                                   the $LAB LABjs object as an argument.
 */
Exhibit.load = function(post) {
    var i, scr = Exhibit.scripts, lab;

    lab = $LAB.setOptions({
        AlwaysPreserveOrder: true,
        UseLocalXHR: false,
        AllowDuplicates: false
    });

    for (i = 0; i < scr.length; i++) {
        // @@@ This is a hack.  Using the correct URL is part
        //     of the game, coming later.
        lab.script("../src/" + scr[i]);
    }

    // run all init functions
    /**
    $(document).ready(function() {
        Exhibit.Bookmark.init();
        Exhibit.History.init();
        $(document).trigger("registerComponents.exhibit");
    });

    $(document).bind("localeSet.exhibit", function(event, data) {
        lab.script(data[0]);
    });
    */

    if (typeof post === "function") {
        post(lab);
    }
};