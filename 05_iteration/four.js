const lang={
    js:"javascript",
    cpp:"c++"
}
//for in print keys
//for of show data but not work on it
for(const key in lang){
    console.log(`${key} :- ${lang[key]}`)
}
const l=["py","java"]
for(const d in l){
    console.log(d);
}
//for in not use in map