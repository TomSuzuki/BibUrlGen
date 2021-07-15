# BibUrlGen
文献データベース（bib）用の情報コピーツール。  
`\usepackage{url}`が必要。  
`title`と`author`を分けるのが難しいので手動で頑張って。

## 使い方
クロームならブックマークマネージャーから新しいブックマークを追加、URL部分に以下を入力。名前はわかるようにてきとーに。
```
javascript:(function(){let%20today=new%20Date();let%20title=document.title;let%20url=document.location.href;let%20note=`(%E5%8F%82%E7%85%A7%20${today.getFullYear()}-${('0'+(today.getMonth()+1)).slice(-2)}-${('0'+today.getDate()).slice(-2)})`;let%20bib=`@URL{label,\n%20%20title={${title}},\n%20%20author={},\n%20%20note="\\url{${url}}%20${note}"\n}`;execCopy(bib);alert("%E3%82%AF%E3%83%AA%E3%83%83%E3%83%97%E3%83%9C%E3%83%BC%E3%83%89%E3%81%AB%E3%82%B3%E3%83%94%E3%83%BC%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82");return;function%20execCopy(string){var%20tmp=document.createElement("div");var%20pre=document.createElement('pre');pre.style.webkitUserSelect='auto';pre.style.userSelect='auto';tmp.appendChild(pre).textContent=string;var%20s=tmp.style;s.position='fixed';s.right='200%';document.body.appendChild(tmp);document.getSelection().selectAllChildren(tmp);var%20result=document.execCommand("copy");document.body.removeChild(tmp);return%20result;}})();
```

## 形式
```
@URL{label,
  title        = "{title}",
  author       = "{}",
  note         = "\url{http://www/} (参照 20xx-xx-xx)"
}
```
割と雑なのでいい感じに修正して使ってください。

## 参考にしたもの
- [JavaScriptでクリップボードに文字をコピーする(ブラウザ) - Qiita](https://qiita.com/simiraaaa/items/2e7478d72f365aa48356)
- [Website Tools：ブックマークレット変換（成形）](http://websitetools.biz-box.jp/js_bookmarklet.php)
