const fs = require('fs-extra');
const path = require('path');

const sourcePath = 'public/temp_static';

if (fs.existsSync(destinationPath)) {
  console.log(
    'Le dossier de destination existe déjà. Pas besoin de déplacer les fichiers à nouveau.'
  );
} else {
  fs.moveSync(sourcePath, destinationPath);
  console.log('Déplacement des fichiers terminé.');
}
