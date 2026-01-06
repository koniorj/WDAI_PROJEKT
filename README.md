# Sklep Internetowy – Dokumentacja
**Autorzy:**  
- Justyna Konior  
- Paweł Pochwalski  

Projekt przedstawia prosty sklep internetowy stworzony w React, z wykorzystaniem mock backendu oraz FakeStoreAPI. Aplikacja umożliwia przeglądanie produktów, rejestrację i logowanie użytkowników, zarządzanie koszykiem oraz historią zamówień.

## 1. Wykorzystane technologie

Build Tool: Vite

Frontend: React.js

UI: Material UI (MUI)

Routing: React Router DOM

Zarządzanie stanem: React Context API

Komunikacja z API: Axios

Źródło danych: FakeStoreAPI (https://fakestoreapi.com/)

Przechowywanie danych: localStorage (mock backend)

## 2. Architektura danych i backend (mock)

Dane użytkowników, sesji oraz koszyka przechowywane są w localStorage

Symulacja backendu („mock backend”) oparta o pliki JSON

Autoryzacja oparta o JWT + refresh token

localStorage pełni rolę uproszczonej bazy danych

## 3. Funkcjonalności

### Funkcjonalności – Paweł

#### System logowania
Obsługa uwierzytelniania użytkowników na podstawie danych zapisanych w localStorage oraz plikach JSON, generowanie tokenów sesji.

#### Autoryzacja (Security Guard)
Blokada możliwości zakupu dla użytkowników niezalogowanych (przekierowanie do strony logowania).

#### Historia zamówień
Widok umożliwiający użytkownikowi przegląd wcześniejszych zamówień powiązanych z kontem.

#### Szczegóły produktu
Dynamiczna strona produktu generowana na podstawie ID, prezentująca nazwę, opis, cenę oraz zdjęcie produktu.

### Funkcjonalności – Justyna

#### Rejestracja użytkownika
Tworzenie nowych kont z walidacją danych i zapisem do localStorage.

#### Wyszukiwanie i strona główna
Wyszukiwanie produktów w czasie rzeczywistym oraz layout strony głównej.

#### Koszyk
Zarządzanie produktami w koszyku (dodawanie, usuwanie, obliczanie łącznej ceny) z zapisem stanu w sesji.

#### System ocen
Możliwość dodawania opinii i komentarzy do produktów.

