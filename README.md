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
    
    * styles - kompiluje pliki .sass znajdujące się w folderze sass do plików css (folder css) oraz automatycznie dodaje prefixy. Aktualnie odpalamy po każdej zmianie w sassach, którą chcielibyśmy zobaczyć na stronie.
