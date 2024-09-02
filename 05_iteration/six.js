const coding=['js','java','python','ruby']

//for each doest return anything
//u can do ur self by appending in list
const values=coding.forEach( (val) =>{
    //console.log(val);
    return val;
})

//to return us filter
const mynums=[1,2,3,4,5,6,7,8,9,10]
const filtered=mynums.filter( (num) => (num>5));
// console.log(filtered);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const filteredbook=books.filter((kitab) => kitab.genre==='Non-Fiction')
//   or
  const twofilter= books.filter((kitab)=> {return kitab.publish>=2000 && kitab.genre==='Science'})
  console.log(twofilter)

  const mapped=mynums.map((n)=> n+10);
  console.log(mapped);
  //chaining of map
  const m=mynums
            .map((n)=> n*10)
            .map((n)=> n+1);
  console.log(m);