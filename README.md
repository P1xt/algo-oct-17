#JavaScript Algorithm Challenge - October 9 through 16

From FreeCodeCamp forums

I would like to challenge everyone to solve the following algorithmic problem over the next week. Consider the problem carefully, take your time, edit your solution as many times as you want should you figure out a more efficient solution.

## The challenge:

Come up with the most efficient (correct) solution you can to solve the following problem.

####The rules (totally unenforceable, but hey, be honest, you'll learn more):

* Post your solution in spoiler tags.
* One solution per camper, but you can edit your post (and thus your solution) as many times as you want until the challenge is over.
* Name the function you create `mult<Forum Name>` where `<Forum Name>` is your name on the forums, my solution would be in a function named `multP1xt` 
* Solve the problem yourself. Don't google for an answer, don't hit stack overflow, don't read other camper's answers.
* To the extent that it's possible, limit yourself to one post in this thread (so it'll be easier for me to round up everybody's answers at the end.
* Please avoid discussion after you've solved the problem until the challenge is over, so you don't spoiler others and mess up their chances to solve the problem on their own.

##The Problem:

> If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

> If we list all the natural numbers below 20 that are multiples of 3 or 5, we get 3, 5, 6, 9, 10, 12, 15, 18. The sum of these multiples is 78.

> Write a JavaScript function that will find the sum of all multiples of 3 or 5 that are below a number N, where N is an input parameter to the function.

##Helpful Notes:

Any camper who wants can join in this, if you're not up to the JavaScript section of FCC yet, hit [codecademy (javascript lessons)](https://www.codecademy.com/learn/javascript)  and then code your solution on [repl.it](https://repl.it/languages/javascript). Once you've got it working, copy the code into a post here (inside spoiler tags, of course). (I just double checked and the lessons I linked from codecademy teach everything you'd need to know to code a working solution to this problem). 

You can use the [benchmarkjs](https://benchmarkjs.com/) npm module and Node.js to benchmark your various solutions to ensure that you submit your most efficient attempt. (I'll be using benchmarkjs with Node.js 6.5 to determine efficiency at the end of the contest).

I listed two test cases above. Here are a few more so you can ensure your solution is both correct AND efficient: 
```
Input: 10    Output: 23
Input: 20    Output: 78
Input: 100   Output: 2318
Input: 10000 Output: 23331668
Input: 45678 Output: 486804150
```
Take note that numbers which are multiples of both 3 and 5 (like 15) are only included in the sum once.

You create spoiler tags by enclosing your spoiler text in between `[details="Spoiler"]Text you want to hide[/details]`

Here's exactly how to put a code snippet inside a Spoiler tag. You can copy it directly (be sure to get the blank line at  the top) and paste it into your post, then replace the `function multX` part with your own function.

    
    [details=Spoiler]

    ```javascript

    function multX(times) {
      
    }

    ```

    [/details]

I will be testing and benchmarking all solutions using Node.js 6.5 (so you can feel free to use any ES6 that will run in 6.5, which is most of it).

@JacksonBates Wrote up a handy tutorial on how to use Mocha and Chai to write a handy test runner to double check that your function produces the correct values here: http://forum.freecodecamp.com/t/testing-your-own-code-using-mocha-and-chai-simple-example/44149 

##When the challenge ends:

Here's a handy countdown timer so you know how long before the challenge ends:
https://countingdownto.com/countdown/multiples-of-3-and-5-countdown-clock

The morning after the challenge ends, I'll first test everyone's answer to ensure it's correct, then benchmark all of the correct solutions. 

##The Reward?

Aside from the pure fun of practicing creating efficient algorithms, I don't have a lot to offer. Though I will post the names of everyone who solved the problem, with a special list of those who solved it the most efficiently as an edit to this post.

##The Results
###Correct solutions
The following campers put forth solutions that correctly solved the challenge. 
@JacksonBates,
@kevcomedia,
@Salasy,
@nickolaos77,
@Michealhall,
@Darklake,
@BenGitter,
@jv88899,
@simmco,
@JohnL3,
@Foresterr,
@Frustrated_Coder,
@computerluca,
@brew95,
@thanhacun,
@Velenir,
@slocodemonkey,
@IdyR17,
@Omegga,
@G-Squirrel,
@imtoobose,
@vector2016,
@IsaacAbrahamson,
@Gouldie,
@Tattomoosa,
@HyperSprite,
@tsaulon,
@Jasil1414,
@BLK1010,
@pkmn9060,
@nawazishali,
@Np463,
@YankeeDK,
@MistaTwist,
@a402539,
@TsvetkovT,
@ShanthiKarunakaran,
@ZackWard,
@joelpeyton,
@Lee182,
@Anourian,
@IronPike,
@ayiemba,
@SabryRagab,
@mpontus,
@silgarth,
@analistamarcio,
@bhattmayur26,
@Davidrfreeman,
@Ephopper,
@NostalgieCamarade,
@paulo101977,
@hit1st,
@79man,


Note: In some cases, I modified the function name submitted in order to match `mult<campername>` for ease of testing. In one case, I copied the function off repl.it as it was linked from repl.it instead of included in a spoiler tag and in one case I added a return statement to an otherwise correct solution. This might seem "unfair", however, in the spirit of including everyone, I didn't want to exclude correct solutions for "picky" reasons, especially since the brief was rather lengthy and not all our campers speak English natively. 

In one case I removed a console.log() purely to remove that output from the benchmark results.



###The most efficient solutions were the following
multsilgarth x 6,753,148 ops/sec ±0.54% (89 runs sampled)  

multForesterr x 6,675,344 ops/sec ±1.00% (86 runs sampled)  

multYankeeDK x 6,638,467 ops/sec ±1.93% (85 runs sampled)  

multIronPike x 5,820,219 ops/sec ±1.18% (85 runs sampled) 

multnickolaos77 x 5,632,879 ops/sec ±1.93% (84 runs sampled)  

multa402539 x 5,311,919 ops/sec ±0.98% (84 runs sampled)  


##Using this repository

Node version 6.5

`npm install`

`node benchmarking.js` to run benchmarks

`mocha test.js` to run tests
