// MIT License
// Copyright (c) 2021 Zhenbo Li


function performSearchAgainstLogseq(keywords) {

    const logseqPagesPath = "/home/lizhenbo/src/logseq_notebook/pages";

    const notename = "Softmax.md";

    const filename = "file://" + logseqPagesPath + "/" + notename;

    // https://matrix.to/#/!CuzZVoCbeoDHsxMCVJ:mozilla.org/$3VUaYExfxqsx3NpqUJYoIiSAtKtkASelWASTTPSJCSw?via=mozilla.org&via=matrix.org&via=privacytools.io
    // https://stackoverflow.com/a/44516256/1166518
    /*
    let readFile = (_path) => {
        return new Promise((resolve, reject) => {
            fetch(_path, {mode:'same-origin'})
                .then(function(_res) {
                    return _res.blob();
                })
                .then(function(_blob) {
                    var reader = new FileReader();

                    reader.addEventListener("loadend", function() {
                        resolve(this.result);
                    });

                    reader.readAsText(_blob);
                })
                .catch(error => {
                    reject(error);
                });
        });
    };

    readFile.then(res => {
        console.log(res);
    });
*/


    return "<p>" + keywords + "</p>";
}




(function() {
    const fireSeqSearchDomId = "fireSeqSearchDom";

    document.body.style.border = "5px solid red";

    function getSearchParameterFromCurrentPagg() {
        return "linear";
    }


    function writeResult(searchResult) {
        console.log(searchResult);
    }

    /*

    function getSearchEngineResultBody() {
        //bing
        let bing =  document.getElementById("b_content");
        console.log(bing);
        return bing;
    }

    let contentDom = getSearchEngineResultBody();
*/


    function insertFireSeqDomToWebpage() {
        let div = document.createElement("div");
        div.innerHTML = "Paragraph changed!";
        div.setAttribute("id", "fireSeqSearchDom");
        // console.log(div);
        // console.log(contentDom.firstChild);

        document.body.insertBefore(div, document.body.firstChild);
        console.log("inserted");
        return div;
    }



    function getFireSeqDomToWebpage() {
        let fireDom = document.getElementById(fireSeqSearchDomId);
        if (fireDom == null) {
            fireDom = insertFireSeqDomToWebpage();
        }
        return fireDom;
    }

    let fireSeqDom = getFireSeqDomToWebpage();

    const searchParameter = getSearchParameterFromCurrentPagg();


    const searchResult = performSearchAgainstLogseq(searchParameter);


    fireSeqDom.innerHTML += searchResult;
    writeResult(searchResult);



    // browser.permissions.getAll().then((result) => {
    //     console.log(result.permissions); // [ "webRequest", "tabs" ]
    //     console.log(result.origins)      // [ "*://*.mozilla.org/*" ]
    // });
    // browser.permissions.getAll();

    //
    let port = browser.runtime.connectNative("fire_seq_search_server");
    console.log(port);
    // port.onMessage.addListener((response) => {
    //     console.log("Received: " + response);
    // });
    // port.postMessage("searchResult");

    document.body.style.border = "5px solid blue";
})();