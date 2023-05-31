# Check EMAIL

- Inventiamo una lista di email a nostro piacimento
- Chiediamo all'utente una mail (con un prompt)
- controlliamo che la mail inserita sia presente nella lista
- se è presente, gli diamo il benvenuto.
- altrimenti gli diciamo che non può accedere.

### Procedimento

- Prendiamo gli elementi dal dom
    - Prendiamo la stringa proveniente dal input email
- Creiamo una lista di email dentro un array
    - creo una costante che abbia come valore la lista
- Creiamo un ciclo che controlli dentro la nostra lista array se le mail inserita dal utente è già presente
    
    **SE** è presente:
    - Stampo un errore es. "mail giò esistente"
    
    **ALTRIMENTI** la aggiungo alla lista
    - Stampo un messaggio di benvenuto


<br>
<br>
<br>
<br>

# Gioco dei Dadi

- Raccolgo gli elementi da DOM
- Creo un bottone che al click dovrà effettuare du cicli
    - Fisso la costante aray vuota da appoggio dove salverò i due risultati generati dai cicli
    - Creo il primo ciclo per l'utente
        - Fisso la costante alla quale assegnerò il numero generato in modo random da 1 a 6
        - Pusho il valore della costate nella mia lista aray creata in precedenza
        - Stampo sul DOM il risultato
    - Fisso una costante di appoggio vuota dove salverà il numero generato
    - Creo il ciclo per la CPU
        - Assefno il numero generato randomicamente alla costante di appoggio
        - Creo un controllo

        **SE** il numero generato è uguale a quello che sta dentro la mia lista aray 
            - stampo in console 'Esiste già'

        **ALTRIMENTI** pusho il valore nella lista aray
    - Stampo nel DOM il valore generato
    - Creo un controllo:

    **SE** Il numero generato dal utente è maggiore di quello della CPU
        - Stampo nel 'Hai vinto'
        
    **ALTRIMENTI** stampo nel DOM 'ha vinto la cpu'
