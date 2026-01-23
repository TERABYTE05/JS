const languages  = ['JavaScript', 'Python', 'Java', 'C#', 'Ruby'];

// In call back function , we don't mention the name of the function
// we just define the function
// languages.forEach(function (lang){
//     console.log(lang);
// });

// Using arrow function
// languages.forEach( (lang) => {
//     console.log(lang);
// });


function printLang(lang){
    console.log(lang);
}

languages.forEach(printLang);


languages.forEach( (lang, index , array) => {
    console.log(index, lang, array);
});

// Objects Inside Array

const myCodings = [
    {
        langaugeName: 'JavaScript',
        fileExtension: '.js'
    },
    {
        langaugeName: 'Python',
        fileExtension: '.py'    
    },
    {
        langaugeName: 'Java',
        fileExtension: '.java'    
    }
];

myCodings.forEach((coding)=>{
    console.log(coding.langaugeName + " : " + coding.fileExtension);
})