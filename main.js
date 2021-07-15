javascript: (
    function () {
        let today = new Date();
        let title = document.title;
        let url = document.location.href;
        let note = `(参照 ${today.getFullYear()}-${('0' + (today.getMonth() + 1)).slice(-2)}-${('0' + today.getDate()).slice(-2)})`;
        let bib = `@URL{label,\n  title={${title}},\n  author={},\n  note="\\url{${url}}  ${note}"\n}`;

        execCopy(bib);
        alert("クリップボードにコピーしました。");
        return;

        function execCopy(string) {
            var tmp = document.createElement("div");
            var pre = document.createElement('pre');
            pre.style.webkitUserSelect = 'auto';
            pre.style.userSelect = 'auto';
            tmp.appendChild(pre).textContent = string;
            var s = tmp.style;
            s.position = 'fixed';
            s.right = '200%';
            document.body.appendChild(tmp);
            document.getSelection().selectAllChildren(tmp);
            var result = document.execCommand("copy");
            document.body.removeChild(tmp);
            return result;
        }

    }
)();