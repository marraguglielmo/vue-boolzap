# Vue Boolzapp

#### Milestone 1

Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

#### Milestone 2

Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato

#### Milestone 3

Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

#### Milestone 4

Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

## Svolgimento

1. con un ciclo `v-for` stampo i contatti con i nomi e le immagini
2. inizializzo la proprietà `contactIdActive = 0`
3. nel ciclo, oltre all'elemento prendo anche l'indice. Ad ogni click sul contatto, **contactIdActive** prenderà il valore dell'indice del contatto cliccato, mostrandomi i messaggi di quell'oggetto, insieme all'immagine del contatto
4. al click del tasto enter scateno una funzione che controlla la lunghezza del testo inserito, se è ` maggiore di 0` do il valore dell'input a `message` e pusho l'oggetto contenente il nuomo messaggio nell'array `messages`
5. al click dell'enter aggiungo una funzione che con un `setTimeout` fa comparire un messaggio ricevuto dopo 1 secondo dall'invio del nostro messaggio
6. per stampare la data del messaggio creo una funzione che utilizza `luxon`, formatto la data e con un `setInterval` creo un orologio. la funzione restituisce una proprietà, che verrà stampata in `date`, facendola comparire nel messaggio
