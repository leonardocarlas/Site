// Link API https://github.com/s0ftik3/reverso-api


/**
 * @param word : string to translate
 * @param fromLanguage : can be ['Spanish', 'Portuguese', 'French', 'English', 'German', 'Italian']
 * @param toLanguage : can be ['Spanish', 'Portuguese', 'French', 'English', 'German', 'Italian'] 
 */
//module.exports.translate

/**
 * @param word : string to translate
 * @param fromLanguage : can be ['Spanish', 'Portuguese', 'French', 'English', 'German', 'Italian']
 * @param toLanguage : can be ['Spanish', 'Portuguese', 'French', 'English', 'German', 'Italian'] 
 */


 module.exports.translate = (word, fromLanguage, toLanguage) => {

    const Reverso = require('reverso-api');
    const reverso = new Reverso();
    let responseWord = "";

    reverso.getContext(word, fromLanguage, toLanguage, (response) => {
        //console.log(response);
        responseWord = response.translation[0];
    }).catch((err) => {
        console.error(err);
    });

    return responseWord;
}


