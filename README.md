# Insta Shohor

#### Website: https://insta-shohorr.netlify.app/

### Hows does JavaScript works?

#### Whenever we attach script file with html file and run, JavaScript source file received by the browser. It sends the source code to JavaScript's engine which is installed inside browser. The codes goes through several steps. Firstly the codes gets by parser. Parser checks the code's syntax type errors line by line. Secondly after parsing JS engine breaks the codes into relevant pieces for interpret the codes effectively.Then the codes received by interpreter and interpret the codes into machine codes. Finally the machine codes is sent to the system, then run by the system.

### What does event loop do?

#### After receiving the script file JS's engine starts to execute. At first it creates Global Execution context. Whenever it found a synchronous function and took it to call stack. If any asynchronous function(setTimeout/fetch/Promise/async-await) or event listeners has found, JS simply handover these async functions to browsers web API. After that call stack executes synchronous functions normally. So basically the web API transfers these call back functions to the call back queue end of timer. After executing all of the synchronous functions in the call stack then here comes the Event Loop. Event loop checks that is the call stack empty or not. Then through loops on call back queue, take the functions to the call stack and starts execute.
