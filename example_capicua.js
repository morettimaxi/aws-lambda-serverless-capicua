const isPalindrome = (string) => {
    
    const reverse = string.split('').reverse().join('');
    const isPalindrome = (string === reverse);
      
    const result = isPalindrome ? `${string} is a Palindrome` : `${string} is not a Palindrome`;
      
    return result;
    
  };