const  Palindrome=(words)=>{
   let letters=words.split('');
   let word='';
   for(let i=letters.length-1;i>=0;i--)
   {
        word+=letters[i];
   }
   if(words.toLowerCase()==word.toLowerCase())
   {
       return true
   }
   else 
   {
       return false
   }
}
console.log(Palindrome("refer"))