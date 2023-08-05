const fs = require('fs-extra');

const sourcePath = 'public/docs/assets';
const destinationPath = 'docs/assets';

if (fs.existsSync(destinationPath)) {
  console.log(
    'Le dossier de destination existe déjà. Pas besoin de copier les images à nouveau.'
  );
} else {
  fs.copySync(sourcePath, destinationPath);
  console.log('Copie des images terminée.');
}
