// function* generateSequence() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// let generator = generateSequence();

// for(let value of generator) {
//   alert(value); // 1, then 2, then 3
// }


// function* gen() {
//   // Pass a question to the outer code and wait for an answer
//   let result = yield "2 + 2 = ?"; // (*)

//   alert(result);
// }

// let generator = gen();

// let question = generator.next().value; // <-- yield returns the value
// // console.log(question)
// generator.next(4); // --> pass the result into the generator





// previous * 16807 % 2147483647

// function* generate(seed){
//   let x = seed;
//   while(true) {
//     x = (x * 16807) % 2147483647;
//     yield x;
//   }
// }
// let g = generate(1);
// alert(g.next().value)
// alert(g.next().value)
// alert(g.next().value)
// alert(g.next().value)
// alert(g.next().value)
// alert(g.next().value)
// alert(g.next().value)
// alert(g.next().value)




// async function* generateSequence(start, end) {

//   for (let i = start; i <= end; i++) {

//     // Wow, can use await!
//     await new Promise(resolve => setTimeout(resolve, 1000));

//     yield i;
//   }

// }

// (async () => {

//   let generator = generateSequence(1, 5);
//   for await (let value of generator) {
//     alert(value); // 1, then 2, then 3, then 4, then 5 (with delay between)
//   }

// })();




async function* fetchCommits(repo) {
  let url = `https://api.github.com/repos/${repo}/commits`;

  while (url) {
    const response = await fetch(url, { // (1)
      headers: {'User-Agent': 'Our script'}, // github needs any user-agent header
    });

    const body = await response.json(); // (2) response is JSON (array of commits)

    // (3) the URL of the next page is in the headers, extract it
    let nextPage = response.headers.get('Link').match(/<(.*?)>; rel="next"/);
    nextPage = nextPage?.[1];

    url = nextPage;

    for(let commit of body) { // (4) yield commits one by one, until the page ends
      yield commit;
    }
  }
}