const fs = require('fs');



fs.appendFile("arquivo_test.txt", "\ngbdfhdhdhdhfhfghfhfghabriel2", function(err) {
    if (err) {
        console.error("erro ao adicionar o texto no arquivo", err);
        return;
    }
    
    console.log("Texto adicionado com sucesso!");
}) 