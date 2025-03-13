//allActivitiesSorted, oneID, oneIDActivite, oneIDInvite,
// allActiviteByInvite, allActiviteByName, addNewFilm, addNewInvite, addNewActivite, updateFilmById, updateInviteById, updateActiviteById,
// } from './backend.mjs' ;

import { getAllMoviesDate } from "./backend.mjs";

try { const date_de_projection = await getAllMoviesDate();   
    console.log(date_de_projection); 
    } catch (e) { 
        console.error(e); 
    }

    /*try { const date_de_projection = await getAllActivitesDate();   
        console.log(date_de_projection); 
        } catch (e) { 
            console.error(e); 
        }*/
        
        
        /*try {
            const nom_prenom = await getAllParticipants();
            console.log(nom_prenom);
        } catch (e) {
            console.error(e);
        }*/
        
        /*try {
            const Onerecord = await getMovieById('8zw04543ils0i06');
            console.log(Onerecord);
        } catch (e) {
            console.error(e);
        }*/
        
        /*try {
            const Onerecord = await getActiviteById('785r260ciix64ye');
            console.log(Onerecord);
        } catch (e) {
            console.error(e);
        }*/
        
        /*try {
            const Onerecord = await getParticipantById('2487136j42g0mg7');
            console.log(Onerecord);
        } catch (e) {
            console.error(e);
        }*/
        
        /*try {
            const records = await allActiviteByInvite('a4ihc9z83990iov');
            console.table(records);
        } catch (e) {
            console.error(e);
            
        }*/
        
        /*try {
            const records = await allActiviteByName('Wachowski');
            console.log(records);
        } catch (e) {
            console.error(e);
        
        }*/
        
        
        /*try {
            const newMovie = {
                "titre": "I,robot",
                "synopsis": "Dans le futur, les humains sont ultra-dépendants de robots de pointe programmés à obéir et ne jamais faire de mal. Mais quand un scientifique est retrouvé mort, le principal suspect devient vite un robot humanoïde. Del Spooner (Will Smith) est chargé de l'enquête. Réalisé par Alex Proya, basé sur l'anthologie d'Isaac Asimov. Avec Bridget Moynahan, Bruce Greenwood, James Cromwell et Chi McBride."
                "bande_annonce": "https://youtu.be/PGuGA7vUEqw?si=hlGoahOWxIf00eOS",
                "langue": "Français",
                "production": "Fox",
                "date_de_projection": "2025-03-15 20:00:00",
                "duree": "1h 50min",
                "annee_de_sortie": "2004",
            };
        
            await addNewMovie(newMovie);
            
        } catch (e) {
            console.error(e);
        }*/
        
        
        /*try {
            const newInvite = {
                "nom_prenom": "Coulon Estelle",
                "biographie": "test",
                "activite": "0y5z3cynyo9f9o4",
            };
        
            await addNewInvite(newInvite);
        
        } catch (e) {
            console.error(e);
        }*/
        
        /*try {
            const newActivite = {
                "titre": "Concours cosplay",
                "date_de_projection": "2025-03-15 17:00:00",
            };
        
            await addNewActivite(newActivite);
        
        } catch (e) {
            console.error(e);
        }*/
        
        /*try {
            const data = {
                "titre": "Oblivion, le film",
            };
        
            await updateMovieById('8zw04543ils0i06', data);
        } catch (e) {
            console.error(e);
        }*/
        
        
        /*try {
            const data = {
                "nom_prenom": "Breuil Kilian",
            };
        
            await updateInviteById('2487136j42g0mg7', data);
        } catch (e) {
            console.error(e);
        }*/
        
        /*try {
            const data = {
                "titre": "jeu de rôle",
            };
        
            await updateActiviteById('19oj73022mx76zm', data);
        } catch (e) {
            console.error(e);
        }*/
