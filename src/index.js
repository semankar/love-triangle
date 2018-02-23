/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = [])
{
  preferences.unshift(0);
  var triangles = 0;
  for(var i = 1; i < preferences.length; i++)
  { 
    //checking if third element points to first 
    //and if second and third elements are different
    if( i == preferences[preferences[preferences[i]]] && 
    (preferences[i]!=preferences[preferences[i]])) triangles++;
  }
  return (triangles / 3);    
}
