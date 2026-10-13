Zadanie 1
2048 - odpala gre 2048
today - ciekawostki z danego dnia w różnych rocznikach wikipediaesque
morse - konwertuje wiadomość na alfabet morse'a 

Zadanie 2 
żądanie             metoda              ścieżka             kod                     3 nagłówki
info.cern.ch        GET                                     200 OK                  Content-Type: text/html - zwraca jaki typ dokumentu otrzymano, Server: Apache - przez jaki serwer obslugiwana jest strona, Connection: close - połączenie sieciowe zostaje zamknięte po otrzymaniu odpowiedzi
github.com          HEAD                                    301 Moved Permanently   Content-Length: 0 - brak treści w odpowiedzi, Location: https://github.com/ - pod jaki adres należy wyslać curla
nie-ma-takiej       HEAD               /nie-ma-takie        404 Not Found           Server: Apache, Connection: close - j.w., Date: Tue, 13 Oct 2026 08:42:53 GMT - data wygenerowania wiadomości

Zadanie 3 
pomiar                      info.cern.ch                spacejam.com/1996               onet.pl
liczba żądań                2                           15                              124
przesłane dane (kB)         2.25 kB                     344 B                           987.21 kB
czas ładowania              200 ms                      430 ms                          743 ms
elementy DOM                16                          119                             1510
najcięższy plik (typ)       vnd.microsoft.icon          html                            js