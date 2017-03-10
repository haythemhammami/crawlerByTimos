var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs')

var o = [
   
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/quincaillerie-d-ameublement/roulement.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/quincaillerie-d-ameublement/patin.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/quincaillerie-d-ameublement/embout.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/quincaillerie-d-ameublement/support-roulant.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/quincaillerie-d-ameublement/serrure-de-meuble.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/quincaillerie-d-ameublement/verrou-d-armoire.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/quincaillerie-d-ameublement/targette-de-meuble.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/quincaillerie-d-ameublement/crochet-et-fermoir.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/quincaillerie-d-ameublement/loqueteau.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/quincaillerie-d-ameublement/charniere-et-pivot.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/quincaillerie-d-ameublement/paumelle.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/quincaillerie-d-ameublement/fiche-d-ameublement.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/quincaillerie-d-ameublement/coulisseau-et-compas.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/quincaillerie-d-ameublement/coulisse-de-tiroir.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/quincaillerie-d-ameublement/assemblage-d-ameublement.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/quincaillerie-d-ameublement/carton-de-demenagement.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/fixation/pitonnerie.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/fixation/crochet.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/fixation/cheville.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/fixation/clouterie.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/fixation/crampillon.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/fixation/visserie-1.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/fixation/tire-fond.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/fixation/boulonnerie.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/fixation/tiges-filetees.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/fixation/fixation-agrippante.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/cordage-chaine-et-signalisation/chaine.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/cordage-chaine-et-signalisation/accessoire-de-chaine.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/cordage-chaine-et-signalisation/cable.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/cordage-chaine-et-signalisation/accessoire-de-cable.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/cordage-chaine-et-signalisation/cordage.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/cordage-chaine-et-signalisation/accessoire-de-cordage.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/cordage-chaine-et-signalisation/ficelle.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/cordage-chaine-et-signalisation/sandow-et-accessoire.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/cordage-chaine-et-signalisation/sangle-et-accessoire.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/cordage-chaine-et-signalisation/corde-marine.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/cordage-chaine-et-signalisation/chaine-inox.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/cordage-chaine-et-signalisation/accessoire-de-chaine-inox.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/cordage-chaine-et-signalisation/balisage-1.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/cordage-chaine-et-signalisation/lettre-et-chiffre.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/cordage-chaine-et-signalisation/signaletique-et-panneau.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/cordage-chaine-et-signalisation/accessoire-mecanique.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/rangement-et-amenagement/equerre-et-console.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/rangement-et-amenagement/taquet.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/rangement-et-amenagement/cremaillere.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/rangement-et-amenagement/etagere-de-rangement.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/rangement-et-amenagement/armoire-de-rangement.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/rangement-et-amenagement/casier-a-bouteille-1.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/rangement-et-amenagement/accessoire-de-caves.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/rangement-et-amenagement/accessoire-fil-cuisine.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/rangement-et-amenagement/support-et-range-velo.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/rangement-et-amenagement/bac-et-coffre-de-rangement.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/rangement-et-amenagement/cantine.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/rangement-et-amenagement/boite-de-rangement-carton.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/rangement-et-amenagement/coffre-de-rangement-bois.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/rangement-et-amenagement/bloc-tiroir-bois-brut.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/amenagement-et-etendage/support-et-tringle-de-penderie.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/amenagement-et-etendage/cintre.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/amenagement-et-etendage/portant.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/amenagement-et-etendage/housse-vetement.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/amenagement-et-etendage/autre-accessoire-d-amenagement-placard.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/amenagement-et-etendage/sechoir.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/amenagement-et-etendage/corde-a-fil-et-a-linge.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/quincaillerie-3/amenagement-et-etendage/autre-accessoire-sechoir.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/outillage-electroportatif/tournevis-sans-fil.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/outillage-electroportatif/perceuse-visseuse-sans-fil.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/outillage-electroportatif/visseuse-electrique.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/outillage-electroportatif/perceusea-percussion.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/outillage-electroportatif/perforateur-burineur.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/outillage-electroportatif/meuleuse.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/outillage-electroportatif/ponceuse.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/outillage-electroportatif/scie-electrique.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/outillage-electroportatif/defonceuse.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/outillage-electroportatif/rabot-electrique.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/outillage-electroportatif/rainureuse-electrique.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/outillage-electroportatif/scie-multifonction.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/outillage-electroportatif/decapeur-thermique.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/outillage-electroportatif/decolleuse-papier-peint.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/outillage-electroportatif/pistolet-a-peinture.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/outillage-electroportatif/accessoire-pistolet-a-peinture.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/outillage-electroportatif/mini-outillage-electrique.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/outillage-electroportatif/accessoire-mini-outillage-electrique.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/outillage-electroportatif/batterie-et-accessoire.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/appareil-de-nettoyage/nettoyeur-haute-pression-electrique.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/appareil-de-nettoyage/nettoyeur-haute-pression-thermique.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/appareil-de-nettoyage/accessoires-nettoyeur-haute-pression.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/appareil-de-nettoyage/consommable-nettoyeur-haute-pression.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/appareil-de-nettoyage/aspirateur-sans-fil.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/appareil-de-nettoyage/aspirateur-eau-et-poussiere.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/appareil-de-nettoyage/accessoire-aspirateur-1.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/appareil-de-nettoyage/consommable-aspirateur.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/appareil-de-nettoyage/aspirateur-robot.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/appareil-de-nettoyage/nettoyeur-vapeur.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/appareil-de-nettoyage/laveur-de-vitre.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/appareil-de-nettoyage/accessoire-appareil-de-nettoyage.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/materiel-d-atelier-2/scie-a-onglet.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/materiel-d-atelier-2/scie-circulaire-de-table.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/materiel-d-atelier-2/scie-de-chantier.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/materiel-d-atelier-2/scie-a-ruban.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/materiel-d-atelier-2/scie-a-chantourner-1.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/materiel-d-atelier-2/tour-a-bois.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/materiel-d-atelier-2/touret.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/materiel-d-atelier-2/perceuse-sur-colonne.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/materiel-d-atelier-2/tronconneuse-a-metaux.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/materiel-d-atelier-2/compresseur.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/materiel-d-atelier-2/outil-accessoire-pneumatique.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/materiel-d-atelier-2/groupe-electrogene.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/materiel-d-atelier-2/accessoire-groupe-electrogene.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/materiel-d-atelier-2/soudure-1.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/consommable/foret.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/consommable/scie-trepan.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/consommable/foret-sds-burin.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/consommable/accessoire-perceuse.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/consommable/disque-pour-meuleuse-1.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/consommable/abrasif-machine.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/consommable/lame-scie-sauteuse.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/consommable/lame-scie-circulaire.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/consommable/autre-lame-scie-electrique.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/consommable/accessoire-rabot.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/consommable/abrasif-en-feuille.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/consommable/brosse.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/outillage-a-main/cle.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/outillage-a-main/cliquet-et-douille.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/outillage-a-main/pince.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/outillage-a-main/serre-joint.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/outillage-a-main/outil-de-decoupe.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/outillage-a-main/scie-et-accessoire.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/outillage-a-main/etau.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/outillage-a-main/travail-du-bois.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/outillage-a-main/martellerie.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/outillage-a-main/tournevis.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/outillage-a-main/embout.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/outillage-a-main/rabot.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/outillage-a-main/lime-rape.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/outillage-a-main/mesure-niveau.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/outillage-a-main/tracage.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/outillage-a-main/collage.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/outillage-a-main/agrafage.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/outillage-a-main/rivetage.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/outillage-a-main/coffret-a-outil.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/outillage-specifique/outillage-du-macon.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/outillage-specifique/outillage-du-carreleur.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/outillage-specifique/outillage-du-plombier.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/outillage-specifique/outillage-placoplatre-isolation.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/entretien-protection/lubrifiant-graissage.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/entretien-protection/protection.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/entretien-protection/accessoire-automobile.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/entretien-protection/chargeur-de-batterie.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/entretien-protection/cable-de-demarrage.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/entretien-protection/outil-de-levage.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/rangement-atelier-1/rangement-outil.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/rangement-atelier-1/etabli.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/rangement-atelier-1/diable-chariot.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/outillage/rangement-atelier-1/casier-a-vis.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/luminaire-decoration-1/luminaire-d-interieur/luminaire-a-poser.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/luminaire-decoration-1/luminaire-d-interieur/lampe-de-bureau.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/luminaire-decoration-1/luminaire-d-interieur/luminaire-enfant.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/luminaire-decoration-1/luminaire-d-interieur/lampadaire.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/luminaire-decoration-1/luminaire-d-interieur/lustre.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/luminaire-decoration-1/luminaire-d-interieur/applique.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/luminaire-decoration-1/luminaire-d-interieur/plafonnier.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/luminaire-decoration-1/luminaire-d-interieur/suspension.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/luminaire-decoration-1/luminaire-d-interieur/reglette.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/luminaire-decoration-1/luminaire-d-interieur/spot-a-fixer.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/luminaire-decoration-1/luminaire-d-interieur/spot-a-encastrer.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/luminaire-decoration-1/luminaire-d-interieur/spot-sur-rail-et-cable.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/luminaire-decoration-1/luminaire-de-jardin/applique-exterieure.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/luminaire-decoration-1/luminaire-de-jardin/borne-de-jardin.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/luminaire-decoration-1/luminaire-de-jardin/potelet.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/luminaire-decoration-1/luminaire-de-jardin/lampadaire-exterieure.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/luminaire-decoration-1/luminaire-de-jardin/suspension-exterieure.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/luminaire-decoration-1/luminaire-de-jardin/projecteur.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/luminaire-decoration-1/luminaire-de-jardin/luminaire-solaire.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/luminaire-decoration-1/decoration-de-fenetre/tringle-a-rideaux-1.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/luminaire-decoration-1/decoration-de-fenetre/kit-de-tringle-a-rideaux-1.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/luminaire-decoration-1/decoration-de-fenetre/tringle-de-vitrage.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/luminaire-decoration-1/decoration-de-fenetre/rail-a-rideaux.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/luminaire-decoration-1/decoration-de-fenetre/cable-a-rideaux.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/luminaire-decoration-1/decoration-de-fenetre/accessoire-de-tringle-rail-et-cable-a-rideaux.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/luminaire-decoration-1/decoration-de-fenetre/store-venitien-bateau-et-enrouleur.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/luminaire-decoration-1/decoration-de-fenetre/autre-store-et-accessoire.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/luminaire-decoration-1/decoration-de-fenetre/voilage-et-rideau.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/luminaire-decoration-1/decoration-d-ameublement-3/nappe.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/luminaire-decoration-1/decoration-d-ameublement-3/coussin.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/luminaire-decoration-1/decoration-d-ameublement-3/galette-de-chaise.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/luminaire-decoration-1/decoration-d-ameublement-3/pouf.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/luminaire-decoration-1/decoration-d-ameublement-3/plaid.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/luminaire-decoration-1/objets-de-decoration/cadre-photo.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/luminaire-decoration-1/objets-de-decoration/accessoire-pour-cadre.html?magasin=Paris-11"
    },
    {
        "url": "http://www.mr-bricolage.fr/luminaire-decoration-1/objets-de-decoration/toile-imprimee.html?magasin=Paris-11"
    }
];
var tav = Object.values(o);

for (i = 0; i < tav.length; i++) {
    console.log(tav[i].url);
    request(tav[i].url, function(err, res, body) {
        if (err) console.log('erro: ' + err);
        var $ = cheerio.load(body);
        var titles = [];
		var prixx = [];
		var product=[];
		
		var prix;
		var nom;
		var title;
		$('.regular-price-fiche').each(function() {
       		prix = $(this).find('.price').text().trim();
            console.log('prix :'+prix);
			prixx.push({
               "prix" : prix
            });
        });	
        $('div .content-product').each(function() {
            title = $(this).find('.marque').text().trim();
			nom = $(this).find('.nom').text().trim();
			console.log('nom :'+nom+' , marque '+title);
			
			titles.push({
                "marque": title,
				"Nom" : nom,
			});
		});
		for (i = 0; i < prixx.length; i++) {
			
			console.log('prix:'+prixx[i].prix);
			console.log('nom:'+titles[i].Nom);
			console.log('marque :'+titles[i].marque);
			product.push({
                "marque": titles[i].marque,
				"Nom" : titles[i].Nom,
				"prix": prixx[i].prix
			});
		}

        fs.appendFile('data/LesMarques2.json', JSON.stringify(product));

    });

}