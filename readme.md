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
    - Fisso le costanti che avranno come valore il numero generato in modo randomico sia per il user che per la CPU
    - Creo un controllo per stabilire chi ha vinto

    **SE** Il numero generato dal utente è maggiore di quello della CPU

        - Stampo nel 'Hai vinto'
        
    **SE** Il numero generato è maggiore quello della CPu rispetto a quello dell'utente

        - Stampo 'Ha vinto la CPU'
    
    **ALTRIMENTI** Se i valori sono uguali
    
        - Stampo 'Pareggio'
