<!doctype html>
<html lang="pt">
<head>

  <title>SACOSTEJO</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="stylesheets/screen.css" media="screen, projection" rel="stylesheet" type="text/css" />
  <link href="stylesheets/print.css" media="print" rel="stylesheet" type="text/css" />
  <!--[if IE]>
      <link href="stylesheets/ie.css" media="screen, projection" rel="stylesheet" type="text/css" />
  <![endif]-->
  <base href="/">
</head>
<body>

    <header ui-view="header"></header>

    <div ui-view="body" class="container"></div>

    <footer ui-view="footer"></footer>

<script src="lib/requirejs/require.js" data-main="js/main.js"></script>
</body>
</html>
