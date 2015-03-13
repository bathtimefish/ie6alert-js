この小さなJavaScript APIを埋め込んだWebサイトは、Internet Explorer 6でアクセスされた場合、サイトが正常に表示されない旨の注意書きを表示するようになります。
Internet Explorer 6に対応しないWebサイトを作成した場合に親切な対応かもしれません。

このAPIの使い方はとても簡単です。
作成したWebサイトのheader要素内に以下のように記述してください。

```
  <script type="text/javascript" src="http://ie6alert-js.googlecode.com/hg/ie6alert.min.js"></script>
  <script type="text/javascript">
    ie6Alert();
  </script>
```


Internet Explorer 6についてのアンケートを行っています。
よろしければこちらにもご回答ください。

https://spreadsheets.google.com/viewform?formkey=dG9Da3RWY1RETHA0akZjT0pSUzVWZHc6MQ

アンケートの結果は一般公開されます。Google Spreadsheetで閲覧できます。

https://spreadsheets.google.com/spreadsheet/pub?hl=ja&hl=ja&key=0Astc5jwRqTChdG9Da3RWY1RETHA0akZjT0pSUzVWZHc&output=html