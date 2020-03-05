/*
    Return the number of total permutations of the provided string that don't have repeated consecutive letters.
    Assume that all characters in the provided string are each unique.

    For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), 
    but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
*/

function permAlone(str) {
    // Make it into a char array
    // Recurse to create perms...
    // If perm has this current and next be the same char, just return 0
    // Once we cannot make more perms return 1 so we can add
    // Remove letter from candidate list once used
    // Return letter to candidate list once we come back to make sure others can use it again

    return str;
}
  
permAlone('aab');
  