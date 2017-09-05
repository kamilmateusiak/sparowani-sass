# sparowani-sass

### Wymagania
    * zainstalowany node.js np. wersja 6.11.2 - https://nodejs.org/en/
    * globalnie zainstalowany gulp - możemy to zrobić wpisując w konsoli npm install gulp -g

### Podstawowe komendy
    * npm install - jeśli mamy w folderze plik package.json komenda zainstaluje wszystkie zdefiniowane tam paczki
    * npm install paczka - jeśli chcemy zainstalować dodatkową paczkę js
    * npm install paczka --save - instaluje paczkę z zapisuje w package.json informacje o niej (przykład - gulp)
### Gulp - taski
    Taski odpalamy za pomocą komendy gulp nazwa_taska.
    
    * concatCss - kompiluje pliki .sass znajdujące się w folderze sass do pliku main.css (folder dist/css) oraz automatycznie dodaje prefixy.
    * concatJs - kompiluje/łaczy pliki .js znajdujące się w folderze js do pliku main.js (folder dist/js)
    * clean - czyści zawartość folderu dist
    * watch - nasłuchuje na zmiany w plikach .js i .sass i odpala taski concatCss i concatJs
    * server - dostarcza nam lokalny serwer dostępny pod adresem localhost:5012 dysponujący funkcją autoodświeżania strony po zmianie w jakimkolwiek pliku, aby uruchomić wszystkie funkcjonalności należy zainstalowac dodatek 'livereload' w naszej przegladarce (http://livereload.com/extensions/)
