// ## Étape 1
// Créer une fonction `isValidDate` qui prend en paramètre une date en string et determine si elle est valide. 
// Pour qu'une date soit valide, il faut qu'elle existe et qu'elle soit au format dd/mm/aaaa.
// Tout au long de l’exercice, on supposera des années supérieures à 999 et inférieures 9999 - 
// autrement dit, l’année sera systématiquement représentée sur 4 caractères.
// ```jsx
// isValidDate("03/04/2001") // true
// isValidDate("03/14/2001") // false car 14 n'est pas un mois valide
// ```
// Vous aurez probablement besoin de créer une autre fonction `maxDaysInMonth` 
//pour vous assurer que le nombre de jours par mois est valide (ex: le 31/11 n’est pas valide, le mois de novembre ne contient 
// que 30 jours)


function isValidDate (date) {

    const tabDate = date.split("/") // transforme date en array et retire le /
    // console.log("date sans /", tabDate)
    let validDay = parseInt(tabDate[0]) // le jour est l'indice 0
    let validMonth = parseInt(tabDate[1]) // le mois est l'indice 1
    const validYear = parseInt(tabDate[2])// l'année est l'indice 2
// Condition si mois > 12 et range de l'année entre 100 et 9999
    if ((validMonth < 1 || validMonth > 12) || (validYear < 999 ||validYear > 9999)) {
        return false      
    }
    
    const validDate = new Date(validYear, validMonth - 1, validDay); // définition de la date valide
    console.log("date :", validDate.toLocaleDateString('en-GB')) // assignation au format jj/mm/aaaa
    if (validDate.getFullYear() !== validYear ||validDate.getMonth() !== validMonth - 1 ||validDate.getDate() !== validDay) {
        // vérification des dates inexactes
    return false
}
    return true

}

// console.log("fc° isValidDate 1", isValidDate("03/04/2001"));      
// console.log("fc° isValidDate 2",isValidDate("03/14/2001"));      


function isPalindrome (date){
    const date_envers = date.split("/") // retire le /. output = [ '11', '02', '2011' ]
    .join("") // transforme en string. Output 11022011
    .split("") // mise en tableau de la string pour utilisation .reverse(). Output ['1', '1', '0','2', '2', '0','1', '1']
    .reverse() // inverse le tableau. Output ['1', '0', '0','2', '4', '0','3', '0']
    .join("") // transforme en string. Output 10024030
    console.log("date_envers :", date_envers)
    if (date.split("/").join("") === date_envers){
        console.log("date : ", date)
        return true
    } else {
        return false
    }

}

 
console.log("fonction palindrome true :", isPalindrome("11/02/2011"))
console.log("fonction palindrome false :", isPalindrome("03/04/2001"))
