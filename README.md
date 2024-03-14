# Vue Boolzapp

## Svolgimento

1. con un ciclo `v-for` stampo i contatti con i nomi e le immagini
2. inizializzo la proprietà `contactIdActive = 0`
3. nel ciclo, oltre all'elemento prendo anche l'indice. Ad ogni click sul contatto, **contactIdActive** prenderà il valore dell'indice del contatto cliccato, mostrandomi i messaggi di quell'oggetto, insieme all'immagine del contatto
4. al click del tasto enter scateno una funzione che controlla la lunghezza del testo inserito, se è ` maggiore di 0` do il valore dell'input a `message` e pusho l'oggetto contenente il nuomo messaggio nell'array `messages`
