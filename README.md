# CustomModal Component

`CustomModal` est un composant personnalisé pour afficher une fenêtre modale en React, en utilisant la bibliothèque `react-modal`. Ce composant inclut des options de personnalisation pour le titre, le texte du bouton de fermeture et le contenu.

## Installation

Avant de commencer, assurez-vous d'avoir installé `react-modal` dans votre projet :

bash
npm install react-modal




## CustomModal accepte les props suivantes :

`isOpen` (bool, requis) : Contrôle l'ouverture de la modale. Passez true pour ouvrir la modale et false pour la fermer.

`onRequestClose` (function, requis) : Fonction de rappel déclenchée pour fermer la modale. Doit gérer la fermeture du côté de l'appelant.

`title` (string, requis) : Définit le titre affiché en haut de la modale.

`buttonText` (string, facultatif) : Texte affiché sur le bouton de fermeture. Par défaut, il est défini sur Close si non fourni.

`children` (ReactNode, requis) : Contenu à afficher dans la modale. Peut inclure n'importe quel élément React.




Voici un exemple de configuration de props pour CustomModal :

<CustomModal
    isOpen={modalIsOpen}
    onRequestClose={() => setModalIsOpen(false)}
    title="Mon Titre"
    buttonText="Fermer la Modale"
    >
    <p>Contenu de la modale ici</p>
</CustomModal>

