# Prologg

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Licentie](#licentie)

## Beschrijving
<!-- Bij Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->

**Prologg is een startup die strijd tegen arbeidsuitbuiting. **
Dit project bestaat uit een statische website gericht op crowdfunding en klantenwerving en een web-app die gebruikt wordt in de praktijk door mensen die uitgebuit worden. 

De website is informatief, zakelijk en gericht op advocatenkantoren met als doel om een demo aan te vragen.

De web-app is functioneel, responsief en gericht op mensen die uitgebuit worden in het werkveld met als doel snel en gemakkelijk bewijslast te verzamelen voor een mogelijke rechtzaak.

[Live link - informatieve website](https://prologglaw.netlify.app/)

<img width="2278" height="4164" alt="screenshots" src="https://github.com/user-attachments/assets/405bf186-2682-4a70-a916-4550b571a145" />



## Gebruik
<!-- Bij Gebruik staat de user story, hoe het werkt en wat je er mee kan. -->

### Language toggle
Een van de hoofd functionaliteiten is de language toggle. Het is van belang dat de website voor zowel Nederlandstalige als buitenlandse advocaten en belangstelling hebbende goed te lezen valt. De taal van de website staat standaard in het Nederlands maar is met 1 druk op de knop om te zetten naar Engels. De knop staat altijd in de navigatie balk, op mobiel is die binnen het hamburger menu te vinden.

<img width="1479" height="78" alt="Screenshot 2026-10-27 at 11 45 57" src="https://github.com/user-attachments/assets/67f8f070-b558-4718-8eb2-fc0955cfd8b8" />
<img width="358" height="681" alt="Screenshot 2026-10-27 at 11 46 14" src="https://github.com/user-attachments/assets/e54e771f-18a8-4ce0-ba15-85e7ff6385ed" />



### Markdown & YAML
Het is van belang dat de website gemakkelijk te onderhouden is en content zonder al te veel technische kennis aan te passen is. 
Wij hebben ervoor gekozen om de beheerder de content te laten schrijven in Markdown. Deze content laden wij in de site met behulp van YAML.

De content staat in 1 bestand die opgedeeld is in de secties van de website. Wel is er nog een kopie van het bestand in het Engels om de Language toggle mogelijk te maken.
Als je besluit de content van de website aan te passen, vergeet dan niet ook het Engelstalige bestand aan te passen.

**Note:** Verander niet de namen van de secties, anders wordt de content niet meer ingeladen.


### Media features
Een andere functionaliteit die in de website staat is een darkmode. Hierbij gebruiken wij een media feature `@media (prefers-color-scheme: dark)` om mee te gaan met de behoeftes van de gebruiker.

Ook gebruiken wij de media feature `@media (prefers-reduced-motion: no-preference)` bij de animatie van de navigatiebar om te controleren of de gebruiker wel animaties wilt. En `@media (any-pointer: fine)` bij hover effect om te controleren of de gebruiker daadwerkelijk een hover effect heeft (hovers gaan anders aan op klik en dat willen wij niet).


## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? Misschien heb je iets met NodeJS gedaan, of heb je een framwork of library gebruikt? -->
Deze website werkt op Sveltekit, dit is een component based framework. Omdat deze website maar uit een pagina bestaat hebben wij er voor gekozen deze pagina met een static adapter te laten runnen. Dat wil zeggen dat de website vooraf al gegenereerd wordt en er dus geen Node.js nodig is om de HTML steeds te genereren.

## Installatie
<!-- Bij Instalatie staat hoe een andere developer aan jouw repo kan werken -->
Stap 1: **Fork de repo**
Stap 2: **Clone de code**
Stap 3: **npm install**
Stap 4: **npm run dev**


## Licentie
This project is licensed under the terms of the [MIT license](./LICENSE).

